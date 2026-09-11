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
  Sparkles,
} from "lucide-react";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

const QHSE_PILLARS = [
  {
    id: "qualite",
    code: "Q",
    num: "01",
    title: "QUALITE",
    subtitle: "Rigueur & Conformité",
    icon: BadgeCheck,
    accentColor: "green",
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
    title: "HYGIENE ET SECURITE",
    subtitle: "Zéro Accident",
    icon: HeartHandshake,
    accentColor: "blue",
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
    title: "ENVIRONNEMENT",
    subtitle: "Éco-responsabilité",
    icon: Recycle,
    accentColor: "green",
    description:
      "SENEGAL INOX adopte des pratiques écoresponsables à travers l'utilisation responsable des ressources et la minimisation de notre impact environnemental.",
    commitments: [
      "Recyclage et valorisation des chutes de métaux",
      "Neutralisation des bains de décapage & passivation",
      "Optimisation énergétique de nos lignes d'atelier",
    ],
  },
];

export function QhseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallaxe subtile sur l'image d'arrière-plan pour une sensation de profondeur immersive
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="qhse"
      className="relative py-20 sm:py-28 text-white overflow-hidden border-b border-steel"
    >
      {/* 1. IMAGE DE FOND : SOUDURE SUR TABLE EN HAUTE DÉFINITION AVEC PARALLAXE */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-105"
      >
        <Image
          src="/images/qhse-banner.png"
          alt="Soudure industrielle et étincelles sur table métallique - Sénégal Inox QHSE"
          fill
          priority
          quality={100}
          className="object-cover object-center select-none"
          sizes="100vw"
        />

        {/* 2. OVERLAY MODERNISÉ : DÉGRADÉ INDUSTRIEL PROFOND (BLEU DE SÉNÉGAL INOX + OMBRES SOMBRES) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D18]/92 via-[#00558F]/75 to-[#070D18]/95 backdrop-brightness-[0.88]" />

        {/* Halo lumineux central simulant le reflet des étincelles métallurgiques */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,130,193,0.35)_0%,_transparent_75%)] pointer-events-none" />
      </motion.div>

      {/* Liserés subtils de finition */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      {/* 3. CONTENU QHSE EN PREMIER PLAN (AU-DESSUS DE L'IMAGE) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* En-tête : Badge, Titre & Sous-titre officiel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: MECHANICAL_EASE }}
          className="max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#8DBF21] shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#8DBF21]" />
            <span>Exigence Industrielle Certifiée</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase drop-shadow-md">
            NOTRE ENGAGEMENT QHSE
          </h2>

          {/* Liseré vert & bleu du logo */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="w-14 h-1 bg-[#8DBF21] rounded-full" />
            <div className="w-4 h-1 bg-white/60 rounded-full" />
          </div>

          <p className="pt-2 text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow max-w-2xl mx-auto">
            Chez SENEGAL INOX, nous croyons-en l&apos;excellence à toutes les étapes de nos projets.
          </p>
        </motion.div>

        {/* Grille des 3 Piliers (QUALITÉ, HYGIÈNE ET SÉCURITÉ, ENVIRONNEMENT) en cartes de verre dépoli modernes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {QHSE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isGreen = pillar.accentColor === "green";

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 * idx,
                  ease: MECHANICAL_EASE,
                }}
                className="relative rounded-3xl p-7 sm:p-8 backdrop-blur-xl bg-white/[0.10] hover:bg-white/[0.16] border border-white/20 hover:border-[#8DBF21]/60 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col justify-between text-left overflow-hidden"
              >
                {/* Reflet lumineux en arc sur le bord supérieur */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="space-y-4">
                  {/* Icône & Identification du pilier */}
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-md ${
                        isGreen
                          ? "bg-[#8DBF21]/25 text-[#8DBF21] border border-[#8DBF21]/40"
                          : "bg-sky-400/25 text-sky-300 border border-sky-400/40"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/50 block">
                        {pillar.code} • {pillar.num}
                      </span>
                      <span className="text-[11px] font-semibold text-[#8DBF21]">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Titre du pilier */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase group-hover:text-[#8DBF21] transition-colors pt-1">
                    {pillar.title}
                  </h3>

                  {/* Texte officiel authentique de l'ancien site */}
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Engagements concrets sous forme de puces techniques */}
                <div className="pt-5 mt-5 border-t border-white/15 space-y-2">
                  {pillar.commitments.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${
                          isGreen ? "text-[#8DBF21]" : "text-sky-300"
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge récapitulatif sous les cartes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: MECHANICAL_EASE }}
          className="mt-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-slate-200"
        >
          <Sparkles className="w-4 h-4 text-[#8DBF21]" />
          <span>Audits périodiques, traçabilité continue et formations certifiantes pour chaque collaborateur.</span>
        </motion.div>

      </div>
    </section>
  );
}
