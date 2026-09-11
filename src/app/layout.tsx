import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sénégal Inox Tech & Services | Chaudronnerie, Tuyauterie & Charpente Industrielle",
  description: "Leader des travaux industriels au Sénégal depuis 2003 : chaudronnerie lourde, tuyauterie industrielle, charpente métallique, réparation navale et décoration haut standing.",
  keywords: [
    "Sénégal Inox",
    "Chaudronnerie Sénégal",
    "Tuyauterie industrielle Dakar",
    "Charpente métallique Sénégal",
    "Réparation navale port de Dakar",
    "Inox 316L",
    "Métallurgie Dakar"
  ],
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

