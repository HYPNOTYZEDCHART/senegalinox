"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Flame,
  Building2,
  Pipette,
  Anchor,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";
import { REALISATIONS_DATA } from "@/data/realisations";
import { TextMaskReveal, MECHANICAL_EASE } from "@/components/ui/MaskReveal";

const ICONS_MAP: Record<string, React.ReactNode> = {
  chaudronnerie: <Flame className="w-5 h-5 text-brand-blue" />,
  "charpente-metallique": <Building2 className="w-5 h-5 text-brand-blue" />,
  "tuyauterie-industrielle": <Pipette className="w-5 h-5 text-brand-blue" />,
  "construction-reparation-navale": <Anchor className="w-5 h-5 text-brand-blue" />,
  "decoration-haut-standing": <Sparkles className="w-5 h-5 text-brand-blue" />,
};

interface PoleItemProps {
  pole: typeof REALISATIONS_DATA[0];
  index: number;
  onVisible: (index: number) => void;
  isActive: boolean;
}

function PoleBlock({ pole, index, onVisible, isActive }: PoleItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // Déclenchement quand le bloc traverse le centre du viewport
  });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  return (
    <motion.div
      ref={ref}
      id={`pole-${pole.slug}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: MECHANICAL_EASE }}
      className={`relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
        isActive
          ? "bg-white border-brand-blue/50 shadow-xl ring-1 ring-brand-blue/20"
          : "bg-slate-light/60 border-steel hover:border-steel/80"
      }`}
    >
      {/* Numéro & En-tête */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="inline-flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white border border-steel flex items-center justify-center shadow-xs">
            {ICONS_MAP[pole.slug] || <Flame className="w-5 h-5 text-brand-blue" />}
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Pôle #{index + 1}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-light border border-steel text-[11px] font-bold text-dark">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          <span>Normé ISO / ASME</span>
        </div>
      </div>

      {/* Titre */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight mb-3">
        {pole.title}
      </h3>

      {/* Image sur mobile uniquement */}
      <div className="lg:hidden relative h-56 w-full rounded-xl overflow-hidden mb-5 border border-steel">
        <Image
          src={pole.heroImage}
          alt={pole.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
        {pole.shortDescription}
      </p>

      {/* Capacités techniques clés */}
      <div className="space-y-2 mb-6 border-t border-steel/60 pt-4">
        <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-2">
          Capacités & Applications :
        </div>
        {pole.keyCapabilities.slice(0, 3).map((cap, i) => (
          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
            <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
            <span>{cap}</span>
          </div>
        ))}
      </div>

      {/* Spécifications & Matériaux */}
      <div className="flex flex-wrap gap-2 mb-6">
        {pole.specs.slice(0, 2).map((spec, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-steel text-xs font-medium text-slate-700"
          >
            <Layers className="w-3.5 h-3.5 text-brand-blue" />
            <span>{spec.value.split(",")[0]}</span>
          </span>
        ))}
      </div>

      {/* Bouton d'accès au pôle */}
      <Link
        href={`/realisations/${pole.slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors group"
      >
        <span>Explorer ce pôle d&apos;expertise</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activePoleIndex, setActivePoleIndex] = useState(0);
  const activePole = REALISATIONS_DATA[activePoleIndex] || REALISATIONS_DATA[0];

  return (
    <section id="poles" className="py-20 sm:py-28 bg-white scroll-mt-20 border-b border-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec TextMaskReveal chirurgical */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green mb-3">
              <span className="w-6 h-0.5 bg-brand-green" />
              <span>Nos Activités Industrielles</span>
            </div>
            
            <TextMaskReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight leading-tight">
                5 Pôles d&apos;expertise métallurgique de haute précision
              </h2>
            </TextMaskReveal>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              De la fabrication sur plan en atelier jusqu&apos;au montage et aux interventions d&apos;urgence sur site ou au large du port de Dakar, nos départements techniques répondent aux cahiers des charges les plus sévères.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-light hover:bg-steel/60 text-dark text-sm font-bold border border-steel transition-colors flex-shrink-0"
          >
            <span>Soumettre un cahier des charges</span>
            <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
        </div>

        {/* 1. ARCHITECTURE STICKY SCROLL-PINNING AVEC TRANSITION D'IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Colonne gauche (col-span-7) : Défilement naturel des 5 fiches */}
          <div className="lg:col-span-7 space-y-10">
            {REALISATIONS_DATA.map((pole, index) => (
              <PoleBlock
                key={pole.slug}
                pole={pole}
                index={index}
                isActive={activePoleIndex === index}
                onVisible={setActivePoleIndex}
              />
            ))}
          </div>

          {/* Colonne droite (col-span-5) : PINNED STICKY TOP-28 avec Morphing d'image & Glissement de gauche à droite */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: MECHANICAL_EASE }}
            className="hidden lg:block lg:col-span-5 sticky top-28"
          >
            <div className="relative rounded-3xl overflow-hidden border border-steel bg-slate-light shadow-2xl">
              
              {/* Image d'illustration avec fondu fluide & découpage géométrique */}
              <div className="relative h-[480px] w-full bg-dark overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePole.slug}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.65, ease: MECHANICAL_EASE }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activePole.heroImage}
                      alt={activePole.title}
                      fill
                      quality={95}
                      unoptimized={true}
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Badge supérieur de localisation / Pôle */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span>PÔLE 0{activePoleIndex + 1} / 05</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Atelier Colobane
                  </span>
                </div>

                {/* Cartouche technique inférieur synchronisé */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue">
                      Spécifications de référence
                    </span>
                    <h4 className="text-base font-extrabold text-dark leading-tight line-clamp-1">
                      {activePole.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-steel pt-2.5">
                    <div>
                      <span className="text-slate-400 block font-medium">Alliages :</span>
                      <span className="font-bold text-dark line-clamp-1">
                        {activePole.specs[0]?.value.split(",")[0] || "Inox 316L / Acier"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Normes :</span>
                      <span className="font-bold text-brand-green line-clamp-1">
                        {activePole.standards[0]?.split("(")[0] || "Certifié"}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/realisations/${activePole.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#0082C1] hover:bg-[#006EA6] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Voir les chantiers de ce pôle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

              {/* Barre d'avancement des 5 pôles */}
              <div className="p-4 bg-white border-t border-steel flex items-center justify-between gap-2">
                {REALISATIONS_DATA.map((pole, idx) => (
                  <button
                    key={pole.slug}
                    onClick={() => {
                      setActivePoleIndex(idx);
                      const el = document.getElementById(`pole-${pole.slug}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    aria-label={`Aller au pôle ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activePoleIndex === idx
                        ? "flex-1 bg-brand-blue"
                        : "w-8 bg-steel hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
