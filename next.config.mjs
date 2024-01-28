/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      ["fluentui-next-appdir-directive", { paths: ["@griffel", "@fluentui"] }],
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.cdn-telegram.org",
      },
    ],
  },
};

export default nextConfig;
