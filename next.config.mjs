/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dopetgztsfho3.cloudfront.net',
        
      },
      
    ],  // Add external image domain here
  },
};

export default nextConfig;
