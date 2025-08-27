/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out'
};

module.exports = nextConfig;
