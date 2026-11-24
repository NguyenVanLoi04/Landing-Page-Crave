import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crave - Food Discovery | Stop Overthinking. Start Craving.",
  description:
    "Discover authentic local food through playful swipe cards, an instant decider wheel, and neighborhood food radar in Saigon.",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-crave-bg text-crave-navy font-sans antialiased selection:bg-crave-primary/15 selection:text-crave-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
