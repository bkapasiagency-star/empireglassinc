export interface ProjectItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Storefronts' | 'Curtain Walls' | 'Shower Enclosures' | 'Skylights';
  systemType: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
}

export const COMPANY_INFO = {
  name: "Empire Glass Inc.",
  legalName: "Empire Glass Inc.",
  president: "Jose Portillo",
  foundedYear: 2024,
  industryExperience: "15+ Years of Industry Experience",
  phone: "336-257-2728",
  phoneRaw: "3362572728",
  phoneDisplay: "(336) 257-2728",
  // Configurable email: no unverified placeholder like info@mysite.com
  email: "contact@empireglassnc.net", // easily configurable
  hasVerifiedEmail: false, // UI prioritizes phone and form
  address: {
    street: "4916 Bartlett St",
    city: "Greensboro",
    state: "NC",
    zip: "27409",
    full: "4916 Bartlett St, Greensboro, NC 27409"
  },
  hours: "Monday – Friday: 7:00 AM – 5:00 PM | Saturday by Appointment",
  serviceAreas: [
    { name: "Greensboro", county: "Guilford County", primary: true },
    { name: "High Point", county: "Guilford County", primary: true },
    { name: "Winston-Salem", county: "Forsyth County", primary: true },
    { name: "Burlington", county: "Alamance County", primary: false },
    { name: "Kernersville", county: "Forsyth/Guilford", primary: false },
    { name: "Summerfield", county: "Guilford County", primary: false },
    { name: "Oak Ridge", county: "Guilford County", primary: false },
    { name: "Triad Region", county: "North Carolina", primary: true }
  ],
  socials: {
    linkedinCompany: "https://www.linkedin.com/company/empireglassinc/",
    linkedinPresident: "https://www.linkedin.com/in/empireglassinc/",
    website: "https://www.empireglassnc.net/"
  }
};

