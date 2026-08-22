import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/therapy-services',
        has: [{ type: 'host', value: 'michellesmit.com' }],
        destination: 'https://www.michellesmit.com/services',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'michellesmit.com' }],
        destination: 'https://www.michellesmit.com/:path*',
        permanent: true,
      },
      { source: '/therapy-services', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
