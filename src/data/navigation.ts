export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Nos Services",
    href: "/#services",
    isAnchor: true,
  },
  {
    label: "Réalisations",
    href: "/realisations/chaudronnerie",
    children: [
      {
        label: "Chaudronnerie",
        href: "/realisations/chaudronnerie",
        description: "Cuves, trémies, réservoirs et appareils sous pression",
      },
      {
        label: "Charpente Métallique",
        href: "/realisations/charpente-metallique",
        description: "Hangars, structures lourdes, passerelles et ossatures",
      },
      {
        label: "Tuyauterie Industrielle",
        href: "/realisations/tuyauterie-industrielle",
        description: "Réseaux sous pression, vapeur, gaz et hydrocarbures",
      },
      {
        label: "Construction & Réparation Navale",
        href: "/realisations/construction-reparation-navale",
        description: "Coques, carénages et interventions portuaires à Dakar",
      },
      {
        label: "Décoration Haut Standing",
        href: "/realisations/decoration-haut-standing",
        description: "Inox architectural, garde-corps et agencement de luxe",
      },
    ],
  },
  {
    label: "Nos Références",
    href: "/nos-references",
  },
  {
    label: "L'Équipe",
    href: "/equipe",
  },
  {
    label: "Contact & Devis",
    href: "/#contact",
    isAnchor: true,
  },
];
