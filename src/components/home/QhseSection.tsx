"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BadgeCheck,
  HeartHandshake,
  Recycle,
  CheckCircle2,
  ShieldCheck,
  Award,
  FileCheck2,
  ScanEye,
  HardHat,
} from "lucide-react";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

const QHSE_PILLARS = [
  {
    id: "qualite",
    code: "Q",
    num: "01",
    tag: "CONFORMITÉ & RIGUEUR",
    title: "QUALITÉ",
    subtitle: "Précision métallurgique & Traçabilité",
    icon: BadgeCheck,
    description:
      "Nous nous engageons à maintenir des normes de qualité exceptionnelle à toutes les étapes de nos opérations garantissant ainsi la satisfaction de nos clients.",
    commitments: [
      "DMOS & QMOS certifiés et validés",
      "Contrôles non destructifs (CND) systématiques",
      "Traçabilité matière intégrale (certificats 3.1)",
    ],
  },
  {
    id: "hygiene-securite",
    code: "HS",
    num: "02",
    tag: "SÉCURITÉ & SANTÉ",
    title: "HYGIÈNE ET SÉCURITÉ",
    subtitle: "Culture Zéro Accident & Prévention",
    icon: HeartHandshake,
    description:
      "La sécurité de nos employés et de nos partenaires est au cœur de notre philosophie. Nous mettons en œuvre des pratiques sécuritaires rigoureuses pour assurer un environnement de travail sans risque.",
    commitments: [
      "Objectif Zéro Accident sur tous nos chantiers",
      "Port des EPI normés obligatoire et contrôlé",
      "Quart d'heure sécurité avant chaque prise de poste",
    ],
  },
  {
    id: "environnement",
    code: "ENV",
    num: "03",
    tag: "ÉCO-RESPONSABILITÉ",
    title: "ENVIRONNEMENT",
    subtitle: "Valorisation & Efficacité durable",
    icon: Recycle,
    description:
      "SENEGAL INOX adopte des pratiques écoresponsables à travers l'utilisation responsable des ressources et la minimisation de notre impact environnemental.",
    commitments: [
      "Recyclage et valorisation des chutes de métaux",
      "Neutralisation des bains de décapage & passivation",
      "Optimisation énergétique de nos lignes d'atelier",
    ],
  },
];

const ENGINEERING_SPECS = [
  { icon: FileCheck2, text: "Traçabilité Certificats Matière 3.1" },
  { icon: ScanEye, text: "Contrôles CND (Ressuage, Rx, US)" },
  { icon: Award, text: "DMOS & QMOS Normés EN ISO" },
  { icon: HardHat, text: "Politique Chantiers Zéro Incident" },
];

export function QhseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallaxe subtile sur l'image d'arrière-plan sans aucun néon
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section
      ref={sectionRef}
      id="qhse"
      className="relative py-20 sm:py-28 text-white overflow-hidden border-b border-steel bg-[#070D18]"
    >
      {/* 1. IMAGE DE FOND : SOUDURE SUR TABLE SANS EFFETS NÉON */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-105 pointer-events-none"
      >
        <Image
          src="/images/qhse-banner.png"
          alt="Soudure industrielle et précision sur table métallique - Sénégal Inox QHSE"
          fill
          priority
          quality={100}
          className="object-cover object-center select-none opacity-40"
          sizes="100vw"
        />

        {/* 2. DÉGRADÉ INDUSTRIEL SOMBRE ET SOBRE (SANS HALOS NÉON) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D18] via-[#004B7D]/50 to-[#070D18]" />
      </motion.div>

      {/* Lignes laser haut & bas */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      {/* 3. CONTENU ARCHITECTURAL OUVERT (PAS DE CARDS) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section sobre et institutionnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: MECHANICAL_EASE }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-[#8DBF21]">
            <ShieldCheck className="w-4 h-4 text-[#8DBF21]" />
            <span className="tracking-wide uppercase">Cadre Opérationnel & Sécurité</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            NOTRE ENGAGEMENT QHSE
          </h2>

          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="w-14 h-1 bg-[#8DBF21] rounded-full" />
            <div className="w-4 h-1 bg-white/60 rounded-full" />
          </div>

          <p className="pt-2 text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto">
            Chez SENEGAL INOX, nous croyons en l&apos;excellence à toutes les étapes de nos projets.
          </p>
        </motion.div>

        {/* 4. COLONNES ARCHITECTURALES OUVERTES D'INGÉNIERIE (SANS CARDS FERMÉES) */}
        <div className="border-y border-white/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {QHSE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 * idx,
                  ease: MECHANICAL_EASE,
                }}
                className="group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-white/[0.04]"
              >
                {/* Accent haut au survol */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-[#8DBF21] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Ligne 1 : Grand Chiffre Industriel & Tag Normatif */}
                  <div className="flex items-baseline justify-between gap-4 mb-6">
                    <span className="font-mono text-5xl sm:text-6xl font-black tracking-tighter text-white/20 group-hover:text-[#8DBF21] transition-colors duration-300 select-none">
                      {pillar.num}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8DBF21] bg-[#8DBF21]/10 px-2.5 py-1 rounded border border-[#8DBF21]/20">
                      {pillar.code} • {pillar.tag}
                    </span>
                  </div>

                  {/* Liseré laser dynamique */}
                  <div className="w-10 h-0.5 bg-[#8DBF21]/40 group-hover:w-20 group-hover:bg-[#8DBF21] transition-all duration-300 mb-6" />

                  {/* Ligne 2 : Titre du Pilier */}
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-[#8DBF21] flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Texte officiel authentique */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Section inférieure : Spécifications et contrôles */}
                <div className="pt-6 mt-8 border-t border-white/10 space-y-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Spécifications & Contrôles
                  </div>
                  {pillar.commitments.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#8DBF21] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 5. BANDEAU DE SPÉCIFICATIONS TECHNIQUES EN PIED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: MECHANICAL_EASE }}
          className="mt-10 py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300"
        >
          {ENGINEERING_SPECS.map((spec, i) => {
            const SpecIcon = spec.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <SpecIcon className="w-4 h-4 text-[#8DBF21] flex-shrink-0" />
                <span className="font-medium tracking-wide">{spec.text}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
