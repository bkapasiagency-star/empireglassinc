// Products, services and capabilities as listed on https://www.empireglassnc.net/
// (home page service list and shop catalogue). Copy is deliberately general:
// no specifications, ratings, warranties or other claims the source site does not make.

export type OfferingCategoryId =
  | 'commercial'
  | 'residential'
  | 'shower-enclosures'
  | 'glass-products'
  | 'aluminum-frames';

export interface Offering {
  id: string;
  name: string;
  /** Short label for navigation menus */
  navLabel: string;
  description: string;
  applications: string[];
  /** Unsplash photo id (the part after "photo-") */
  image: string;
  alt: string;
  /** Larger visual treatment in its category */
  featured?: boolean;
}

export interface OfferingCategory {
  id: OfferingCategoryId;
  navLabel: string;
  eyebrow: string;
  heading: string;
  intro: string;
  /** Who the category speaks to; used on quote CTAs */
  sector: 'commercial' | 'residential';
  ctaLabel: string;
  image: string;
  imageAlt: string;
  items: Offering[];
}

const IMAGE_WIDTHS = [480, 800, 1200, 1600];

export const offeringImage = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;

export const offeringSrcSet = (id: string) =>
  IMAGE_WIDTHS.map((w) => `${offeringImage(id, w)} ${w}w`).join(', ');

