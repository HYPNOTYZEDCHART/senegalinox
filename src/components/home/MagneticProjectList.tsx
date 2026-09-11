"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextMaskReveal, MECHANICAL_EASE } from "@/components/ui/MaskReveal";

interface ProjectItem {
  id: string;
  title: string;
  clientOrScope: string;
  sector: string;
  location: string;
  image: string;
  href: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Chantiers Navals & Chaudronnerie Offshore",
    clientOrScope: "Saipem • Eiffage Génie Civil Marine",
    sector: "Construction Navale & Sous-Pression",
    location: "Rade du Port de Dakar",
    image: "/images/realisations/construction-reparation-navale/hero.jpg",
    href: "/realisations/construction-reparation-navale",
  },
  {
    id: "p2",
    title: "Réseaux de Tuyauterie Industrielle Inox 316L",
    clientOrScope: "Industries Pharmaceutiques & Agro",
    sector: "Tuyauterie Sous Pression (DESP)",
    location: "Sébikotane & Diamniadio",
    image: "/images/realisations/tuyauterie-industrielle/tuyauterie-banniere-bleue-hd.png",
    href: "/realisations/tuyauterie-industrielle",
  },
  {
    id: "p3",
    title: "Fabrication de Cuves & Séparateurs de Stockage",
    clientOrScope: "Secteur Pétrolier & Minier",
    sector: "Chaudronnerie Lourde (CODAP / ASME)",
    location: "Atelier Colobane Rocade Fann",
    image: "/images/realisations/chaudronnerie/hero.jpg",
    href: "/realisations/chaudronnerie",
  },
  {
    id: "p4",
    title: "Charpente Métallique Lourde & Hangars Industriels",
    clientOrScope: "Terminaux Logistiques & BTP",
    sector: "Ossatures Métalliques & Portées 40m",
    location: "Zone Portuaire & Mbao",
    image: "/images/realisations/charpente-metallique/hero.jpg",
    href: "/realisations/charpente-metallique",
  },
  {
    id: "p5",
    title: "Décoration Métallique & Ouvrages Haute Couture",
    clientOrScope: "Institutions & Immobilier de Luxe",
    sector: "Inox Brossé & Poli Miroir",
    location: "Dakar Plateau & Almadies",
    image: "/images/realisations/decoration-haut-standing/hero.jpg",
    href: "/realisations/decoration-haut-standing",
  },
];

export function MagneticProjectList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Valeurs de mouvement physiques pour le curseur
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs pour créer l'inertie fluide magnétique
  const springX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  // Légère rotation (skew / tilt) basée sur l'accélération horizontale
  const rotate = useTransform(springX, (val) => {
    const diff = val - mouseX.get();
    return Math.min(Math.max(diff * -0.06, -8), 8);
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const activeProject = hoveredIndex !== null ? FEATURED_PROJECTS[hoveredIndex] : null;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-20 sm:py-28 bg-slate-light relative overflow-hidden border-b border-steel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
              <span className="w-6 h-0.5 bg-brand-blue" />
              <span>Interventions Majeures</span>
            </div>
            
            <TextMaskReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight leading-tight">
                Chantiers emblématiques & réalisations industrielles
              </h2>
            </TextMaskReveal>

            <p className="mt-4 text-base text-slate-600">
              Survolez un projet pour prévisualiser instantanément nos réalisations en atelier et sur site.
            </p>
          </div>

          <Link
            href="/nos-references"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
          >
            <span>Voir l&apos;ensemble de nos références</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3. LISTE ÉPURÉE AVEC "HOVER IMAGE FOLLOWER" MAGNÉTIQUE */}
        <div className="relative border-t border-steel">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: MECHANICAL_EASE }}
            >
              <Link
                href={project.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 border-b border-steel transition-colors hover:bg-white/70 px-4 -mx-4 rounded-xl"
              >
                {/* Côté gauche : Numéro & Titre */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-brand-blue transition-colors">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-dark group-hover:text-brand-blue group-hover:translate-x-1.5 transition-all">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span className="font-semibold text-dark">{project.clientOrScope}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Côté droit : Secteur & Flèche interactive */}
                <div className="flex items-center justify-between md:justify-end gap-6 mt-3 md:mt-0 pt-2 md:pt-0">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-steel text-slate-700 shadow-2xs group-hover:border-brand-green/60 transition-colors">
                    {project.sector}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-white border border-steel flex items-center justify-center text-dark group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* 3. MINIATURE FLOTTANTE MAGNÉTIQUE AVEC INERTIE (USE-SPRING) */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: MECHANICAL_EASE }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  x: springX,
                  y: springY,
                  rotate: rotate,
                  pointerEvents: "none",
                  zIndex: 40,
                }}
                className="hidden lg:block -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-72 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/15 bg-dark">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-brand-green">
                      {activeProject.sector}
                    </span>
                    <p className="text-xs font-bold leading-tight truncate text-white">
                      {activeProject.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
