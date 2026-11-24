import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The dish or screen you are looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-crave-bg selection:bg-crave-primary/15 selection:text-crave-primary">

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-5 py-20 sm:py-28">
        {/* Soft Ambient Radial Glow matching Figma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[460px] bg-gradient-to-tr from-[#99cbff]/35 via-[#cce4ff]/40 to-transparent blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
          {/* Big 404 with vertical blue-to-light-blue gradient */}
          <h1 className="text-[100px] sm:text-[130px] md:text-[150px] font-extrabold tracking-tight leading-none bg-gradient-to-b from-[#0062c4] via-[#1a7ee5] to-[#72baff] bg-clip-text text-transparent select-none drop-shadow-sm">
            404
          </h1>

          {/* Headline */}
          <h2 className="mt-2 text-2xl sm:text-[28px] md:text-[32px] font-bold text-crave-navy tracking-tight leading-snug">
            Page not found
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-crave-muted text-[14px] sm:text-[15px] leading-relaxed font-normal">
            The dish or screen you are looking for doesn&apos;t exist.
          </p>

          {/* Back to Home CTA Button */}
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#004e95] hover:bg-[#003e78] text-white text-[14px] font-medium shadow-[0_8px_20px_-4px_rgba(0,78,149,0.38)] hover:shadow-[0_12px_24px_-4px_rgba(0,78,149,0.48)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Back to Home</span>
            <ArrowRight className="size-4" strokeWidth={2.2} />
          </Link>
        </div>
      </main>
 </div>
  );
}
