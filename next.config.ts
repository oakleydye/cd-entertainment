import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.genius.com',
      'images.rapgenius.com',
      's3.amazonaws.com',
      'genius.com'
    ],
  },
};

export default nextConfig;
