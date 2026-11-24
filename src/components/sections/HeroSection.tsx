"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import HeroShowcase from "./HeroShowcase";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 bg-gradient-to-b from-crave-soft via-crave-bg to-crave-bg">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-crave-border/30 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-crave-accent-subtle/40 blur-[70px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col items-center">

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-crave-navy tracking-tight leading-[1.15]">
            Stop Overthinking. <br />
            Start{" "}
            <span className="relative inline-block text-crave-primary">
              Craving.
              {/* Subtle brand swoosh accent */}
              <svg
                className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 text-crave-primary/35 pointer-events-none"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C25 2 75 2 99 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-center text-crave-muted text-base sm:text-[17px] leading-relaxed max-w-2xl"
        >
          Discover authentic local food through playful swipe cards, an instant
          decider wheel, and neighborhood food radar. No algorithms, just pure
          culinary flavor.
        </motion.p>

        {/* CTA Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#download"
            className="group h-[52px] px-8 rounded-full bg-crave-primary hover:bg-crave-primary-deep text-white font-semibold text-[15px] flex items-center gap-3 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.12),0px_2px_6px_-1px_rgba(0,94,184,0.08)] transition-all transform hover:-translate-y-0.5"
          >
            <div className="size-5 relative">
              <Image
                src="/assets/icon-app-store.svg"
                alt="Download"
                fill
                className="object-contain"
              />
            </div>
            <span>Download for iOS & Android</span>
          </Link>

          <Link
            href="#features"
            className="h-[52px] px-8 rounded-full bg-white hover:bg-[#f3f6fc] text-crave-navy font-semibold text-[15px] flex items-center gap-2 drop-shadow-[0px_4px_8px_rgba(23,43,69,0.04)] border border-crave-body/5 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Features</span>
            <div className="size-3.5 relative opacity-70">
              <Image
                src="/assets/icon-google-play.svg"
                alt="Arrow"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>

        {/* Social Proof Sub-tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="flex items-center -space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="size-3.5 relative">
                <Image
                  src="/assets/icon-stars-rating.svg"
                  alt="Star"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <span className="text-crave-muted text-[12px] font-medium tracking-wide">
            4.9 on App Store • 50,000+ happy foodies in Saigon
          </span>
        </motion.div>

        {/* Hardware Showcase Component */}
        <HeroShowcase />
      </div>
    </section>
  );
}
