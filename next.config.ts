import type { NextConfig } from "next";

// The browser bundle only receives NEXT_PUBLIC_* values. Vercel sets VERCEL_ENV
// on the server, so publish it under the name client analytics checks.
const deploymentEnv = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV || "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_VERCEL_ENV: deploymentEnv,
  },
  reactStrictMode: true,
};

export default nextConfig;
