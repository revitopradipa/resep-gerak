"use client";

import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import PillarsSection from "./components/PillarsSection";
import BodyPartsSection from "./components/BodyPartsSection";
import SportsSection from "./components/SportsSection";
import ConditionsSection from "./components/ConditionsSection";
import ArticlesSection from "./components/ArticlesSection";
import LibrarySection from "./components/LibrarySection";
import Footer from "./components/Footer";

export default function Home() {
  // Activate scroll-reveal animations
  useRevealOnScroll();

  return (
    <>
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Philosophy & Booking Form */}
        <PhilosophySection />

        {/* Section 3: Three Pillars */}
        <PillarsSection />

        {/* Section 4: Body Parts */}
        <BodyPartsSection />

        {/* Section 5: Sports */}
        <SportsSection />

        {/* Section 6: Medical Conditions */}
        <ConditionsSection />

        {/* Section 7: Articles */}
        <ArticlesSection />

        {/* Section 8: Digital Library */}
        <LibrarySection />
      </main>

      <Footer />
    </>
  );
}
