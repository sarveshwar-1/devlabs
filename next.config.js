/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.17.9.74",
        port: "9002",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
