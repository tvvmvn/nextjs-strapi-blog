/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'lovable-bear-5da4cbf3d6.strapiapp.com', // Replace with your Strapi domain
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
