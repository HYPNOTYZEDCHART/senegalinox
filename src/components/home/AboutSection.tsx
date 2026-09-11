"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { MECHANICAL_EASE, TextMaskReveal } from "@/components/ui/MaskReveal";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Interaction continue au scroll (parallaxe soyeuse entre texte et photo sur desktop)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoParallaxY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className="py-16 sm:py-24 bg-white border-b border-steel scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION QUI SOMMES NOUS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Colonne Principale (Desktop: 7 cols / Mobile: 100%) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <TextMaskReveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-dark tracking-tight uppercase leading-tight">
                QUI SOMMES NOUS ?
              </h2>
            </TextMaskReveal>

            {/* 1. LE TEXTE S'AFFICHE EN PREMIER (SUR MOBILE COMME SUR DESKTOP) */}
            <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08, ease: MECHANICAL_EASE }}
              >
                Forte d&apos;une expertise reconnue dans la chaudronnerie, la tuyauterie, la construction de structure métallique, la construction et réparation navale, ainsi que la décoration de haut standing, Sénégal inox est une entreprise spécialisée dans le domaine industriel, commercial, et résidentiel.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.16, ease: MECHANICAL_EASE }}
              >
                Elle propose des solutions à travers l’étude, la conception, la fabrication et le montage d&apos;installations sur mesure adapté au besoins spécifique de ces client.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.24, ease: MECHANICAL_EASE }}
              >
                Elle est guidée par des valeurs fondamentales telles que l&apos;engagement envers la qualité et la satisfaction du client. Grace à nos équipes qualifiés et nos partenaires stratégiques, nous croyons fermement à l&apos;importance de fournir des solutions qui répondent aux besoins spécifiques de nos clients tout en respectant les normes les plus élevées de qualité et de sécurité.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.32, ease: MECHANICAL_EASE }}
              >
                Avec un portefeuille de projets varies et une vision axée sur l’innovation et la durabilité, nous sommes prêts à répondre à vos besoins les plus exigeants dans nos domaines d’activités.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.4, ease: MECHANICAL_EASE }}
              >
                Nous sommes actifs à travers tout le pays et ainsi que les pays de la sous régions et depuis peu l’Afrique centrale.
              </motion.p>
            </div>

            {/* 2. PHOTO SUR MOBILE : S'AFFICHE APRÈS LE TEXTE AVEC UNE ANIMATION FLUIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: MECHANICAL_EASE }}
              className="lg:hidden relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-steel shadow-xl my-4 group"
            >
              <Image
                src="/images/about.jpg"
                alt="Soudage TIG inox et tuyauterie industrielle - Sénégal Inox"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-medium">
                  <Wrench className="w-3.5 h-3.5 text-[#8DBF21]" />
                  <span>Atelier &amp; Chaudronnerie de précision</span>
                </span>
              </div>
            </motion.div>

            {/* 3. BOUTON VERT L'ÉQUIPE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.48, ease: MECHANICAL_EASE }}
              className="pt-2"
            >
              <Link
                href="/equipe"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8DBF21] hover:bg-[#79A718] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>L&apos;ÉQUIPE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Colonne Droite (Desktop) : Photo latérale avec parallaxe */}
          <div className="hidden lg:flex lg:col-span-5 h-full">
            <motion.div
              style={{ y: photoParallaxY }}
              initial={{ opacity: 0, x: -50, clipPath: "inset(0% 100% 0% 0%)" }}
              animate={isInView ? { opacity: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)" } : {}}
              transition={{ duration: 0.95, ease: MECHANICAL_EASE, delay: 0.2 }}
              className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden border border-steel shadow-2xl bg-dark"
            >
              <Image
                src="/images/about.jpg"
                alt="Soudage TIG inox et tuyauterie industrielle - Sénégal Inox"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 42vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
