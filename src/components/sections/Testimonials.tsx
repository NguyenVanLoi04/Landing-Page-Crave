"use client";

import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote:
      "“My boyfriend and I used to spend 45 minutes every evening arguing over dinner. The Decider Wheel solved our relationship stress in 3 seconds.”",
    name: "Linh Nguyen",
    role: "District 1 • Verified Foodie",
    initials: "LN",
    bg: "bg-crave-border",
    color: "text-crave-primary-hover",
  },
  {
    quote:
      "“The photography is incredible. No fake reviews, just clean food cards that show you exactly what the dish looks like before walking in.”",
    name: "Tuan Kiet",
    role: "Binh Thanh • Tech Lead",
    initials: "TK",
    bg: "bg-crave-accent-subtle",
    color: "text-[#00629e]",
  },
  {
    quote:
      "“Crave led me to a 30-year-old Phở spot hidden in an alley 400 meters from my apartment that I had walked past for three years without noticing.”",
    name: "Marc Anderson",
    role: "Thao Dien • Expat Gourmet",
    initials: "MA",
    bg: "bg-crave-border-soft",
    color: "text-crave-primary-hover",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-crave-soft">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-xl mb-16">
          <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-crave-primary-hover">
            COMMUNITY LOVED
          </span>
          <h2 className="mt-2 text-3xl sm:text-[34px] font-bold text-crave-navy tracking-tight">
            What Saigon Foodies Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 drop-shadow-[0px_4px_8px_rgba(23,43,69,0.03)] border border-crave-body/5 flex flex-col justify-between"
            >
              <p className="text-crave-navy text-[15px] leading-relaxed">
                {item.quote}
              </p>

              <div className="mt-8 pt-4 flex items-center gap-3 border-t border-crave-body/5">
                <div
                  className={`size-10 rounded-full ${item.bg} flex items-center justify-center font-bold text-[15px] ${item.color} shrink-0`}
                >
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-crave-navy text-[15px]">
                    {item.name}
                  </span>
                  <span className="text-crave-muted text-[12px]">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
