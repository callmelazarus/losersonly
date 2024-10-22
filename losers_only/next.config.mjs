/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  output: 'export',        // Enables static export
  images: {
    unoptimized: true,     // Disables image optimization (useful for static sites)
  },
};

export default nextConfig;
