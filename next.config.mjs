/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // enables static export
  distDir: 'out',     // correct spelling
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'cdn-icons-png.flaticon.com',
      'codia-f2c.s3.us-west-1.amazonaws.com',
      'images.unsplash.com'
    ],
  },
};

export default nextConfig;