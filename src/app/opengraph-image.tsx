import { ImageResponse } from "next/og";

export const alt = "CRAVE - Khám Phá Món Ăn & Địa Điểm Ăn Uống";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#001e34",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 94, 184, 0.25) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 94, 184, 0.15) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Glow decoration */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 94, 184, 0.45) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(0, 94, 184, 0.35)",
            border: "1px solid rgba(103, 182, 255, 0.4)",
            borderRadius: "9999px",
            padding: "8px 24px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#99cbff",
              textTransform: "uppercase",
            }}
          >
            FOOD DISCOVERY APP • SAIGON
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            textAlign: "center",
            letterSpacing: "-1.5px",
            maxWidth: "960px",
            marginBottom: "20px",
          }}
        >
          <span>Stop Overthinking. Start Craving.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#c8daff",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "820px",
            marginBottom: "36px",
          }}
        >
          <span>
            Ứng dụng khám phá món ăn và quán ăn ngon gần bạn. Lướt swipe món ngon,
            quay vòng xoay ngẫu nhiên Decider Wheel và định vị ẩm thực cùng CRAVE.
          </span>
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffffff",
              color: "#001e34",
              fontWeight: 700,
              fontSize: "16px",
              padding: "12px 28px",
              borderRadius: "9999px",
            }}
          >
            Available on iOS & Android
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            5,000+ Curated Spots
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
