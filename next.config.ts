/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    // For backward compatibility with older Next.js versions
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  // Optional: Add other common configurations
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;