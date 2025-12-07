const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP() {
    // Go up one directory from scripts/ to project root, then into public/images
    const inputPath = path.join(__dirname, '../public/images/profile.jpg');
    const outputPath = path.join(__dirname, '../public/images/profile.webp');

    try {
        console.log('Converting profile.jpg to WebP...');
        console.log(`Input path: ${inputPath}`);
        console.log(`Output path: ${outputPath}`);

        // Check if input file exists
        if (!fs.existsSync(inputPath)) {
            throw new Error(`Input file not found: ${inputPath}`);
        }

        // Convert to WebP with 85% quality
        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);

        // Get file sizes for comparison
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);

        console.log(`✅ Conversion complete!`);
        console.log(`Original JPG: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`WebP: ${(webpSize / 1024).toFixed(2)} KB`);
        console.log(`Savings: ${savings}%`);
    } catch (error) {
        console.error('❌ Error converting image:', error);
        process.exit(1);
    }
}

convertToWebP();
