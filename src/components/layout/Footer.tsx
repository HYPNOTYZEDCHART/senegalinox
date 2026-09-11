"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
  Building,
  Wrench,
  MapPin,
  Navigation,
  Compass,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Truck,
  FileCheck2,
} from "lucide-react";
import { companyData } from "@/data/company";
import { REALISATIONS_DATA } from "@/data/realisations";

interface LocationDetails {
  id: "bureau" | "atelier";
  tabLabel: string;
  name: string;
  subtitle: string;
  address: string;
  city: string;
  country: string;
  plusCode: string;
  coords: { lat: number; lng: number };
  googleMapsDirUrl: string;
  wazeUrl: string;
  osmEmbedUrl: string;
  accessInfo: string;
  hours: string;
  badge: string;
}

const SITES_DATA: Record<"bureau" | "atelier", LocationDetails> = {
  bureau: {
    id: "bureau",
    tabLabel: "Siège Bourguiba",
    name: "Siège Administratif & Bureau d'Études",
    subtitle: "Direction générale, ingénierie de conception, chiffrage et accueil des partenaires",
    address: "Bourguiba, Immeuble Cheikh Abass Sall",
    city: "Dakar 10700",
    country: "Sénégal",
    plusCode: "PG2P+V8J",
    coords: { lat: 14.7022073, lng: -17.4642449 },
    googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=14.7022073,-17.4642449",
    wazeUrl: "https://waze.com/ul?ll=14.7022073,-17.4642449&navigate=yes",
    osmEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-17.476,14.693,-17.452,14.711&layer=mapnik&marker=14.7022073,-17.4642449",
    accessInfo: "Bureaux d'études, direction & réunions de projets. Parking clientèle réservé.",
    hours: "Lun - Ven : 08h00 - 18h00 • Sam : 08h00 - 13h00",
    badge: "Siège & Ingénierie",
  },
  atelier: {
    id: "atelier",
    tabLabel: "Atelier Colobane",
    name: "Atelier de Chaudronnerie & Usinage Lourd",
    subtitle: "Unité de production industrielle de 2 000 m², découpe plasma, cintrage et spools haute pression",
    address: "Colobane Rocade Fann / Bel Air",
    city: "Dakar",
    country: "Sénégal",
    plusCode: "PG2W+7X",
    coords: { lat: 14.6979227, lng: -17.4427707 },
    googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=14.6979227,-17.4427707",
    wazeUrl: "https://waze.com/ul?ll=14.6979227,-17.4427707&navigate=yes",
    osmEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-17.455,14.689,-17.431,14.707&layer=mapnik&marker=14.6979227,-17.4427707",
    accessInfo: "Accès direct par la rocade pour camions semi-remorques, plateaux et convois exceptionnels.",
    hours: "Production continue • Permanence interventions maritimes d'urgence 24h/7j",
    badge: "Atelier Lourd (2 000 m²)",
  },
};

