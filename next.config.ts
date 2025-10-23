import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Allow network access from local IP addresses
  allowedDevOrigins: ['192.168.1.6:3000'],
};

export default nextConfig;
