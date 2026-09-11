"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  DraftingCompass,
  ShieldCheck,
  HardHat,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

const CORE_SERVICES = [
  {
    id: "etude-conception",
    num: "01",
    title: "ETUDE ET CONCEPTION",
    badge: "Ingénierie & DAO",
    icon: DraftingCompass,
    colorScheme: "green",
    description:
      "Nos équipes d'ingénierie expérimentées réalisent des études approfondies pour comprendre vos besoins spécifiques. La conception sur mesure garantit une solution parfaitement adaptée aux tissus industriels, intégrant les dernières technologies et normes de qualité.",
  },
  {
    id: "fabrication-qualite",
    num: "02",
    title: "FABRICATION DE QUALITE",
    badge: "Normes ISO & QHSE",
    icon: ShieldCheck,
    colorScheme: "blue",
    description:
      "Nous assurons une fabrication précise et efficace, garantissant une intégrité structurelle, une durabilité exceptionnelle et une sécurité optimale respectant les normes QHSE.",
  },
  {
    id: "mise-a-disposition",
    num: "03",
    title: "MISE A DISPOSITION DE PERSONNEL",
    badge: "Compagnons qualifiés",
    icon: HardHat,
    colorScheme: "green",
    description:
      "En plus de nos produits, nous offrons la possibilité de mettre à votre disposition du personnel qualifié dans les domaines de la chaudronnerie, de la tuyauterie et de la mécanique pour installer, superviser, assurer la maintenance préventive de vos installations.",
  },
  {
    id: "installation-montage",
    num: "04",
    title: "INSTALLATION ET MONTAGE",
    badge: "Chantiers & Usines",
    icon: Wrench,
    colorScheme: "blue",
    description:
      "La mise en œuvre de nos solutions intègre une approche QHSE cohérente assurant une installation en toute sécurité et un montage conforme aux normes les plus strictes. La sécurité de nos collaborateurs et celle de nos clients demeurent une priorité absolue.",
  },
];

export function NosServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-slate-light/60 border-b border-steel scroll-mt-20 overflow-hidden relative"
    >
      {/* Motif technique filigrane discret */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* COLONNE GAUCHE (5 cols) : PHOTO DE L'ARTISAN AVEC ÉTINCELLES & CADRE INDUSTRIEL MODERNE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: MECHANICAL_EASE }}
            className="lg:col-span-5 h-full flex flex-col justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#141923] via-[#0E1219] to-[#07090D] border border-steel/20 shadow-2xl group">
              {/* Badge flottant supérieur en verre dépoli */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#8DBF21] animate-pulse" />
                  <span>Compagnons Qualifiés</span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                  Atelier & Chantier
                </span>
              </div>

              {/* Photo du chaudronnier métallurgiste avec écusson officiel Sénégal Inox */}
              <div className="relative w-full aspect-[1024/942] sm:min-h-[460px] lg:min-h-[540px]">
                <Image
                  src="/images/services-artisan.jpg"
                  alt="Chaudronnier métallurgiste Sénégal Inox meulage et découpe de métaux"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 select-none"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

                {/* Dégradé d'intégration soyeux vers le bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/25 to-transparent pointer-events-none" />
              </div>

              {/* Encart incrusté au bas de l'image */}
              <div className="absolute bottom-4 inset-x-4 z-20 p-4 rounded-2xl bg-dark/85 backdrop-blur-md border border-white/15 text-white shadow-xl space-y-1.5">
                <div className="flex items-center gap-2 text-[#8DBF21] font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Maîtrise du Geste & Finition Métallique</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Chaudronnerie de haute précision, meulage, soudage TIG / MIG et préparation d&apos;ensembles mécano-soudés à Dakar.
                </p>
              </div>

            </div>
          </motion.div>

          {/* COLONNE DROITE (7 cols) : EN-TÊTE ET GRILLE DES 4 SERVICES CLÉS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Titre "NOS SERVICES" inspiré du site d'origine avec code graphique moderne */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: MECHANICAL_EASE }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DBF21]">
                <span className="w-6 h-0.5 bg-[#8DBF21]" />
                <span>Prestations & Solutions Métallurgiques</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-dark uppercase leading-tight">
                NOS SERVICES
              </h2>

              {/* Trait de soulignement moderne vert & bleu du logo */}
              <div className="flex items-center gap-1.5 pt-0.5">
                <div className="w-14 h-1 bg-[#8DBF21] rounded-full" />
                <div className="w-4 h-1 bg-[#0082C1] rounded-full" />
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl pt-1">
                Une prise en charge intégrale de vos projets métallurgiques, de l&apos;étude préliminaire en bureau d&apos;ingénierie jusqu&apos;à l&apos;installation sur site et la maintenance industrielle.
              </p>
            </motion.div>

            {/* Grille 2x2 des 4 services avec design épuré, icônes modernes et animations de gauche à droite */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {CORE_SERVICES.map((service, idx) => {
                const IconComponent = service.icon;
                const isGreen = service.colorScheme === "green";

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 * (idx + 1),
                      ease: MECHANICAL_EASE,
                    }}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-steel hover:border-[#8DBF21]/60 shadow-2xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      {/* En-tête de la carte : Icône stylée + Numérotation */}
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                            isGreen
                              ? "bg-[#8DBF21]/15 text-[#79A718] border border-[#8DBF21]/30"
                              : "bg-[#0082C1]/15 text-[#0082C1] border border-[#0082C1]/30"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-light border border-steel text-slate-500">
                            {service.badge}
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-dark transition-colors">
                            {service.num}
                          </span>
                        </div>
                      </div>

                      {/* Titre du service en majuscules franches */}
                      <h3 className="font-extrabold text-sm sm:text-base text-dark group-hover:text-brand-blue transition-colors tracking-tight">
                        {service.title}
                      </h3>

                      {/* Descriptif officiel authentique */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Liseré discret d'action */}
                    <div className="pt-4 mt-4 border-t border-steel/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-brand-blue transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8DBF21]" />
                        <span>Savoir-faire garanti</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bouton de contact direct pour chiffrer un service */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.45, ease: MECHANICAL_EASE }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8DBF21] hover:bg-[#79A718] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-98 group"
              >
                <span>Demander une étude personnalisée</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/nos-references"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-light text-dark font-bold text-sm border border-steel hover:border-steel/80 transition-all"
              >
                <span>Voir nos références clients</span>
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
