import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'michellesmit.com' }],
        destination: 'https://www.michellesmit.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
