import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://craveapp.vn";

export const viewport: Viewport = {
  themeColor: "#005eb8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CRAVE - Ứng Dụng Khám Phá Món Ăn & Địa Điểm Ăn Uống | Food Discovery App",
    template: "%s | CRAVE - Ứng Dụng Khám Phá Món Ăn & Quán Ăn Ngon",
  },
  description:
    "CRAVE là ứng dụng khám phá món ăn và địa điểm ăn uống ngon gần bạn tại Sài Gòn. Tìm quán ăn nhanh chóng với vòng xoay ngẫu nhiên Decider Wheel, lướt thẻ món ăn Swipe và định vị ẩm thực Food Radar.",
  keywords: [
    "CRAVE",
    "CRAVE App",
    "ứng dụng tìm kiếm món ăn",
    "ứng dụng khám phá địa điểm ăn uống",
    "tìm quán ăn ngon Sài Gòn",
    "app tìm quán ăn",
    "hôm nay ăn gì",
    "vòng xoay chọn món ăn",
    "decider wheel",
    "food discovery app",
    "quán ngon Sài Gòn",
    "ẩm thực Sài Gòn",
    "lướt món ăn swipe",
  ],
  authors: [{ name: "CRAVE Team", url: siteUrl }],
  creator: "CRAVE Team",
  publisher: "CRAVE",
  applicationName: "CRAVE",
  category: "Food & Drink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "CRAVE - Ứng Dụng Khám Phá Món Ăn & Địa Điểm Ăn Uống",
    description:
      "CRAVE giúp bạn thoát khỏi phân vân 'Hôm nay ăn gì?'. Khám phá 5,000+ quán ăn ngon tại Sài Gòn với vòng xoay Decider Wheel, lướt thẻ món ăn và radar quán ăn quanh bạn.",
    url: siteUrl,
    siteName: "CRAVE",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAVE - Ứng Dụng Khám Phá Món Ăn & Địa Điểm Ăn Uống",
    description:
      "Khám phá món ngon và quán ăn quanh bạn tại Sài Gòn với CRAVE. Vòng xoay chọn món, lướt thẻ ẩm thực trực quan.",
    creator: "@craveapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-screen bg-crave-bg text-crave-navy font-sans antialiased selection:bg-crave-primary/15 selection:text-crave-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