export const CAPABILITIES = [
  {
    title: "In-House Fabrication",
    description: "Custom cutting, edge polishing, miter joints, hole drilling, and assembly in our regional shop to ensure tight tolerances before job site delivery.",
    badge: "Shop Precision"
  },
  {
    title: "Certified Field Installation",
    description: "Experienced glazing crews equipped with crane rigging, suction-cup vacuum lifters, and safety gear for seamless multi-story and ground-level installs.",
    badge: "On-Site Execution"
  },
  {
    title: "Commercial Glazing & Entrances",
    description: "Full-envelope storefronts, curtain walls, heavy commercial doors, panic hardware, and automatic door integration for commercial facilities.",
    badge: "Commercial Grade"
  },
  {
    title: "Aluminum Framing Systems",
    description: "Precision-cut aluminum commercial extrusions with thermally broken profiles and durable anodized or powder-coated finishes.",
    badge: "Structural Framing"
  },
  {
    title: "Custom Residential Glazing",
    description: "Digital laser templating for frameless shower enclosures, architectural mirrors, interior glass partitions, and specialized glass installations.",
    badge: "Bespoke Craft"
  },
  {
    title: "Code Compliance & Safety Glazing",
    description: "Strict adherence to IBC, OSHA, and North Carolina Building Codes utilizing tempered, laminated, and impact safety glass specifications.",
    badge: "Safety Verified"
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Multi-Story Commercial Curtain Wall",
    category: "Curtain Walls",
    systemType: "Unitized Curtain Wall & Solar Control Glazing",
    location: "Greensboro Commercial Corridor, NC",
    description: "Engineered multi-level structural glass facade delivering contemporary architectural identity and high-efficiency thermal regulation.",
    highlights: ["Thermally broken aluminum mullions", "High-performance Low-E glass", "Integrated perimeter expansion joints"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-2",
    title: "Modern Corporate Storefront & Entrance",
    category: "Storefronts",
    systemType: "Heavy-Duty Storefront Framing & Glass Entrances",
    location: "Greensboro Corporate Center, NC",
    description: "Double-height commercial entrance system engineered for high pedestrian volume, clear sightlines, and commercial security.",
    highlights: ["Wide stile aluminum entrance doors", "Continuous concealed hinges", "1\" insulated tempered units"],
    image: "https://images.unsplash.com/photo-1673551799223-7bfa638861cb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-3",
    title: "Luxury Frameless Glass Shower Enclosure",
    category: "Shower Enclosures",
    systemType: "1/2\" Ultra-Clear Tempered Frameless Glass",
    location: "Guilford County Custom Residence",
    description: "Zero-clearance custom shower enclosure with matte black architectural hinges and water-resistant protective treatment.",
    highlights: ["Laser-templated wall out-of-plumb match", "Solid brass pivot hinges", "EnduroShield hydrophobic coating"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-4",
    title: "Architectural Fixed Skylight & Window Wall",
    category: "Skylights",
    systemType: "Laminated Impact Glass & Curb-Mount Flashing",
    location: "Triad Residential Renovation",
    description: "Vaulted ceiling daylighting feature with heat-reflective low-E laminated glass for natural lighting without heat gain.",
    highlights: ["Laminated safety glass interior pane", "Custom aluminum curb flashing", "UV transmission reduction"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-5",
    title: "Commercial Window Wall & ACM Accents",
    category: "Commercial",
    systemType: "Slab-to-Slab Window Wall with ACM Panels",
    location: "Triad Business Park, NC",
    description: "Integrated glass window wall system paired with dark charcoal aluminum composite material (ACM) panels for an executive exterior.",
    highlights: ["Integrated floor slab covers", "Operable awning vents", "Fluoropolymer dark bronze finish"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-6",
    title: "Panoramic Residential Glass Windows & Doors",
    category: "Residential",
    systemType: "Multi-Panel Sliding Glass Door & Window Package",
    location: "Greensboro Executive Estate",
    description: "Expansive floor-to-ceiling glass wall seamlessly joining interior living area with outdoor patio living.",
    highlights: ["Flush sill threshold transition", "Argon-filled warm-edge spacer IGUs", "Effortless ball-bearing roller hardware"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Tell Us About Your Project",
    description: "Submit your project plans, drawings, or rough measurements through our quote request form or call our Greensboro office at 336-257-2728."
  },
  {
    step: "02",
    title: "Review Scope & Requirements",
    description: "Our glazing team evaluates structural needs, glass specifications, local NC building codes, and provides a clear, detailed project proposal."
  },
  {
    step: "03",
    title: "Fabrication & Installation",
    description: "Frames and glass are precision fabricated in our regional facility and installed by our dedicated field crew with tight quality control."
  },
  {
    step: "04",
    title: "Project Complete",
    description: "Final quality inspection, clean-down, hardware adjustment, and handover ensuring exact architectural alignment and complete customer satisfaction."
  }
];

export const TRUST_PILLARS = [
  {
    title: "Quality & Precision",
    description: "Every cut, edge polish, and joint alignment is checked to tight industry tolerances to ensure flawless fit and longevity."
  },
  {
    title: "15+ Years Industry Experience",
    description: "Deep hands-on glazing knowledge spanning complex commercial curtain walls to high-end bespoke residential glass."
  },
  {
    title: "Fabrication + Installation",
    description: "We provide complete end-to-end control — eliminating the finger-pointing between separate fabricators and outside installers."
  },
  {
    title: "Integrity & Reliability",
    description: "Transparent proposals, realistic scheduling, responsive communication, and strict adherence to job site safety standards."
  }
];

export const FAQ_ITEMS = [
  {
    question: "What areas does Empire Glass Inc. serve?",
    answer: "We are based in Greensboro, NC (4916 Bartlett St) and serve Greensboro, High Point, Winston-Salem, Burlington, Kernersville, and the broader Guilford County and Triad region."
  },
  {
    question: "Do you handle both commercial and residential projects?",
    answer: "Yes. We furnish fabrication and labor to install both commercial glass systems (curtain walls, storefronts, window walls, ACM panels) and residential glass projects (frameless shower enclosures, windows, doors, and skylights)."
  },
  {
    question: "How do I request a quote for my project?",
    answer: "You can use our online Request a Quote form to submit details and upload project plans, or call our team directly at 336-257-2728 to discuss your specifications."
  },
  {
    question: "Do you fabricate in-house or strictly install?",
    answer: "Empire Glass furnishes both fabrication and labor to install. This integrated capability allows us to maintain tight quality standards, control schedules, and respond rapidly to custom architectural requirements."
  },
  {
    question: "Can you work from architectural blueprints and CAD files?",
    answer: "Yes. For commercial and custom residential projects, we routinely take off dimensions from architectural drawings, coordinate with general contractors, and verify field dimensions prior to final fabrication."
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  authorTitle: string;
  role: string;
  organizationType: string;
  projectType: string;
  location: string;
  sector: 'commercial' | 'residential';
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Empire Glass handled the complete storefront framing and entrance system package for our corporate tenant buildout. Having both shop fabrication and field installation under one contractor eliminated communication delays and kept our delivery timeline exact.",
    authorTitle: "Commercial General Contractor",
    role: "Project Superintendent",
    organizationType: "Commercial Building Group",
    projectType: "Storefront Framing & Entrance Doors",
    location: "Greensboro, NC",
    sector: "commercial"
  },
  {
    id: "test-2",
    quote: "On multi-story commercial glazing, precision and safety are paramount. Empire Glass executed the curtain wall mullion alignment and glass hoisting cleanly with zero punch-list issues on thermal seals.",
    authorTitle: "Commercial Construction Manager",
    role: "Senior Project Manager",
    organizationType: "Regional Development Firm",
    projectType: "Multi-Story Curtain Wall System",
    location: "High Point / Triad, NC",
    sector: "commercial"
  },
  {
    id: "test-3",
    quote: "Their laser digital templating for custom heavy glass shower enclosures saved us hours. Even with out-of-plumb tile conditions, the glass margins and door reveals were millimeter-precise.",
    authorTitle: "Custom Residential Builder",
    role: "Principal Contractor",
    organizationType: "Luxury Home Remodeling",
    projectType: "Frameless Heavy Glass Enclosures",
    location: "Guilford County, NC",
    sector: "residential"
  },
  {
    id: "test-4",
    quote: "We needed an architectural fixed skylight and floor-to-ceiling window wall integrated into a major vaulted living area renovation. Empire Glass provided clear technical advice and delivered exceptional craftsmanship.",
    authorTitle: "Architectural Homeowner",
    role: "Property Owner",
    organizationType: "Residential Renovation",
    projectType: "Fixed Skylight & Window Wall",
    location: "Winston-Salem, NC",
    sector: "residential"
  }
];

