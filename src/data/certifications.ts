export interface CertificationItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  image: string;
  badge: string;
  date: string;
  details: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "qmos-sd-expert",
    title: "Qualification d'un Mode Opératoire de Soudage (QMOS)",
    category: "Norme & Procédé Industriel",
    issuer: "SD Expert",
    image: "/images/certifications/qmos-sd-expert.png",
    badge: "Norme NF EN 288-3",
    date: "29 Avril 2004",
    details: "Procès-verbal officiel attestant de la qualification des modes opératoires de soudage (QMOS/DEMOS) selon les exigences de la norme européenne NF EN 288-3.",
  },
  {
    id: "eiffel-pont-faidherbe",
    title: "Attestation de Réception de Fin de Travaux",
    category: "Ouvrage d'Art & Génie Civil",
    issuer: "EIFFEL Constructions Métalliques",
    image: "/images/certifications/eiffel-pont-faidherbe.png",
    badge: "Chantier Pont Faidherbe",
    date: "18 Mai 2010",
    details: "Attestation de fin de travaux pour la fabrication et la livraison des 4 pontons de manutention mécano-soudés pour le chantier historique du Pont Faidherbe à Saint-Louis.",
  },
  {
    id: "anam-agrement-naval",
    title: "Attestation d'Agrément Maintenance & Réparation Navales",
    category: "Affaires Maritimes & Naval",
    issuer: "ANAM (Ministère des Pêches & Économie Maritime)",
    image: "/images/certifications/anam-agrement-naval.png",
    badge: "Agrément d'État ANAM",
    date: "07 Décembre 2021",
    details: "Agrément officiel octroyé par l'Agence Nationale des Affaires Maritimes (ANAM) autorisant les travaux de chaudronnerie navale, tuyauterie et réparations portuaires.",
  },
  {
    id: "marine-nationale-defense",
    title: "Intervention d'Urgence & Précision – BPC Tonnerre",
    category: "Défense & Marine Nationale",
    issuer: "Ministère de la Défense (Marine Nationale)",
    image: "/images/certifications/marine-nationale-defense.png",
    badge: "Marine Nationale Française",
    date: "22 Mai 2008",
    details: "Félicitations officielles du commandement militaire pour la réfection urgente et les soudures de haute précision sur les collecteurs de gazole moteurs du porte-hélicoptères BPC Tonnerre.",
  },
  {
    id: "cotecna-port-dakar",
    title: "Attestation de Réalisation – Scanners Rayons X Port de Dakar",
    category: "Inspection Portuaire & Douanière",
    issuer: "COTECNA Inspection S.A",
    image: "/images/certifications/cotecna-port-dakar.png",
    badge: "Port Autonome de Dakar",
    date: "14 Mars 2011",
    details: "Certificat de pleine satisfaction délivré par la direction scanners de Cotecna pour l'assemblage et la fabrication des charpentes métalliques lourdes protégeant les scanners d'inspection au Port Autonome de Dakar.",
  },
  {
    id: "wartsila-senelec",
    title: "Attestation de Prestation – Centrale SENELEC Cap des Biches",
    category: "Énergie & Haute Température",
    issuer: "Wärtsilä West Africa",
    image: "/images/certifications/wartsila-senelec.png",
    badge: "Centrale SENELEC",
    date: "17 Avril 2012",
    details: "Attestation d'excellence pour les travaux industriels réalisés sur les chaudières de récupération et le réseau haute pression d'eau surchauffée de la centrale électrique.",
  },
];
