"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";
import {
  Building2,
  Shield,
  Landmark,
  Hotel,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";
import { PARTNERS_DATA, SECTORS } from "@/data/partners";
import { SectorCategory } from "@/types";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "energie-btp-maritime": <Building2 className="w-4 h-4 text-brand-blue" />,
  institutions: <Shield className="w-4 h-4 text-brand-green" />,
  "banques-finance": <Landmark className="w-4 h-4 text-brand-blue" />,
  "hotellerie-luxe": <Hotel className="w-4 h-4 text-brand-green" />,
};

export function ReferencesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<SectorCategory | "all">("all");

  const filteredPartners = selectedCategory === "all"
    ? PARTNERS_DATA
    : PARTNERS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Barre de filtrage par secteurs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-light rounded-xl border border-steel max-w-4xl mx-auto">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            selectedCategory === "all"
              ? "bg-dark text-white shadow-sm"
              : "text-slate-600 hover:text-dark hover:bg-white/80"
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Tous les partenaires ({PARTNERS_DATA.length})</span>
        </button>

        {SECTORS.map((sector) => {
          const count = PARTNERS_DATA.filter((p) => p.category === sector.id).length;
          const isSelected = selectedCategory === sector.id;
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setSelectedCategory(sector.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-slate-600 hover:text-dark hover:bg-white/80"
              }`}
            >
              {CATEGORY_ICONS[sector.id]}
              <span>{sector.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? "bg-white/20 text-white" : "bg-steel text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grille des Références */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPartners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: MECHANICAL_EASE }}
            className="bg-white rounded-xl border border-steel p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-blue/40 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {partner.logo ? (
                  <div className="h-10 w-36 relative flex items-center justify-start">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="144px"
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-slate-light border border-steel/60 flex items-center justify-center font-black text-sm text-dark group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {partner.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Conforme</span>
                </span>
              </div>

              <h3 className="font-bold text-base text-dark group-hover:text-brand-blue transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {partner.categoryLabel}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-steel/50 flex items-center justify-between text-[11px] text-slate-400">
              <span className="uppercase tracking-wider font-semibold">Partenaire B2B</span>
              <span className="font-mono text-slate-500">Sénégal Inox SAS</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cartouche d'appel d'offres & Consultation */}
      <div className="bg-white text-dark rounded-2xl p-8 sm:p-12 border-2 border-brand-blue/20 shadow-md">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full">
            <span>Appels d&apos;Offres & Consultations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
            Vous préparez un cahier des charges pour un marché industriel ou maritime ?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Sénégal Inox SAS dispose de toutes les habilitations, assurances décennales et attestations de conformité nécessaires pour répondre aux appels d&apos;offres nationaux et internationaux.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold transition-all shadow-md"
            >
              <span>Transmettre un dossier de consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+221771978181"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-light hover:bg-slate-100 text-dark text-sm font-semibold border border-steel transition-all"
            >
              <span>Direction commerciale (+221 77 197 81 81)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
