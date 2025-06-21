/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // http://localhost:1337/uploads/..
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        // https://lovable-bear-5da4cbf3d6.media.strapiapp.com/..
        protocol: 'https',
        hostname: 'lovable-bear-5da4cbf3d6.media.strapiapp.com', 
        port: '',
        pathname: '',
      },
    ],
  },
};

export default nextConfig;
