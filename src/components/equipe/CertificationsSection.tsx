"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  ShieldCheck,
  Award,
  ExternalLink,
  Maximize2,
  FileCheck2,
} from "lucide-react";
import { CERTIFICATIONS_DATA } from "@/data/certifications";
import { MECHANICAL_EASE, TextMaskReveal } from "@/components/ui/MaskReveal";

export function CertificationsSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const distance = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
    setIsZoomed(false);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % CERTIFICATIONS_DATA.length);
    setIsZoomed(false);
  }, [selectedIdx]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx(
      (prev) => (prev! - 1 + CERTIFICATIONS_DATA.length) % CERTIFICATIONS_DATA.length
    );
    setIsZoomed(false);
  }, [selectedIdx]);

  const toggleZoom = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  // Raccourcis clavier (Échap, Flèches Gauche / Droite, Espace pour zoomer)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "z" || e.key === "Z") toggleZoom();
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, closeLightbox, nextImage, prevImage]);

  const activeCert = selectedIdx !== null ? CERTIFICATIONS_DATA[selectedIdx] : null;

  return (
    <section id="certifications" className="py-14 sm:py-20 bg-slate-light border-b border-steel">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        
        {/* TITRE EXACT : IDENTIQUE À LA CAPTURE FOURNIE */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2.5">
            <Award className="w-3.5 h-3.5 text-brand-blue" />
            <span>Agréments d&apos;État & Références Industrielles</span>
          </div>

          <TextMaskReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-dark tracking-tight leading-tight">
              Nos Certifications & Références
            </h2>
          </TextMaskReveal>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Cliquez sur un document pour le consulter en haute définition et vérifier les procès-verbaux et attestations de conformité.
          </p>
        </div>

        {/* BARRE DE CONTRÔLES / NAVIGATION HORIZONTALE */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {CERTIFICATIONS_DATA.length} Documents Officiels
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#8DBF21]/15 text-[#638914]">
              Haute Définition
            </span>
          </div>

          {/* Boutons flèches pour faire glisser le rail comme sur la capture */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-xl border border-steel flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white text-dark hover:bg-slate-50 shadow-xs hover:border-brand-blue cursor-pointer active:scale-95"
                  : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50"
              }`}
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-xl border border-steel flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white text-dark hover:bg-slate-50 shadow-xs hover:border-brand-blue cursor-pointer active:scale-95"
                  : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50"
              }`}
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RAIL DE DOCUMENTS HORIZONTAL (COMME SUR LA PHOTO FOURNIE) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {CERTIFICATIONS_DATA.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.09, ease: MECHANICAL_EASE }}
                className="w-[280px] sm:w-[310px] shrink-0 snap-start flex flex-col group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* FEUILLE DOCUMENT A4 CLIQUABLE */}
                <div
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  className="relative w-full aspect-[210/297] rounded-xl overflow-hidden bg-white border border-slate-200 shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  {/* Photo Scannée Réelle du Document sans compression destructrice */}
                  <div className="relative w-full h-full p-2 bg-white flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      unoptimized
                      priority={index < 3}
                      className="object-contain p-2 bg-white"
                      sizes="(max-width: 640px) 280px, 310px"
                    />
                  </div>

                  {/* OVERLAY DE SURVOL AVEC LOUPE "VOIR EN GRAND" */}
                  <div className="absolute inset-0 bg-dark/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center mb-2.5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Voir en grand
                    </span>
                    <span className="text-[10px] text-slate-200 mt-1">
                      Cliquer pour agrandir en HD
                    </span>
                  </div>

                  {/* Badge discret en haut à droite */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs border border-slate-200 text-[9px] font-black text-dark uppercase tracking-wider shadow-2xs">
                    Certifié
                  </div>
                </div>

                {/* TEXTE DÉTAIL SOUS LE DOCUMENT */}
                <div className="mt-3.5 px-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue truncate">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-dark leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-[#638914]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="truncate">{cert.badge}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* VISIONNEUSE PLEIN ÉCRAN ÉPURÉE (PRO DOCUMENT VIEWER - NETTETÉ HD MAXIMALE) */}
      <AnimatePresence>
        {selectedIdx !== null && activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-xl select-none"
            onClick={closeLightbox}
          >
            {/* 1. BARRE D'OUTILS SUPÉRIEURE FLOTTANTE HAUT DE GAMME */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 sm:px-8 py-3.5 bg-slate-900/80 border-b border-white/10 backdrop-blur-md flex items-center justify-between gap-4 z-20"
            >
              {/* Infos document */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-brand-blue/15 text-brand-blue border border-brand-blue/20 flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-blue">
                      {activeCert.issuer}
                    </span>
                    <span className="text-[10px] text-slate-500">•</span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {activeCert.date}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-lg">
                    {activeCert.title}
                  </h3>
                </div>
              </div>

              {/* Outils & Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Compteur */}
                <span className="text-xs font-bold text-slate-400 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                  {selectedIdx + 1} / {CERTIFICATIONS_DATA.length}
                </span>

                {/* Bouton Zoom */}
                <button
                  onClick={toggleZoom}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isZoomed
                      ? "bg-brand-blue text-white border-brand-blue shadow-md"
                      : "bg-white/10 hover:bg-white/20 text-slate-200 border-white/15"
                  }`}
                  title={isZoomed ? "Réduire à la taille normale" : "Zoomer à 150% pour lire les détails"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZoomed ? "100%" : "Zoomer"}</span>
                </button>

                {/* Bouton Ouvrir l'original HD */}
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Ouvrir le fichier original haute résolution dans un nouvel onglet"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Original HD</span>
                </a>

                {/* Bouton Fermer */}
                <button
                  onClick={closeLightbox}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-red-500/80 hover:border-red-500 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer ml-1"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. ZONE CENTRALE D'AFFICHAGE DU DOCUMENT : FEUILLE PURE NETTE SANS CADRE LOURD */}
            <div
              className={`relative flex-1 w-full overflow-auto flex items-center justify-center p-4 sm:p-8 transition-all ${
                isZoomed ? "cursor-zoom-out items-start" : "cursor-zoom-in"
              }`}
              onClick={toggleZoom}
            >
              {/* FLÈCHE PRÉCÉDENT FLOTTANTE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-30 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Document précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* FLÈCHE SUIVANT FLOTTANTE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-30 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Document suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* LE DOCUMENT OFFICIEL : NET, NON DÉFORMÉ, LUMINEUX SUR FOND SOMBRE */}
              <motion.div
                key={activeCert.id + (isZoomed ? "-zoomed" : "-normal")}
                initial={{ opacity: 0.2, scale: isZoomed ? 0.95 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: MECHANICAL_EASE }}
                className={`relative bg-white rounded-md transition-all duration-300 flex items-center justify-center shadow-[0_25px_70px_-10px_rgba(0,0,0,0.8)] border border-slate-200 ${
                  isZoomed
                    ? "w-[900px] max-w-none my-6 p-2"
                    : "max-h-[78vh] w-auto p-1.5 sm:p-2.5"
                }`}
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className={`block rounded-xs object-contain select-none transition-all ${
                    isZoomed
                      ? "w-full h-auto"
                      : "max-h-[75vh] w-auto max-w-[85vw] sm:max-w-[70vw]"
                  }`}
                  style={{
                    imageRendering: "auto",
                  }}
                />
              </motion.div>
            </div>

            {/* 3. BARRE INFÉRIEURE AVEC DÉTAILS ET INDICATION */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 sm:px-8 py-3 bg-slate-900/80 border-t border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-20 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8DBF21]/20 text-[#8DBF21] font-bold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{activeCert.badge}</span>
                </span>
                <span className="hidden sm:inline text-slate-300">
                  {activeCert.details}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-slate-400 shrink-0">
                <span className="hidden md:inline">
                  Cliquez sur l&apos;image pour zoomer • Touches ◄ ► pour naviguer • Échap pour fermer
                </span>
                <button
                  onClick={closeLightbox}
                  className="font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  Fermer ✕
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
