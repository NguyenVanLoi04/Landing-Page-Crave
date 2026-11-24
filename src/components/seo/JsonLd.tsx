export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crave.io.vn";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "CRAVE",
    alternateName: ["CRAVE App", "Crave Food Discovery"],
    url: baseUrl,
    description:
      "CRAVE là ứng dụng khám phá món ăn và quán ăn ngon gần bạn tại Sài Gòn. Tìm kiếm địa điểm ăn uống với vòng xoay Decider Wheel và lướt món ăn Swipe.",
    inLanguage: ["vi", "en"],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "CRAVE",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/crave-logo.png`,
      caption: "CRAVE Logo",
    },
    sameAs: [
      "https://facebook.com/crave.io.vn",
      "https://instagram.com/crave.io.vn",
      "https://twitter.com/craveapp",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@crave.io.vn",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${baseUrl}/#application`,
    name: "CRAVE - Food Discovery",
    alternateName: "CRAVE App",
    applicationCategory: "Food & Drink Application",
    operatingSystem: "iOS, Android",
    installUrl: `${baseUrl}/#download`,
    downloadUrl: `${baseUrl}/#download`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "5200",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Swipe to Savor: Lướt thẻ món ăn trực quan chọn món yêu thích",
      "The Crave Wheel: Vòng xoay ngẫu nhiên giải quyết phân vân hôm nay ăn gì",
      "Neighborhood Food Radar: Bản đồ quét các quán ăn ngon quanh bạn dưới 1km",
      "Taste Playlists & Vault: Lưu bộ sưu tập quán ăn theo gu",
    ],
    screenshot: `${baseUrl}/assets/hero-dish-pho.png`,
    author: {
      "@type": "Organization",
      name: "CRAVE Team",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
