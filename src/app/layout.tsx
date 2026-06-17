import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maison-noire.vercel.app",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Maison Noire — Outono Inverno 2026",
    template: "%s | Maison Noire",
  },
  description:
    "Landing page editorial de moda premium inspirada no norte da Itália para a coleção Maison Noire Outono Inverno 2026.",
  applicationName: "Maison Noire",
  authors: [{ name: "Leonardo Landell" }],
  creator: "Leonardo Landell",
  publisher: "Leonardo Landell",
  keywords: [
    "Maison Noire",
    "Outono Inverno 2026",
    "moda premium",
    "landing page editorial",
    "norte da Itália",
    "alfaiataria",
  ],
  openGraph: {
    title: "Maison Noire — Outono Inverno 2026",
    description:
      "Coleção editorial de moda premium inspirada pelas paisagens silenciosas do norte da Itália.",
    url: "/",
    siteName: "Maison Noire",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-maison-noire.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Noire Outono Inverno 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Noire — Outono Inverno 2026",
    description:
      "Landing page editorial de moda premium inspirada no norte da Itália.",
    images: ["/images/og-maison-noire.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <ScrollProgress />

        {children}

        <div className="global-grain" />
      </body>
    </html>
  );
}
