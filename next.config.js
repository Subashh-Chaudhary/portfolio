/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [],
        formats: ['image/avif', 'image/webp'],
    },
    // Enable SWC minification for better performance
    swcMinify: true,
}

module.exports = nextConfig
