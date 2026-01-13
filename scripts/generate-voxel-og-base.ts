
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

async function generateVoxelBase() {
    console.log('Starting Voxel OG Base Image Generation...');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        // Set viewport to OG image size
        await page.setViewport({
            width: 1200,
            height: 630,
            deviceScaleFactor: 2, // High quality
        });

        // Capture console logs
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));

        // Navigate to local server
        const targetUrl = process.argv[2] || 'http://localhost:3000';
        console.log(`Navigating to ${targetUrl}...`);
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // Explicit wait for hydration and voxel loading
        console.log('Waiting for hydration and voxel loading...');
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Evaluate in browser context to hide overlays and isolate voxel element
        await page.evaluate(() => {
            // Hide everything except the canvas/three.js container
            // This is specific to your DOM structure.
            // Based on HeroVoxelPortrait.tsx, it renders a Canvas.

            // Select the main container
            const canvas = document.querySelector('canvas');
            if (!canvas) {
                console.error('Canvas not found inside evaluate');
                // Try to dump body for debugging
                // console.log(document.body.innerHTML);
                return;
            }

            const canvasContainer = canvas.parentElement;
            if (!canvasContainer) throw new Error('Canvas container not found');

            // Make body transparent/black
            document.body.style.background = '#000000';

            // Hide all other elements
            const allElements = document.querySelectorAll('body > *');
            allElements.forEach(el => {
                if (el !== canvasContainer && !canvasContainer.contains(el)) {
                    (el as HTMLElement).style.display = 'none';
                }
            });

            // Style the container to fill screen
            canvasContainer.style.position = 'fixed';
            canvasContainer.style.top = '0';
            canvasContainer.style.left = '0';
            canvasContainer.style.width = '100vw';
            canvasContainer.style.height = '100vh';
            canvasContainer.style.zIndex = '9999';
            canvasContainer.style.background = 'transparent';

            // Optional: adjust camera or scene if possible via global variables
        });

        // Wait for Three.js to render (give it a few seconds for voxel loading/animation)
        console.log('Waiting for render...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Ensure output directory exists
        const outDir = path.join(process.cwd(), 'public', 'images', 'og');
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        // Screenshot
        const outPath = path.join(outDir, 'voxel-base.png');
        await page.screenshot({
            path: outPath,
            omitBackground: true
        });

        console.log(`Saved voxel base image to: ${outPath}`);

    } catch (error) {
        console.error('Error generating image:', error);
    } finally {
        await browser.close();
    }
}

generateVoxelBase();
