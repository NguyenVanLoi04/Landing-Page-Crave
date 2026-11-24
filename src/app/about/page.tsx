import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import VisualStories from "@/components/about/VisualStories";
import CulinaryShowcase from "@/components/about/CulinaryShowcase";
import CoreTenets from "@/components/about/CoreTenets";
import ImpactMilestones from "@/components/about/ImpactMilestones";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us - Our Story & Saigon Roots | Crave",
  description:
    "Founded in District 1, Crave pairs meticulous culinary cartography with mindful interface design to help Saigon eaters discover extraordinary flavors without the algorithmic clutter.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-crave-bg selection:bg-crave-primary/15 selection:text-crave-primary">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <AboutHero />
        <VisualStories />
        <CulinaryShowcase />
        <CoreTenets />
        <ImpactMilestones />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
