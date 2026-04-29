import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCZ Capital — TikTok Growth Agency",
  description:
    "Full-stack TikTok marketing agency. Ads, TikTok Shop, Smart+, GMV Max, pixel tracking, MMP integration, and custom dev work — all under one roof.",
  keywords: "TikTok ads, TikTok Shop, GMV Max, Smart+, MMP, SKAN, pixel tracking, marketing agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
