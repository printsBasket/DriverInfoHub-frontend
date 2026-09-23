/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.driverinfohub.com',
      },
      {
        protocol: 'https',
        hostname: 'driverinfohub.com',
      },
    ],
  }
}

module.exports = nextConfig
