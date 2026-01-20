/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // React Server Components are enabled by default in Next.js 14 App Router
  // No additional configuration needed

  images: {
    domains: [],
    // Add external image domains here if needed
    // Example: ['example.com', 'cdn.example.com']
  },

  // Output configuration (optional)
  // output: 'standalone', // For Docker deployments
}

module.exports = nextConfig
