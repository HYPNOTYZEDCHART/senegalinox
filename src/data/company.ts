import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  corporateName: "Sénégal Inox SAS",
  tradeName: "Sénégal Inox Tech & Services",
  tagline: "Excellence industrielle & métallurgie de précision au Sénégal depuis 2003",
  baseline: "Partenaire de référence pour l'industrie lourde, le secteur maritime, le BTP et les institutions d'État.",
  stats: {
    foundationYear: 2003,
    projectsCount: 206,
    contractsCount: 870,
  },
  locations: {
    bureau: {
      type: "bureau",
      title: "Siège Administratif & Bureau d'Études",
      address: "Bourguiba, Immeuble Cheikh Abass Sall",
      city: "Dakar 10700",
      country: "Sénégal",
      plusCode: "PG2P+V8J",
      latitude: 14.7022073,
      longitude: -17.4642449,
    },
    atelier: {
      type: "atelier",
      title: "Atelier de Fabrication & Chaudronnerie",
      address: "Colobane Rocade Fann / Bel Air",
      city: "Dakar",
      country: "Sénégal",
      latitude: 14.6979227,
      longitude: -17.4427707,
    },
  },
  phones: {
    standard: {
      display: "+221 78 169 22 22",
      raw: "+221781692222",
    },
    commercial: {
      display: "+221 77 197 81 81",
      raw: "+221771978181",
      whatsappNumber: "221771978181",
    },
  },
  email: "contact@senegalinox.com",
  recruitment: {
    title: "Offres d'emploi",
    description: "Pour postuler, envoyez votre C.V à l'adresse e-mail suivante : contact@senegalinox.com",
    email: "contact@senegalinox.com",
  },
  qhse: {
    title: "Engagement Qualité, Hygiène, Sécurité & Environnement",
    commitment: "La sécurité de nos équipes et la rigueur d'exécution industrielle sont les piliers indissociables de chacun de nos chantiers.",
    pillars: [
      {
        title: "Objectif Zéro Accident",
        description: "Protocoles stricts d'EPI, plans de prévention systématiques et analyses de risques préalables à toute intervention sur site ou en atelier.",
      },
      {
        title: "Assurance Qualité & Conformité",
        description: "Contrôles non destructifs (CND), traçabilité rigoureuse des aciers et alliages (inconel, inox 316L, 304L, aciers carbone).",
      },
      {
        title: "Responsabilité Environnementale",
        description: "Gestion certifiée des déchets industriels, recyclage systématique des chutes métalliques et optimisation des procédés de décapage/passivation.",
      },
    ],
  },
};

export const WHATSAPP_CONFIG = {
  phone: companyData.phones.commercial.whatsappNumber,
  defaultMessage: "Bonjour, je souhaite échanger avec la direction commerciale de Sénégal Inox Tech & Services concernant un projet industriel.",
  tooltipText: "Échanger avec la direction commerciale",
};
