"use client";

import { motion } from "motion/react";

const stats = [
  { value: "50,000+", label: "Active Foodies" },
  { value: "1,200+", label: "Heritage Dishes" },
  { value: "3.2s", label: "Decider Speed" },
  { value: "100%", label: "Unbiased & Authentic" },
];

export default function AboutHero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 px-5 sm:px-8 overflow-hidden bg-crave-bg">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-crave-navy leading-[1.15] max-w-4xl"
        >
          Food indecision shouldn't stand between you and pure{" "}
          <span className="relative inline-block text-crave-primary">
            flavor.
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
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-[18px] text-crave-muted leading-relaxed max-w-2xl font-normal"
        >
          Founded in District 1, Crave pairs meticulous culinary cartography with
          mindful interface design to help Saigon eaters discover extraordinary
          flavors without the algorithmic clutter.
        </motion.p>

        {/* Minimal Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-crave-border/40 rounded-3xl p-6 sm:p-8 shadow-[0px_8px_30px_rgba(23,43,69,0.04)] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-crave-border-soft/60"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center ${idx > 1 ? "pt-4 sm:pt-0" : ""
                }`}
            >
              <span className="text-2xl sm:text-3xl md:text-[34px] font-bold text-crave-primary tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-[13px] font-medium text-crave-muted tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
