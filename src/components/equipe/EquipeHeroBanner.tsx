"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

export function EquipeHeroBanner() {
  return (
    <>
      {/* EN-TÊTE : ANIMATION DE GAUCHE À DROITE */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-2 pb-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: MECHANICAL_EASE }}
          className="space-y-1.5"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8DBF21]">
            <Users className="w-3.5 h-3.5" />
            <span>Capital Humain & Savoir-Faire</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-dark uppercase leading-tight">
            L&apos;ÉQUIPE
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
            Les hommes et les femmes qui portent l&apos;excellence métallurgique et la rigueur industrielle de Sénégal Inox au quotidien.
          </p>
        </motion.div>
      </div>

      {/* BANNIÈRE IMAGE : GLISSEMENT DE GAUCHE À DROITE SANS DÉFORMATION */}
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mb-10 sm:mb-14 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: MECHANICAL_EASE }}
          className="w-full rounded-2xl overflow-hidden shadow-md border border-steel bg-slate-100"
        >
          <Image
            src="/images/equipe/hero-team.png"
            alt="L'équipe Sénégal Inox"
            width={1024}
            height={194}
            priority
            quality={100}
            className="w-full h-auto object-contain block"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </motion.div>
      </div>
    </>
  );
}
