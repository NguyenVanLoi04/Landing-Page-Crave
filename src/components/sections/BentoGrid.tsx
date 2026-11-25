"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Search,
  CupSoda,
  Soup,
  Croissant,
  Cookie,
  ChevronRight,
} from "lucide-react";
import InteractiveWheel from "@/components/ui/InteractiveWheel";

const FOOD_CATEGORIES = [
  {
    id: "coffee",
    name: "Fruit Tea",
    featuredDish: "Ô Long Nho Mẫu Đơn",
    shopInfo: "Phúc Long D1",
    price: "₫59,000",
    image: "/assets/phuc-long-nho-mau-don.jpg",
    Icon: CupSoda,
  },
  {
    id: "noodles",
    name: "Noodles",
    featuredDish: "Phở Bò Tái Lăn",
    shopInfo: "Phở Thìn • D1",
    price: "₫65,000",
    image: "/assets/cuisine-preview-pho.png",
    Icon: Soup,
  },
  {
    id: "banh-mi",
    name: "Bánh Mì",
    featuredDish: "Bánh Mì Thịt Nướng",
    shopInfo: "District 3",
    price: "₫35,000",
    image: "/assets/banh-mi-thit-nuong.png",
    Icon: Croissant,
  },
  {
    id: "snacks",
    name: "Snacks",
    featuredDish: "Bánh Xèo Miền Tây",
    shopInfo: "District 1",
    price: "₫55,000",
    image: "/assets/playlist-street-food.jpg",
    Icon: Cookie,
  },
] as const;

type FoodCategoryId = (typeof FOOD_CATEGORIES)[number]["id"];

