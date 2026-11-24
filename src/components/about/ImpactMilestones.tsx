"use client";

import Image from "next/image";
import { motion } from "motion/react";

const metricCards = [
  {
    icon: "/assets/about/icon-milestone-districts.svg",
    number: "24",
    title: "Districts Mapped",
    description:
      "Bao phủ từ hẻm nhỏ Quận 1, phố ẩm thực Quận 5 đến các góc ẩm thực trứ danh Chợ Lớn và Thủ Đức.",
  },
  {
    icon: "/assets/about/icon-milestone-recipes.svg",
    number: "450+",
    title: "Heritage Recipes",
    description:
      "Hồ sơ lưu trữ và số hóa công thức gia truyền cùng câu chuyện của các nghệ nhân nấu ăn nhiều thế hệ.",
  },
  {
    icon: "/assets/about/icon-milestone-no-ads.svg",
    number: "0 VNĐ",
    title: "Paid Placements",
    description:
      "Không thuật toán ưu tiên tiền quảng cáo. Xếp hạng hoàn toàn dựa trên sự hài lòng và khẩu vị chân thực.",
  },
];

export default function ImpactMilestones() {
  return (
    <section className="py-16 px-5 sm:px-8 bg-crave-bg">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-bold text-crave-primary uppercase tracking-[1.1px]">
              IMPACT & COMMUNITY
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-[34px] font-bold text-crave-navy tracking-tight">
              Saigon Culinary Milestones
            </h2>
          </div>
          <p className="max-w-md text-sm text-crave-muted leading-relaxed font-normal">
            Dữ liệu sống động về hành trình bảo tồn và kết nối tinh hoa ẩm thực
            đường phố Sài Gòn.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[28px] p-7 border border-crave-border/40 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.04)] flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="size-10 rounded-xl bg-crave-soft flex items-center justify-center p-2.5 mb-6">
                  <div className="size-5 relative">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={20}
                      height={20}
                      className="size-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-crave-primary tracking-tight">
                  {card.number}
                </div>
                <h3 className="mt-1 text-[17px] font-bold text-crave-navy tracking-tight">
                  {card.title}
                </h3>
              </div>

              <p className="mt-4 text-xs sm:text-[13px] text-crave-muted leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}

          {/* Card 4: Community Voice (Featured Blue Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-crave-primary text-white rounded-[28px] p-7 shadow-[0px_16px_32px_rgba(0,94,184,0.25)] flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="size-5 relative">
                  <Image
                    src="/assets/about/icon-quote.svg"
                    alt="Quote Icon"
                    width={20}
                    height={20}
                    className="size-full object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[1px] text-white/80">
                  COMMUNITY VOICE
                </span>
              </div>

              <blockquote className="text-[14px] leading-relaxed font-medium text-white/95 italic">
                “Crave giúp những gánh hàng rong và quán ăn lâu năm được tôn
                trọng đúng giá trị ẩm thực mà họ xứng đáng có được.”
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-sm font-bold text-white tracking-tight">
                Saigon Food Scout Circle
              </div>
              <div className="text-[11px] text-white/75 font-normal mt-0.5">
                1,800+ Đồng sáng lập cộng đồng
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
