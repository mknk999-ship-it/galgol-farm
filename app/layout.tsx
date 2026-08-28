import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "갈골농원 | 국산 100% 영양고추 산지직송",
  description:
    "경북 영양에서 직접 재배하고 세척·건조한 국산 100% 영양고추. 갈골농원이 농장에서 직접 보내드립니다.",
  keywords: [
    "영양고추",
    "영양 건고추",
    "국산 고춧가루",
    "경북 영양 고추",
    "햇고추",
    "갈골농원",
    "고추 산지직송",
  ],
  openGraph: {
    title: "갈골농원 | 국산 100% 영양고추 산지직송",
    description:
      "경북 영양에서 직접 재배하고 세척·건조한 국산 100% 영양고추. 갈골농원이 농장에서 직접 보내드립니다.",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/hero-farm.webp" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
