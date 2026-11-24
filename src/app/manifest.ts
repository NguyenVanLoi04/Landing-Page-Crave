import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CRAVE - Khám Phá Món Ăn & Địa Điểm Ăn Uống",
    short_name: "CRAVE",
    description:
      "Ứng dụng khám phá món ăn và quán ăn ngon gần bạn tại Sài Gòn. Tìm kiếm địa điểm ăn uống với vòng xoay Decider Wheel và lướt món ăn Swipe.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#005eb8",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
