/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manapita-image-data.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
