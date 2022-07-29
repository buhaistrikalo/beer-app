/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'images.punkapi.com',
                    port: '',
                    pathname: '/v2/**',
                },
            ],
        },
    },
};

module.exports = nextConfig;
