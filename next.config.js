/** @type {import('next').NextConfig} */

const path = require('path')

const root = process.env.NEXT_PUBLIC_PRJ_ROOT ?? ''

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: root,
  basePath: root,
  trailingSlash: true,
  publicRuntimeConfig: { root },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `@use "env.${process.env.NODE_ENV}.scss" as environment;`,
  },
}

module.exports = nextConfig
