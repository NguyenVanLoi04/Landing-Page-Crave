"use client";

import Image from "next/image";
import { motion } from "motion/react";

const pills = [
  "Đậm đà",
  "Bánh Mì Giòn",
  "Nước Dùng Gia Truyền",
  "Rau Thơm Tươi",
];

export default function CulinaryShowcase() {
  return (
    <section className="py-10 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[500px] w-full rounded-[32px] overflow-hidden shadow-[0px_20px_40px_rgba(23,43,69,0.1)] flex flex-col justify-end p-8 sm:p-14"
        >
          {/* Background image */}
          <Image
            src="/assets/about/cartography_showcase.jpg"
            alt="Saigon Midnight Broth Carts & Morning Markets"
            fill
            quality={90}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-crave-navy/95 via-crave-navy/55 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4">
              <div className="size-3 shrink-0 relative">
                <Image
                  src="/assets/about/icon-cartography-pin.svg"
                  alt="Badge"
                  width={12}
                  height={12}
                  className="size-full"
                />
              </div>
              <span className="text-[11px] font-medium tracking-[0.55px] uppercase text-white">
                CULINARY CARTOGRAPHY
              </span>
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-tight tracking-tight text-white">
              “From bustling morning markets in District 1 to midnight broth
              carts in Cholon, we map Saigon one bite at a time.”
            </blockquote>

            {/* Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-white/15 backdrop-blur-md text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
