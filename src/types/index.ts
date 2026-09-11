export type SectorCategory =
  | "energie-btp-maritime"
  | "institutions"
  | "banques-finance"
  | "hotellerie-luxe";

export interface Partner {
  id: string;
  name: string;
  category: SectorCategory;
  categoryLabel: string;
  featured?: boolean;
  highlight?: string;
  logo?: string;
}

export interface RealisationTechnicalSpec {
  label: string;
  value: string;
}

export interface RealisationProject {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  bannerImage?: string;
  iconName: string;
  standards: string[];
  specs: RealisationTechnicalSpec[];
  keyCapabilities: string[];
  filterCategories?: { id: string; label: string }[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
    category?: string;
    badge?: string;
    specsSummary?: string;
  }[];
}

export interface CompanyLocation {
  type: "bureau" | "atelier";
  title: string;
  address: string;
  city: string;
  country: string;
  plusCode?: string;
  latitude?: number;
  longitude?: number;
}

export interface CompanyStats {
  foundationYear: number;
  projectsCount: number;
  contractsCount: number;
}

export interface CompanyData {
  corporateName: string;
  tradeName: string;
  tagline: string;
  baseline: string;
  stats: CompanyStats;
  locations: {
    bureau: CompanyLocation;
    atelier: CompanyLocation;
  };
  phones: {
    standard: {
      display: string;
      raw: string;
    };
    commercial: {
      display: string;
      raw: string;
      whatsappNumber: string;
    };
  };
  email: string;
  recruitment: {
    title: string;
    description: string;
    email: string;
  };
  qhse: {
    title: string;
    commitment: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
}
