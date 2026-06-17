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

export const metadata: Metadata = {
  title: "Maison Noire",
  description:
    "Coleção Outono Inverno 2026 inspirada nas paisagens do norte da Itália.",
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
