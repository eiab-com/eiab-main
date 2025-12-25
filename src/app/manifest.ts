import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Explore India and Beyond",
    short_name: "EIB",
    description: "Premium Motorcycle Tours",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
