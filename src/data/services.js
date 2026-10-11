export const HERO_TREATMENTS = [
  {
    id: "dental-checkups",
    code: "01",
    label: "Dental Checkups",
    title: "Dental Checkup & 3D Scan",
    tagline: "3D Digital Diagnostics",
    subtitle: "Complete 3D Oral Scan",
    description: "Instant low-radiation digital radiography and comprehensive intraoral health assessment.",
    image: "/images/digital-mapping.jpg",
    duration: "30 mins",
    highlights: ["Low-radiation 3D imaging", "Precision diagnostic chart", "Early cavity detection"]
  },
  {
    id: "teeth-cleaning",
    code: "02",
    label: "Teeth Cleaning",
    title: "Ultrasonic Teeth Cleaning",
    tagline: "Preventative Oral Care",
    subtitle: "Scaling & Bio-Polishing",
    description: "Gentle ultrasonic scaling and biological air polishing for fresh breath and spotless smile.",
    image: "/images/dental-instruments.jpg",
    duration: "40 mins",
    highlights: ["Deep biofilm removal", "Gentle enamel polishing", "Complete stain removal"]
  },
  {
    id: "root-canal",
    code: "03",
    label: "Root Canal",
    title: "Painless Root Canal Treatment",
    tagline: "Painless Single Sitting",
    subtitle: "Painless Single Sitting",
    description: "Advanced endodontic rotary treatment designed for zero pain and permanent tooth preservation.",
    image: "/images/treatment-suite.jpg",
    duration: "45 mins",
    highlights: ["Rotary endodontic precision", "Zero-pain protocol", "Permanent tooth preservation"]
  },
  {
    id: "clear-aligners",
    code: "04",
    label: "Clear Aligners",
    title: "Clear Aligners & Braces",
    tagline: "Invisible Alignment",
    subtitle: "Invisible Teeth Alignment",
    description: "Custom 3D scanned transparent aligners for discreet, comfortable teeth straightening.",
    image: "/images/orthodontic-aligners.jpg",
    duration: "Scan: 20 mins",
    highlights: ["Virtually invisible wear", "Computerized smile simulation", "Custom removable trays"]
  },
  {
    id: "pediatric",
    code: "05",
    label: "Pediatric",
    title: "Pediatric Gentle Dentistry",
    tagline: "Child-Friendly Care",
    subtitle: "Gentle Child Dentistry",
    description: "Warm, stress-free dental visits and preventative fluoride care designed especially for children.",
    image: "/images/wellness-lounge.jpg",
    duration: "30 mins",
    highlights: ["Stress-free friendly approach", "Protective fluoride varnish", "Fun & educational visit"]
  }
];

// For backwards compatibility
export const HERO_FILTERS = HERO_TREATMENTS;

export const SIGNATURE_SERVICES = [
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    category: "Preventative",
    subtitle: "Gentle ultrasonic scaling & biological polishing for stain-free brightness.",
    image: "/images/dental-instruments.jpg",
    accent: "from-blue-950/80 to-[#1b2e8c]/90",
    gradient: "linear-gradient(135deg, #0d2149 0%, #081226 100%)",
    type: "illustration",
    iconType: "tooth-3d"
  },
  {
    id: "dental-checkups",
    title: "Dental Checkups",
    category: "Diagnostics",
    subtitle: "High-definition intraoral mapping with non-invasive digital diagnostic suites.",
    image: "/images/digital-mapping.jpg",
    accent: "from-[#1b2e8c]/90 to-cyan-950/90",
    gradient: "linear-gradient(135deg, #102a5c 0%, #05142b 100%)",
    type: "wireframe",
    iconType: "tooth-contour"
  },
  {
    id: "dental-veneers",
    title: "Dental Veneers",
    category: "Restorative Art",
    subtitle: "Custom handcrafted ultra-thin porcelain shells designed for natural vitality.",
    image: "/images/dental-veneers.jpg",
    accent: "from-slate-900/80 to-[#1b2e8c]/90",
    type: "photo",
    iconType: "arrow"
  }
];

