import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath:
    process.env.NODE_ENV === 'production' ? process.env.NEXT_APP_BASENAME : '',
  trailingSlash: true,
};

export default nextConfig;
