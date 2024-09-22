/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's2.coinmarketcap.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**',
              },
        ],
    },
};

export default nextConfig;
