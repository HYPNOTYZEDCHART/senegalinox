import React from "react";
import type { Metadata } from "next";
import { HistoricalReferences } from "@/components/references/HistoricalReferences";
import { ReferencesGrid } from "@/components/references/ReferencesGrid";

export const metadata: Metadata = {
  title: "Nos Références & Chantiers Navals | Sénégal Inox Tech & Services",
  description: "Découvrez les références et constructions navales de Sénégal Inox et Pierre EON : navires jusqu'à 42 m, hydroglisseurs, catamarans, et interventions pour la marine sénégalaise et française.",
};

export default function ReferencesPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Page authentique de références avec animations et textes originaux */}
      <HistoricalReferences />

      {/* 2. Donateurs d'ordres & partenaires catégorisés */}
      <section className="py-16 sm:py-24 bg-slate-light border-t border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Écosystème B2B & Grands Comptes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
              Donneurs d&apos;Ordres & Partenaires
            </h2>
            <p className="text-sm text-slate-600">
              Multinationales de l&apos;énergie, armateurs maritimes offshore et administrations publiques sénégalaises.
            </p>
          </div>

          <ReferencesGrid />
        </div>
      </section>
    </div>
  );
}
