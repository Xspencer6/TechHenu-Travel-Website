import diamond from "@/app/assets/icons/diamond.svg.svg";
import ticket from "@/app/assets/icons/ticket.svg.svg";
import balloon from "@/app/assets/icons/hot-air-balloon.svg.svg";

// Packages Data
interface Package {
  id: number;
  title: string;
  description: string;
  duration: string[];
  inclusions: string;
  exclusions: string;
  sites: [string, string][];
  thumbnail: string;
  is_popular: boolean;
}

export const packages: Package[] = [
  {
    id: 0,
    title: "Baler Tour Package",
    description:
      "Chase waterfalls, stroll along pristine beaches, and uncover the charm of Baler. Adventure and relaxation await in every corner.",
    duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
    inclusions:
      "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Balete tree",
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=400&fit=crop",
      ],
      [
        "Mother Falls",
        "https://images.unsplash.com/photo-1578586561408-2b7e860a1a4b?w=400&h=400&fit=crop",
      ],
      [
        "Ermita hill",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      ],
      [
        "Rock formation",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      ],
      [
        "Museo de Baler",
        "https://images.unsplash.com/photo-1578698640889-75566b087d4a?w=400&h=400&fit=crop",
      ],
      [
        "Baler marker",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
      ],
      [
        "Pasalubong center",
        "https://images.unsplash.com/photo-1581578731548-9d101ab953e7?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: true,
  },
  {
    id: 1,
    title: "Baguio Tour Package",
    duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
    description:
      "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio's culture and charm are waiting for you.",
    inclusions:
      "Van transfer MNL/BAGUIO/MNL, Accommodation with aircondition and wifi, Complete Baguio tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Session Road",
        "https://images.unsplash.com/photo-1584900210998-89c1e81235bd?w=400&h=400&fit=crop",
      ],
      [
        "Camp John Hay",
        "https://images.unsplash.com/photo-1584908657947-5c261478e9d8?w=400&h=400&fit=crop",
      ],
      [
        "Mines View Park",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop",
      ],
      [
        "Wright Park",
        "https://images.unsplash.com/photo-1570549717069-33bed2eb6a26?w=400&h=400&fit=crop",
      ],
      [
        "Burnham Park",
        "https://images.unsplash.com/photo-1564507592333-a502e8d29d12?w=400&h=400&fit=crop",
      ],
      [
        "Bayanihan Park",
        "https://images.unsplash.com/photo-1627483231358-72b7d8b87393?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: false,
  },
  {
    id: 2,
    title: "Baguio Tour Package with Northern Blossom",
    duration: ["3 Days 2 Nights - P3599", "2 Days 1 Night - P2699"],
    description:
      "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio's culture and charm are waiting for you.",
    inclusions:
      "Van transfer MNL/BAGUIO/MNL, Accommodation with aircondition and wifi, Complete Baguio + Northern Blossom tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Session Road",
        "https://images.unsplash.com/photo-1584900210998-89c1e81235bd?w=400&h=400&fit=crop",
      ],
      [
        "Camp John Hay",
        "https://images.unsplash.com/photo-1584908657947-5c261478e9d8?w=400&h=400&fit=crop",
      ],
      [
        "Mines View Park",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop",
      ],
      [
        "Wright Park",
        "https://images.unsplash.com/photo-1570549717069-33bed2eb6a26?w=400&h=400&fit=crop",
      ],
      [
        "Burnham Park",
        "https://images.unsplash.com/photo-1564507592333-a502e8d29d12?w=400&h=400&fit=crop",
      ],
      [
        "Bayanihan Park",
        "https://images.unsplash.com/photo-1627483231358-72b7d8b87393?w=400&h=400&fit=crop",
      ],
      [
        "Northern Blossom",
        "https://images.unsplash.com/photo-1620293487918-ea3f8f4a3b1a?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: false,
  },
  {
    id: 3,
    title: "Sagada Tour Package",
    description:
      "Explore mystical caves, towering cliffs, and hanging coffins in Sagada. A journey full of adventure and unforgettable views.",
    duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
    inclusions:
      "Van transfer MNL/SAGADA/MNL, Accommodation with aircondition and wifi, Complete Sagada tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Sumaguing Cave",
        "https://images.unsplash.com/photo-1588889485458-2d3ece109c1b?w=400&h=400&fit=crop",
      ],
      [
        "Hanging Coffins",
        "https://images.unsplash.com/photo-1600433792800-9e52d3c664b1?w=400&h=400&fit=crop",
      ],
      [
        "Echo Valley",
        "https://images.unsplash.com/photo-1628350461169-8b7d2f3a2e1b?w=400&h=400&fit=crop",
      ],
      [
        "Big Hole",
        "https://images.unsplash.com/photo-1628350461169-8b7d2f3a2e1b?w=400&h=400&fit=crop",
      ],
      [
        "Underground River",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      ],
      [
        "Kiltepan Rice Terraces",
        "https://images.unsplash.com/photo-1620250476814-8b55a3e9a4c6?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: false,
  },
  {
    id: 4,
    title: "Ilocos Tour Package",
    description:
      "Step back in time through historic towns, lighthouse views, and rolling coastlines. Ilocos blends culture, scenery, and discovery.",
    duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
    inclusions:
      "Van transfer MNL/ILOCOS/MNL, Accommodation with aircondition and wifi, Complete Ilocos tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Paoay Church",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?w=400&h=400&fit=crop",
      ],
      [
        "Cape Bojeador Lighthouse",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?w=400&h=400&fit=crop",
      ],
      [
        "Bangui Windmills",
        "https://images.unsplash.com/photo-1593941700782-340d5ec7b5f4?w=400&h=400&fit=crop",
      ],
      [
        "Malacañang of the North",
        "https://images.unsplash.com/photo-1620136145416-938b9a5a9e4c?w=400&h=400&fit=crop",
      ],
      [
        "Saud Beach",
        "https://images.unsplash.com/photo-1551524164-748d3080bf14?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: false,
  },
  {
    id: 5,
    title: "Vigan/Baguio Tour Package",
    description:
      "Experience the colonial streets of Vigan and the serene highlands of Baguio. A perfect mix of history, scenery, and relaxation.",
    duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
    inclusions:
      "Van transfer MNL/VIGAN-BAGUIO/MNL, Accommodation with aircondition and wifi, Complete Vigan + Baguio tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Calle Crisologo",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?w=400&h=400&fit=crop",
      ],
      [
        "Baluarte",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?w=400&h=400&fit=crop",
      ],
      [
        "St. Paul's Cathedral",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?w=400&h=400&fit=crop",
      ],
      [
        "Session Road",
        "https://images.unsplash.com/photo-1584900210998-89c1e81235bd?w=400&h=400&fit=crop",
      ],
      [
        "Mines View Park",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop",
      ],
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    is_popular: false,
  },
];

