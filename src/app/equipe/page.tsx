import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowLeft, ArrowRight } from "lucide-react";
import { EquipeHeroBanner } from "@/components/equipe/EquipeHeroBanner";
import { EquipeNosEquipes } from "@/components/equipe/EquipeNosEquipes";
import { CertificationsSection } from "@/components/equipe/CertificationsSection";

export const metadata: Metadata = {
  title: "L'Équipe | Sénégal Inox Tech & Services",
  description: "Découvrez les équipes de soudeurs qualifiés, chaudronniers et techniciens certifiés de Sénégal Inox.",
};

export default function EquipePage() {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* BOUTON RETOUR À L'ACCUEIL */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-brand-blue" />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </div>

      {/* EN-TÊTE & BANNIÈRE ANIMÉS DE GAUCHE À DROITE */}
      <EquipeHeroBanner />

      {/* 2. SECTION ANIMÉE : NOS ÉQUIPES (PARALLAXE & CLIP-PATH REVEAL) */}
      <EquipeNosEquipes />

      {/* 3. SECTION : NOS CERTIFICATIONS & RÉFÉRENCES (MODALE PLEIN ÉCRAN / LIGHTBOX) */}
      <CertificationsSection />

      {/* 3. APPEL À L'ACTION : CONTACT DIRECT */}
      <section className="py-12 bg-slate-light border-b border-steel">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-dark">
              Un projet spécifique à soumettre à nos équipes ?
            </h3>
            <p className="text-sm text-slate-600">
              Nos ingénieurs et chargés d&apos;affaires étudient vos plans et spécifications sous 24h ouvrées.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <span>Demander une étude technique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
