import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import BentoGrid from "@/components/sections/BentoGrid";
import CulinaryBanner from "@/components/sections/CulinaryBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import DownloadCTA from "@/components/sections/DownloadCTA";

export const metadata: Metadata = {
  title: "CRAVE - Khám Phá Món Ăn",
  description:
    "Ứng dụng khám phá món ăn và quán ngon gần bạn tại Sài Gòn. Tìm kiếm quán ăn nhanh chóng với vòng xoay chọn món và lướt thẻ món ăn.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-crave-bg selection:bg-crave-primary/15 selection:text-crave-primary">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <StatsStrip />
        <BentoGrid />
        <CulinaryBanner />
        <HowItWorks />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