// Destination Data
interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  tourCount: number;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Baguio",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    description:
      "Cool mountain escape known for pine forests, scenic views, and a relaxed city vibe.",
    tourCount: 12,
  },
  {
    id: 2,
    name: "Sagada",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    description:
      "Quiet highland town offering misty mountains, ancient traditions, and soulful adventure.",
    tourCount: 8,
  },
  {
    id: 3,
    name: "Ilocos Norte",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    description:
      "Land of wind-swept coasts, historic landmarks, and dramatic northern landscapes.",
    tourCount: 15,
  },
  {
    id: 4,
    name: "Ilocos Sur",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "Cultural heartland blending Spanish-era heritage, artisan crafts, and local flavors.",
    tourCount: 10,
  },
  {
    id: 5,
    name: "Baler",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "Laid-back surf town where golden beaches meet lush mountains and rich history.",
    tourCount: 10,
  },
  {
    id: 6,
    name: "Vigan",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "Timeless heritage city with cobblestone streets, colonial charm, and living history.",
    tourCount: 6,
  },
];

export const provisions = [
  {
    icon: diamond,
    what: "Skilled and Accommodating Drivers",
    why: "Drivers ensure every journey safe, smooth, and enjoyable for the whole family.",
  },
  {
    icon: ticket,
    what: "Complete Tour",
    why: "Experience all the highlights with a carefully planned itinerary that maximizes your adventure.",
  },
  {
    icon: balloon,
    what: "Round Trip Van Transfers",
    why: "Round-trip transfers are handled in comfort, taking care of every detail from start to finish.",
  },
];
