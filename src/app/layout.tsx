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
  metadataBase: new URL("https://www.senegalinox.com"),
  title: {
    default: "Sénégal Inox Tech & Services | Chaudronnerie, Tuyauterie & Charpente Industrielle",
    template: "%s | Sénégal Inox Tech & Services",
  },
  description: "Leader des travaux industriels au Sénégal depuis 2003 : chaudronnerie lourde, tuyauterie industrielle, charpente métallique, réparation navale et décoration haut standing.",
  keywords: [
    "Sénégal Inox",
    "Chaudronnerie Sénégal",
    "Tuyauterie industrielle Dakar",
    "Charpente métallique Sénégal",
    "Réparation navale port de Dakar",
    "Inox 316L",
    "Métallurgie Dakar",
  ],
  authors: [{ name: "Sénégal Inox Tech & Services" }],
  creator: "creativ_tech",
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "https://www.senegalinox.com",
    siteName: "Sénégal Inox Tech & Services",
    title: "Sénégal Inox Tech & Services | Chaudronnerie, Tuyauterie & Charpente Industrielle",
    description: "Leader des travaux industriels au Sénégal depuis 2003 : chaudronnerie lourde, tuyauterie industrielle, charpente métallique, réparation navale et décoration haut standing.",
    images: [
      {
        url: "/images/qhse-banner.png",
        width: 1200,
        height: 630,
        alt: "Sénégal Inox Tech & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sénégal Inox Tech & Services",
    description: "Leader des travaux industriels au Sénégal depuis 2003 : chaudronnerie lourde, tuyauterie industrielle, charpente métallique.",
    images: ["/images/qhse-banner.png"],
  },
  alternates: {
    canonical: "/",
  },
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

