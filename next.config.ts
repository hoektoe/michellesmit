import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{ source: '/therapy-services', destination: '/services', permanent: true }]
  },
}

export default nextConfig
