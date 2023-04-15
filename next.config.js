/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['newsdb.sudsy.dev', '127.0.0.1'],
    },
  }
  
  module.exports = nextConfig
  