/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'raw.githubusercontent.com'],
    minimumCacheTTL: 120,
  }
}

module.exports = nextConfig
