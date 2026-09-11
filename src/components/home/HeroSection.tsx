"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { TextMaskReveal, MECHANICAL_EASE } from "@/components/ui/MaskReveal";

const HERO_SLIDES = [
  {
    src: "/images/hero/hero-slide-1.png",
    alt: "Chantiers navals, soudure et chaudronnerie lourde - Sénégal Inox",
    label: "Chaudronnerie & Offshore",
  },
  {
    src: "/images/hero/hero-slide-2.jpg",
    alt: "Tuyauterie industrielle inox et réseaux sous pression - Sénégal Inox",
    label: "Tuyauterie Industrielle Inox",
  },
  {
    src: "/images/hero/hero-slide-3.png",
    alt: "Charpente métallique lourde et hangars industriels - Sénégal Inox",
    label: "Charpente & Génie Métallique",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 4. Hero "Scale-Down & Typography Layering" via useScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Rétractation fluide sans zoom initial artificiel (reste à échelle 1:1 nette)
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1.0, 1.02]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 0.7], ["0px", "20px"]);
  const imageInset = useTransform(scrollYProgress, [0, 0.7], ["0px", "12px"]);

  // Parallaxe textuelle : décalage subtil de vitesse pour une impression de profondeur
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.35]);

  // Rotation automatique toutes les 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-dark text-white border-b border-white/10"
    >
      {/* 1. CONTENEUR DE L'IMAGE DE FOND HAUTE DÉFINITION 2175px SANS BLUR */}
      <motion.div
        style={{
          scale: imageScale,
          borderRadius: imageBorderRadius,
          top: imageInset,
          bottom: imageInset,
          left: imageInset,
          right: imageInset,
        }}
        className="absolute inset-0 z-0 overflow-hidden shadow-2xl transition-shadow"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: MECHANICAL_EASE }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_SLIDES[currentSlide].src}
              alt={HERO_SLIDES[currentSlide].alt}
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-center select-none"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Voile sombre transparent équilibré pour sublimer l'image tout en assurant la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/45 to-dark/30 backdrop-brightness-[0.92]" />
      </motion.div>

      {/* 2. CONTENU TYPOGRAPHIQUE AVEC PARALLAXE & TEXT MASK REVEAL */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center"
      >
        {/* Badge surmonté avec point vert du logo */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-medium text-white mb-4 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#8DBF21] animate-pulse" />
          <span>
            Sénégal Inox • <span className="text-[#8DBF21] font-semibold">Depuis 2003</span>
          </span>
        </div>

        {/* Titre avec révélation nette par découpage géométrique */}
        <TextMaskReveal delay={0.1}>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl leading-tight sm:leading-snug drop-shadow-md">
            L&apos;Excellence Métallurgique & les Travaux{" "}
            <span className="text-[#8DBF21]">Industriels</span> au Sénégal
          </h1>
        </TextMaskReveal>

        {/* Sous-titre court et clair avec révélation synchronisée */}
        <TextMaskReveal delay={0.2}>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow">
            Chaudronnerie, tuyauterie industrielle, charpente métallique et interventions navales certifiées à Dakar.
          </p>
        </TextMaskReveal>

        {/* Boutons d'action directs (Vert du logo & Contraste) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: MECHANICAL_EASE }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8DBF21] hover:bg-[#79A718] text-white font-semibold text-sm transition-all shadow-md active:scale-95"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="#poles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/40 hover:bg-black/60 text-white hover:text-[#8DBF21] font-medium text-sm border border-white/20 hover:border-[#8DBF21]/60 transition-all backdrop-blur-sm"
          >
            <span>Nos Spécialités</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Navigation du Slider épurée */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Image précédente"
            className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-[#0082C1] border border-white/20 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1} : ${slide.label}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-6 bg-[#0082C1]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Image suivante"
            className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-[#0082C1] border border-white/20 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <span className="text-[11px] text-[#0082C1] mt-2 font-semibold tracking-wide">
          {HERO_SLIDES[currentSlide].label}
        </span>
      </motion.div>
    </section>
  );
}
