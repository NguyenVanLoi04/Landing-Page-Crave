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
  title: "CRAVE - Ứng Dụng Khám Phá Món Ăn & Địa Điểm Ăn Uống | Food Discovery App",
  description:
    "CRAVE là ứng dụng khám phá món ăn và địa điểm ăn uống ngon gần bạn tại Sài Gòn. Tìm quán ăn nhanh chóng với vòng xoay ngẫu nhiên Decider Wheel, lướt thẻ món ăn Swipe và định vị ẩm thực Food Radar.",
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
