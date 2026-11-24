"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function AboutCTA() {
  return (
    <section className="py-16 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-crave-primary text-white rounded-[32px] p-8 sm:p-14 shadow-[0px_25px_50px_-12px_rgba(0,94,184,0.35)] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 size-80 rounded-full bg-black/10 blur-3xl pointer-events-none" />

          {/* Left: Text */}
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-tight">
              Ready to explore Saigon with fresh eyes?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Download Crave on iOS & Android and say goodbye to food indecision
              forever.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 w-full lg:w-auto shrink-0 justify-center">
            {/* iOS Button */}
            <motion.a
              href="#ios"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-crave-navy text-[14px] font-bold px-5 py-3 rounded-2xl shadow-sm hover:bg-white/95 transition-all"
            >
              <div className="size-4 relative shrink-0">
                <Image
                  src="/assets/about/icon-apple.svg"
                  alt="Apple"
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
              <span>Download for iOS</span>
            </motion.a>

            {/* Android Button */}
            <motion.a
              href="#android"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-crave-navy text-[14px] font-bold px-5 py-3 rounded-2xl shadow-sm hover:bg-white/95 transition-all"
            >
              <div className="size-4 relative shrink-0">
                <Image
                  src="/assets/about/icon-android.svg"
                  alt="Android"
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
              <span>Get on Android</span>
            </motion.a>

            {/* Radar Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#food-radar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-md text-white text-[14px] font-semibold px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/25 transition-all"
              >
                <div className="size-4 relative shrink-0">
                  <Image
                    src="/assets/about/icon-radar.svg"
                    alt="Radar"
                    width={16}
                    height={16}
                    className="size-full object-contain brightness-0 invert"
                  />
                </div>
                <span>Launch Food Radar</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
