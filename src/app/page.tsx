import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { NosServicesSection } from "@/components/home/NosServicesSection";
import { CompanyStatsSection } from "@/components/home/CompanyStatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { QhseSection } from "@/components/home/QhseSection";
import { MagneticProjectList } from "@/components/home/MagneticProjectList";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section B2B lourd avec Scale-Down & Typography Layering */}
      <HeroSection />

      {/* 2. Présentation "Qui sommes-nous" & Bouton L'ÉQUIPE */}
      <AboutSection />

      {/* 3. NOS SERVICES : Artisan à gauche & 4 Services clés à droite (Inspiré du site d'origine) */}
      <NosServicesSection />

      {/* 4. NOTRE ENGAGEMENT QHSE : Image de soudure en fond avec Qualité, Hygiène & Sécurité, Environnement au-dessus */}
      <QhseSection />

      {/* 5. Chiffres clés (2003, 206 projets, 870 contrats) & Implantations Dakar */}
      <CompanyStatsSection />

      {/* 6. Nos 5 Pôles Industriels en Sticky Scroll-Pinning (Apple / Awwwards standard) */}
      <ServicesSection />

      {/* 7. Chantiers Majeurs avec "Hover Image Follower" Magnétique */}
      <MagneticProjectList />

      {/* 8. Carrousel infini fluide des partenaires & clients */}
      <PartnersMarquee />

      {/* 9. Section Contact & Chiffrage (#contact) */}
      <ContactSection />
    </div>
  );
}
