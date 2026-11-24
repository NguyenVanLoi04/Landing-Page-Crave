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
  title: "Về CRAVE - Câu Chuyện & Cội Nguồn Ẩm Thực Sài Gòn",
  description:
    "Tìm hiểu về CRAVE - Ứng dụng khám phá ẩm thực khởi nguồn từ Quận 1, TP.HCM. Sứ mệnh kết nối người sành ăn với các món ngon đích thực không qua quảng cáo.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Về CRAVE - Câu Chuyện & Cội Nguồn Ẩm Thực Sài Gòn",
    description:
      "Tìm hiểu về CRAVE - Ứng dụng khám phá ẩm thực khởi nguồn từ Quận 1, TP.HCM. Sứ mệnh kết nối người sành ăn với các món ngon đích thực không qua quảng cáo.",
    url: "/about",
  },
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
