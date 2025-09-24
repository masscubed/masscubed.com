import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/masscubed.com' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/masscubed.com' : '',
};

export default nextConfig;
