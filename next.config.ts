import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.playbook.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "jsccmjobjntyhiiwwdmv.supabase.co",
      },
    ],
  },
};

export default nextConfig;
