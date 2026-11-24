"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Soup, Wheat, Sparkles } from "lucide-react";

export default function CulinaryBanner() {
  return (
    <section className="bg-crave-soft py-16 px-5 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative h-[480px] w-full rounded-[48px] overflow-hidden shadow-[0px_20px_40px_rgba(23,43,69,0.08)] flex items-end justify-between p-8 sm:p-12"
        >
          {/* Background image */}
          <Image
            src="/assets/banner_pho_4k.jpg"
            alt="Authentic Saigon Culinary Showcase"
            fill
            quality={95}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            priority
          />

          {/* Editorial Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-crave-navy/90 via-crave-navy/30 to-transparent" />

          {/* Overlaid caption */}
          <div className="relative z-10 max-w-xl text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase mb-3 text-white">
              CURATED GASTRONOMY
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight tracking-tight">
              From Saigon street stalls to quiet Thao Dien izakayas.
            </h3>
            <p className="mt-3 text-sm sm:text-[15px] text-[#ebf1ff] leading-relaxed">
              Crave is built by food lovers who believe authentic dining is a
              daily sensory adventure, not an algorithmic chore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
