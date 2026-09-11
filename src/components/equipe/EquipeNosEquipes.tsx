"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ShieldCheck, Award, Wrench } from "lucide-react";
import { MECHANICAL_EASE, TextMaskReveal } from "@/components/ui/MaskReveal";

export function EquipeNosEquipes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Effet de parallaxe continue au scroll pour une sensation de profondeur industrielle
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoParallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-white border-b border-steel overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Colonne Gauche : Titre avec Overflow Mask & Révélation cadencée du texte */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: MECHANICAL_EASE }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue"
            >
              <span className="w-6 h-0.5 bg-brand-blue" />
              <span>Atelier & Compagnons</span>
            </motion.div>

            <TextMaskReveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-dark tracking-tight uppercase leading-tight">
                Nos équipes
              </h2>
            </TextMaskReveal>

            {/* Photo visible sur mobile / tablette avec animation de découpage */}
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0.9 }}
              animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}}
              transition={{ duration: 0.95, ease: MECHANICAL_EASE }}
              className="lg:hidden relative w-full aspect-[900/1024] rounded-2xl overflow-hidden border border-steel shadow-xl my-4"
            >
              <Image
                src="/images/equipe/atelier-controle.jpg"
                alt="Technicien qualifié effectuant un contrôle dimensionnel en atelier de fabrication - Sénégal Inox"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>

            {/* Paragraphes avec décalage progressif de gauche à droite */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08, ease: MECHANICAL_EASE }}
              >
                Nos équipes de soudeurs qualifiés réalisent un travail de précision pour fabriquer vos assemblages mécano soudés complexes ou de petites et moyennes séries.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.16, ease: MECHANICAL_EASE }}
              >
                Pour les travaux de soudage sur des éléments lourds ou des pièces de grandes tailles à produire en série, la société est équipée de deux lignes de soudage pour vous garantir réactivité, productivité et prix.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.24, ease: MECHANICAL_EASE }}
              >
                Nous travaillons à partir de vos plans ou notre bureau d’étude peut dessiner vos pièces, structures mécanos-soudées ou châssis métalliques, intégrer les étapes de découpes laser et pliages nécessaires en fonction des matériaux choisis et de l’épaisseurs des tôles.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.32, ease: MECHANICAL_EASE }}
              >
                Nos compagnons passent régulièrement des qualifications de soudeurs selon les normes afin de justifier de leurs compétences en soudage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.4, ease: MECHANICAL_EASE }}
                className="p-4 rounded-xl bg-slate-light border border-steel text-dark font-medium"
              >
                <strong className="text-brand-blue font-bold">SENEGAL INOX</strong> dispose aussi de DMOS, QMOS, et ANAM (Agence Nationale des Affaires Maritimes) permettant de valider les modes opératoires de soudage.
              </motion.div>
            </div>

            {/* Badges de qualifications & certifications animés de gauche à droite */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.48, ease: MECHANICAL_EASE }}
              className="pt-2 flex flex-wrap gap-2 text-xs font-bold"
            >
              <span className="px-3 py-1.5 rounded-lg bg-slate-light border border-steel text-dark flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                <span>DMOS & QMOS Certifiés</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-light border border-steel text-dark flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-blue" />
                <span>Agréé ANAM (Affaires Maritimes)</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-light border border-steel text-dark flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-brand-green" />
                <span>2 Lignes de Soudage</span>
              </span>
            </motion.div>
          </div>

          {/* Colonne Droite (Desktop) : Glissement depuis la gauche avec ouverture de gauche à droite */}
          <div className="hidden lg:flex lg:col-span-5 h-full">
            <motion.div
              style={{ y: photoParallaxY }}
              initial={{ opacity: 0, x: -50, clipPath: "inset(0% 100% 0% 0%)" }}
              animate={isInView ? { opacity: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)" } : {}}
              transition={{ duration: 0.95, ease: MECHANICAL_EASE, delay: 0.2 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-steel bg-slate-100 group"
            >
              <Image
                src="/images/equipe/atelier-controle.jpg"
                alt="Technicien qualifié effectuant un contrôle dimensionnel en atelier de fabrication - Sénégal Inox"
                width={900}
                height={1024}
                priority
                quality={95}
                className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="420px"
              />

              {/* Reflet lumineux subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />

              {/* Badge d'excellence technique incrusté */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-dark/85 backdrop-blur-md border border-white/10 text-white flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide uppercase">
                    Précision & Contrôle Qualité
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Rigueur millimétrique sur chaque assemblage
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
