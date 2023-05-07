/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = nextConfig