export default function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState<FoodCategoryId>("coffee");

  const currentCategory =
    FOOD_CATEGORIES.find((cat) => cat.id === activeCategory) || FOOD_CATEGORIES[0];

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
                  alt="Tính năng lướt chọn món ăn Swipe to Savor"
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
                  alt="Hình ảnh xem trước món Phở bò truyền thống Sài Gòn"
                  fill
                  sizes="280px"
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
                    alt="Bánh Mì Thịt Nướng Quận 3 - Món ngon đường phố Sài Gòn"
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
                      alt="Lưu món ăn yêu thích"
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
                  alt="Vòng xoay chọn món ăn The Crave Wheel"
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

          {/* Bento Card 3: Food Categories Explorer (5 cols) */}
          <motion.div
            id="food-radar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="@container lg:col-span-5 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between"
          >
            <div>
              <div className="size-10 rounded-full bg-crave-border-soft flex items-center justify-center mb-4">
                <Search className="size-4.5 text-crave-primary" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight text-balance">
                Explore by Food Type
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Search across local food categories—from steaming phở and crispy
                bánh mì to refreshing fruit tea.
              </p>
            </div>

            {/* Clean Single-Row Category Pills + Product Card */}
            <div className="mt-6 flex flex-col gap-3.5">
              {/* 4 Clean Pills in 1 Row */}
              <div className="flex flex-wrap items-center gap-2">
                {FOOD_CATEGORIES.map(({ id, name, Icon }) => {
                  const isActive = activeCategory === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 cursor-pointer ${isActive
                        ? "bg-crave-primary text-white shadow-[0_6px_14px_-2px_rgba(0,94,184,0.3)]"
                        : "bg-crave-soft/80 text-crave-navy hover:bg-crave-soft border border-crave-border/60"
                        }`}
                    >
                      <Icon
                        className={`size-3.5 ${isActive ? "text-white" : "text-crave-primary"
                          }`}
                        strokeWidth={2.2}
                      />
                      <span>{name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Product Card matching CRAVE's signature card UI */}
              <div className="group rounded-[28px] bg-white shadow-[0px_12px_28px_rgba(23,43,69,0.08)] border border-crave-border/50 overflow-hidden flex flex-col transition-all duration-200 hover:shadow-[0px_16px_32px_rgba(0,94,184,0.12)] hover:-translate-y-0.5 cursor-pointer">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={currentCategory.image}
                    alt={`${currentCategory.featuredDish} - ${currentCategory.name}`}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3.5 bg-white flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-bold text-crave-navy text-[16px] leading-tight truncate">
                      {currentCategory.featuredDish}
                    </h4>
                    <p className="text-crave-muted text-[12px] truncate mt-0.5">
                      {currentCategory.shopInfo} • {currentCategory.price}
                    </p>
                  </div>
                  <span
                    className="size-9 rounded-full bg-crave-primary text-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-crave-primary-hover transition-colors"
                    aria-label="Save dish"
                  >
                    <Image
                      src="/assets/icon-wheel-sparkles.svg"
                      alt="Lưu món ăn yêu thích"
                      width={15}
                      height={14}
                      className="object-contain"
                    />
                  </span>
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
            className="@container lg:col-span-7 bg-white rounded-[32px] p-8 shadow-[0px_8px_24px_-4px_rgba(23,43,69,0.06),0px_2px_6px_-1px_rgba(0,94,184,0.04)] border border-crave-body/5 flex flex-col justify-between"
          >
            <div>
              <div className="size-10 rounded-full bg-crave-border flex items-center justify-center mb-4">
                <Image
                  src="/assets/icon-playlist.svg"
                  alt="Taste Playlists - Bộ sưu tập địa điểm ăn uống theo gu"
                  width={15}
                  height={18}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-crave-navy tracking-tight text-balance">
                Taste Playlists & Vault
              </h3>
              <p className="mt-2 text-crave-muted text-[15px] leading-relaxed">
                Save and organize your go-to comfort picks like Spotify
                playlists—from crispy fried chicken feasts to savory spaghetti
                combos.
              </p>
            </div>

            {/* Visual 2-card editorial showcase with user-selected Gà Rán & Jollibee images */}
            <div className="mt-6 grid grid-cols-1 @sm:grid-cols-2 gap-4">
              {/* Card 1: Gà Rán */}
              <div className="group bg-crave-soft/75 hover:bg-white border border-crave-border/60 rounded-[24px] overflow-hidden transition-all duration-200 cursor-pointer shadow-[0_2px_10px_rgba(23,43,69,0.03)] hover:shadow-[0_12px_24px_-6px_rgba(0,94,184,0.16)] hover:-translate-y-1 flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/assets/ga-ran-gion-cay.jpg"
                    alt="Gà Rán Giòn Cay - Gà rán giòn rụm vàng ươm trên CRAVE"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-crave-navy text-[15px] tracking-tight truncate group-hover:text-crave-primary transition-colors">
                      Gà Rán Giòn Cay
                    </h4>
                    <p className="text-crave-muted text-[12px] truncate mt-0.5">
                      KFC • ₫79,000
                    </p>
                  </div>
                  <div className="size-7 rounded-full bg-white border border-crave-border/60 flex items-center justify-center text-crave-primary group-hover:bg-crave-primary group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="size-4" strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              {/* Card 2: Jollibee */}
              <div className="group bg-crave-soft/75 hover:bg-white border border-crave-border/60 rounded-[24px] overflow-hidden transition-all duration-200 cursor-pointer shadow-[0_2px_10px_rgba(23,43,69,0.03)] hover:shadow-[0_12px_24px_-6px_rgba(0,94,184,0.16)] hover:-translate-y-1 flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/assets/jollibee-cap-doi-an-y.jpg"
                    alt="Gà Giòn Vui Vẻ & Mì Ý Jolly - Cặp đôi ăn ý Jollibee"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-[75%_center] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-crave-navy text-[15px] tracking-tight truncate group-hover:text-crave-primary transition-colors">
                      Gà Giòn Vui Vẻ &amp; Mì Ý
                    </h4>
                    <p className="text-crave-muted text-[12px] truncate mt-0.5">
                      Jollibee • ₫69,000
                    </p>
                  </div>
                  <div className="size-7 rounded-full bg-white border border-crave-border/60 flex items-center justify-center text-crave-primary group-hover:bg-crave-primary group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="size-4" strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
