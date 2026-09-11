"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Wrench,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { companyData } from "@/data/company";
import { MECHANICAL_EASE } from "@/components/ui/MaskReveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    specialty: "chaudronnerie",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Protection anti-bot : si le champ honeypot invisible est rempli, on ignore silencieusement
    if (honeypot) return;

    // Nettoyage et validation des entrées
    const sanitizedData = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      specialty: formData.specialty,
      message: formData.message.trim(),
    };

    if (!sanitizedData.name || !sanitizedData.email) return;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-light scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête avec animation de gauche à droite */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: MECHANICAL_EASE }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
            <span className="w-6 h-0.5 bg-brand-blue" />
            <span>Consultation & Chiffrage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight leading-tight">
            Contactez notre direction technique et commerciale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Pour une étude de faisabilité, un chiffrage de plans ou une intervention d&apos;urgence, nos équipes d&apos;ingénieurs et de chargés d&apos;affaires vous répondent sous 24h ouvrées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne Formulaire Devis B2B (Arrive de gauche à droite) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: MECHANICAL_EASE }}
            className="lg:col-span-7 bg-white rounded-2xl border border-steel p-8 sm:p-10 shadow-sm"
          >
            <h3 className="text-xl font-bold text-dark mb-2">
              Demande d&apos;Étude & Devis
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Tous les champs marqués d&apos;une astérisque (*) sont requis pour l&apos;instruction technique.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-brand-green/10 border border-brand-green/30 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-dark">
                  Demande transmise avec succès
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Votre dossier a été enregistré et transmis à notre direction technique. Un chargé d&apos;affaires prendra contact avec vous dans les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-white border border-steel text-sm font-semibold text-dark hover:bg-slate-light"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot invisible anti-bot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="organization_confirm"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="M. / Mme Nom & Prénom"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Société / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Raison sociale de l'entreprise"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Adresse Email professionnelle *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@entreprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Téléphone direct *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+221 ..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Pôle industriel concerné *
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40 font-medium"
                  >
                    <option value="chaudronnerie">Chaudronnerie & Cuves sous pression</option>
                    <option value="charpente-metallique">Charpente Métallique & Hangars</option>
                    <option value="tuyauterie-industrielle">Tuyauterie Industrielle & Lignes de process</option>
                    <option value="construction-reparation-navale">Construction & Réparation Navale</option>
                    <option value="decoration-haut-standing">Décoration Haut Standing & Inox d&apos;art</option>
                    <option value="autre">Autre projet / Consultation générale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Description du besoin & spécifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez les dimensions, fluides, nuances de métal (ex: Inox 316L, acier carbone), lieu d'intervention et délais envisagés..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-steel focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm text-dark bg-slate-light/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre le dossier pour chiffrage</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Colonne Coordonnées Officielles & Recrutement (Arrive de gauche avec délai) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: MECHANICAL_EASE }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Boîte Adresses */}
            <div className="bg-white rounded-2xl border border-steel p-6 space-y-4 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-dark border-l-2 border-brand-blue pl-2.5">
                Nos Implantations Physiques
              </h4>

              {/* Siège Bourguiba */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2 text-dark font-bold">
                  <Building className="w-4 h-4 text-brand-blue" />
                  <span>Siège Administratif & Bureau</span>
                </div>
                <p className="text-slate-600 pl-6">
                  {companyData.locations.bureau.address}
                </p>
                <div className="pl-6 text-[11px] font-mono text-brand-blue font-bold">
                  Plus Code : {companyData.locations.bureau.plusCode} • {companyData.locations.bureau.city}
                </div>
              </div>

              {/* Atelier Colobane */}
              <div className="space-y-1 text-xs border-t border-steel pt-3">
                <div className="flex items-center gap-2 text-dark font-bold">
                  <Wrench className="w-4 h-4 text-brand-green" />
                  <span>Atelier Chaudronnerie & Usinage</span>
                </div>
                <p className="text-slate-600 pl-6">
                  {companyData.locations.atelier.address}
                </p>
                <div className="pl-6 text-[11px] text-slate-500">
                  {companyData.locations.atelier.city}, {companyData.locations.atelier.country}
                </div>
              </div>
            </div>

            {/* Boîte Lignes directes */}
            <div className="bg-white rounded-2xl border border-steel p-6 space-y-3 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-dark border-l-2 border-brand-green pl-2.5">
                Lignes Directes
              </h4>

              <div className="space-y-2 text-xs">
                <a
                  href={`tel:${companyData.phones.standard.raw}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-light hover:bg-steel/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <div>
                    <div className="text-[10px] uppercase text-slate-400 font-semibold">Standard</div>
                    <div className="font-bold text-dark">{companyData.phones.standard.display}</div>
                  </div>
                </a>

                <a
                  href={`tel:${companyData.phones.commercial.raw}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-light hover:bg-steel/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  <div>
                    <div className="text-[10px] uppercase text-slate-400 font-semibold">Direction Commerciale</div>
                    <div className="font-bold text-dark">{companyData.phones.commercial.display}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-light hover:bg-steel/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <div>
                    <div className="text-[10px] uppercase text-slate-400 font-semibold">Courriel Officiel</div>
                    <div className="font-bold text-dark">{companyData.email}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Encart Recrutement / Offres d'emploi Officiel */}
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl border border-brand-blue/30 p-6 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                <Briefcase className="w-4 h-4" />
                <span>{companyData.recruitment.title}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {companyData.recruitment.description}
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${companyData.recruitment.email}?subject=Candidature%20Spontanee%20Senegal%20Inox`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
                >
                  <span>Postuler par email direct</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
