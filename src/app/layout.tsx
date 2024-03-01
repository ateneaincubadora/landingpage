import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

import "./globals.css";

// Styles Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export const metadata: Metadata = {
  metadataBase: new URL("https://atenea-landig-page.vercel.app"),
  title: "Atenea - Incubadora",
  description: "Atenea incubadora.",
  openGraph: {
    images: "/assets/opengraph-image.png",
    siteName: "Atenea",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </html>
  );
}
