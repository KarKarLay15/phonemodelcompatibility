import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prefer this app as the tracing root when multiple lockfiles exist above this folder.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
