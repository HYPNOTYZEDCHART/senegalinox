"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Flame,
  Building2,
  Pipette,
  Anchor,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { companyData } from "@/data/company";
import { MAIN_NAVIGATION } from "@/data/navigation";

const SPECIALTY_ICONS: Record<string, React.ReactNode> = {
  chaudronnerie: <Flame className="w-4 h-4 text-brand-blue" />,
  "charpente-metallique": <Building2 className="w-4 h-4 text-brand-blue" />,
  "tuyauterie-industrielle": <Pipette className="w-4 h-4 text-brand-blue" />,
  "construction-reparation-navale": <Anchor className="w-4 h-4 text-brand-blue" />,
  "decoration-haut-standing": <Sparkles className="w-4 h-4 text-brand-blue" />,
};

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [realisationsOpen, setRealisationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRealisationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
    setRealisationsOpen(false);
  }, [pathname]);

  const getAnchorHref = (target: string) => {
    return pathname === "/" ? target : `/${target}`;
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-steel">
      {/* Top bar institutionnelle aux couleurs du logo */}
      <div className="bg-[#0082C1] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8DBF21]" />
              <span className="text-white/95">Dakar, Sénégal (Bourguiba & Colobane)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8DBF21]" />
              <span className="text-white font-medium">Expertise industrielle depuis 2003</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyData.phones.standard.raw}`}
              className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DBF21]" />
              <span>Standard : {companyData.phones.standard.display}</span>
            </a>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8DBF21]" />
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200 ${isScrolled ? "py-3" : "py-4"}`}>
        <div className="flex items-center justify-between">
          {/* Logo officiel */}
          <Link href="/" className="flex items-center group py-0.5" aria-label="Retour à l'accueil Sénégal Inox">
            <Image
              src="/images/logo.png"
              alt="Sénégal Inox Tech & Services"
              width={220}
              height={104}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAVIGATION.map((item) => {
              if (item.children) {
                const isRealisationActive = pathname.startsWith("/realisations");
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setRealisationsOpen(true)}
                    onMouseLeave={() => setRealisationsOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setRealisationsOpen(!realisationsOpen)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        isRealisationActive
                          ? "text-brand-blue bg-brand-blue/5"
                          : "text-dark/80 hover:text-brand-blue hover:bg-slate-light"
                      }`}
                      aria-expanded={realisationsOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          realisationsOpen ? "rotate-180 text-brand-blue" : ""
                        }`}
                      />
                    </button>

                    {/* Menu déroulant Réalisations */}
                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                        realisationsOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-steel p-2 space-y-1">
                        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-steel/60">
                          Pôles d&apos;expertise industrielle
                        </div>
                        {item.children.map((sub) => {
                          const slug = sub.href.split("/").pop() || "";
                          const isActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group ${
                                isActive
                                  ? "bg-brand-blue/10 text-brand-blue"
                                  : "hover:bg-slate-light text-dark"
                              }`}
                            >
                              <div className="p-2 rounded-md bg-slate-light group-hover:bg-white border border-steel/50 transition-colors">
                                {SPECIALTY_ICONS[slug] || <Flame className="w-4 h-4 text-brand-blue" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-dark group-hover:text-brand-blue transition-colors">
                                  {sub.label}
                                </p>
                                <p className="text-xs text-slate-500 line-clamp-1">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const href = item.isAnchor ? getAnchorHref(item.href) : item.href;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/5"
                      : "text-dark/80 hover:text-brand-blue hover:bg-slate-light"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Devis Button & Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={getAnchorHref("#contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#8DBF21] hover:bg-[#79A718] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-dark hover:bg-slate-light border border-steel"
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile dépliant */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-steel bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-dark hover:bg-slate-light rounded-lg"
            >
              Accueil
            </Link>
            <Link
              href={getAnchorHref("#services")}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-dark hover:bg-slate-light rounded-lg"
            >
              Nos Services
            </Link>

            {/* Sous-pages réalisations en accordéon mobile */}
            <div className="pt-2 pb-1">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Nos 5 Spécialités Industrielles
              </div>
              <div className="mt-2 space-y-1 pl-2 border-l-2 border-brand-blue/30">
                {MAIN_NAVIGATION.find((i) => i.children)?.children?.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-dark/90 hover:text-brand-blue rounded-md"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/nos-references"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-dark hover:bg-slate-light rounded-lg"
            >
              Nos Références & Partenaires
            </Link>
            <Link
              href="/equipe"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-dark hover:bg-slate-light rounded-lg"
            >
              L&apos;Équipe & Certifications
            </Link>
            <Link
              href={getAnchorHref("#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-base font-semibold text-[#8DBF21] bg-[#8DBF21]/10 rounded-lg flex items-center justify-between"
            >
              <span>Contact & Devis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Coordonnées rapides sur mobile */}
          <div className="pt-4 border-t border-steel space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <a href={`tel:${companyData.phones.commercial.raw}`} className="font-semibold text-dark">
                Commercial : {companyData.phones.commercial.display}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-green" />
              <span>{companyData.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
