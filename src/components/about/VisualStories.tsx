"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function VisualStories() {
  return (
    <section className="py-10 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Story 1: Saigon Tasting Lab & Studio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] overflow-hidden border border-crave-border/40 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.05)] grid grid-cols-1 lg:grid-cols-12 min-h-[480px]"
        >
          {/* Image */}
          <div className="relative lg:col-span-7 h-72 lg:h-full min-h-[320px] overflow-hidden">
            <Image
              src="/assets/about/meeting_team_lab.jpg"
              alt="Crave Team Meeting & Creative Tasting Lab"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start">
            <span className="text-[11px] font-bold text-crave-primary-hover uppercase tracking-[1.1px] mb-2">
              SAIGON LAB & STUDIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-crave-navy tracking-tight leading-snug">
              Where food culture meets craft.
            </h2>
            <p className="mt-4 text-[15px] text-crave-muted leading-relaxed font-normal">
              Our creative lab in District 1 tests and audits every dish
              featured on Crave.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-crave-soft text-crave-muted text-[12px] font-semibold px-3.5 py-1.5 rounded-full">
                District 1 Lab
              </span>
              <span className="bg-crave-soft text-crave-muted text-[12px] font-semibold px-3.5 py-1.5 rounded-full">
                Independent Audits
              </span>
            </div>
          </div>
        </motion.div>

        {/* Story 2: Welcoming Hospitality Reception */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] overflow-hidden border border-crave-border/40 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.05)] grid grid-cols-1 lg:grid-cols-12 min-h-[480px]"
        >
          {/* Text Content (Left on desktop) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start order-2 lg:order-1">
            <span className="text-[11px] font-bold text-crave-primary-hover uppercase tracking-[1.1px] mb-2">
              WARM HOSPITALITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-crave-navy tracking-tight leading-snug">
              Preserving local alleyway kitchens.
            </h2>
            <p className="mt-4 text-[15px] text-crave-muted leading-relaxed font-normal">
              From multi-decade family stalls to hidden neighborhood spots, we
              celebrate culinary heritage without paid rankings.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="size-4 shrink-0 relative">
                  <Image
                    src="/assets/about/icon-check.svg"
                    alt="Check"
                    width={16}
                    height={16}
                    className="size-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-crave-muted tracking-wide">
                  Direct Support
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-4 shrink-0 relative">
                  <Image
                    src="/assets/about/icon-check.svg"
                    alt="Check"
                    width={16}
                    height={16}
                    className="size-full"
                  />
                </div>
                <span className="text-[12px] font-semibold text-crave-muted tracking-wide">
                  Zero Pay-to-Rank
                </span>
              </div>
            </div>
          </div>

          {/* Image (Right on desktop) */}
          <div className="relative lg:col-span-7 h-72 lg:h-full min-h-[320px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/assets/about/hospitality_dining.jpg"
              alt="Warm hospitality and authentic food dining experience"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
