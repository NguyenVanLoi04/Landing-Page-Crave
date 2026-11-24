"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Moon, UtensilsCrossed, Sparkles, ChevronRight } from "lucide-react";
import InteractiveWheel from "@/components/ui/InteractiveWheel";

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">
          <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-crave-primary-hover">
            THOUGHTFUL SIMPLICITY
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-crave-navy tracking-tight">
            Engineered for Cravings. <br className="hidden sm:inline" />
            Designed for Speed.
          </h2>
          <p className="mt-3 text-base sm:text-[17px] text-crave-muted leading-relaxed">
            Every screen crafted with Apple design restraint, tactile haptics,
            and mouthwatering culinary photography.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Large Swipe to Savor (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="max-w-md z-10">
              <div className="size-10 rounded-full bg-crave-border flex items-center justify-center mb-4">
                <Image
                  src="/assets/icon-swipe.svg"
                  alt="Swipe Icon"
                  width={18}
                  height={13}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight">
                Swipe to Savor
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Swipe right on tempting dishes to instantly stash them in your
                Crave List, or swipe left to pass. Simple, intuitive, and
                gloriously fast.
              </p>
            </div>

            {/* Visual Deck of Food Cards */}
            <div className="relative h-72 w-full mt-6 flex items-center justify-center">
              {/* Background Card Peek */}
              <div className="absolute right-4 sm:right-16 top-6 rotate-6 w-[260px] sm:w-[280px] h-[230px] rounded-[32px] bg-crave-border-soft shadow-sm overflow-hidden opacity-80">
                <Image
                  src="/assets/cuisine-preview-pho.png"
                  alt="Cuisine Preview"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Foreground Card */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative -rotate-2 w-[270px] sm:w-[290px] h-[256px] rounded-[32px] bg-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col z-10 border border-white/80"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src="/assets/banh-mi-thit-nuong.png"
                    alt="Bánh Mì Thịt Nướng"
                    fill
                    quality={95}
                    sizes="290px"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm text-crave-primary-hover text-[11px] font-bold tracking-wide">
                    Must Try
                  </div>
                </div>

                <div className="p-3.5 bg-white flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-crave-navy text-[16px] leading-tight">
                      Bánh Mì Thịt Nướng
                    </h4>
                    <p className="text-crave-muted text-[12px]">
                      District 3 • ₫35,000
                    </p>
                  </div>
                  <button
                    type="button"
                    className="size-9 rounded-full bg-crave-primary text-white flex items-center justify-center shadow-sm cursor-pointer"
                    aria-label="Bookmark"
                  >
                    <Image
                      src="/assets/icon-wheel-sparkles.svg"
                      alt="Save"
                      width={15}
                      height={14}
                      className="object-contain"
                    />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bento Card 2: Crave Wheel Decider (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between"
          >
            <div>
              <div className="size-10 rounded-full bg-crave-accent-subtle flex items-center justify-center mb-4">
                <Image
                  src="/assets/icon-wheel-pointer.svg"
                  alt="Wheel Icon"
                  width={17}
                  height={17}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight">
                The Crave Wheel
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Stuck in an endless group chat debate? Spin the wheel and let
                culinary serendipity select your feast.
              </p>
            </div>

            {/* Interactive Wheel Graphic */}
            <InteractiveWheel />
          </motion.div>

          {/* Bento Card 3: Local Radar (5 cols) */}
          <motion.div
            id="food-radar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between"
          >
            <div>
              <div className="size-10 rounded-full bg-crave-border-soft flex items-center justify-center mb-4">
                <Image
                  src="/assets/icon-radar.svg"
                  alt="Radar Icon"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight">
                Neighborhood Radar
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Filter by distance under 1km, live seat availability, and queue
                times so your lunch break is never wasted.
              </p>
            </div>

            {/* Radar preview card */}
            <div className="mt-6 bg-crave-soft p-4 rounded-[32px] flex flex-col gap-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold tracking-wider uppercase text-crave-muted">
                  NEARBY RADAR PULSE
                </span>
                <span className="font-semibold text-crave-primary-hover">
                  Active • 800m
                </span>
              </div>

              <div className="bg-white p-3 rounded-2xl drop-shadow-sm flex items-center gap-3">
                <div className="size-10 rounded-full bg-crave-primary text-white font-bold text-[15px] flex items-center justify-center shrink-0">
                  8m
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-crave-navy text-[15px] truncate">
                    Cơm Tấm Ba Ghiền
                  </h4>
                  <p className="text-crave-muted text-[12px] truncate">
                    Fast turnover • 2 tables open
                  </p>
                </div>
                <div className="size-3 relative opacity-60">
                  <Image
                    src="/assets/icon-arrow-right.svg"
                    alt="Arrow"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: List Love Vault (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between"
          >
            <div>
              <div className="size-10 rounded-full bg-crave-border flex items-center justify-center mb-4">
                <Image
                  src="/assets/icon-playlist.svg"
                  alt="Vault Icon"
                  width={15}
                  height={18}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight">
                Taste Playlists & Vault
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Curate your culinary desires just like Spotify playlists:
                “Late-Night Phở Runs”, “Date Night Hidden Alleys”, or “Crispy
                Snacking in D1”.
              </p>
            </div>

            {/* Visual playlist pills */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#f2f6ff] hover:bg-[#eaf1ff] border border-crave-border/70 p-3.5 rounded-2xl flex items-center justify-between gap-3 transition-colors cursor-pointer shadow-[0_2px_8px_rgba(23,43,69,0.02)]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-crave-primary to-crave-primary-hover flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,94,184,0.25)] group-hover:scale-105 transition-transform">
                    <Moon className="size-4 text-white" strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-crave-navy text-[13px] tracking-tight truncate group-hover:text-crave-primary transition-colors">
                      Midnight Cravings
                    </span>
                    <span className="text-crave-muted text-[12px] truncate">
                      14 saved spots • Saigon
                    </span>
                  </div>
                </div>
                <div className="size-5 rounded-full bg-white/80 flex items-center justify-center text-crave-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <ChevronRight className="size-3" strokeWidth={2.5} />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#f2f6ff] hover:bg-[#eaf1ff] border border-crave-border/70 p-3.5 rounded-2xl flex items-center justify-between gap-3 transition-colors cursor-pointer shadow-[0_2px_8px_rgba(23,43,69,0.02)]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-[#00629e] to-crave-navy flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,98,158,0.25)] group-hover:scale-105 transition-transform">
                    <UtensilsCrossed className="size-4 text-white" strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-crave-navy text-[13px] tracking-tight truncate group-hover:text-crave-primary transition-colors">
                      Date Night Izakaya
                    </span>
                    <span className="text-crave-muted text-[12px] truncate">
                      8 curated gems • Thao Dien
                    </span>
                  </div>
                </div>
                <div className="size-5 rounded-full bg-white/80 flex items-center justify-center text-crave-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <ChevronRight className="size-3" strokeWidth={2.5} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
