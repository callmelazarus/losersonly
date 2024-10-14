/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static export
  basePath: '/losers-only', // Replace with your repository name if needed
  images: {
    unoptimized: true,     // Disables image optimization (useful for static sites)
  },
};

export default nextConfig;
