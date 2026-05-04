import type { NextConfig } from "next";

const basePath = "/phonemodelcompatibility";

const nextConfig: NextConfig = {
  // Prefer this app as the tracing root when multiple lockfiles exist above this folder.
  outputFileTracingRoot: process.cwd(),

  /** Static HTML export for GitHub Pages */
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
