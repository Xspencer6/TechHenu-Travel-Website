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

// Destinations Data
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
      "https://i0.wp.com/mybaguiocityguide.com/wp-content/uploads/2023/04/pexels-photo-12914725.jpeg?w=1880&ssl=1",
    description:
      "Cool mountain escape known for pine forests, scenic views, and a relaxed city vibe.",
    tourCount: 12,
  },
  {
    id: 2,
    name: "Sagada",
    image:
      "https://4.bp.blogspot.com/-KBzfbc_Chss/UFwBH2DWdfI/AAAAAAAAKls/F1DXQ51kvy4/s1600/00.jpg",
    description:
      "Quiet highland town offering misty mountains, ancient traditions, and soulful adventure.",
    tourCount: 8,
  },
  {
    id: 3,
    name: "Ilocos Norte",
    image:
      "https://1.bp.blogspot.com/-JS24fh5r0mA/UfXTya8FO-I/AAAAAAAAB1w/4-GR9zRlTWg/s1600/san_agustin+church_paoay_ilocos_norte_2-1335602884.jpg",
    description:
      "Land of wind-swept coasts, historic landmarks, and dramatic northern landscapes.",
    tourCount: 15,
  },
  {
    id: 4,
    name: "Ilocos Sur",
    image: "https://farm1.staticflickr.com/331/19084336239_f057417348_b.jpg",
    description:
      "Cultural heartland blending Spanish-era heritage, artisan crafts, and local flavors.",
    tourCount: 10,
  },
  {
    id: 5,
    name: "Baler",
    image:
      "http://simplyphilippines.net/wp-content/uploads/2014/11/baler-philippines-102.jpg",
    description:
      "Laid-back surf town where golden beaches meet lush mountains and rich history.",
    tourCount: 10,
  },
  {
    id: 6,
    name: "Vigan",
    image:
      "https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1552229691786-1M8KURNE27AO4YVQZDRO/vigan-philippines-city-guide%2B%2Bthings-to-do-see",
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

{
  /* Popular tours per destinations */
}

// Baguio
export const baguio_spots = [
  {
    id: 1,
    name: "Burnham Park",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmediaim.expedia.com%2Fdestination%2F2%2Fb3b9632c93fcca2237e43669d417b20b.jpg&f=1&nofb=1&ipt=04187c70ec7782a86447d850440510b7fb0151abf6ae0c9291624c9b9d8ccbba",
    header_desc: "Go for: Peaceful strolls, bike rides, boating",
    description:
      "This iconic urban park in the heart of Baguio boasts a scenic lake, manicured gardens, and tree‑lined walking paths—perfect for relaxing, picnics, or trying local street food right in the city center.",
  },
  {
    id: 2,
    name: "Mines View Park",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Peaceful strolls, bike rides, boating",
    description:
      "A classic viewpoint overlooking rugged highland terrain and deep valleys, with souvenir stalls and photo spots that capture Baguio’s cool, misty landscape.",
  },
  {
    id: 3,
    name: "La Trinidad Strawberry Farm",
    image:
      "https://pinaywise.com/wp-content/uploads/2024/01/strawberry-festival-in-la-trinidad-benguet.jpg",
    header_desc: "Peaceful strolls, bike rides, boating",
    description:
      "Just outside Baguio, this expansive farm lets visitors pick fresh strawberries (seasonal) and enjoy fresh produce while enjoying sweeping mountain views.",
  },
  {
    id: 4,
    name: "Camp John Hay",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Peaceful strolls, bike rides, boating",
    description:
      "A historic woodland retreat with cool pine forests, café spots, historical sites, and bike and walking trails that weave through the old hill station grounds.",
  },
  {
    id: 5,
    name: "Baguio Cathedral (Our Lady of Atonement)",
    header_desc: "Peaceful strolls, bike rides, boating",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "Perched on a hill, this cathedral is known for its vivid stained glass and sweeping views of the city—an iconic symbol of Baguio’s cultural landscape.",
  },
  {
    id: 6,
    name: "Session Road",
    header_desc: "Peaceful strolls, bike rides, boating",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "Baguio’s main thoroughfare is lined with local cafés, restaurants, bakeries, and boutiques—a perfect spot to taste local specialties and unwind.",
  },
];

// Baler
export const baler_spots = [
  {
    id: 1,
    name: "Sabang Beach",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    header_desc: "Surf culture and waves",
    description:
      "This broad, rolling stretch of Pacific coastline is famous among surfers and beach lovers for consistent waves and relaxed seaside energy.",
  },
  {
    id: 2,
    name: "Dicasalarin Cove",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Secluded beach camping",
    description:
      "Hidden away from the main town, this white-sand cove is ideal for camping, relaxing beside the Pacific, and soaking in serenity.",
  },
  {
    id: 3,
    name: "Baler Church (San Luis Obispo Parish)",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    header_desc: "Heritage and quiet reflection",
    description:
      "One of the oldest churches in the region, this historic parish witnessed pivotal events in Philippine history and stands peacefully amid town life.",
  },
  {
    id: 4,
    name: "Museo de Baler",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Local history and exhibits",
    description:
      "Step inside to learn about Baler’s past, including the famed Siege of Baler, presidential stories, and cultural milestones in Aurora.",
  },
  {
    id: 5,
    name: "Diguisit Beach & Rock Formations",
    header_desc: "Scenic shorelines and sunrise views",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "Rocky outcrops and calm waters make this a beautiful sunrise destination, with tide-pools and dramatic seascapes to enjoy.",
  },
  {
    id: 6,
    name: "Quezon Park",
    header_desc: "Leisurely walks and shade",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "A leafy park in the heart of Baler town where locals and visitors alike enjoy shaded paths, open lawns, and moments of relaxation between beach excursions.",
  },
];

// Ilocos Norte
export const ilocos_nor_spots = [
  {
    id: 1,
    name: "Bangui Windmills",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    header_desc: "Iconic coastal views",
    description:
      "Towering turbines line the shoreline of Bangui Bay, creating a striking landscape where wind power and seaside vistas meet for memorable photos.",
  },
  {
    id: 2,
    name: "Saud Beach",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Beach relaxation & water sports",
    description:
      "One of the region’s most serene beaches with soft white sand and clear waters—popular for swimming and watersports.",
  },
  {
    id: 3,
    name: "Patapat Viaduct",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    header_desc: "Scenic coastal drive & photos",
    description:
      "A dramatic stretch of elevated roadway along the northern coast, offering sweeping views of sea and cliffs—great for road trips and photography.",
  },
  {
    id: 4,
    name: "Kapurpurawan Rock Formation",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Natural limestone landscapes",
    description:
      "Unique pale limestone outcrops shaped by wind and waves—an otherworldly natural landmark perfect for walking and capturing striking shots.",
  },
  {
    id: 5,
    name: "Paoay Church (San Agustin Church)",
    header_desc: "History & architecture",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "A UNESCO World Heritage Site famed for its massive buttresses and ecclesiastical stone architecture—a classic Ilocos historical landmark.",
  },
  {
    id: 6,
    name: "La Paz Sand Dunes",
    header_desc: "Off‑road adventure & sandboarding",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "Expansive golden dunes near Laoag that invite 4×4 rides and sandboarding for thrill‑seekers.",
  },
];

// Ilocos Sur
export const ilocos_sur_spots = [
  {
    id: 1,
    name: "Bantay Bell Tower & Church",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    header_desc: "Historic views and heritage",
    description:
      "This hilltop belfry offers sweeping vistas over Vigan and countryside, and its adjacent church reflects Spanish colonial history and architecture.",
  },
  {
    id: 2,
    name: "Pagburnayan (Burnay Pottery)",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Hands on culture and crafts",
    description:
      "See traditional Ilocano pottery in action — form clay on a wheel and learn an art that’s been practiced here for generations.",
  },
  {
    id: 3,
    name: "Aw-asen Falls",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    header_desc: "Nature trek and waterfall cool-down",
    description:
      "A hidden highland waterfall with a refreshing plunge pool — perfect for cooling off after hiking through lush surroundings.",
  },
  {
    id: 4,
    name: "Sangbay ni Ragsak Falls",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Picturesque waterfall hikes",
    description:
      "Surrounded by rainforests and verdant cliffs, this cascading fall rewards hikers with nature’s serenity and dramatic views.",
  },
  {
    id: 5,
    name: "Dawara Falls",
    header_desc: "Gentel waterfall views",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "A short trek leads to beautiful falls giving misty sprays and peaceful vibes — great for contemplative nature moments.",
  },
  {
    id: 6,
    name: "Yamashita Cave",
    header_desc: "Historic spelunking and hiking",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "A WWII-era cave with compelling backstory surrounded by grassy ridges — a mix of history and outdoor exploration.",
  },
];

// Sagada
export const sagada_spots = [
  {
    id: 1,
    name: "Sumaguing Cave",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    header_desc: "Spelunking adventure",
    description:
      "Nicknamed “Big Cave,” this guided cave system presents dramatic limestone formations and tunnels—ideal for explorers with sturdy shoes and a sense of adventure.",
  },
  {
    id: 2,
    name: "Bomod‑ok Falls",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Hike & waterfall swim",
    description:
      "A scenic trek through rice terraces leads to a tall, cool waterfall where visitors can swim or relax beside cascading natural pools.",
  },
  {
    id: 3,
    name: "Kiltepan Peak",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    header_desc: "Sunrise views & sea of clouds",
    description:
      "This early‑morning viewpoint rewards visitors with breathtaking vistas over rolling hills and clouds floating through deep valleys at dawn.",
  },
  {
    id: 4,
    name: "Echo Valley & Hanging Coffins",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Culture & nature walk",
    description:
      "A short trail through lush forests leads to cliff‑side locations with traditional hanging coffins and echoing rock formations—an iconic Sagada cultural experience.",
  },
  {
    id: 5,
    name: "Sagada Weaving",
    header_desc: "Cultural crafts & souvenirs",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "A heritage weaving center where you can observe traditional textile‑making and take home handcrafted inabel items.",
  },
  {
    id: 6,
    name: "Lake Danum",
    header_desc: "Relaxing sunset stroll",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "A peaceful mountain lake framed by pine forests—ideal for picnics, reflections, and watching the sun dip over still waters.",
  },
];

// Vigan
export const vigan_spots = [
  {
    id: 1,
    name: "Calle Crisologo",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    header_desc: "Timeless heritage strolls",
    description:
      "Walk or ride a traditional kalesa down this cobblestone street lined with centuries-old Spanish houses — a living picture of colonial Philippines.",
  },
  {
    id: 2,
    name: "Plaza Burgos / Plaza Salcedo",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    header_desc: "Local life and light shows",
    description:
      "These historic town squares offer a central gathering place, water shows, and a taste of Vigan’s community rhythm.",
  },
  {
    id: 3,
    name: "Vigan Cathedral",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    header_desc: "Earthquake Baroque history",
    description:
      "This grand cathedral, part of the UNESCO-listed historic town, blends Spanish and local architectural influences, anchoring Vigan’s rich cultural roots.",
  },
  {
    id: 4,
    name: "Baluarte Zoo",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    header_desc: "Family fun and wildlife encounters",
    description:
      "Spanning wide savannah-like grounds, this zoo brings visitors up close with exotic animals and interactive exhibits that delight kids and adults alike.",
  },
  {
    id: 5,
    name: "Ilocos Sur Adventure Zone",
    header_desc: "Ziplines and outdoor thrills",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description:
      "Just outside the city, this outdoor activity hub offers ziplines, kayaking, and challenge courses against a backdrop of river and mountain scenery.",
  },
  {
    id: 6,
    name: "Mindoro Beach",
    header_desc: "Quiet sunset walks",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description:
      "A short drive from historic sites leads to a calm shoreline with dark sands and sea views — a nice contrast after city explorations.",
  },
];
