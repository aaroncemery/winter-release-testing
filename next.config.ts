import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // other config options here
  redirects: async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/redirects`);
    const redirects = await response.json();
    return redirects;
  },
};

export default nextConfig;
