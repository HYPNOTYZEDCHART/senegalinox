import { RealisationProject } from "@/types";

export const REALISATIONS_DATA: RealisationProject[] = [
  {
    id: "chaudronnerie",
    slug: "chaudronnerie",
    title: "Chaudronnerie Industrielle & Métallurgie Lourde",
    shortDescription: "Conception, roulage, pliage et assemblage de cuves de stockage, cyclones, trémies et réservoirs sous pression en inox et acier.",
    fullDescription: "Sénégal Inox assure la fabrication et la rénovation d'ensembles chaudronnés complexes pour les secteurs pétrolier, minier, cimentier et agro-industriel. Grâce à notre parc machine performant et nos chaudronniers qualifiés, nous façonnons des pièces de fortes épaisseurs selon des tolérances millimétriques rigoureuses.",
    heroImage: "/images/realisations/chaudronnerie/hero.jpg",
    iconName: "Flame",
    standards: [
      "CODAP (Code français de construction des appareils à pression)",
      "ASME Section VIII Div 1 & 2",
      "ISO 3834-2 (Exigences de qualité en soudage)",
      "NF EN 13445 (Récipients sous pression non soumis à la flamme)",
      "API 650 (Réservoirs de stockage pétrolier)"
    ],
    specs: [
      { label: "Matériaux travaillés", value: "Inox 304L, 316L, 904L, Aciers Carbone (S235, S355), Alliages spéciaux" },
      { label: "Capacités de stockage", value: "Réservoirs jusqu'à 50 000 litres et cuves atmosphériques / sous pression" },
      { label: "Contrôles appliqués", value: "Ressuage (PT), Magnétoscopie (MT), Radiographie (RT) et Épreuve hydraulique" },
      { label: "Procédés de soudage", value: "TIG (141), MIG-MAG (131/135), ARC Électrode enrobée (111)" }
    ],
    keyCapabilities: [
      "Cuves de stockage d'hydrocarbures, de produits chimiques et d'eau industrielle",
      "Séparateurs, cyclones et filtres industriels pour cimenteries",
      "Trémies de dosage, gaines d'aération et conduits de fumées",
      "Remplacement de viroles et réfection de fonds bombés sur site"
    ],
    filterCategories: [
      { id: "all", label: "Tous les ouvrages" },
      { id: "silos", label: "Silos & Trémies" },
      { id: "reservoirs", label: "Réservoirs Hydrocarbures" },
      { id: "escaliers", label: "Tours d'Escaliers" },
      { id: "granulateurs", label: "Granulateurs & Mécano-Soudure" },
      { id: "chaudieres", label: "Chaudières & Serpentins Inox" },
      { id: "structures", label: "Structures Marines & Portuaires" },
    ],
    gallery: [
      // 1. Silos & Trémies
      {
        src: "/images/realisations/chaudronnerie/silo-structure-01.png",
        alt: "Silo conique sur structure porteuse",
        caption: "Silo conique de stockage industriel avec échelle de sécurité à crinoline et charpente porteuse en acier",
        category: "silos",
        badge: "Acier S355 / Peinture Époxy",
        specsSummary: "Hauteur 14m • Trémie conique renforcée"
      },
      {
        src: "/images/realisations/chaudronnerie/silo-cone-02.png",
        alt: "Cône de silo de grand diamètre",
        caption: "Façonnage et assemblage d'un cône de décharge renforcé pour silo cimentier",
        category: "silos",
        badge: "Tolérance Millimétrique",
        specsSummary: "Cintrage précis et nervures de rigidification"
      },
      {
        src: "/images/realisations/chaudronnerie/silo-viroles-03.png",
        alt: "Viroles métalliques de réservoirs",
        caption: "Roulage de viroles fortes épaisseurs et préparation des chanfreins de soudage",
        category: "silos",
        badge: "Roulage Forte Épaisseur",
        specsSummary: "Chanfreinage V et X • Contrôle par ressuage"
      },

      // 2. Réservoirs Hydrocarbures & Cuves
      {
        src: "/images/realisations/chaudronnerie/reservoir-hydrocarbure-01.png",
        alt: "Réservoir hydrocarbure en cours d'assemblage",
        caption: "Construction de bac de stockage d'hydrocarbures selon le code API 650",
        category: "reservoirs",
        badge: "Norme API 650",
        specsSummary: "Tôles de robe et fond à recouvrement soudé"
      },
      {
        src: "/images/realisations/chaudronnerie/reservoir-hydrocarbure-02.png",
        alt: "Soudage de virole de réservoir hydrocarbure",
        caption: "Assemblage circulaire et soudage multipasse sur bac de carburant industriel",
        category: "reservoirs",
        badge: "Épreuve Hydraulique",
        specsSummary: "Contrôles Non Destructifs (PT/RT 100%)"
      },
      {
        src: "/images/realisations/chaudronnerie/reservoir-hydrocarbure-03.png",
        alt: "Bac de stockage hydrocarbures terminé",
        caption: "Réservoir atmosphérique vertical pour carburants et hydrocarbures liquides",
        category: "reservoirs",
        badge: "Stockage Pétrolier",
        specsSummary: "Revêtement anticorrosion hydrocarbures"
      },
      {
        src: "/images/realisations/chaudronnerie/reservoir-zone-stockage.png",
        alt: "Zone de stockage et réservoirs industriels",
        caption: "Implantation et raccordement de bacs industriels en zone de rétention sécurisée",
        category: "reservoirs",
        badge: "Sécurité Environnementale",
        specsSummary: "Conformité bassins de rétention & évents"
      },

      // 3. Tours d'Escaliers & Passerelles
      {
        src: "/images/realisations/chaudronnerie/tour-escaliers-industrielle.png",
        alt: "Tour d'escaliers métallique industrielle",
        caption: "Fabrication et montage d'une tour d'escaliers hélicoïdale d'accès aux silos et réservoirs",
        category: "escaliers",
        badge: "Norme Sécurité NF E85-015",
        specsSummary: "Marches caillebotis crantées • Garde-corps avec plinthe"
      },

      // 4. Préfabrication Granulateurs & Mécano-Soudure
      {
        src: "/images/realisations/chaudronnerie/granulateur-prefabrication-01.png",
        alt: "Préfabrication de granulateur en atelier",
        caption: "Assemblage en atelier des couronnes et raidisseurs pour tambour de granulation",
        category: "granulateurs",
        badge: "Mécano-Soudure Lourde",
        specsSummary: "Usinage après soudage • Alignement laser"
      },
      {
        src: "/images/realisations/chaudronnerie/granulateur-couronne-02.png",
        alt: "Couronne renforcée pour granulateur",
        caption: "Soudage des goussets et nervures radiales sur bague de granulateur industriel",
        category: "granulateurs",
        badge: "Acier Anti-Abrasion",
        specsSummary: "Soudures en pleine pénétration (PQR/WPS)"
      },
      {
        src: "/images/realisations/chaudronnerie/granulateur-roulage-03.png",
        alt: "Roulage de tôle forte épaisseur",
        caption: "Cintrage et croquage de tôle forte épaisseur sur rouleuse hydraulique à l'atelier",
        category: "granulateurs",
        badge: "Atelier Colobane",
        specsSummary: "Croquage des bords • Tolérance circulaire < 2mm"
      },

      // 5. Chaudières & Serpentins Inox
      {
        src: "/images/realisations/chaudronnerie/serpentin-chauffe-inox.png",
        alt: "Serpentin de chauffe hélicoïdal en inox",
        caption: "Cintrage et soudage TIG d'un serpentin hélicoïdal en inox 316L pour échangeur thermique",
        category: "chaudieres",
        badge: "Inox 316L Alimentaire",
        specsSummary: "Cintrage continu sans écrasement • Épreuve hydro"
      },
      {
        src: "/images/realisations/chaudronnerie/cuve-inox-agitateur.png",
        alt: "Cuve de mélange en inox brossé avec fond conique",
        caption: "Fabrication d'une cuve de process en inox brossé avec trappe de visite autoclave et agitateur",
        category: "chaudieres",
        badge: "Finition Brossée Alimentaire",
        specsSummary: "Double enveloppe thermique • Agitateur motorisé"
      },
      {
        src: "/images/realisations/chaudronnerie/chaudiere-reparation-01.png",
        alt: "Réparation et retubage de chaudière industrielle",
        caption: "Remplacement du faisceau tubulaire et réfection des fonds bombés sous pression",
        category: "chaudieres",
        badge: "Code CODAP (Sous Pression)",
        specsSummary: "Dudgeonnage et soudage TIG orbital"
      },
      {
        src: "/images/realisations/chaudronnerie/chaudiere-tuyauterie-02.png",
        alt: "Collecteurs vapeur haute pression",
        caption: "Collecteurs de vapeur haute pression et liaisons chaudronnées sur site industriel",
        category: "chaudieres",
        badge: "Vapeur Haute Pression",
        specsSummary: "Calorifugeage et épreuve sous 25 bars"
      },

      // 6. Structures Métalliques & Portuaires
      {
        src: "/images/realisations/chaudronnerie/structure-portuaire-marine.png",
        alt: "Chantier maritime et portuaire à Dakar",
        caption: "Ouvrages chaudronnés et structures métalliques lourdes pour les quais du Port de Dakar",
        category: "structures",
        badge: "Port Autonome de Dakar",
        specsSummary: "Revêtement marin C5-M • Levage forte charge"
      },
      {
        src: "/images/realisations/chaudronnerie/structure-atelier-jaune.png",
        alt: "Structures mécano-soudées en atelier",
        caption: "Fabrication d'embases et cadres mécano-soudés de manutention et supportage lourd",
        category: "structures",
        badge: "Norme ISO 3834-2",
        specsSummary: "Contrôle géométrique 3D en atelier"
      },
      {
        src: "/images/realisations/chaudronnerie/structure-conduites-lourdes.png",
        alt: "Conduites et collecteurs industriels lourds",
        caption: "Préfabrication et alignement de collecteurs tubulaires de gros diamètre",
        category: "structures",
        badge: "Manifolds Industriels",
        specsSummary: "Brides à collerette • Épreuve d'étanchéité"
      },
      {
        src: "/images/realisations/chaudronnerie/structure-plateforme-circulaire.jpg",
        alt: "Plateforme circulaire avec garde-corps",
        caption: "Assemblage d'une plateforme d'intervention avec plancher caillebotis et plinthes de sécurité",
        category: "structures",
        badge: "Sécurité Travail en Hauteur",
        specsSummary: "Protection antichute intégrée"
      },
      {
        src: "/images/realisations/chaudronnerie/structure-soudeur-atelier.jpg",
        alt: "Soudeur chaudronnier hautement qualifié",
        caption: "Soudage de structures métalliques par nos ouvriers qualifiés (licence QMOS/DMOS)",
        category: "structures",
        badge: "Soudeurs Homologués",
        specsSummary: "Procédés TIG 141, MIG 135 & ARC 111"
      }
    ]
  },
  {
    id: "charpente-metallique",
    slug: "charpente-metallique",
    title: "Charpente Métallique & Ossatures Lourdes",
    shortDescription: "Études techniques, fabrication en atelier et levage sur site de structures métalliques, hangars industriels, passerelles et racks.",
    fullDescription: "De l'entrepôt logistique aux structures porteuses de sites miniers et portuaires, Sénégal Inox conçoit et érige des charpentes robustes capables d'endurer les conditions climatiques sévères et les charges d'exploitation élevées. Nos équipes maîtrisent l'ensemble de la chaîne : débit, perçage, assemblage, traitement anticorrosion et levage sécurisé.",
    heroImage: "/images/realisations/charpente-metallique/hero.jpg",
    iconName: "Building2",
    standards: [
      "Eurocode 3 (Calcul des structures en acier)",
      "NF EN 1090-2 (Exécution des structures en acier, classe EXC2/EXC3)",
      "ISO 12944 (Protection anticorrosion des structures en acier)",
      "Normes de sécurité levage et manutention lourde"
    ],
    specs: [
      { label: "Profilés utilisés", value: "IPE, IPN, HEA, HEB, UPN, tubes structuraux carrés et rectangulaires" },
      { label: "Portées réalisables", value: "Portées libres jusqu'à 40 mètres sans appui intermédiaire" },
      { label: "Traitement de surface", value: "Grenaillage SA 2.5, galvanisation à chaud, peinture époxy polyuréthane" },
      { label: "Méthode d'assemblage", value: "Boulonnerie HR (Haute Résistance) et soudage structurel agréé" }
    ],
    keyCapabilities: [
      "Bâtiments industriels, hangars de stockage et auvents logistiques",
      "Passerelles piétonnes et d'accès technique sécurisées avec caillebotis",
      "Racks de stockage industriels et structures de support tuyauterie (pipe-racks)",
      "Escaliers industriels hélicoïdaux et droits avec garde-corps normés"
    ],
    filterCategories: [
      { id: "all", label: "Toutes les structures" },
      { id: "hangars", label: "Hangars & Bâtiments" },
      { id: "passerelles", label: "Passerelles & Accès" },
      { id: "racks", label: "Racks & Pipe-Racks" },
      { id: "ossatures", label: "Ossatures Spéciales" }
    ],
    gallery: [
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-01.jpg",
        alt: "Hangar industriel et structure porteuse à Dakar",
        caption: "Montage sur site d'une charpente métallique grande portée pour entrepôt logistique",
        category: "hangars",
        badge: "Eurocode 3 / Portée 30m",
        specsSummary: "Portée libre sans appui intermédiaire • Levage grue"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-02.png",
        alt: "Fermes métalliques et charpente en atelier",
        caption: "Préfabrication et assemblage de fermes métalliques triangulées à l'atelier de Colobane",
        category: "hangars",
        badge: "Atelier Colobane",
        specsSummary: "Assemblage boulonné HR • Traitement antirouille"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-03.png",
        alt: "Passerelle technique industrielle galvanisée",
        caption: "Passerelle de circulation technique avec plancher caillebotis et garde-corps de sécurité",
        category: "passerelles",
        badge: "Galvanisation à Chaud",
        specsSummary: "Plancher caillebotis cranté • Conforme NF E85-015"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-04.png",
        alt: "Structure de supportage lourd et pipe-rack",
        caption: "Ossature métallique lourde pour le supportage de réseaux de conduites et tuyauteries",
        category: "racks",
        badge: "Pipe-Rack Lourd",
        specsSummary: "Profilés HEB/IPE • Haute résistance aux charges"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-05.png",
        alt: "Poutres mécano-soudées et poteaux métalliques",
        caption: "Fabrication de poteaux articulés et portiques mécano-soudés avec goussets de renfort",
        category: "ossatures",
        badge: "Classe EXC2 / EXC3",
        specsSummary: "Soudage d'angles et contrôles magnétoscopiques"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-06.png",
        alt: "Montage sur site et platines d'ancrage",
        caption: "Implantation et calage des platines d'ancrage sur massif béton armé",
        category: "hangars",
        badge: "Montage sur Site",
        specsSummary: "Scellement chimique et tiges filetées classe 8.8"
      },
      {
        src: "/images/realisations/charpente-metallique/charpente-metallique-photo-07.png",
        alt: "Vue d'ensemble ossature achevée",
        caption: "Contrôle géométrique final et récolement des axes de la structure métallique",
        category: "ossatures",
        badge: "Clés en Main",
        specsSummary: "Tolérance d'alignement laser < 3mm"
      }
    ]
  },
  {
    id: "tuyauterie-industrielle",
    slug: "tuyauterie-industrielle",
    title: "Tuyauterie Industrielle & Lignes Sous Pression",
    shortDescription: "Préfabrication en atelier et montage sur site de réseaux de tuyauterie pour fluides pétroliers, gaz, vapeur, eau industrielle et chimie.",
    fullDescription: "La tuyauterie industrielle exige une précision sans compromis pour garantir l'étanchéité absolue et la longévité des installations sous contraintes thermiques et chimiques. Sénégal Inox mobilise des tuyauteurs et soudeurs qualifiés (QMOS/QS) pour la réalisation de spools, clarinettes, manifolds et réseaux complexes pour les centrales thermiques Wärtsilä, la Sococim, Senico, Agroline et Semco.",
    heroImage: "/images/realisations/tuyauterie-industrielle/tuyauterie-card-trench.jpg",
    bannerImage: "/images/realisations/tuyauterie-industrielle/tuyauterie-banniere-bleue-hd.png",
    iconName: "Pipette",
    standards: [
      "ASME B31.3 (Process Piping - Tuyauterie de raffinerie et chimie)",
      "ASME B31.1 (Power Piping)",
      "NF EN 13480 (Tuyauteries industrielles métalliques)",
      "DESP 2014/68/UE (Directive Équipements Sous Pression)"
    ],
    specs: [
      { label: "Diamètres traités", value: "Du DN 15 (1/2\") au DN 1200 (48\")" },
      { label: "Classes de pression", value: "De la basse pression à Class 150, 300, 600 et plus" },
      { label: "Matériaux", value: "Acier carbone ASTM A106 Gr B, Inox 304L/316L, Duplex, Cupro-nickel" },
      { label: "Contrôles", value: "100% CND (Ressuage, Radio) selon spécifications contractuelles" }
    ],
    keyCapabilities: [
      "Préfabrication de spools et manifolds en atelier avec traçabilité matière",
      "Lignes de transfert d'hydrocarbures, de fuel lourd et de bitume chaud",
      "Réseaux vapeur haute pression, condensats et utilités d'usines",
      "Réseaux d'eau glacée, aéroréfrigérants et process agroalimentaire (Inox 316L)"
    ],
    filterCategories: [
      { id: "all", label: "Tous les réseaux" },
      { id: "spools", label: "Spools & Clarinettes Inox" },
      { id: "petrole", label: "Lignes Pétrolières & Fuel" },
      { id: "vapeur", label: "Vapeur Haute Pression" },
      { id: "usines", label: "Process Usines & Agro" }
    ],
    gallery: [
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-02.jpg",
        alt: "Clarinette de distribution et collecteur",
        caption: "Clarinette de distribution d'eau et fluides industriels avec tubulures piquées et brides à collerette",
        category: "spools",
        badge: "Code ASME B31.3",
        specsSummary: "Épreuve d'étanchéité sous pression hydraulique"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-03.jpg",
        alt: "Réseaux de tuyauterie en caniveau technique",
        caption: "Installation de conduites d'alimentation et distribution de fluides en caniveau technique (lignes industrielles sous pression)",
        category: "petrole",
        badge: "Caniveau Technique Industriel",
        specsSummary: "Conduites acier peintes • Brides PN40 & piquages d'utilités"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-04.png",
        alt: "Lignes de vapeur haute pression en usine",
        caption: "Réseau vapeur sous pression et retours de condensats en milieu industriel lourd",
        category: "vapeur",
        badge: "Vapeur Haute Pression",
        specsSummary: "Raccords forgés Class 3000 • Calorifugeage thermique"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-05.png",
        alt: "Tuyauteries process eau minérale et boissons",
        caption: "Installation de tuyauteries inox de process et cuves de stockage pour usines Semco & Senico",
        category: "usines",
        badge: "Semco / Senico",
        specsSummary: "Inox poli miroir agroalimentaire • Normes hygiéniques"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-06.png",
        alt: "Raccordements de vannes et manifolds",
        caption: "Collecteurs et manifolds avec vannes manuelles et motorisées sur circuit d'usine",
        category: "petrole",
        badge: "Manifolds Pétroliers",
        specsSummary: "Brides PN40 / Class 300 • Jointage haute étanchéité"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-07.png",
        alt: "Circuit de refroidissement et eau glacée",
        caption: "Pose de conduites de distribution d'eau glacée et raccordement des groupes froid Sococim",
        category: "usines",
        badge: "Sococim Eau Glacée",
        specsSummary: "Conduites calorifugées pare-vapeur anti-condensation"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-08.jpg",
        alt: "Tuyauterie process concentré de tomate",
        caption: "Lignes de transfert pour usine agro-industrielle Agroline (concentré de tomates et sauces)",
        category: "usines",
        badge: "Process Agroline",
        specsSummary: "Inox 316L avec raccords clamp démontables CIP/NEP"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-09.jpg",
        alt: "Lignes de pompage et vannes de régulation",
        caption: "Groupe motopompe et instrumentation de contrôle de pression et débit",
        category: "vapeur",
        badge: "Régulation & Pompage",
        specsSummary: "Manomètres et clapets anti-retour agréés"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-10-hd.jpg",
        alt: "Assemblage et calorifugeage thermique",
        caption: "Travaux d'isolation thermique par laine de roche et tôle de protection aluminium",
        category: "vapeur",
        badge: "Calorifugeage Thermique",
        specsSummary: "Réduction des déperditions d'énergie et sécurité opérateurs"
      },
      {
        src: "/images/realisations/tuyauterie-industrielle/tuyauterie-industrielle-photo-11.png",
        alt: "Vue générale réseaux d'utilités industrielles",
        caption: "Préfabrication d'un ensemble complet de spools avec traçabilité matière et dossier constructif",
        category: "spools",
        badge: "Traçabilité Matière 3.1",
        specsSummary: "Cahier de soudage DMOS/QMOS • Épreuves hydrauliques"
      }
    ]
  },
  {
    id: "construction-reparation-navale",
    slug: "construction-reparation-navale",
    title: "Construction & Réparation Navale",
    shortDescription: "Interventions d'urgence et carénages programmés sur navires de servitude, remorqueurs, barges et unités offshore dans le port de Dakar.",
    fullDescription: "Positionnée au carrefour des routes maritimes atlantiques au port de Dakar, Sénégal Inox est le partenaire privilégié des armateurs, sociétés d'assistance offshore, de la Marine Nationale sénégalaise et de la Marine Nationale française. Nous réalisons les travaux de coque, de rechargement, de tuyauterie marine et de chaudronnerie navale sous agréments des sociétés de classification.",
    heroImage: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-02.png",
    bannerImage: "/images/realisations/construction-reparation-navale/navale-banniere-hd.png",
    iconName: "Anchor",
    standards: [
      "Bureau Veritas (BV) Marine & Offshore Rules",
      "Lloyd's Register / DNV Classification Standards",
      "Règlements de la Marine Nationale",
      "Normes SOLAS & MARPOL"
    ],
    specs: [
      { label: "Types de navires", value: "Remorqueurs, Supply vessels (AHTS/PSV), Barges, Chalutiers, Patrouilleurs" },
      { label: "Interventions", value: "À quai, en cale sèche ou en rade au large de Dakar (24h/7j)" },
      { label: "Matériaux certifiés", value: "Tôles navales Grade A, AH36, Inox marin, Alliages aluminium 5083" },
      { label: "Certifications soudeurs", value: "Soudeurs qualifiés BV / DNV toutes positions (6G)" }
    ],
    keyCapabilities: [
      "Changement de bordés de coque, varangues et renforts structurels",
      "Réfection de tuyauteries de ballast, d'eau de mer (cupro-nickel) et de combustible",
      "Fabrication et réparation de bâtis moteurs, safrans et apparaux de mouillage",
      "Fabrication de barges de chantier lourd (Pont Faidherbe, Vinci Énergies)"
    ],
    filterCategories: [
      { id: "all", label: "Toutes les interventions" },
      { id: "carenage", label: "Cale Sèche & Carénage" },
      { id: "coque", label: "Travaux de Coque & Soudure" },
      { id: "tuyauterie-marine", label: "Tuyauterie Marine Cupro-Nickel" },
      { id: "barges", label: "Barges & Équipements Maritimes" }
    ],
    gallery: [
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-02.png",
        alt: "Remplacement de tôles de fond de coque",
        caption: "Découpe par oxycoupage et rechargement de tôles navales Grade A sur coque de navire",
        category: "coque",
        badge: "Acier Naval Grade A",
        specsSummary: "Soudage multipasse agréé société de classification"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-03.png",
        alt: "Intervention sur navire de servitude offshore",
        caption: "Travaux de maintenance mécanique et chaudronnée sur navire supply offshore en escale",
        category: "carenage",
        badge: "Offshore Port de Dakar",
        specsSummary: "Disponibilité intervention d'urgence 24h/7j"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-04.png",
        alt: "Tuyauterie cupro-nickel eau de mer",
        caption: "Rénovation intégrale du circuit de refroidissement des moteurs marins en alliage cupro-nickel",
        category: "tuyauterie-marine",
        badge: "Cupro-Nickel CuNi 90/10",
        specsSummary: "Résistance exceptionnelle à la corrosion saline"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-05.png",
        alt: "Soudage sur apparaux de pont et bittes d'amarrage",
        caption: "Fabrication et renforcement de bittes d'amarrage, chaumards et guindeaux de mouillage",
        category: "coque",
        badge: "Soudeurs Homologués 6G",
        specsSummary: "Soudage haute pénétration sur apparaux de pont"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-06.png",
        alt: "Réparation navires amiraux Kédougou & Ndiambour",
        caption: "Réfection structurelle des patrouilleurs de la Marine Nationale sénégalaise suite à avarie en mer",
        category: "coque",
        badge: "Marine Nationale Sénégalaise",
        specsSummary: "Navires Kédougou & Ndiambour • Reprise bordés et membrures"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-07.png",
        alt: "Fabrication de safrans inox pour patrouilleurs",
        caption: "Usinage et fabrication de 6 safrans en inox massif pour la Marine Ivoirienne (escorteurs 30m)",
        category: "barges",
        badge: "Marine Ivoirienne",
        specsSummary: "6 safrans inox usinés avec paliers bronze autolubrifiants"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-08.png",
        alt: "Fabrication de barge motorisée en acier",
        caption: "Construction navale d'une barge de transport motorisée en acier de 12m x 6m pour Vinci Énergies (Saloum)",
        category: "barges",
        badge: "Vinci Énergies (Saloum)",
        specsSummary: "Barge de charge utile 25T pour îles du Saloum"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-09.png",
        alt: "Barges de chantier fluvial Pont Faidherbe",
        caption: "Construction de 4 barges lourdes de 30m x 12m pour les travaux de réhabilitation du Pont Faidherbe à Saint-Louis",
        category: "barges",
        badge: "Pont Faidherbe Saint-Louis",
        specsSummary: "4 barges 30m x 12m conçues et assemblées pour le chantier"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-10.png",
        alt: "BPC Tonnerre en escale militaire à Dakar",
        caption: "Intervention technique sur le Bâtiment de Projection et de Commandement (BPC) Tonnerre de la Marine française",
        category: "carenage",
        badge: "Marine Nationale Française",
        specsSummary: "Interventions chaudronnées et mécaniques à quai"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-11.png",
        alt: "Remplacement de varangues et renforts de cale",
        caption: "Remplacement de membrures internes corrodées et reprise des fonds de cale",
        category: "coque",
        badge: "Contrôle US Épaisseurs",
        specsSummary: "Remplacement préventif et conformité franc-bord"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-12.png",
        alt: "Collecteurs d'échappement et lignes de ballast",
        caption: "Tuyauteries marines sous pression pour transfert de combustible et assèchement des cales",
        category: "tuyauterie-marine",
        badge: "Tuyauterie Navale",
        specsSummary: "Liaisons souples et collecteurs traités anticorrosion marine"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-13-hd.jpg",
        alt: "Bâti moteur mécano-soudé et alignement",
        caption: "Conception et calage de socle moteur marin avec contrôle du lignage de propulsion",
        category: "barges",
        badge: "Lignage Propulsion",
        specsSummary: "Tolérance au comparateur < 0,05mm"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-14.jpg",
        alt: "Réfection de gouvernail et bagues de mèche",
        caption: "Démontage de safran, réfection des bagues synthétiques et épreuve de résistance",
        category: "barges",
        badge: "Gouvernail & Mèche",
        specsSummary: "Usinage de précision et graissage sous pression"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-15-hd.jpg",
        alt: "Épreuve d'étanchéité compartiments étanches",
        caption: "Contrôle d'étanchéité à l'air et au ressuage des cloisons étanches et des doubles-fonds",
        category: "coque",
        badge: "Normes SOLAS / IMO",
        specsSummary: "Épreuve d'étanchéité certifiée par expert maritime"
      },
      {
        src: "/images/realisations/construction-reparation-navale/construction-reparation-navale-photo-16.png",
        alt: "Manutention navires et mise à l'eau au Port",
        caption: "Manutention sécurisée et mise sur ber de vedettes maritimes jusqu'à 13 mètres et 10 tonnes",
        category: "carenage",
        badge: "Manutention 10T",
        specsSummary: "Équipements de levage et sangles de manutention conformes"
      }
    ]
  },
  {
    id: "decoration-haut-standing",
    slug: "decoration-haut-standing",
    title: "Décoration Métallique Haut Standing & Agencement Inox",
    shortDescription: "Métallerie d'art, garde-corps design, habillages architecturaux inox/verre et mobiliers d'exception pour hôtels de luxe et résidences privées.",
    fullDescription: "Alliant savoir-faire d'orfèvre métallurgique et finitions contemporaines, Sénégal Inox façonne l'acier inoxydable poli miroir ou brossé pour sublimer les projets architecturaux les plus prestigieux du Sénégal (Radisson Blu, Pullman, Hyatt, Atrium Center, Lagon II, Attijariwafa Bank, et la sculpture de la Cour de Cassation).",
    heroImage: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-02.png",
    bannerImage: "/images/realisations/decoration-haut-standing/decoration-banniere-hd.png",
    iconName: "Sparkles",
    standards: [
      "Norme NF P01-012 & P01-013 (Dimensions et essais des garde-corps)",
      "Finitions inox brossé grain 220 / 320 et poli miroir qualité marine",
      "Vitrage feuilleté trempé de sécurité conforme DTU 39"
    ],
    specs: [
      { label: "Nuances d'inox", value: "Inox 316L résistant à la corrosion marine saline de Dakar" },
      { label: "Finitions de surface", value: "Brossé satiné, poli miroir, thermolaquage architectural, sablage fin" },
      { label: "Associations matières", value: "Verre trempé/feuilleté, bois noble teck/iroko, éclairage LED intégré" },
      { label: "Types de projets", value: "Hôtels 5 étoiles, banques de prestige, sièges sociaux et villas de luxe" }
    ],
    keyCapabilities: [
      "Garde-corps inox 316L avec remplissage verre clair ou fumé pour balcons et terrasses bord de mer",
      "Escaliers suspendus contemporains hélicoïdaux ou limon central en inox brossé (Radisson, Pullman)",
      "Portails monumentaux design, brise-soleil et claustras métalliques découpés au laser",
      "Mobilier d'accueil sur-mesure, banques de réception, comptoirs en laiton et toitures inox monumentales"
    ],
    filterCategories: [
      { id: "all", label: "Toutes les créations" },
      { id: "garde-corps", label: "Garde-corps Inox & Verre" },
      { id: "escaliers", label: "Escaliers Contemporains" },
      { id: "agencement", label: "Agencement Hôtelier & Bar" },
      { id: "architectural", label: "Structures & Toitures Inox" }
    ],
    gallery: [
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-02.png",
        alt: "Balustrades design pour agences bancaires",
        caption: "Garde-corps intérieurs en inox brossé et verre de sécurité installés dans toutes les agences Attijariwafa Bank de Dakar",
        category: "garde-corps",
        badge: "Attijariwafa Bank",
        specsSummary: "Conforme aux normes de sécurité ERP NF P01-012"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-03.png",
        alt: "Escalier hélicoïdal contemporain suspendu",
        caption: "Fabrication d'un escalier monumental hélicoïdal suspendu avec limon central en acier brossé (Hôtel Pullman)",
        category: "escaliers",
        badge: "Hôtel Pullman Dakar",
        specsSummary: "Limon hélicoïdal continu • Marches autoporteuses"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-04.png",
        alt: "Escaliers autoportants Atrium Center",
        caption: "Escaliers suspendus design et charpente architecturale pour le complexe Atrium Center",
        category: "escaliers",
        badge: "Atrium Center Dakar",
        specsSummary: "Structure métallique aérienne et finitions inox d'art"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-05.png",
        alt: "Première toiture tout inox de 1200 m² à Dakar",
        caption: "Conception et pose de la première toiture intégrale tout inox 316L réalisée à Dakar (Complexe CCS)",
        category: "architectural",
        badge: "Toiture Tout Inox 1200 m²",
        specsSummary: "Inox 316L étanche • Première référence nationale à Dakar"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-06.jpg",
        alt: "Sculpture monumentale de la Cour de Cassation",
        caption: "Création artistique de la Main Géante monumentale pour la Cour de Cassation (ANOCI)",
        category: "architectural",
        badge: "Sculpture ANOCI",
        specsSummary: "Sculpture monumentale en acier et inox façonné à la main"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-07.jpg",
        alt: "Bar Le Kings et comptoirs en laiton",
        caption: "Travaux d'agencement sur mesure, façonnage de laiton, zinc et inox pour bars et restaurants de prestige",
        category: "agencement",
        badge: "Bar Le Kings & CBAO",
        specsSummary: "Métallerie d'art sur laiton poli et zinc d'ornement"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-08.jpg",
        alt: "Escaliers et balustrades Hôtel Hyatt",
        caption: "Ensemble garde-corps et mains courantes inox profilées pour l'Hôtel Hyatt Dakar",
        category: "escaliers",
        badge: "Hôtel Hyatt Dakar",
        specsSummary: "Remplissage verre feuilleté et fixations invisibles"
      },
      {
        src: "/images/realisations/decoration-haut-standing/decoration-haut-standing-photo-09.png",
        alt: "Colonne centrale sculptée et hall d'accueil",
        caption: "Habillage décoratif de la colonne centrale du lobby, cages d'ascenseurs et enseignes (Hôtel Pullman)",
        category: "agencement",
        badge: "Hôtel Pullman Lobby",
        specsSummary: "Design architectural contemporain et reflets inox brossé"
      }
    ]
  }
];
