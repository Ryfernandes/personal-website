import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['your-image-domain.com'],
    // Or use remotePatterns for more fine-grained control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.your-domain.com',
      },
    ],
  },
};

export default nextConfig;
