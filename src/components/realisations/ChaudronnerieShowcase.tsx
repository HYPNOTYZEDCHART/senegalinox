"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Flame,
} from "lucide-react";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
  badge?: string;
  specsSummary?: string;
}

interface ChaudronnerieShowcaseProps {
  items: GalleryItem[];
}

const CATEGORIES = [
  { id: "all", label: "Tous les ouvrages" },
  { id: "silos", label: "Silos & Trémies" },
  { id: "reservoirs", label: "Réservoirs Hydrocarbures" },
  { id: "escaliers", label: "Tours d'Escaliers" },
  { id: "granulateurs", label: "Granulateurs & Mécano-Soudure" },
  { id: "chaudieres", label: "Chaudières & Serpentins Inox" },
  { id: "structures", label: "Structures Marines & Portuaires" },
];

export default function ChaudronnerieShowcase({ items }: ChaudronnerieShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  // Gestion des touches du clavier pour la Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, lightboxIndex]);

  const activePhoto = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full">
      {/* 1. Entête de la galerie & Filtres interactifs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DBF21]/15 border border-[#8DBF21]/30 text-xs font-bold text-[#4D6E0E] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#8DBF21]" />
            <span>Catalogue des Réalisations Réelles • Atelier Colobane</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Ouvrages Chaudronnés & Réalisations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-medium">
            Explorez notre galerie d&apos;équipements industriels conçus, mécano-soudés et installés au Sénégal et dans la sous-région.
          </p>
        </div>

        {/* Compteur d'ouvrages affichés */}
        <div className="text-right hidden md:block">
          <span className="text-3xl font-extrabold text-[#111111]">
            {filteredItems.length}
          </span>
          <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">
            Ouvrages répertoriés
          </span>
        </div>
      </div>

      {/* Barre de filtres sous forme de pills modernes */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          Filtres :
        </span>
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count =
            cat.id === "all"
              ? items.length
              : items.filter((i) => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? "bg-[#111111] text-white border-[#8DBF21] shadow-md shadow-black/10"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DBF21] animate-pulse" />
              )}
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                  isSelected
                    ? "bg-white/20 text-[#8DBF21]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Grille Bento / Cards modernes des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
          >
            {/* Conteneur Image avec ratio soigné */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient subtil en overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Badge technique flottant en haut à gauche */}
              {item.badge && (
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#8DBF21] shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8DBF21]" />
                  <span>{item.badge}</span>
                </div>
              )}

              {/* Bouton Agrandir / Zoom flottant au centre au hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8DBF21] text-white text-xs font-bold shadow-xl shadow-[#8DBF21]/30 transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                  <span>Agrandir en plein écran</span>
                </span>
              </div>

              {/* Catégorie discrète en bas de l'image */}
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded">
                  {item.category?.toUpperCase() || "CHAUDRONNERIE"}
                </span>
              </div>
            </div>

            {/* Corps descriptif de la carte */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
              <div>
                <h3 className="text-base font-bold text-[#111111] group-hover:text-[#0082C1] transition-colors leading-snug line-clamp-2">
                  {item.caption || item.alt}
                </h3>
                {item.specsSummary && (
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8DBF21] shrink-0" />
                    <span>{item.specsSummary}</span>
                  </p>
                )}
              </div>

              {/* Pied de carte avec lien interactif */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0082C1]">
                <span>Voir la réalisation</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Lightbox Interactive Plein Écran */}
      {lightboxIndex !== null && activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn">
          {/* Barre supérieure de la modale */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#8DBF21] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              {activePhoto.badge && (
                <span className="text-xs font-bold text-white/90 hidden sm:inline-block">
                  • {activePhoto.badge}
                </span>
              )}
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
              aria-label="Fermer la vue plein écran"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Corps central avec photo grand format et flèches de navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Bouton Précédent */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#8DBF21] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-xl"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image centrale haute résolution */}
            <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain rounded-xl shadow-2xl"
                priority
              />
            </div>

            {/* Bouton Suivant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#8DBF21] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-xl"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Barre inférieure : Détails techniques et CTA */}
          <div className="max-w-4xl mx-auto w-full bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-[#8DBF21] font-bold">
                  {activePhoto.category?.toUpperCase() || "CHAUDRONNERIE"}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-slate-300">{activePhoto.specsSummary}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-white">
                {activePhoto.caption || activePhoto.alt}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/demander-un-devis"
                className="px-4 py-2.5 rounded-xl bg-[#8DBF21] hover:bg-[#79A718] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#8DBF21]/20"
              >
                <span>Chiffrer ce type d&apos;ouvrage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 4. Encart de contact direct & Réassurance d'atelier */}
      <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#0082C1] via-[#0073AD] to-[#005B8A] text-white p-8 sm:p-10 border border-white/20 relative overflow-hidden shadow-2xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-white uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#8DBF21]" />
              <span>Conception & Fabrication sur Mesure</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Vous avez un plan ou un cahier des charges spécifique ?
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl font-normal">
              Nos ingénieurs et chaudronniers calculent vos épaisseurs, élaborent les notes de calcul et les plans de fabrication DAO/SolidWorks, puis façonnent vos pièces dans notre atelier de Colobane (Rocade Fann Bel Air).
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
            <Link
              href="/demander-un-devis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8DBF21] hover:bg-[#7ba81b] text-white text-sm font-bold shadow-lg shadow-black/20 hover:shadow-xl transition-all text-center"
            >
              <span>Demander un chiffrage technique</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+221771978181"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/25 backdrop-blur-sm transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Direction commerciale : +221 77 197 81 81</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
