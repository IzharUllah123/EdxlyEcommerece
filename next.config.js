/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Remove experimental: { appDir: true } as it is now default */
  eslint: {
    // This allows the build to finish even if there are 'img' warnings
    ignoreDuringBuilds: true,
  },
  images: {
    // This allows you to use external images safely
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;