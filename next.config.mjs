/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maishami.thesyndicates.team',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;