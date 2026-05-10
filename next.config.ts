import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
