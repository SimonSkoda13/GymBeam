/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gymbeam.sk",
      },
    ],
  },
};

module.exports = nextConfig;
