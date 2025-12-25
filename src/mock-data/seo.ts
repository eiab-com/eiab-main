import { Metadata } from "next/types";

export const seo: Metadata = {
  metadataBase: new URL("https://www.exploreindiaandbeyond.com/"),
  title: {
    default: "Explore India and Beyond | Premium Motorcycle Tours",
    template: "%s | Explore India and Beyond",
  },
  description:
    "Experience India's ultimate motorcycle adventures with expert guides Samarth & Vinayak. Royal Enfield tours through Himalayas, Rajasthan deserts & hidden cultural gems.",
  keywords: [
    "India motorcycle tours",
    "Himalayan bike adventures",
    "Royal Enfield tours India",
    "KTM 390 adventure rides",
    "cultural motorcycle journeys",
    "guided bike tours India",
    "luxury motorcycle vacations",
    "offbeat India travel",
    "Samarth Vinayak adventures",
    "UK to India bike tours",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Premium Motorcycle Adventures in India",
    description:
      "UK-friendly guided tours through India's most spectacular landscapes - Himalayan peaks, desert trails & coastal roads",
    url: "/",
    siteName: "Explore India and Beyond",
    locale: "en_GB",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Motorcycle group riding through Himalayan mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Motorcycle Adventures | Explore India and Beyond",
    description:
      "Join our expert-guided motorcycle tours through India's most breathtaking routes",
    site: "@ExploreIndiaBike",
    creator: "@ExploreIndiaBike",
    images: ["/images/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "IN",
    "geo.placename": "Multiple Locations",
    "twitter:domain": "exploreindiaandbeyond.com",
    "twitter:url": "https://www.exploreindiaandbeyond.com/",
  },
};
