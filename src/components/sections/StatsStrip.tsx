import { motion } from "motion/react";

const STATS = [
  {
    value: "3.2s",
    title: "DECIDE TIME",
    description: "Average time to pick dinner",
  },
  {
    value: "5,000+",
    title: "CURATED SPOTS",
    description: "Tested authentic street eateries",
  },
  {
    value: "98%",
    title: "LOVE RATE",
    description: "Diners discover a new favorite",
  },
  {
    value: "0%",
    title: "SPONSORED ADS",
    description: "100% genuine local taste recommendations",
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-white py-10 px-5 sm:px-8 border-y border-crave-body/5 drop-shadow-[0px_4px_10px_rgba(23,43,69,0.02)]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-2 rounded-2xl hover:bg-crave-bg transition-colors"
          >
            <span className="text-3xl sm:text-[34px] font-bold text-crave-primary tracking-tight">
              {stat.value}
            </span>
            <span className="mt-1 text-[12px] font-bold text-crave-navy tracking-wider uppercase">
              {stat.title}
            </span>
            <span className="mt-0.5 text-[13px] text-crave-muted">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