const OVERVIEW_OSM_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-17.482,14.685,-17.430,14.715&layer=mapnik";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeSiteKey, setActiveSiteKey] = useState<"all" | "bureau" | "atelier">("all");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const activeSite = activeSiteKey === "all" ? null : SITES_DATA[activeSiteKey];

  const handleCopy = (text: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCode(label);
      setTimeout(() => setCopiedCode(null), 2400);
    }
  };

  return (
    <footer className="bg-[#0082C1] text-white pt-16 pb-8 relative border-t-4 border-[#8DBF21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Grille principale en 4 colonnes (Navigation & Identité) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          
          {/* Colonne 1 : Identité, Historique & Badge QHSE */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block bg-white px-3.5 py-2.5 rounded-xl shadow-lg hover:opacity-95 transition-opacity"
              aria-label="Retour à l'accueil Sénégal Inox"
            >
              <Image
                src="/images/logo.png"
                alt="Sénégal Inox Tech & Services"
                width={180}
                height={85}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-white/90 leading-relaxed font-normal">
              Acteur industriel de premier plan au Sénégal fondé en {companyData.stats.foundationYear}. Plus de {companyData.stats.projectsCount} réalisations majeures et {companyData.stats.contractsCount} contrats exécutés avec une rigueur métallurgique absolue.
            </p>

            {/* Badge de conformité QHSE */}
            <div className="p-3.5 rounded-xl bg-black/15 border border-white/20 space-y-2 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#8DBF21]">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Engagement Qualité &amp; Sécurité
                </span>
              </div>
              <p className="text-xs text-white/85 leading-relaxed">
                Protocoles stricts QHSE, traçabilité certifiée des matières (Inox 316L/304L, aciers spéciaux) et contrôles CND systématiques.
              </p>
            </div>
          </div>

          {/* Colonne 2 : Liens directs vers les 5 spécialités industrielles */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DBF21] pl-2.5">
              Pôles Industriels
            </h3>
            <ul className="space-y-2.5 text-sm">
              {REALISATIONS_DATA.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/realisations/${item.slug}`}
                    className="flex items-center justify-between text-white/85 hover:text-white group transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.title.split("&")[0].trim()}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#8DBF21] transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/20">
                <Link
                  href="/nos-references"
                  className="flex items-center justify-between text-white hover:text-[#8DBF21] font-bold group transition-colors"
                >
                  <span>Nos Références &amp; Partenaires</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8DBF21]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Lignes directes & Contact Commercial */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DBF21] pl-2.5">
              Lignes Directes
            </h3>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${companyData.phones.standard.raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/15 hover:bg-black/25 border border-white/20 transition-all text-white backdrop-blur-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-semibold">Standard Général</div>
                  <div className="font-bold text-white text-sm">{companyData.phones.standard.display}</div>
                </div>
              </a>

              <a
                href={`tel:${companyData.phones.commercial.raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/15 hover:bg-black/25 border border-white/20 transition-all text-white backdrop-blur-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#8DBF21]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DBF21]/30 transition-colors">
                  <Phone className="w-4 h-4 text-[#8DBF21]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-semibold">Direction Commerciale &amp; Devis</div>
                  <div className="font-bold text-[#8DBF21] text-sm">{companyData.phones.commercial.display}</div>
                </div>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/15 hover:bg-black/25 border border-white/20 transition-all text-white backdrop-blur-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-semibold">Courriel Officiel</div>
                  <div className="font-bold text-white text-xs break-all">{companyData.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Colonne 4 : Recrutement & Conformité Légale */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DBF21] pl-2.5">
              Recrutement &amp; Conformité
            </h3>

            {/* Encart Recrutement */}
            <div className="p-3.5 rounded-xl bg-black/15 border border-white/20 space-y-2 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Briefcase className="w-4 h-4 text-[#8DBF21]" />
                <span>{companyData.recruitment.title}</span>
              </div>
              <p className="text-xs text-white/85 leading-relaxed">
                Tuyauteurs, chaudronniers qualifiés et monteurs métalliques : transmettez votre candidature à <span className="font-bold text-white">{companyData.recruitment.email}</span>.
              </p>
            </div>

            {/* Encart Juridique & Assurance */}
            <div className="p-3.5 rounded-xl bg-black/15 border border-white/20 space-y-1.5 backdrop-blur-sm text-xs">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <FileCheck2 className="w-4 h-4 text-white" />
                <span>Garantie &amp; Assurances</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Entreprise sénégalaise immatriculée (RCCM / NINEA). Responsabilité civile professionnelle et assurance décennale sur tous nos chantiers.
              </p>
            </div>
          </div>

        </div>

        {/* 2. NOUVEAU MODULE : Localisation Moderne de l'Entreprise & Itinéraires GPS */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-black/25 border border-white/20 shadow-2xl overflow-hidden relative">
          <div className="relative space-y-6">
            
            {/* En-tête avec titre et sélecteur de site en onglets */}
            {/* En-tête avec titre et sélecteur de site en 3 onglets */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-white/15 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8DBF21]" />
                  <span>Implantations Officielles &amp; Itinéraires GPS</span>
                  <span className="w-2 h-2 rounded-full bg-[#8DBF21] animate-pulse ml-1" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Nos Deux Emplacements à Dakar &amp; Guidage Direct
                </h3>
                <p className="text-sm text-white/85 mt-1 max-w-2xl font-normal">
                  Sénégal Inox SAS opère sur deux sites industriels complémentaires distants de 2,3 km (~6 min). Consultez la vue globale ou zoomez sur le site de votre choix.
                </p>
              </div>

              {/* Boutons de sélection d'onglets (Les 2 sites / Siège Bourguiba / Atelier Colobane) */}
              <div className="flex items-center p-1.5 rounded-2xl bg-black/35 border border-white/20 backdrop-blur-md self-start lg:self-auto shadow-inner flex-wrap gap-1">
                <button
                  type="button"
                  onClick={() => setActiveSiteKey("all")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeSiteKey === "all"
                      ? "bg-[#8DBF21] text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Les 2 Emplacements</span>
                  <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 font-mono">2</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSiteKey("bureau")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeSiteKey === "bureau"
                      ? "bg-[#8DBF21] text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Siège Bourguiba</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSiteKey("atelier")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeSiteKey === "atelier"
                      ? "bg-[#8DBF21] text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  <span>Atelier Colobane</span>
                </button>
              </div>
            </div>

            {/* Corps du module : Fiche d'itinéraire à gauche & Carte interactive à droite */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Colonne Gauche : Détails & Actions d'Itinéraire (5 colonnes) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-black/25 p-5 sm:p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                
                {/* 1. Mode Vue Globale (Les 2 Emplacements) */}
                {activeSiteKey === "all" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8DBF21] bg-[#8DBF21]/15 border border-[#8DBF21]/30 px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Réseau Industriel Dakarois</span>
                      </span>
                      <span className="text-[11px] text-white/70 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                        2 Sites Connectés (~6 min)
                      </span>
                    </div>

                    {/* Fiche Emplacement 1 : Siège Bourguiba */}
                    <div className="p-4 rounded-xl bg-white/10 hover:bg-white/[0.14] border border-white/15 transition-all space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8DBF21]">
                            <Building className="w-3.5 h-3.5" />
                            <span>1. Siège Administratif &amp; Bureau d&apos;Études</span>
                          </div>
                          <div className="text-xs font-semibold text-white">
                            {SITES_DATA.bureau.address}, {SITES_DATA.bureau.city}
                          </div>
                          <div className="text-[11px] font-mono text-white/75">
                            Plus Code : <span className="text-[#8DBF21] font-bold">{SITES_DATA.bureau.plusCode}</span> • GPS : 14.7022° N, 17.4642° W
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(`${SITES_DATA.bureau.address}, ${SITES_DATA.bureau.city}`, "bureau")}
                          className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors flex-shrink-0"
                          title="Copier l'adresse du siège"
                          aria-label="Copier l'adresse"
                        >
                          {copiedCode === "bureau" ? <Check className="w-4 h-4 text-[#8DBF21]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={SITES_DATA.bureau.googleMapsDirUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#8DBF21] hover:bg-[#7ba81b] text-white text-[11px] font-bold shadow transition-all"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Itinéraire Maps</span>
                        </a>
                        <a
                          href={SITES_DATA.bureau.wazeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[11px] font-semibold border border-white/20 transition-all"
                        >
                          <Compass className="w-3.5 h-3.5" />
                          <span>Waze</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setActiveSiteKey("bureau")}
                          className="px-2.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium border border-white/15"
                          title="Zoomer sur le siège"
                        >
                          Détails
                        </button>
                      </div>
                    </div>

                    {/* Fiche Emplacement 2 : Atelier Colobane */}
                    <div className="p-4 rounded-xl bg-white/10 hover:bg-white/[0.14] border border-white/15 transition-all space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8DBF21]">
                            <Wrench className="w-3.5 h-3.5" />
                            <span>2. Atelier Chaudronnerie &amp; Usinage Lourd</span>
                          </div>
                          <div className="text-xs font-semibold text-white">
                            {SITES_DATA.atelier.address}, {SITES_DATA.atelier.city}
                          </div>
                          <div className="text-[11px] font-mono text-white/75">
                            Plus Code : <span className="text-[#8DBF21] font-bold">{SITES_DATA.atelier.plusCode}</span> • GPS : 14.6979° N, 17.4428° W
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(`${SITES_DATA.atelier.address}, ${SITES_DATA.atelier.city}`, "atelier")}
                          className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors flex-shrink-0"
                          title="Copier l'adresse de l'atelier"
                          aria-label="Copier l'adresse"
                        >
                          {copiedCode === "atelier" ? <Check className="w-4 h-4 text-[#8DBF21]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={SITES_DATA.atelier.googleMapsDirUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#8DBF21] hover:bg-[#7ba81b] text-white text-[11px] font-bold shadow transition-all"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Itinéraire Maps</span>
                        </a>
                        <a
                          href={SITES_DATA.atelier.wazeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[11px] font-semibold border border-white/20 transition-all"
                        >
                          <Compass className="w-3.5 h-3.5" />
                          <span>Waze</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setActiveSiteKey("atelier")}
                          className="px-2.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium border border-white/15"
                          title="Zoomer sur l'atelier"
                        >
                          Détails
                        </button>
                      </div>
                    </div>

                    {/* Notice de certification */}
                    <div className="pt-2 text-[11px] text-white/75 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#8DBF21] flex-shrink-0" />
                      <span>Coordonnées GPS certifiées conformes au registre officiel senegalinox.com</span>
                    </div>
                  </div>
                )}

                {/* 2. Mode Site Focalisé (Bourguiba ou Colobane) */}
                {activeSite && (
                  <div className="space-y-4">
                    {/* Badge d'identification du site sélectionné */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8DBF21] bg-[#8DBF21]/15 border border-[#8DBF21]/30 px-3 py-1 rounded-full">
                        {activeSite.id === "bureau" ? <Building className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
                        <span>{activeSite.badge}</span>
                      </span>
                      <span className="text-[11px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                        {activeSite.coords.lat.toFixed(4)}° N, {Math.abs(activeSite.coords.lng).toFixed(4)}° W
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white leading-snug">
                        {activeSite.name}
                      </h4>
                      <p className="text-xs text-white/80 mt-1">
                        {activeSite.subtitle}
                      </p>
                    </div>

                    {/* Adresse complète & bouton de copie rapide */}
                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Adresse Physique</div>
                          <div className="text-xs sm:text-sm font-bold text-white">{activeSite.address}</div>
                          <div className="text-xs text-white/80">{activeSite.city}, {activeSite.country}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(`${activeSite.address}, ${activeSite.city}, ${activeSite.country}`, activeSite.id)}
                          className="p-2 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors flex-shrink-0"
                          title="Copier l'adresse complète"
                          aria-label="Copier l'adresse"
                        >
                          {copiedCode === activeSite.id ? <Check className="w-4 h-4 text-[#8DBF21]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Plus Code Google */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                        <span className="text-white/70">Google Plus Code :</span>
                        <span className="font-mono font-bold text-[#8DBF21] bg-black/30 px-2 py-0.5 rounded border border-white/10">
                          {activeSite.plusCode}
                        </span>
                      </div>
                    </div>

                    {/* Logistique & Horaires */}
                    <div className="space-y-2 text-xs text-white/85">
                      <div className="flex items-start gap-2">
                        <Truck className="w-4 h-4 text-[#8DBF21] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{activeSite.accessInfo}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{activeSite.hours}</span>
                      </div>
                    </div>

                    {/* Boutons d'action directes pour lancer l'itinéraire */}
                    <div className="pt-3 border-t border-white/15 space-y-2.5">
                      <div className="text-[11px] uppercase font-bold text-white/70 tracking-wider">
                        Calculer l&apos;itinéraire immédiat :
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a
                          href={activeSite.googleMapsDirUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#8DBF21] hover:bg-[#7ba81b] text-white text-xs font-bold shadow-lg shadow-black/20 hover:shadow-xl transition-all"
                        >
                          <Navigation className="w-4 h-4 flex-shrink-0" />
                          <span>Itinéraire Google Maps</span>
                        </a>

                        <a
                          href={activeSite.wazeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 backdrop-blur-sm transition-all"
                        >
                          <Compass className="w-4 h-4 flex-shrink-0" />
                          <span>Guidage Waze</span>
                        </a>
                      </div>

                      {copiedCode && (
                        <div className="text-center text-[11px] text-[#8DBF21] font-bold py-1 animate-fade-in">
                          Adresse copiée dans le presse-papier !
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Colonne Droite : Carte Interactive Haute Résolution (7 colonnes) */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-slate-900 flex flex-col">
                {/* Iframe OpenStreetMap haute performance, réactive et interactive */}
                <iframe
                  title={activeSite ? `Carte - ${activeSite.name}` : "Carte générale des 2 sites Sénégal Inox à Dakar"}
                  src={activeSite ? activeSite.osmEmbedUrl : OVERVIEW_OSM_URL}
                  className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
                  loading="lazy"
                />

                {/* Badge supérieur d'état en direct avec accès rapide */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-[#8DBF21] animate-ping" />
                    <span>
                      {activeSite
                        ? `Dakar • ${activeSite.tabLabel}`
                        : "Dakar, Sénégal • 2 Emplacements Actifs"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pointer-events-auto">
                    {activeSiteKey === "all" ? (
                      <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md p-1 rounded-full border border-white/20 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setActiveSiteKey("bureau")}
                          className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#8DBF21] text-white transition-colors"
                        >
                          1. Siège
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveSiteKey("atelier")}
                          className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#8DBF21] text-white transition-colors"
                        >
                          2. Atelier
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveSiteKey("all")}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold shadow-lg transition-colors border border-white/30"
                      >
                        <span>Vue des 2 sites</span>
                      </button>
                    )}

                    <a
                      href={
                        activeSite
                          ? activeSite.googleMapsDirUrl
                          : "https://www.google.com/maps/search/?api=1&query=Senegal+Inox+Dakar"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0082C1] hover:bg-[#006EA6] text-white text-xs font-bold shadow-lg transition-colors border border-white/30"
                    >
                      <span>Plein écran</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Barre d'information inférieure sur la carte */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8DBF21] flex-shrink-0" />
                    <span className="font-semibold text-white/90">
                      {activeSite ? (
                        <>
                          GPS certifié : <span className="font-mono text-[#8DBF21]">{activeSite.plusCode}</span> ({activeSite.coords.lat.toFixed(4)}° N, {Math.abs(activeSite.coords.lng).toFixed(4)}° W)
                        </>
                      ) : (
                        <>
                          2 sites d&apos;intervention reliés par la rocade (2,3 km • ~6 min)
                        </>
                      )}
                    </span>
                  </div>
                  <a
                    href={
                      activeSite
                        ? activeSite.googleMapsDirUrl
                        : SITES_DATA.bureau.googleMapsDirUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#8DBF21] hover:underline flex items-center gap-1"
                  >
                    <span>Lancer le guidage GPS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3. Barre Inférieure (Copyright, Créé par creativ_tech, Mentions légales & Réseaux) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80 border-t border-white/20">
          <div>
            &copy; {currentYear} <span className="text-white font-bold">{companyData.corporateName}</span>. Tous droits réservés.
          </div>

          {/* Crédit de création - creativ_tech */}
          <div className="flex items-center gap-1.5 text-xs text-white/85">
            <span>Créé par</span>
            <a
              href="https://creativtechsn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#8DBF21] hover:text-white transition-colors group bg-black/20 hover:bg-black/35 px-2.5 py-1 rounded-full border border-white/15"
              title="Visiter le site de creativ_tech"
            >
              <span>creativ_tech</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-white/75">
              Immatriculation RCCM &amp; NINEA conforme
            </span>
            <a
              href="https://www.linkedin.com/company/s%C3%A9n%C3%A9gal-inox-sarl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-[#8DBF21] transition-colors"
              aria-label="Profil LinkedIn officiel Sénégal Inox"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.67 1.67 0 0 0 1.67-1.65c0-.92-.75-1.66-1.67-1.66Z" />
              </svg>
              <span className="font-semibold">LinkedIn Officiel</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