export const TREATMENTS_BENTO = [
  {
    id: "porcelain-veneers",
    categoryTag: "RESTORATIVE ART",
    title: "Porcelain Veneers",
    description: "Individually layered ceramic restorations designed to mimic that natural optical properties of enamel.",
    image: "/images/dental-veneers.jpg",
    duration: "2 sessions",
    linkText: "Learn more",
    colSpan: "col-span-12 lg:col-span-7"
  },
  {
    id: "3d-mapping",
    categoryTag: "DIAGNOSTICS",
    title: "3D Mapping",
    description: "Hyper-accurate digital scans for millimeter-perfect treatment planning.",
    image: "/images/digital-mapping.jpg",
    duration: "15 minutes",
    linkText: "Learn more",
    colSpan: "col-span-12 lg:col-span-5"
  },
  {
    id: "artisanal-prophylaxis",
    categoryTag: "MAINTENANCE",
    title: "Artisanal Prophylaxis",
    description: "A curated hygienical combi of clinical precision with sensory comfort.",
    image: "/images/dental-instruments.jpg",
    duration: "45 minutes",
    linkText: "Learn more",
    colSpan: "col-span-12 lg:col-span-5"
  },
  {
    id: "orthodontic-design",
    categoryTag: "ALIGNMENT",
    title: "Orthodontic Design",
    description: "Discreet correction protocols utilizing AI-driven structural modeling for optimal facial harmony.",
    image: "/images/orthodontic-aligners.jpg",
    duration: "3–6 months",
    linkText: "Learn more",
    colSpan: "col-span-12 lg:col-span-7"
  },
  {
    id: "guided-implants",
    categoryTag: "SURGICAL PRECISION",
    title: "Guided Implants",
    description: "Next-generation osseointegration guided by real-time spatial navigation for unparalleled stability and aesthetics.",
    image: "/images/guided-implants.jpg",
    duration: "Same day immediate load",
    actionLabel: "EXPLORE THE TECHNOLOGY",
    colSpan: "col-span-12"
  }
];

export const CLINICAL_PILLARS = [
  {
    title: "Clinical Serenity",
    description: "Every treatment room is equipped with high-fidelity acoustic damping and bespoke aroma therapy to ensure sensory neutrality during your clinical journey."
  },
  {
    title: "Artisanal Lab",
    description: "Our in-house master ceramists work directly with the clinical team to ensure your restorations possess the exact translucency and texture of natural teeth."
  },
  {
    title: "Zero-Trace",
    description: "Our philosophy is 'Invisible Dentistry'—results that look so inherently natural they leave no trace of clinical intervention."
  }
];

export const ROOTCURE_STANDARDS = [
  {
    icon: "Brain",
    title: "Patient Psychology",
    description: "We prioritize emotional comfort, using intentional environmental design and communication to eliminate traditional clinical anxiety."
  },
  {
    icon: "Microscope",
    title: "Bespoke Technology",
    description: "From 3D facial imaging to 3D facial mapping, our suite of technologies is selected for its clinical superiority and patient benefit."
  },
  {
    icon: "Sparkles",
    title: "Artistic Integrity",
    description: "We don't create generic smiles. We enhance your natural features to ensure a result that looks authentic, refined, and uniquely yours."
  }
];

export const STUDIO_SPACES = [
  {
    title: "Quiet Luxury.",
    tag: "THE TREATMENT SUITE",
    description: "Private floor-to-ceiling garden sanctuary.",
    image: "/images/treatment-suite.jpg"
  },
  {
    title: "Curated Calm.",
    tag: "THE LOUNGE",
    description: "Tranquil arrival lounge with white lilies and ambient warmth.",
    image: "/images/wellness-lounge.jpg"
  },
  {
    title: "Artisanal Instrumentation.",
    tag: "THE SURGICAL LAB",
    description: "Swiss precision stainless steel instruments.",
    image: "/images/dental-instruments.jpg"
  },
  {
    title: "Modern Architectural Pavilion.",
    tag: "THE ATELIER",
    description: "Twilight view of our private flagship clinic.",
    image: "/images/clinic-exterior.jpg"
  }
];
