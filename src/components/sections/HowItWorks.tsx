"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STEPS = [
  {
    step: "01",
    title: "Tell us your vibe",
    description:
      "Pick your current appetite radius (walking distance or delivery) and set dietary preferences in one gesture.",
    icon: "/assets/icon-step-vibe.svg",
    badge: "Zero signup required",
  },
  {
    step: "02",
    title: "Spin or Swipe",
    description:
      "Swipe through high-res dish cards or tap the Decider Wheel when you want fate to take total control.",
    icon: "/assets/icon-step-spin.svg",
    badge: "Instant haptic decision",
  },
  {
    step: "03",
    title: "Eat & Enjoy",
    description:
      "Get instant turn-by-turn directions via Grab or Google Maps, call ahead for wait times, or share the pick with your crew.",
    icon: "/assets/icon-step-eat.svg",
    badge: "1-tap ride integration",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-xl mb-16">
          <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-crave-primary-hover">
            SEAMLESS EXPERIENCE
          </span>
          <h2 className="mt-2 text-3xl sm:text-[34px] font-bold text-crave-navy tracking-tight">
            Three taps from craving to chewing.
          </h2>
        </div>

        {/* Steps Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[32px] p-8 drop-shadow-[0px_4px_8px_rgba(23,43,69,0.04)] border border-crave-body/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[34px] font-bold text-[#99cbff] tracking-tight">
                  {item.step}
                </span>
                <h3 className="mt-3 text-[22px] font-bold text-crave-navy tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 flex items-center gap-2 border-t border-crave-body/5">
                <div className="size-3.5 relative">
                  <Image
                    src={item.icon}
                    alt={`Bước ${item.step}: ${item.title} - ${item.badge}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-semibold text-crave-primary-hover tracking-wide">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