export const OFFERING_CATEGORIES: OfferingCategory[] = [
  {
    id: 'commercial',
    navLabel: 'Commercial Glass',
    eyebrow: 'Commercial Glass',
    heading: 'Commercial Glass Solutions',
    intro:
      'Architectural glass and framing for commercial buildings, from storefront entrances to full curtain wall facades. We work with contractors, developers, architects, property owners and businesses.',
    sector: 'commercial',
    ctaLabel: 'Request a Commercial Quote',
    image: '1523477593243-78bbf626fd3b',
    imageAlt: 'Glass curtain wall facade on a modern commercial building',
    items: [
      {
        id: 'curtain-walls',
        name: 'Curtain Walls',
        navLabel: 'Curtain Walls',
        description:
          'Exterior glass curtain wall systems that give a commercial building a continuous, modern glazed facade.',
        applications: [
          'Office and corporate buildings',
          'Multi-story commercial facades',
          'Institutional and mixed-use projects'
        ],
        image: '1717565813196-8944b57877f8',
        alt: 'Commercial glass curtain wall installation on a modern office building',
        featured: true
      },
      {
        id: 'storefronts',
        name: 'Storefronts',
        navLabel: 'Storefronts',
        description:
          'Glass and aluminum storefront systems for ground-level entrances and retail frontage, with clean lines and an open, welcoming street presence.',
        applications: [
          'Retail centers and shops',
          'Office entrances and lobbies',
          'Restaurants and commercial suites'
        ],
        image: '1673551799281-3a08f4dba4f5',
        alt: 'Modern aluminum storefront glass system at a commercial building entrance',
        featured: true
      },
      {
        id: 'commercial-glass-installation',
        name: 'Commercial Glass Installation',
        navLabel: 'Glass Installation',
        description:
          'Installation of commercial glass and glazing systems for new construction and renovation projects.',
        applications: [
          'New commercial construction',
          'Renovations and tenant improvements',
          'Storefront, curtain wall and window wall projects'
        ],
        image: '1555945071-f36c590968bb',
        alt: 'Glass facade being installed on a commercial building under construction',
        featured: true
      },
      {
        id: 'radius-walls',
        name: 'Radius Walls',
        navLabel: 'Radius Walls',
        description:
          'Curved glass wall systems for projects where the architecture calls for a radius rather than a straight run.',
        applications: ['Curved facades and corners', 'Entrances and atriums', 'Feature walls'],
        image: '1602150137620-510810591dff',
        alt: 'Curved architectural glass radius wall on a commercial building'
      },
      {
        id: 'unitized-curtain-walls',
        name: 'Unitized Curtain Walls',
        navLabel: 'Unitized Curtain Walls',
        description:
          'Curtain wall built as pre-assembled glass units that are set in place on the building, an approach often used on larger facades.',
        applications: [
          'Mid-rise and high-rise facades',
          'Large commercial building envelopes',
          'Facades with repeating bays'
        ],
        image: '1479292889369-1a48f234247e',
        alt: 'High-rise facade made of modular unitized glass curtain wall panels'
      },
      {
        id: 'window-walls',
        name: 'Window Walls',
        navLabel: 'Window Walls',
        description:
          'Floor-to-ceiling glass systems that span from floor to floor, bringing daylight and views to every level.',
        applications: [
          'Multi-story residential and mixed-use buildings',
          'Office floors',
          'Lobbies and common areas'
        ],
        image: '1732532974025-1dda86a6976d',
        alt: 'Floor-to-ceiling window wall glazing in a commercial interior'
      },
      {
        id: 'commercial-aluminum-frames',
        name: 'Commercial Aluminum Frames',
        navLabel: 'Commercial Aluminum Frames',
        description:
          'Aluminum framing for commercial glass openings: the structure that holds storefronts, entrances and window systems in place.',
        applications: [
          'Storefront and entrance framing',
          'Interior and exterior glass openings',
          'Renovations and build-outs'
        ],
        image: '1556621266-45150d1e9f4b',
        alt: 'Commercial aluminum framing holding large glass panels on a building exterior'
      },
      {
        id: 'acm-panels',
        name: 'ACM Panels',
        navLabel: 'ACM Panels',
        description:
          'Aluminum composite material (ACM) panels for building exteriors, often paired with glass to finish a facade.',
        applications: ['Exterior wall cladding', 'Facade accents alongside glazing', 'Entrances and canopies'],
        image: '1464928656761-a60b2dbc1faf',
        alt: 'Modern building exterior clad in aluminum composite panels'
      },
      {
        id: 'high-rise-building-glass',
        name: 'High-Rise Building Glass',
        navLabel: 'High-Rise Glass',
        description:
          'Glass work for high-rise buildings, where large facades call for careful planning and coordination.',
        applications: ['High-rise commercial towers', 'Multi-story residential buildings', 'Large facade glazing'],
        image: '1690357737506-62301532da89',
        alt: 'High-rise towers with extensive glass facades'
      }
    ]
  },
  {
    id: 'residential',
    navLabel: 'Residential Glass',
    eyebrow: 'Residential Glass',
    heading: 'Residential Glass Solutions',
    intro:
      'Glass for the home: windows, doors and skylights that bring in more light and open up your living spaces, installed with care by our team.',
    sector: 'residential',
    ctaLabel: 'Talk to Empire Glass',
    image: '1783125127082-3fb6c1bccd72',
    imageAlt: 'Modern home with large glass windows and a glazed entry',
    items: [
      {
        id: 'residential-windows',
        name: 'Residential Windows',
        navLabel: 'Windows',
        description:
          'Glass windows for the home, from everyday openings to large expanses that open a room to the outdoors.',
        applications: ['New homes', 'Remodels and additions', 'Living areas and bedrooms'],
        image: '1591474200742-8e512e6f98f8',
        alt: 'Modern residential architecture with large glass windows'
      },
      {
        id: 'residential-doors',
        name: 'Residential Doors',
        navLabel: 'Doors',
        description:
          'Glass doors for the home, including patio and entry doors that connect indoor and outdoor living.',
        applications: ['Patios and decks', 'Entryways', 'Indoor-outdoor living areas'],
        image: '1787491581050-46697aa48ab6',
        alt: 'Glass patio doors opening onto the deck of a modern home'
      },
      {
        id: 'skylights',
        name: 'Skylights',
        navLabel: 'Skylights',
        description: 'Skylights that bring natural light into a room from above.',
        applications: ['Kitchens and living rooms', 'Stairwells and hallways', 'Additions and remodels'],
        image: '1558455322-911adf441b5a',
        alt: 'Architectural skylight with blue sky visible through the glass'
      },
      {
        id: 'fixed-skylights',
        name: 'Fixed Skylights',
        navLabel: 'Fixed Skylights',
        description: 'Skylights that stay closed, designed purely for daylight and a view of the sky.',
        applications: ['Rooms that need more daylight', 'Vaulted ceilings', 'Hallways and stairwells'],
        image: '1646170666345-5510e28ed8d4',
        alt: 'Fixed residential skylight set into a white ceiling'
      },
      {
        id: 'retractable-skylights',
        name: 'Retractable Skylights',
        navLabel: 'Retractable Skylights',
        description: 'Skylights that open, letting in fresh air as well as daylight.',
        applications: ['Sunrooms and covered patios', 'Living and dining spaces', 'Spaces that benefit from ventilation'],
        image: '1680538993391-46348c1b8a37',
        alt: 'Glass roof with opening skylight panels'
      },
      {
        id: 'residential-glass-installation',
        name: 'Residential Glass Installation',
        navLabel: 'Glass Installation',
        description:
          'Installation of glass throughout the home, handled by our team from measurement to final fit.',
        applications: ['New construction', 'Renovations and remodels', 'Windows, doors and skylights'],
        image: '1723639905934-744ae9bbc3a0',
        alt: 'Newly installed windows and glass sliding door in a residential room'
      }
    ]
  },
  {
    id: 'shower-enclosures',
    navLabel: 'Shower Enclosures',
    eyebrow: 'Shower Enclosures',
    heading: 'Glass Shower Enclosures',
    intro:
      'Glass shower enclosures designed around your bathroom. Choose the style that suits the space, and we handle the design, customization and installation.',
    sector: 'residential',
    ctaLabel: 'Request a Shower Quote',
    image: '1771929662486-f793e08f0f16',
    imageAlt: 'Frameless glass shower enclosure in a modern marble bathroom',
    items: [
      {
        id: 'frameless-shower-enclosures',
        name: 'Frameless Shower Enclosures',
        navLabel: 'Frameless',
        description:
          'Shower glass with minimal hardware and no metal frame around the panels, for an open, uninterrupted look.',
        applications: ['Primary bathrooms', 'Walk-in showers', 'Bathroom remodels'],
        image: '1584622650111-993a426fbf0a',
        alt: 'Frameless residential shower enclosure in a bright modern bathroom',
        featured: true
      },
      {
        id: 'semi-frameless-shower-enclosures',
        name: 'Semi-Frameless Shower Enclosures',
        navLabel: 'Semi-Frameless',
        description:
          'A balance of clear glass and slim framing: framing where it is needed, glass everywhere else.',
        applications: ['Primary and guest bathrooms', 'Corner showers', 'Bathroom updates'],
        image: '1704428381342-ea9df943619e',
        alt: 'Semi-frameless glass shower enclosure in a modern bathroom'
      },
      {
        id: 'sliding-shower-enclosures',
        name: 'Sliding Shower Enclosures',
        navLabel: 'Sliding',
        description:
          'Enclosures with sliding glass doors, well suited to bathrooms where a swinging door is not practical.',
        applications: ['Compact bathrooms', 'Tub and shower combinations', 'Wide shower openings'],
        image: '1719321063823-d8d85757215c',
        alt: 'Sliding glass shower door with dark hardware'
      },
      {
        id: 'custom-shower-enclosures',
        name: 'Custom Shower Enclosures',
        navLabel: 'Custom',
        description:
          'Shower glass laid out and sized for your bathroom rather than taken from a standard kit.',
        applications: ['Unusual layouts and angles', 'Half walls and benches', 'Larger walk-in showers'],
        image: '1763485955497-f5ef5d178698',
        alt: 'Custom walk-in glass shower with a half wall in a modern bathroom'
      }
    ]
  },
  {
    id: 'glass-products',
    navLabel: 'Glass Products',
    eyebrow: 'Glass Products',
    heading: 'Architectural Glass Panels',
    intro: 'Glass panels supplied for commercial and residential projects.',
    sector: 'commercial',
    ctaLabel: 'Request a Quote',
    image: '1706074740295-d7a79c079562',
    imageAlt: 'Clear architectural glass panels enclosing a meeting room',
    items: [
      {
        id: 'tempered-glass-panels',
        name: 'Tempered Glass Panels',
        navLabel: 'Tempered',
        description: 'Tempered glass panels for applications where strength and safety matter.',
        applications: ['Doors and partitions', 'Railings', 'Shower enclosures'],
        image: '1758862528822-b0094ae44705',
        alt: 'Tempered glass railing panels on a modern building'
      },
      {
        id: 'clear-glass-panels',
        name: 'Clear Glass Panels',
        navLabel: 'Clear',
        description: 'Clear glass panels for full transparency and as much light as possible.',
        applications: ['Partitions and openings', 'Windows and displays', 'Interior glazing'],
        image: '1706074740295-d7a79c079562',
        alt: 'Clear transparent architectural glass panels around a meeting room'
      },
      {
        id: 'frosted-glass-panels',
        name: 'Frosted Glass Panels',
        navLabel: 'Frosted',
        description: 'Frosted glass panels that let light through while obscuring the view, for privacy without darkness.',
        applications: ['Offices and meeting rooms', 'Bathrooms', 'Doors and sidelights'],
        image: '1637665637343-d497d345ed2f',
        alt: 'Frosted privacy glass partitions along an office corridor'
      }
    ]
  },
  {
    id: 'aluminum-frames',
    navLabel: 'Aluminum Frames',
    eyebrow: 'Aluminum Frames',
    heading: 'Aluminum Framing Systems',
    intro: 'Aluminum frames to suit the opening, the glass and the look of the project.',
    sector: 'commercial',
    ctaLabel: 'Request a Quote',
    image: '1613244288805-020d7d11c655',
    imageAlt: 'Close-up of dark aluminum framing holding glass panels',
    items: [
      {
        id: 'heavy-duty-aluminum-frames',
        name: 'Heavy-Duty Aluminum Frames',
        navLabel: 'Heavy-Duty',
        description: 'A robust aluminum frame for larger openings and demanding commercial use.',
        applications: ['Commercial entrances', 'Larger glass openings', 'High-traffic areas'],
        image: '1613244288805-020d7d11c655',
        alt: 'Heavy aluminum framing members around large glass panels'
      },
      {
        id: 'slimline-aluminum-frames',
        name: 'Slimline Aluminum Frames',
        navLabel: 'Slimline',
        description: 'A slender frame profile that keeps sightlines narrow and puts the emphasis on the glass.',
        applications: ['Interior partitions', 'Offices and corridors', 'Minimal, modern openings'],
        image: '1631249008619-8be5db7b4995',
        alt: 'Slim black aluminum frames along a glass-walled corridor'
      },
      {
        id: 'standard-aluminum-frames',
        name: 'Standard Aluminum Frames',
        navLabel: 'Standard',
        description: 'A versatile aluminum frame for everyday glass openings.',
        applications: ['Windows and doors', 'Storefront openings', 'General glazing'],
        image: '1764837599929-100bd5890c57',
        alt: 'Standard aluminum framed windows and doors'
      }
    ]
  }
];

export const findOffering = (id: string) => {
  for (const category of OFFERING_CATEGORIES) {
    const offering = category.items.find((item) => item.id === id);
    if (offering) return { category, offering };
  }
  return null;
};

const namesFor = (...ids: OfferingCategoryId[]) =>
  OFFERING_CATEGORIES.filter((c) => ids.includes(c.id)).flatMap((c) => c.items.map((i) => i.name));

/** Options for the "Service Needed" fields on the quote forms */
export const QUOTE_SERVICE_OPTIONS = {
  commercial: [...namesFor('commercial', 'glass-products', 'aluminum-frames'), 'Other Commercial Glass'],
  residential: [...namesFor('residential', 'shower-enclosures'), 'Other Residential Glass']
};

/** Which quote-form sector a service name belongs to, if it is one of ours */
export const sectorForService = (name: string): 'commercial' | 'residential' | null => {
  if (QUOTE_SERVICE_OPTIONS.residential.includes(name)) return 'residential';
  if (QUOTE_SERVICE_OPTIONS.commercial.includes(name)) return 'commercial';
  return null;
};
