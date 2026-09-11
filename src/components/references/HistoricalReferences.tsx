"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Anchor,
  ShieldCheck,
  Award,
  Ship,
  CheckCircle2,
  Compass,
} from "lucide-react";

export function HistoricalReferences() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. Bannière d'en-tête avec la photo de soudure originale Ultra HD */}
      <section className="relative h-64 sm:h-80 w-full flex items-center justify-center overflow-hidden border-b border-steel">
        <Image
          src="/images/references/welding-banner-v3.png"
          alt="Soudure et chaudronnerie Sénégal Inox"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Voile très léger pour faire rayonner les étincelles vertes et dorées */}
        <div className="absolute inset-0 bg-dark/25" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-brand-green bg-dark/75 px-4 py-1.5 rounded-full border border-white/20 mb-3 inline-block shadow-md">
            Palmarès & Savoir-Faire
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            NOS REFERENCES
          </h1>
        </motion.div>
      </section>

      {/* 2. Présentation officielle Pierre EON */}
      <section className="py-14 sm:py-20 bg-white border-b border-steel">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="p-8 sm:p-12 rounded-2xl bg-slate-light border border-steel shadow-sm space-y-6 relative overflow-hidden"
          >
            {/* Liseré vert accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" />

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-blue">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-blue/10 text-brand-blue">
                <Ship className="w-4 h-4" />
                <span>Construction Navale</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-green/15 text-brand-green font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Agréé ANAM</span>
              </span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-dark leading-relaxed font-medium">
              <p className="text-slate-800">
                Pierre EON, concepteur et fabricant de navires jusqu&apos; à 42 mètres en acier et aluminium et jusqu&apos; à 17 mètres en polyester.
                <br />
                Spécialiste en chaudronnerie et en soudure TIG, MIG électrode. <strong className="font-extrabold text-dark">AGREE par l&apos;ANAM pour la construction navale</strong>
              </p>

              <div className="pt-2 border-t border-steel/60">
                <p className="text-slate-700">
                  Gérant associé du chantier naval Alu marine de 1990 à 1999 en bord de Loire France
                  <br />
                  <span className="text-brand-blue font-bold">Ce chantier existe toujours.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Réalisations non exhaustives (Animation croisée : Texte à gauche, Photo à droite) */}
      <section className="py-16 sm:py-24 bg-slate-light border-b border-steel/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne Texte (Arrive de gauche) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                <Compass className="w-4 h-4 text-brand-blue" />
                <span>Palmarès International</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                Réalisations non exhaustives :
              </h2>

              <ul className="space-y-3 pt-2">
                {[
                  "Le Cygne ( Lac d’Annecy ) 30 m",
                  "La ligériade ( Loire ) 18 m",
                  "Blu moon : antilles catamaran de croisière 25 m 1991",
                  "Série « on verrra » 5 catamarans de croisière de 22 pour Claude Kermoal Charters antilles",
                  "Le Douce France, catamaran de propriétaire 42.20 m",
                  "Hydroglisseur de secours aéroport de Fréjorgues ( Montpellier ) agréé par le STNA ( services technique de la navigation aérienne )",
                  "Hydroglisseur Marie Buenga Congo brazzaville",
                  "Hydroglisseur rapatriement sanitaire lagune de Ganvié Cotonou",
                  "Hydroglisseur pour la Compagnie Générale de Géophysique détroit de Malaka indonésie",
                  "Hydroglisseur ostreicole ( Société SIMON ) Cancale baie du mont St michel",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne Photo HD (Arrive de gauche avec délai) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src="/images/references/technician.jpg"
                    alt="Technicien de Sénégal Inox effectuant des mesures de précision"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                    Précision & Métallurgie
                  </span>
                  <p className="text-xs text-slate-200 mt-1">
                    Chaudronnerie et soudure de précision en atelier à Dakar
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Réalisations au Sénégal de 2000 à 2018 (Animation fluide de gauche à droite) */}
      <section className="py-16 sm:py-24 bg-white border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne Photo HD Voilier (Arrive de gauche) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-light group">
                <div className="relative h-[480px] sm:h-[540px] w-full">
                  <Image
                    src="/images/references/sailboat.png"
                    alt="Proue de voilier en mer - Sénégal Inox construction navale"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                    Secteur Maritime & Offshore
                  </span>
                  <p className="text-xs text-slate-200 mt-1">
                    Interventions navales et constructions maritimes sur les côtes sénégalaises
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Colonne Texte Sénégal (Arrive de gauche avec délai) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                <Anchor className="w-4 h-4 text-brand-green" />
                <span>Chantiers & Interventions Navales</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                Réalisations au Sénégal de 2000 à 2018 en construction et réparation navale
              </h2>

              <ul className="space-y-3 pt-2">
                {[
                  "Hydroglisseur de 5 m et 6.20 pour Air boat aventure de 2000 à 2003 exploitation îles du Saloum au départ de Fimela.",
                  "2 Hydroglisseurs de 5.60 m pour Hydropostale : descentes du fleuve de Bakel à Saint Louis, excursions dans le Gandiolais et langue de barbarie.",
                  "Réalisation d’une barge de transport pour Vinci énergie 12 m x 6 au départ de Djiffer vers Betanti, Ndira, Bassoul et Dionowar.",
                  "Réparation navire le Ndiambour en 2006 suite à avarie en mer, armée sénégalaise.",
                  "Réparation BPC Tonnerre en 2008 armée française.",
                  "Réparation Navire amiral Kédougou en 2016 armée sénégalaise.",
                  "Fabrication de 6 safrans inox pour la marine ivoiriene en 2017 sur escorteurs de 30 mètres.",
                  "Fabrication du moule du Trimaran du Terroubi 18 mètres 2013.",
                  "Convoyage de bateaux de la douane en 2008 de Dakar à Ziguinchor, Saint Louis et Podor avec vedettes de 12 m et 7 m.",
                  "Fabrication de 4 barges de 30 m x 12 pour la réhabilitation du pont faidherbes en 2010.",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
