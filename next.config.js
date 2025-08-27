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
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Configuração para roteamento dinâmico
  generateStaticParams: async () => {
    return [
      { slug: 'oneida-fernanda' }
    ];
  }
};

module.exports = nextConfig;
