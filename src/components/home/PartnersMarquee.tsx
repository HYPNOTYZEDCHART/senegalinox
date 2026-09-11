import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building } from "lucide-react";
import { PARTNERS_DATA } from "@/data/partners";

export function PartnersMarquee() {
  // Liste des partenaires pour le bandeau défilant (doublée pour la boucle infinie)
  const marqueeList = [...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-steel overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>Ils nous font confiance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
              Donneurs d&apos;ordres & Partenaires Industriels
            </h2>
          </div>

          <Link
            href="/nos-references"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
          >
            <span>Voir toutes les références par secteur</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Conteneur du Marquee avec dégradés de fondu sur les bords */}
      <div className="relative w-full overflow-hidden py-4 bg-slate-light/60 border-y border-steel/60">
        {/* Masques de dégradé gauche et droite */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee en continu */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {marqueeList.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white border border-steel/80 shadow-xs hover:shadow-md hover:border-brand-blue/30 transition-all flex-shrink-0 cursor-default"
            >
              {partner.logo ? (
                <div className="h-9 w-32 relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black text-slate-700">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-dark whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider whitespace-nowrap">
                  {partner.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
