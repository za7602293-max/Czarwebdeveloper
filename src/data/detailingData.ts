export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  duration: string;
  protection: string;
  image?: string;
  features: string[];
  popular?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  tagline: string;
  duration: string;
  isPopular?: boolean;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  stats: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const STUDIO_INFO = {
  name: "Apex Gloss",
  subtitle: "Car Detailing Studio",
  tagline: "Showroom Shine, Every Time.",
  phone: "+1 (555) 789-2739",
  phoneRaw: "15557892739",
  whatsappNumber: "15557892739",
  email: "concierge@apexglossstudio.com",
  address: "4800 Apex Motorsports Way, Suite 104, Los Angeles, CA 90028",
  hours: "Monday – Saturday: 8:00 AM – 7:00 PM | Sunday: By Appointment",
  instagram: "https://instagram.com/apexgloss.studio",
  instagramHandle: "@apexgloss.studio",
  mapCoordinates: "34.0983° N, 118.3267° W",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    shortDesc: "Molecular 9H/10H nanotechnology bonding directly to clear coat for hydrophobic gloss and multi-year environmental defense.",
    duration: "1–2 Days",
    protection: "3 to 7 Years Warranty",
    features: [
      "Ultra-hydrophobic self-cleaning surface",
      "Immunity against bird drops, tree sap & acid rain",
      "High UV resistance prevents clear coat oxidation",
      "Mirror-depth reflection with 9H hardness"
    ],
    popular: true
  },
  {
    id: "ppf",
    title: "PPF (Paint Protection Film)",
    shortDesc: "Military-grade optically clear thermoplastic urethane film that self-heals swirl marks and stops high-speed rock chips.",
    duration: "2–4 Days",
    protection: "10-Year Manufacturer Warranty",
    features: [
      "Instant heat-activated scratch self-healing",
      "Unmatched resistance against highway gravel & stone chips",
      "Available in Ultra-Gloss or Satin Stealth Matte",
      "Factory-edge wrapped for invisible precision seamline"
    ]
  },
  {
    id: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    shortDesc: "Hospital-grade interior restoration with pH-neutral steam decontamination, leather conditioning, and ozone odor elimination.",
    duration: "4–6 Hours",
    protection: "6-Month Anti-Microbial Shield",
    features: [
      "Fine leather deep cleansing & lanolin nourishment",
      "High-temp steam extraction for carpet & alcantara fibers",
      "Ozone cabin sterilization eliminating bacteria and odors",
      "UV satin sealant on all dash, console & door panels"
    ]
  },
  {
    id: "exterior-polishing",
    title: "Exterior Polishing & Paint Correction",
    shortDesc: "Precision multi-stage rotary and dual-action machine compounding removing 85%–95% of clear-coat swirls, water spots, and micro-marring.",
    duration: "6–10 Hours",
    protection: "High-Gloss Optical Clarity",
    features: [
      "Multi-stage digital paint depth gauge inspection",
      "Compound micro-scratch and swirl eradication",
      "Finishing jewel polish for true wet-look clarity",
      "Safe on all soft, hard, and metallic OEM paints"
    ]
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    shortDesc: "Complete multi-step wet sanding and optical compound refinement that restores cloudy, oxidized headlights to crystal-clear output.",
    duration: "2 Hours",
    protection: "2-Year UV Ceramic Shield",
    features: [
      "3-stage progressive wet-sanding to peel yellowed layer",
      "Optical clarifying compound and dual-action polish",
      "Ceramic quartz UV barrier prevents re-yellowing",
      "Restores night-time illumination distance and safety"
    ]
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Cleaning & Detailing",
    shortDesc: "Meticulous low-moisture steam degreasing and silicone-free matte dressing that brings your engine bay to factory delivery perfection.",
    duration: "2–3 Hours",
    protection: "Dust & Grime Repellent",
    features: [
      "Delicate sensors, alternator & ECU safely masked",
      "Citrus enzyme grease emulsifier with fine detail brushes",
      "Hot steam purge into tight crevices without water pooling",
      "Non-greasy anti-static dressing on hoses and plastics"
    ]
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: "basic-wash",
    name: "Basic Wash & Gloss",
    price: "₹2,999",
    tagline: "Essential decontamination & meticulous hand touch maintenance.",
    duration: "90 Minutes",
    isPopular: false,
    features: [
      "Two-bucket pH-neutral snow foam wash",
      "Microfiber scratch-free wheel and barrel cleansing",
      "Iron deposit decontamination on lower panels",
      "Streak-free crystal glass inside & out",
      "Thorough interior vacuum & dashboard dusting",
      "Satin non-sling UV tire conditioning"
    ]
  },
  {
    id: "premium-detailing",
    name: "Premium Detailing",
    price: "₹9,999",
    tagline: "Comprehensive paint revival, interior revival & 6-month ceramic seal.",
    duration: "4–5 Hours",
    isPopular: true,
    features: [
      "Everything in Basic Wash & Gloss",
      "Full clay bar mechanical clear-coat decontam",
      "Single-stage machine gloss refinement polish",
      "Deep leather & trim conditioning with UV blocker",
      "Alcantara & carpet deep hot water extraction",
      "6-Month SiO2 ceramic spray sealant coat",
      "Engine bay wipe down & dressing"
    ]
  },
  {
    id: "ceramic-pro",
    name: "Ceramic Pro 9H Studio",
    price: "₹24,999",
    tagline: "The ultimate flagship protection: multi-stage correction & multi-year ceramic barrier.",
    duration: "1–2 Days",
    isPopular: false,
    features: [
      "Full multi-stage paint correction (90%+ defect removal)",
      "9H dual-layer professional ceramic coating on all paint",
      "Wheel face & brake caliper ceramic shield",
      "All exterior glass hydrophobic rain repellent coat",
      "Full interior deep cleansing & leather ceramic guard",
      "3-Year written nationwide warranty certificate",
      "Complimentary first 30-day maintenance wash"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "paint-swirls",
    title: "Multi-Stage Paint Correction",
    category: "Paint Correction",
    description: "Elimination of heavy swirl marks, buffer trails, and spiderweb scratches from years of automated car washes on basalt black metallic.",
    beforeImg: "paint-swirls-before",
    afterImg: "paint-swirls-after",
    beforeLabel: "Heavy Swirls & Dull Haze",
    afterLabel: "95% Correction Flawless Reflection",
    stats: "Gloss meter improvement: 62 GU → 96 GU"
  },
  {
    id: "ceramic-hydrophobic",
    title: "Ceramic Hydrophobic Shield",
    category: "Ceramic Coating",
    description: "Superhydrophobic surface tension forces water and abrasive road grime to bead up at 115° contact angles and glide off instantly.",
    beforeImg: "ceramic-hydro-before",
    afterImg: "ceramic-hydro-after",
    beforeLabel: "Untreated Sheet Water / Grime Sticking",
    afterLabel: "Superhydrophobic 115° Water Beading",
    stats: "3-Year 9H Ceramic Nanotech Bond"
  },
  {
    id: "headlight-clarity",
    title: "Headlight UV Oxidation Revival",
    category: "Headlight Restoration",
    description: "Restoration of cloudy, sun-baked polycarbonate lenses back to 100% optical clarity with permanent ceramic UV blocking sealant.",
    beforeImg: "headlight-before",
    afterImg: "headlight-after",
    beforeLabel: "Cloudy Yellowed UV Oxidation",
    afterLabel: "Crystal Clear Optical Beam Output",
    stats: "+40% Increased Nighttime Light Projection"
  },
  {
    id: "leather-interior",
    title: "Fine Nappa Leather Deep Restoration",
    category: "Interior Detailing",
    description: "Gentle pore extraction of built-up body oils, dirt, and shine to return luxury German leather to its factory matte, supple touch.",
    beforeImg: "leather-before",
    afterImg: "leather-after",
    beforeLabel: "Greasy Shiny Soiled Surface",
    afterLabel: "Factory Matte Conditioned Finish",
    stats: "pH-neutral organic lanolin nourishment"
  },
  {
    id: "brake-dust-wheels",
    title: "Baked Brake Dust & Caliper Detailing",
    category: "Wheels & Calipers",
    description: "Acid-free pH-neutral chemical iron dissolution of metallic brake fallout followed by high-temp ceramic rim coating.",
    beforeImg: "wheel-before",
    afterImg: "wheel-after",
    beforeLabel: "Severe Baked Iron & Carbon Grime",
    afterLabel: "Ultra-Clean Ceramic Protected Alloys",
    stats: "Resists heat up to 1200°F (650°C)"
  },
  {
    id: "engine-bay-revival",
    title: "Performance V8 Engine Bay Detailing",
    category: "Engine Bay",
    description: "Safe low-moisture steam degreasing and non-silicone dressing on carbon fiber intake covers and matte rubber components.",
    beforeImg: "engine-before",
    afterImg: "engine-after",
    beforeLabel: "Dust, Road Salt & Oil Splatter",
    afterLabel: "Concourse-Ready Clean Room Presentation",
    stats: "100% Dry-Steamed & Insulated"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "certified-products",
    title: "Certified Products",
    description: "Authorized installer of elite ceramic coatings, self-healing PPFs, and pH-neutral European formulas. No watered-down consumer products.",
    icon: "ShieldCheck",
    badge: "Official Certified Partner"
  },
  {
    id: "pickup-drop",
    title: "Doorstep Pickup & Drop",
    description: "Complimentary fully-insured concierge valet service. We collect your vehicle from your home or office and return it in showroom glory.",
    icon: "Truck",
    badge: "Fully Insured Valet"
  },
  {
    id: "warranty",
    title: "Written Guarantee & Warranty",
    description: "Up to 7 years registered warranty on ceramic coatings and 10 years on PPF, backed with Carfax certification documentation.",
    icon: "Award",
    badge: "Nationwide Guarantee"
  },
  {
    id: "experienced-team",
    title: "Master Detailers",
    description: "Our certified artisans boast 15+ years refining exotic hypercars, historic classics, and high-performance daily drivers.",
    icon: "Users",
    badge: "IDA Certified Masters"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    vehicle: "Porsche 911 GT3 RS",
    service: "Ceramic Pro 9H & Full Front PPF",
    rating: 5,
    date: "2 weeks ago",
    comment: "The paint depth on my GT3 RS looks deeper than the day it rolled off the showroom floor in Stuttgart. The swirl removal was surgical, and the ceramic hydrophobic water beading on track days is incredible. Apex Gloss is in a league of their own.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    vehicle: "BMW M4 Competition",
    service: "Premium Detailing & 2-Stage Paint Correction",
    rating: 5,
    date: "1 month ago",
    comment: "I bought a pre-owned M4 that had severe dealer wash scratches everywhere. Apex Gloss worked on it for two days and completely revived the Isle of Man Green metallic paint. My jaw dropped when I picked it up under their LED inspection lights.",
    verified: true
  },
  {
    id: "rev-3",
    name: "David Chen",
    vehicle: "Mercedes-AMG G63",
    service: "Full PPF & Concourse Interior Deep Clean",
    rating: 5,
    date: "3 weeks ago",
    comment: "White-glove concierge pickup was on time and completely stress-free. The interior feels and smells brand new—no greasy silicone scents, just genuine supple matte leather. Their customer service matches the quality of their work.",
    verified: true
  }
];
