"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Layers,
  FileCheck2,
  Building,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { companyData } from "@/data/company";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

export function CompanyStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-steel overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE ÉPURÉ DE LA SECTION CHIFFRES */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DBF21] mb-2">
            <span className="w-6 h-0.5 bg-[#8DBF21]" />
            <span>Repères & Chiffres Clés</span>
            <span className="w-6 h-0.5 bg-[#8DBF21]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-dark tracking-tight uppercase">
            Une trajectoire d&apos;excellence industrielle
          </h3>
        </div>

        {/* AXE VERTICAL VERT AU MILIEU AVEC DISPOSITION : 2003 (GAUCHE) / 206 (DROITE) / 870 (GAUCHE) */}
        <div className="relative max-w-5xl mx-auto mb-20 sm:mb-28 py-4">
          
          {/* Fine ligne verte officielle de 2px centrée au milieu */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-[#8DBF21] shadow-[0_0_10px_rgba(141,191,33,0.35)]" />

          <div className="space-y-16 sm:space-y-24">
            
            {/* 1. ÉTAPE 2003 - STRICTEMENT À GAUCHE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: MECHANICAL_EASE }}
              className="relative flex items-center"
            >
              {/* Colonne Gauche (fond invisible, typographie haute précision) */}
              <div className="w-1/2 pr-6 sm:pr-12 md:pr-16 text-right flex flex-col items-end">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-dark tracking-tight leading-none">
                  {companyData.stats.foundationYear}
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8DBF21] mt-2 mb-3">
                  <span>Année de Création</span>
                  <Calendar className="w-4 h-4 text-[#8DBF21]" />
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-md font-normal">
                  Plus de 20 ans de présence continue, d&apos;investissements technologiques et de transmission de savoir-faire métallurgique au Sénégal.
                </p>
              </div>

              {/* Point d'ancrage central sur la ligne verte */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-white border-2 border-[#8DBF21] flex items-center justify-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#8DBF21]" />
              </div>

              {/* Espace libre à droite */}
              <div className="w-1/2 pl-6 sm:pl-12 md:pl-16" />
            </motion.div>

            {/* 2. ÉTAPE 206 - STRICTEMENT À DROITE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: MECHANICAL_EASE }}
              className="relative flex items-center"
            >
              {/* Espace libre à gauche */}
              <div className="w-1/2 pr-6 sm:pr-12 md:pr-16" />

              {/* Point d'ancrage central sur la ligne verte */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-white border-2 border-[#8DBF21] flex items-center justify-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#8DBF21]" />
              </div>

              {/* Colonne Droite (fond invisible, typographie haute précision) */}
              <div className="w-1/2 pl-6 sm:pl-12 md:pl-16 text-left flex flex-col items-start">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-dark tracking-tight leading-none">
                  {companyData.stats.projectsCount}
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082C1] mt-2 mb-3">
                  <Layers className="w-4 h-4 text-[#0082C1]" />
                  <span>Projets Majeurs Livrés</span>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-md font-normal">
                  Infrastructures pétrolières, usines chimiques, cimenteries, navires et complexes hôteliers de renommée internationale.
                </p>
              </div>
            </motion.div>

            {/* 3. ÉTAPE 870 - STRICTEMENT À GAUCHE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: MECHANICAL_EASE }}
              className="relative flex items-center"
            >
              {/* Colonne Gauche (fond invisible, typographie haute précision) */}
              <div className="w-1/2 pr-6 sm:pr-12 md:pr-16 text-right flex flex-col items-end">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-dark tracking-tight leading-none">
                  {companyData.stats.contractsCount}
                </div>

                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8DBF21] mt-2 mb-3">
                  <span>Contrats Exécutés</span>
                  <FileCheck2 className="w-4 h-4 text-[#8DBF21]" />
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-md font-normal">
                  Missions de fabrication, maintenance d&apos;arrêt d&apos;usines, préfabrication de spools et travaux maritimes d&apos;urgence.
                </p>
              </div>

              {/* Point d'ancrage central sur la ligne verte */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-white border-2 border-[#8DBF21] flex items-center justify-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#8DBF21]" />
              </div>

              {/* Espace libre à droite */}
              <div className="w-1/2 pl-6 sm:pl-12 md:pl-16" />
            </motion.div>

          </div>
        </div>

        {/* IMPLANTATIONS : BUREAU BOURGUIBA & ATELIER COLOBANE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: MECHANICAL_EASE }}
          className="bg-slate-light rounded-2xl border border-steel p-8 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Infrastructures & Moyens Industriels
              </span>
              <h3 className="text-2xl font-bold text-dark">
                Une synergie parfaite entre ingénierie d&apos;études et puissance d&apos;atelier
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pour répondre aux exigences des plus grands projets nationaux et régionaux, Sénégal Inox s&apos;appuie sur deux implantations stratégiques à Dakar :
              </p>
              
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Bureau technique & direction à Bourguiba :</strong> Chiffrages, études de faisabilité, préparation des dossiers constructifs et coordination de chantiers.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Atelier lourd à Colobane (Rocade Fann Bel Air) :</strong> Zone de débit, bancs d&apos;oxycoupage et plasma, rouleuses fortes épaisseurs, cabines de soudage TIG/MIG et bancs d&apos;épreuve.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Carte Bureau */}
              <div className="p-5 rounded-xl bg-white border border-steel space-y-2 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-dark text-sm">Bureau Commercial & Administratif</h4>
                <p className="text-xs text-slate-600">
                  {companyData.locations.bureau.address}, {companyData.locations.bureau.city}
                </p>
                <div className="text-[11px] font-mono text-brand-blue font-semibold pt-1">
                  Plus Code : {companyData.locations.bureau.plusCode}
                </div>
              </div>

              {/* Carte Atelier */}
              <div className="p-5 rounded-xl bg-white border border-steel space-y-2 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-dark text-sm">Atelier Chaudronnerie & Usinage</h4>
                <p className="text-xs text-slate-600">
                  {companyData.locations.atelier.address}, {companyData.locations.atelier.city}
                </p>
                <div className="text-[11px] font-semibold text-brand-green pt-1">
                  Accès direct rocade portuaire
                </div>
              </div>

              <div className="sm:col-span-2 pt-2">
                <Link
                  href="/nos-references"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
                >
                  <span>Découvrir la liste de nos partenaires et clients institutionnels</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
