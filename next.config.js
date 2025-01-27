/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mdxeditor/editor"],
  reactStrictMode: true,
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.17.9.74",
        port: "9002",
        pathname: "/",
      },
    ],
    domains: ["172.17.9.74"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
