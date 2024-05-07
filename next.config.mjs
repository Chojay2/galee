/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
        webpack5: true,
      },
      target: 'serverless'
};

export default nextConfig;
