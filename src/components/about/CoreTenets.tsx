"use client";

import Image from "next/image";
import { motion } from "motion/react";

const tenets = [
  {
    icon: "/assets/about/icon-tenet-clarity.svg",
    title: "Dish Clarity Over Hype",
    description:
      "We celebrate honest dish profiles and flavor temperatures instead of inflated star scores or marketing noise.",
  },
  {
    icon: "/assets/about/icon-tenet-lineage.svg",
    title: "Honoring the Lineage",
    description:
      "Respecting the cooks who wake up before dawn to simmer bone broths and preserve traditional Vietnamese recipes across generations.",
  },
  {
    icon: "/assets/about/icon-tenet-restraint.svg",
    title: "Design Restraint",
    description:
      "Apple-inspired ergonomics, fluid haptics, airy spacing, and zero intrusive ads or deceitful push triggers.",
  },
];

export default function CoreTenets() {
  return (
    <section className="py-16 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] font-bold text-crave-primary uppercase tracking-[1.1px]">
            UNCOMPROMISING STANDARDS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-[34px] font-bold text-crave-navy tracking-tight">
            Our Core Tenets
          </h2>
        </motion.div>

        {/* 3 Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {tenets.map((tenet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[28px] p-8 border border-crave-border/40 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.04)] hover:shadow-[0px_16px_32px_-4px_rgba(23,43,69,0.08)] transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon */}
              <div className="size-12 rounded-2xl bg-crave-soft flex items-center justify-center p-3 mb-6">
                <div className="size-6 relative">
                  <Image
                    src={tenet.icon}
                    alt={tenet.title}
                    width={24}
                    height={24}
                    className="size-full object-contain"
                  />
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-crave-navy tracking-tight mb-3">
                {tenet.title}
              </h3>
              <p className="text-[15px] text-crave-muted leading-relaxed font-normal">
                {tenet.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
