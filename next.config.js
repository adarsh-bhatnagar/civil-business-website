/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nirmaaniq.com',
          },
        ],
        destination: 'https://www.nirmaaniq.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
