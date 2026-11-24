"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroShowcase() {
  return (
    <div className="relative w-full max-w-[1024px] flex items-center justify-center pt-8 pb-4">
      {/* LEFT Flanking Floating Card (Decider Wheel Hit) */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.03, rotate: -1 }}
        className="hidden lg:block absolute left-2 xl:left-8 top-[32%] z-20 w-[260px] backdrop-blur-2xl bg-white/90 p-4 rounded-[32px] shadow-[0px_16px_36px_-6px_rgba(23,43,69,0.12)] border border-white/60"
      >
        <div className="flex items-center justify-between pb-3">
          <span className="bg-crave-accent-subtle text-[#001d34] text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full">
            Wheel Pick
          </span>
          <span className="text-crave-primary text-[11px] font-semibold tracking-wide">
            98% Match
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-crave-accent-light flex items-center justify-center shrink-0">
            <Image
              src="/assets/icon-card-flavor.svg"
              alt="Món Phở Bò Tái Lăn - Khám phá món ăn trên CRAVE"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="font-semibold text-crave-navy text-[15px] leading-tight truncate">
              Phở Bò Tái Lăn
            </h4>
            <p className="text-crave-muted text-[12px] truncate">
              Phở Thìn Lò Đúc • 1.2km
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 pt-3 text-[#00629e] text-[11px] font-medium">
          <div className="size-3.5 relative">
            <Image
              src="/assets/icon-card-match.svg"
              alt="Biểu tượng món ăn thịnh hành"
              fill
              className="object-contain"
            />
          </div>
          <span>Spun 412 times today</span>
        </div>
      </motion.div>

      {/* CENTER: iPhone 16 Device Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[300px] sm:w-[330px] rounded-[48px] bg-crave-navy p-3 shadow-[0px_32px_64px_-12px_rgba(0,30,60,0.28)]"
      >
        {/* Outer Bezels / Screen */}
        <div className="relative w-full rounded-[40px] overflow-hidden bg-crave-soft flex flex-col h-[560px]">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 rounded-full bg-crave-navy flex items-center justify-end pr-2">
            <span className="size-2 rounded-full bg-crave-primary/60" />
          </div>

          {/* Mini App Header */}
          <div className="pt-10 px-4 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-6 rounded-full bg-crave-primary text-white text-[10px] font-bold flex items-center justify-center">
                C
              </span>
              <span className="text-crave-navy font-bold text-[13px]">
                District 1 • Saigon
              </span>
            </div>
            <div className="size-4 relative opacity-80 cursor-pointer">
              <Image
                src="/assets/iphone-notch.svg"
                alt="Filter"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Swipeable Card Mockup */}
          <div className="mx-4 my-2 flex-1 rounded-[32px] overflow-hidden bg-white shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.08)] flex flex-col">
            {/* Food Image with Floating Badges */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/assets/hero-dish-pho.png"
                alt="Bánh Mì Đặc Biệt Huỳnh Hoa - Gợi ý món ăn ngon trên ứng dụng CRAVE"
                fill
                quality={95}
                sizes="330px"
                className="object-cover"
                priority
              />
              {/* Match floating pill */}
              <div className="absolute top-3 left-3 backdrop-blur-md bg-white/95 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-white/60">
                <Sparkles className="size-3 text-crave-primary fill-crave-primary/20" />
                <span className="text-crave-primary font-bold text-[11px] tracking-tight">
                  98% Flavor Match
                </span>
              </div>
              {/* Distance pill */}
              <div className="absolute bottom-3 right-3 backdrop-blur-md bg-[#1e314b]/80 px-2.5 py-1 rounded-full text-[#ebf1ff] text-[11px] font-medium">
                450m • Open now
              </div>
            </div>

            {/* Card Details */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-crave-navy text-[17px]">
                    Bánh Mì Đặc Biệt
                  </h3>
                  <span className="text-crave-primary-hover font-bold text-[13px]">
                    ₫48,000
                  </span>
                </div>
                <p className="text-crave-muted text-[12px] truncate pt-0.5">
                  Bánh Mì Huỳnh Hoa • Crispy Baguette,…
                </p>
              </div>

              {/* Swipe Action Buttons */}
              <div className="flex items-center justify-center gap-4 pt-3 pb-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-11 rounded-full bg-crave-border-soft flex items-center justify-center shadow-sm"
                  aria-label="Pass"
                >
                  <div className="size-3.5 relative">
                    <Image
                      src="/assets/icon-pass-x.svg"
                      alt="Bỏ qua món ăn"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-11 rounded-full bg-crave-accent-subtle flex items-center justify-center shadow-sm"
                  aria-label="Bookmark"
                >
                  <div className="size-3.5 relative">
                    <Image
                      src="/assets/icon-star.svg"
                      alt="Lưu món ăn vào bộ sưu tập"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-13 rounded-full bg-crave-primary flex items-center justify-center shadow-[0px_8px_16px_rgba(0,94,184,0.3)]"
                  aria-label="Like"
                >
                  <div className="size-5 relative">
                    <Image
                      src="/assets/icon-heart.svg"
                      alt="Thích món ăn"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mini Bottom Tab Bar */}
          <div className="px-6 py-2 flex items-center justify-between border-t border-crave-body/5 bg-crave-soft">
            <div className="flex flex-col items-center gap-0.5">
              <div className="size-4 relative">
                <Image
                  src="/assets/icon-tab-home.svg"
                  alt="Khám phá lướt món ăn"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-crave-primary text-[9px] font-bold">Swipe</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="size-4 relative opacity-60">
                <Image
                  src="/assets/icon-tab-radar.svg"
                  alt="Vòng xoay chọn món"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#727783] text-[9px]">Wheel</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="size-4 relative opacity-60">
                <Image
                  src="/assets/icon-tab-vault.svg"
                  alt="Radar định vị ẩm thực"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#727783] text-[9px]">Radar</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="size-4 relative opacity-60">
                <Image
                  src="/assets/icon-tab-profile.svg"
                  alt="Món ăn đã lưu"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#727783] text-[9px]">Saved</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT Flanking Floating Card (Map Radar Alert) */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ scale: 1.03, rotate: 1 }}
        className="hidden lg:block absolute right-2 xl:right-8 top-[38%] z-20 w-[260px] backdrop-blur-2xl bg-white/90 p-4 rounded-[32px] shadow-[0px_16px_36px_-6px_rgba(23,43,69,0.12)] border border-white/60"
      >
        <div className="flex items-center justify-between pb-3">
          <span className="bg-crave-accent-light text-crave-primary-hover text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full">
            Food Radar
          </span>
          <span className="text-[#727783] text-[11px]">2 mins ago</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="size-10 rounded-full bg-crave-border flex items-center justify-center shrink-0">
            <Image
              src="/assets/iphone-home-indicator.svg"
              alt="Địa điểm ẩm thực Bến Nghé Sài Gòn"
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="font-semibold text-crave-navy text-[15px] leading-tight truncate">
              Ben Nghe Street Food
            </h4>
            <p className="text-crave-muted text-[12px] truncate">
              14 stalls trending right now
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 w-full h-1.5 bg-crave-border-soft rounded-full overflow-hidden">
          <div className="h-full w-[80%] bg-crave-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
