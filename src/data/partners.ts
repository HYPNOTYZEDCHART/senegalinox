import { Partner, SectorCategory } from "@/types";

export const SECTORS: { id: SectorCategory; label: string; description: string }[] = [
  {
    id: "energie-btp-maritime",
    label: "Énergie, BTP & Maritime",
    description: "Grands comptes pétroliers, armateurs offshore, cimenteries et leaders du BTP ouest-africain.",
  },
  {
    id: "institutions",
    label: "Institutions & Corps d'État",
    description: "Ministères, corps militaires et administrations publiques sénégalaises.",
  },
  {
    id: "banques-finance",
    label: "Banques & Finance",
    description: "Établissements bancaires et organismes financiers de premier plan.",
  },
  {
    id: "hotellerie-luxe",
    label: "Hôtellerie & Haut Standing",
    description: "Complexes hôteliers de luxe, resorts balnéaires et résidences haut standing.",
  },
];

export const PARTNERS_DATA: Partner[] = [
  // Énergie, BTP & Maritime
  { id: "bp", name: "BP", category: "energie-btp-maritime", categoryLabel: "Énergie & Pétrole", featured: true, logo: "/logos/partenaires/bp.png" },
  { id: "saipem", name: "Saipem", category: "energie-btp-maritime", categoryLabel: "Ingénierie & Énergie Offshore", featured: true, logo: "/logos/partenaires/saipem.png" },
  { id: "eiffage-sn", name: "Eiffage Sénégal", category: "energie-btp-maritime", categoryLabel: "BTP & Infrastructures", featured: true, logo: "/logos/partenaires/eiffage-sn.png" },
  { id: "eiffage-gc", name: "Eiffage Génie Civil", category: "energie-btp-maritime", categoryLabel: "Génie Civil Lourd", featured: true, logo: "/logos/partenaires/eiffage-gc.png" },
  { id: "wartsila", name: "Wärtsilä", category: "energie-btp-maritime", categoryLabel: "Énergie & Propulsion Marine", featured: true, logo: "/logos/partenaires/wartsila.png" },
  { id: "bourbon", name: "Bourbon", category: "energie-btp-maritime", categoryLabel: "Services Maritimes Offshore", featured: true, logo: "/logos/partenaires/bourbon-blue.png" },
  { id: "peschaud", name: "Peschaud", category: "energie-btp-maritime", categoryLabel: "Logistique & Support Pétrolier", featured: true, logo: "/logos/partenaires/peschaud.png" },
  { id: "jifmar", name: "Jifmar Offshore Services", category: "energie-btp-maritime", categoryLabel: "Travaux Maritimes", featured: true, logo: "/logos/partenaires/jifmar.png" },
  { id: "semco", name: "Semco Maritime", category: "energie-btp-maritime", categoryLabel: "Maintenance Offshore", featured: true, logo: "/logos/partenaires/semco.png" },
  { id: "ambrey", name: "Ambrey", category: "energie-btp-maritime", categoryLabel: "Sécurité Maritime", featured: false, logo: "/logos/partenaires/ambrey.png" },
  { id: "seas-safety", name: "SEAS Safety Expertise", category: "energie-btp-maritime", categoryLabel: "Expertise Sécurité", featured: false, logo: "/logos/partenaires/seas-safety.png" },
  { id: "istamco", name: "Istamco", category: "energie-btp-maritime", categoryLabel: "Manutention Portuaire", featured: false, logo: "/logos/partenaires/istamco.png" },
  { id: "alpha-marine", name: "Alpha Marine", category: "energie-btp-maritime", categoryLabel: "Services Portuaires", featured: false, logo: "/logos/partenaires/alpha-marine.png" },
  { id: "sococim", name: "Sococim Industries", category: "energie-btp-maritime", categoryLabel: "Cimenterie & Industrie Lourde", featured: true, logo: "/logos/partenaires/sococim.png" },
  { id: "senico", name: "Senico", category: "energie-btp-maritime", categoryLabel: "Agroalimentaire Industriel", featured: true, logo: "/logos/partenaires/senico.png" },
  { id: "agroline", name: "Agroline", category: "energie-btp-maritime", categoryLabel: "Transformation Agro-industrielle", featured: false, logo: "/logos/partenaires/agroline.png" },

  // Institutions
  { id: "gendarmerie", name: "Gendarmerie Nationale Sénégal", category: "institutions", categoryLabel: "Forces de Sécurité", featured: true, logo: "/logos/partenaires/gendarmerie.png" },
  { id: "douanes", name: "Douanes Sénégalaises", category: "institutions", categoryLabel: "Administration Publique", featured: true, logo: "/logos/partenaires/douanes.png" },
  { id: "marine-nationale", name: "Marine Nationale", category: "institutions", categoryLabel: "Défense Nationale", featured: true, logo: "/logos/partenaires/marine-nationale.png" },
  { id: "sda", name: "Cabinet S.D.A.", category: "institutions", categoryLabel: "Audit & Conseil Technique", featured: false, logo: "/logos/partenaires/sda.png" },

  // Banques & Finance
  { id: "cbao", name: "CBAO", category: "banques-finance", categoryLabel: "Groupe Attijariwafa Bank", featured: true, logo: "/logos/partenaires/cbao.png" },
  { id: "wafa-lld", name: "Wafa LLD", category: "banques-finance", categoryLabel: "Financement & Flottes", featured: false, logo: "/logos/partenaires/wafa-lld.png" },

  // Hôtellerie & Luxe
  { id: "terrou-bi", name: "Terrou-Bi Dakar", category: "hotellerie-luxe", categoryLabel: "Complexe Hôtelier 5*", featured: true, logo: "/logos/partenaires/terrou-bi.png" },
  { id: "pullman", name: "Pullman Hotels", category: "hotellerie-luxe", categoryLabel: "Hôtellerie Internationale", featured: true, logo: "/logos/partenaires/pullman.png" },
  { id: "radisson-blu", name: "Radisson Blu", category: "hotellerie-luxe", categoryLabel: "Hôtel d'Affaires 5*", featured: true, logo: "/logos/partenaires/radisson-blu.png" },
  { id: "hyatt", name: "Hyatt", category: "hotellerie-luxe", categoryLabel: "Hôtellerie Haut Standing", featured: true, logo: "/logos/partenaires/hyatt.png" },
  { id: "hotel-lagon-2", name: "Hôtel Lagon 2", category: "hotellerie-luxe", categoryLabel: "Complexe Hôtelier Bord de Mer", featured: false, logo: "/logos/partenaires/hotel-lagon-2.png" },
  { id: "tombo", name: "Tombo", category: "hotellerie-luxe", categoryLabel: "Espaces & Restauration", featured: false, logo: "/logos/partenaires/tombo.png" },
  { id: "mdl", name: "MDL", category: "hotellerie-luxe", categoryLabel: "Luxe & Résidences", featured: false, logo: "/logos/partenaires/mdl.png" },
  { id: "kings-bar", name: "King's Bar", category: "hotellerie-luxe", categoryLabel: "Lounge & Hospitality", featured: false, logo: "/logos/partenaires/kings-bar.png" },
];

