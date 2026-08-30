import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portafolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;