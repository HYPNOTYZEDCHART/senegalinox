import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Flame,
  Building2,
  Pipette,
  Anchor,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  PhoneCall,
  Layers,
  FileCheck,
  Wrench,
} from "lucide-react";
import { REALISATIONS_DATA } from "@/data/realisations";
import { companyData } from "@/data/company";
import RealisationShowcase from "@/components/realisations/RealisationShowcase";

const ICONS_MAP: Record<string, React.ReactNode> = {
  chaudronnerie: <Flame className="w-8 h-8 text-brand-green" />,
  "charpente-metallique": <Building2 className="w-8 h-8 text-brand-green" />,
  "tuyauterie-industrielle": <Pipette className="w-8 h-8 text-brand-green" />,
  "construction-reparation-navale": <Anchor className="w-8 h-8 text-brand-green" />,
  "decoration-haut-standing": <Sparkles className="w-8 h-8 text-brand-green" />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REALISATIONS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = REALISATIONS_DATA.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Spécialité Industrielle | Sénégal Inox SAS",
    };
  }

  return {
    title: `${project.title} | Sénégal Inox Tech & Services`,
    description: project.shortDescription,
  };
}

export default async function RealisationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = REALISATIONS_DATA.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // Autres réalisations pour la navigation croisée
  const otherProjects = REALISATIONS_DATA.filter((item) => item.slug !== slug);

  return (
    <div className="w-full bg-white">
      {/* 1. En-tête & Bannière Thématique Industrielle (Inspiré du design L'Équipe) */}
      <section className="bg-white text-dark pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fil d'Ariane (Breadcrumb) */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-dark transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#services" className="hover:text-dark transition-colors">
              Nos Pôles Industriels
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-brand-green font-semibold">
              {project.title.split("&")[0].trim()}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green">
                <ShieldCheck className="w-4 h-4" />
                <span>Pôle Industriel Certifié • Sénégal Inox SAS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-dark uppercase leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
                {project.fullDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/demander-un-devis"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8DBF21] hover:bg-[#79A718] text-white text-sm font-bold shadow-md shadow-[#8DBF21]/20 transition-all active:scale-95"
                >
                  <span>Chiffrer un projet dans cette filière</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${companyData.phones.commercial.raw}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-dark text-sm font-semibold border border-steel transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-brand-green" />
                  <span>Direction commerciale (+221 77 197 81 81)</span>
                </a>
              </div>
            </div>

            {/* Encart visuel iconique */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-48 h-48 rounded-3xl bg-slate-50 border border-steel flex flex-col items-center justify-center p-6 text-center space-y-3 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/15 flex items-center justify-center">
                  {ICONS_MAP[project.slug] || <Flame className="w-8 h-8 text-brand-green" />}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-dark">
                  Haute Exigence
                </span>
                <span className="text-[11px] text-brand-green font-mono font-semibold">
                  Atelier & Sur Site
                </span>
              </div>
            </div>
          </div>

          {/* Bannière Image : Style L'Équipe, nette, sans voile sombre, sans texte par-dessus */}
          {(project.bannerImage || project.heroImage) && (
            <div className="mt-8 sm:mt-12 overflow-hidden">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-steel bg-slate-100">
                <Image
                  src={project.bannerImage || project.heroImage}
                  alt={project.title}
                  width={3072}
                  height={447}
                  priority
                  unoptimized={true}
                  className="w-full h-auto object-contain block"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 2. Spécifications Techniques & Normes */}
      <section className="py-16 sm:py-20 bg-slate-light border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Tableau des Spécifications (7 colonnes) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-steel p-8 shadow-sm space-y-6">
              <div className="border-b border-steel pb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-green">
                  Données Métallurgiques
                </span>
                <h2 className="text-2xl font-bold text-dark mt-1">
                  Spécifications & Capacités Techniques
                </h2>
              </div>

              <div className="divide-y divide-steel/60">
                {project.specs.map((spec, i) => (
                  <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:w-1/3">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-dark sm:w-2/3">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capacités clés */}
              <div className="pt-4 border-t border-steel space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Champs d&apos;application majeurs :
                </h3>
                <div className="space-y-2">
                  {project.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Normes & Assurance Qualité (5 colonnes) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-steel p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <FileCheck className="w-5 h-5 text-brand-green" />
                  <span className="uppercase tracking-wider text-xs">Normes & Codes de Construction</span>
                </div>

                <h3 className="text-xl font-bold text-dark">
                  Conformité Internationale
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Chaque étape de transformation fait l&apos;objet d&apos;un dossier constructif rigoureux (DMOS, QMOS, certificats de conformité matière 3.1) :
                </p>

                <div className="space-y-2.5 pt-2">
                  {project.standards.map((std, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-light border border-steel text-xs font-semibold text-dark flex items-start gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Encart atelier Colobane */}
              <div className="p-6 rounded-2xl bg-brand-green/5 border border-brand-green/20 space-y-3">
                <div className="flex items-center gap-2 text-dark font-bold text-sm">
                  <Wrench className="w-4 h-4 text-brand-green" />
                  <span>Fabrication locale à Dakar</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Toutes les pièces de chaudronnerie et ossatures sont préparées dans notre atelier de Colobane (Rocade Fann Bel Air) puis acheminées et montées par nos équipes sur tout le territoire national.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Galerie Photo & Ouvrages Réalisés */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RealisationShowcase
            items={project.gallery}
            categories={project.filterCategories || [{ id: "all", label: "Tous les ouvrages" }]}
            title={`Réalisations & Chantiers • ${project.title.split("&")[0].trim()}`}
            subtitle={`Explorez nos interventions et réalisations de référence en ${project.title.toLowerCase()} au Sénégal et dans la sous-région.`}
            badgeText={`Pôle d'Excellence • ${project.title.split("&")[0].trim()}`}
          />
        </div>
      </section>

      {/* 4. Navigation Croisée vers les autres Pôles */}
      <section className="py-16 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Poursuivre la découverte
              </span>
              <h3 className="text-xl font-bold text-dark">
                Autres Spécialités Industrielles
              </h3>
            </div>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline"
            >
              <span>Voir la synthèse de tous les services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/realisations/${item.slug}`}
                className="p-4 rounded-xl bg-white border border-steel hover:border-brand-green/50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-brand-green/10 transition-colors">
                    {ICONS_MAP[item.slug] || <Flame className="w-4 h-4 text-brand-green" />}
                  </div>
                  <h4 className="font-bold text-sm text-dark group-hover:text-brand-green transition-colors line-clamp-1">
                    {item.title.split("&")[0].trim()}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-steel/60 flex items-center justify-between text-xs font-bold text-brand-green">
                  <span>Dossier technique</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
