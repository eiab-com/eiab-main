import AboutUsSection from "@/components/landing-page-components/about-us-section/why-us";
import HeroSection from "@/components/landing-page-components/hero-section/hero-section";
import UpcomingAdventures from "@/components/landing-page-components/upcoming-adventures/upcoming-adventures";
import LatestAdventureModal from "@/components/landing-page-components/latest-adventure-modal";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <LatestAdventureModal />
      <HeroSection />
      <AboutUsSection />
      <UpcomingAdventures />
    </React.Fragment>
  );
}
