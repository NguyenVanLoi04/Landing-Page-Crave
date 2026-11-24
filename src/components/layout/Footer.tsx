import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-crave-soft border-t border-crave-body/5 drop-shadow-[0px_1px_4px_rgba(23,43,69,0.02)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-crave-body/5">
          {/* Brand info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative size-7 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/assets/crave-logo.png"
                  alt="Crave Logo"
                  width={28}
                  height={28}
                  className="object-cover"
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
            </div>
            <p className="text-[13px] text-crave-muted leading-relaxed max-w-sm">
              Solving dining indecision with playful swipes, lucky decider
              wheels, and local culinary radar.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="bg-crave-accent-light text-crave-navy text-[11px] font-medium px-3.5 py-1 rounded-full">
                iOS App Store
              </span>
              <span className="bg-crave-accent-light text-crave-navy text-[11px] font-medium px-3.5 py-1 rounded-full">
                Google Play
              </span>
            </div>
          </div>

          {/* Links navigation */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-crave-navy">
                Product
              </span>
              <nav className="flex flex-col gap-2 text-[13px] text-crave-muted">
                <Link href="#features" className="hover:text-crave-primary transition-colors">
                  Swipe Discovery
                </Link>
                <Link href="#features" className="hover:text-crave-primary transition-colors">
                  Decider Wheel
                </Link>
                <Link href="#features" className="hover:text-crave-primary transition-colors">
                  Map Radar
                </Link>
                <Link href="#features" className="hover:text-crave-primary transition-colors">
                  Saved Love
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-crave-navy">
                Company
              </span>
              <nav className="flex flex-col gap-2 text-[13px] text-crave-muted">
                <Link href="/about" className="hover:text-crave-primary transition-colors">
                  About Us
                </Link>
                <Link href="#" className="hover:text-crave-primary transition-colors">
                  Press
                </Link>
                <Link href="#" className="hover:text-crave-primary transition-colors">
                  Careers
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-crave-navy">
                Legal
              </span>
              <nav className="flex flex-col gap-2 text-[13px] text-crave-muted">
                <Link href="#" className="hover:text-crave-primary transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-crave-primary transition-colors">
                  Terms
                </Link>
                <Link href="#" className="hover:text-crave-primary transition-colors">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-crave-muted">
          <p>© 2025 Crave Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="size-4 relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src="/assets/icon-social-instagram.svg" alt="Social" fill className="object-contain" />
            </span>
            <span className="size-4 relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src="/assets/icon-social-x.svg" alt="Social" fill className="object-contain" />
            </span>
            <span className="size-4 relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src="/assets/icon-social-facebook.svg" alt="Social" fill className="object-contain" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
