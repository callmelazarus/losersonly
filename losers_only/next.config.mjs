/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  output: 'export',        // Enables static export
  images: {
    unoptimized: true,     // Disables image optimization (useful for static sites)
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/docs' : '',  // Point to the docs folder in production
};

export default nextConfig;
