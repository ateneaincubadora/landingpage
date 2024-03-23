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
  metadataBase: new URL("http://www.ateneaincubadora.com"),
  title: "Atenea - Incubadora",
  icons: {
    icon: "/assets/favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  description:
    "Incubadora Atenea : Emprender con valores y el foco bien puesto - Ubicada en Rosario - Email: atenea.incubadora@gmail.com - Teléfono : +54 9 3462 33-0972",
  openGraph: {
    images: "/assets/opengraph-image.png",
    siteName: "Atenea",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      "max-video-preview": -1,
    },
  },
  keywords: [
    "incubadora de negocios",
    "emprendimiento",
    "startups",
    "asesoramiento empresarial",
    "mentores de negocios",
    "innovación empresarial",
    "aceleradora de empresas",
    "apoyo a emprendedores",
    "desarrollo de negocios",
    "fomento empresarial",
  ],
  publisher: "Atenea Incubadora",
  authors: [
    {
      name: "Atenea Incubadora",
      url: "https://www.instagram.com/atenea.incubadora",
    },
  ],
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
