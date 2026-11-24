"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-crave-bg/85 border-b border-crave-body/5 transition-all">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative size-8 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/crave-logo.png"
              alt="Crave Logo"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[17px] text-crave-navy tracking-tight">
              CRAVE
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#00629e]">
              Food Discovery
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 sm:gap-4 lg:gap-6 text-[15px]">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-full transition-colors ${!isAbout
              ? "text-crave-primary-hover font-semibold hover:text-crave-primary"
              : "text-crave-muted font-medium hover:text-crave-navy"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3.5 py-1.5 rounded-full transition-colors ${isAbout
              ? "text-crave-primary-hover font-semibold hover:text-crave-primary"
              : "text-crave-muted font-medium hover:text-crave-navy"
              }`}
          >
            About Us
          </Link>
          <Link
            href="/#features"
            className="px-3.5 py-1.5 text-crave-muted font-medium hover:text-crave-navy transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="px-3.5 py-1.5 text-crave-muted font-medium hover:text-crave-navy transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#food-radar"
            className="px-3.5 py-1.5 text-crave-muted font-medium hover:text-crave-navy transition-colors"
          >
            Food Radar
          </Link>
          <Link
            href="/#download"
            className="px-3.5 py-1.5 text-crave-muted font-medium hover:text-crave-navy transition-colors"
          >
            Download
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <motion.a
            href="/#download"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-crave-primary hover:bg-crave-primary-deep text-white text-[14px] sm:text-[15px] font-semibold px-6 py-2.5 rounded-full shadow-[0px_4px_16px_rgba(0,94,184,0.2)] transition-colors inline-flex items-center justify-center"
          >
            Get App
          </motion.a>
        </div>
      </div>
    </header>
  );
}
