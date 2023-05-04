/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eternalai.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/pictures_pack/**",
      },
    ],
  },
  reactStrictMode: true,
};

// module.exports = nextConfig;
