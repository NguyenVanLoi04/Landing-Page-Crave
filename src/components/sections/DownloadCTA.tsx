"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-crave-primary rounded-[48px] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0px_24px_48px_-12px_rgba(0,94,184,0.35)] flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Ambient Glows */}
          <div className="absolute -bottom-20 -right-20 size-96 bg-crave-primary-hover blur-[80px] rounded-full opacity-60 pointer-events-none" />
          <div className="absolute -top-10 left-10 size-64 bg-[#67b6ff] blur-[70px] rounded-full opacity-20 pointer-events-none" />

          {/* Left Text & Store Badges */}
          <div className="relative z-10 max-w-xl text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase mb-4 text-white">
              START EATING BETTER TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight tracking-tight">
              Hungry right now? <br />
              Your next meal is waiting.
            </h2>
            <p className="mt-4 text-[#c8daff] text-base sm:text-[17px] leading-relaxed">
              Join over 50,000 foodies in Vietnam enjoying effortless meal picks.
              Download Crave free for iOS and Android.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-[52px] px-6 rounded-full bg-white text-crave-navy font-semibold text-[15px] flex items-center gap-3 shadow-md hover:bg-white/95 transition-all"
              >
                <div className="size-5 relative">
                  <Image
                    src="/assets/icon-cta-apple.svg"
                    alt="Tải CRAVE trên Apple App Store cho iOS"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>App Store</span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-[52px] px-6 rounded-full bg-white text-crave-navy font-semibold text-[15px] flex items-center gap-3 shadow-md hover:bg-white/95 transition-all"
              >
                <div className="size-5 relative">
                  <Image
                    src="/assets/icon-cta-google.svg"
                    alt="Tải CRAVE trên Google Play Store cho Android"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Google Play</span>
              </motion.a>
            </div>
          </div>

          {/* Right QR Code Card for Instant Desktop Handoff */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10 bg-white p-6 rounded-[32px] drop-shadow-[0px_16px_18px_rgba(0,0,0,0.18)] flex flex-col items-center w-full max-w-[280px] shrink-0 text-center"
          >
            <div className="size-36 p-2.5 rounded-[24px] bg-crave-accent-light flex items-center justify-center">
              <div className="size-full relative">
                <Image
                  src="/assets/illustration-qr-code.svg"
                  alt="Mã QR quét tải ngay ứng dụng CRAVE cho iOS và Android"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="mt-4 font-bold text-crave-navy text-[13px] tracking-wide">
              Scan with iPhone Camera
            </h4>
            <p className="mt-1 text-crave-muted text-[12px]">
              Direct install via App Clip
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
