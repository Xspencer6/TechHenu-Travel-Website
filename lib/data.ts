import diamond from "@/app/assets/icons/diamond.svg.svg";
import ticket from "@/app/assets/icons/ticket.svg.svg";
import balloon from "@/app/assets/icons/hot-air-balloon.svg.svg";
import { StaticImageData } from "next/image";

import baler from "@/public/baler-pack.png";
import baguio from "@/public/baguio-pack.png";
import baguioBlossom from "@/public/baguio-blossom-pack.png";
import sagada from "@/public/sagada-pack.png";
import ilocos from "@/public/ilocos-pack.png";
import viganBaguio from "@/public/vigan-baguio-pack.png";

// Packages Data
interface Package {
  id: number;
  title: string;
  description: string;
  duration: string[];
  inclusions: string;
  exclusions: string;
  sites: [string, string][];
  thumbnail: StaticImageData;
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Balete_Tree.jpg/640px-Balete_Tree.jpg",
      ],
      [
        "Mother Falls",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ditumabo_Fall.jpg/640px-Ditumabo_Fall.jpg",
      ],
      [
        "Ermita hill",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/ERMITA_HILL.jpg/640px-ERMITA_HILL.jpg",
      ],
      [
        "Rock formation",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Islets3ljf.jpg/640px-Islets3ljf.jpg",
      ],
      [
        "Museo de Baler",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Museo_de_Baler%2C_Baler%2C_Aurora%2C_April_2023.jpg/640px-Museo_de_Baler%2C_Baler%2C_Aurora%2C_April_2023.jpg",
      ],
      [
        "Pasalubong center",
        "https://centralluzon.politiko.com.ph/wp-content/uploads/2023/09/pasalubong-center.jpg",
      ],
    ],
    thumbnail: baler,
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
        "Lion's Head",
        "https://i.pinimg.com/736x/6b/ad/1b/6bad1b56fc17c72452560a0caaab0cc8.jpg",
      ],
      [
        "Camp John Hay",
        "https://i.pinimg.com/originals/e3/9b/4e/e39b4e7d9e88646bff42bfcc94b3344a.jpg",
      ],
      [
        "Mines View Park",
        "https://i.pinimg.com/originals/27/07/d8/2707d8d66c0352b5aa967b30047c4d51.jpg",
      ],
      [
        "Wright Park",
        "https://i.pinimg.com/736x/c7/51/01/c751013915bddb6458fe00f73d88ef93--baguio-philippines.jpg",
      ],
      [
        "Burnham Park",
        "https://i.pinimg.com/originals/bd/6a/23/bd6a238a256cedad1e081e3e8f953d23.jpg",
      ],
      [
        "Igorot Stone Kingdom",
        "https://i.pinimg.com/originals/e3/fe/69/e3fe699857d8ba43d5be10fa0afeca1c.jpg",
      ],
    ],
    thumbnail: baguio,
    is_popular: false,
  },
  {
    id: 2,
    title: "Baguio Tour Package with Northern Blossom",
    duration: ["3 Days 2 Nights - P3599", "2 Days 1 Night - P2699"],
    description:
      "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio's culture and charm, along with the Northern Blossoms are waiting for you.",
    inclusions:
      "Van transfer MNL/BAGUIO/MNL, Accommodation with aircondition and wifi, Complete Baguio + Northern Blossom tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Lion's Head",
        "https://i.pinimg.com/736x/6b/ad/1b/6bad1b56fc17c72452560a0caaab0cc8.jpg",
      ],
      [
        "Camp John Hay",
        "https://i.pinimg.com/originals/e3/9b/4e/e39b4e7d9e88646bff42bfcc94b3344a.jpg",
      ],
      [
        "Mines View Park",
        "https://i.pinimg.com/originals/27/07/d8/2707d8d66c0352b5aa967b30047c4d51.jpg",
      ],
      [
        "Wright Park",
        "https://i.pinimg.com/736x/c7/51/01/c751013915bddb6458fe00f73d88ef93--baguio-philippines.jpg",
      ],
      [
        "Burnham Park",
        "https://i.pinimg.com/originals/bd/6a/23/bd6a238a256cedad1e081e3e8f953d23.jpg",
      ],
      [
        "Igorot Stone Kingdom",
        "https://i.pinimg.com/originals/e3/fe/69/e3fe699857d8ba43d5be10fa0afeca1c.jpg",
      ],
      [
        "Northern Blossom",
        "https://i.pinimg.com/originals/a6/d9/e0/a6d9e03aba7b39b52975b129af42f606.jpg",
      ],
    ],
    thumbnail: baguioBlossom,
    is_popular: false,
  },
  {
    id: 3,
    title: "Sagada Tour Package",
    description:
      "Explore mystical caves, towering cliffs, and hanging coffins in Sagada. A journey full of adventure and unforgettable views.",
    duration: ["3 Days 2 Nights - P3799", "2 Days 1 Night - P2999"],
    inclusions:
      "Van transfer MNL/SAGADA/MNL, Accommodation with aircondition and wifi, Complete Sagada tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Sumaguing Cave",
        "https://i.pinimg.com/originals/a6/dd/f3/a6ddf3616c19e0505eef4d2e8d67db55.jpg",
      ],
      [
        "Hanging Coffins",
        "https://i.pinimg.com/736x/77/4c/9d/774c9d8f20fc27219784fe1f75e57158.jpg",
      ],
      [
        "Bomod‑ok Falls",
        "https://i.pinimg.com/originals/9f/b8/01/9fb801249fec4856b6a6a83902dd3a32.jpg",
      ],
      [
        "Underground River",
        "https://1.bp.blogspot.com/-nxXr4_2_A1E/WtmpZXiVcOI/AAAAAAAAVCs/ZGK_8mbZcagGm5cPoOyccgrvGv9uDzbMACLcBGAs/s1600/DSCF3436.JPG",
      ],
      [
        "Kiltepan Rice Terraces",
        "https://i.pinimg.com/736x/af/38/e2/af38e213759e8723fad009c400aa1356--banaue-rice-terraces-the-philippines.jpg",
      ],
    ],
    thumbnail: sagada,
    is_popular: false,
  },
  {
    id: 4,
    title: "Ilocos Tour Package",
    description:
      "Step back in time through historic towns, lighthouse views, and rolling coastlines. Ilocos blends culture, scenery, and discovery.",
    duration: ["3 Days 2 Nights - P3599", "2 Days 1 Night - P2999"],
    inclusions:
      "Van transfer MNL/ILOCOS/MNL, Accommodation with aircondition and wifi, Complete Ilocos tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Paoay Church",
        "https://i.pinimg.com/736x/94/d4/ef/94d4efcdcb7193f6ebef14507453045e.jpg",
      ],
      [
        "Cape Bojeador Lighthouse",
        "https://i.pinimg.com/originals/ba/f9/cf/baf9cfb1ad977428f5f4571b37ff0f4d.jpg",
      ],
      [
        "Bangui Windmills",
        "https://i.pinimg.com/originals/a1/33/be/a133be3c62fda81725dc16c236404fbd.jpg",
      ],
      [
        "Malacañang of the North",
        "https://i.pinimg.com/originals/a3/91/55/a39155312e6bf8ee82110d8563016470.jpg",
      ],
      [
        "Blue Lagoon",
        "https://i.pinimg.com/originals/ec/22/76/ec2276dce0e2216e102161b854a60e1e.png",
      ],
    ],
    thumbnail: ilocos,
    is_popular: false,
  },
  {
    id: 5,
    title: "Vigan/Baguio Tour Package",
    description:
      "Experience the colonial streets of Vigan and the serene highlands of Baguio. A perfect mix of history, scenery, and relaxation.",
    duration: ["3 Days 2 Nights - P3599"],
    inclusions:
      "Van transfer MNL/VIGAN-BAGUIO/MNL, Accommodation with aircondition and wifi, Complete Vigan + Baguio tour",
    exclusions: "Entrance fees, Environmental fees",
    sites: [
      [
        "Calle Crisologo",
        "https://i.pinimg.com/originals/4a/81/82/4a81823a54bd815fd8c7018fa34dc0e0.jpg",
      ],
      [
        "Baluarte",
        "https://i.pinimg.com/736x/e4/0c/2c/e40c2c1a195ad3586219d6f06a7ea4d7.jpg",
      ],
      [
        "Burham Park",
        "https://i.pinimg.com/originals/bd/6a/23/bd6a238a256cedad1e081e3e8f953d23.jpg",
      ],
      [
        "Vigan pottery",
        "https://i.pinimg.com/736x/3b/35/c7/3b35c74e48931c0e503a0265b188c461--vigan-clay-jar.jpg",
      ],
      [
        "Mines View Park",
        "https://i.pinimg.com/originals/27/07/d8/2707d8d66c0352b5aa967b30047c4d51.jpg",
      ],
      [
        "The Mansion",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Side_of_Syquia_Mansion.jpg/640px-Side_of_Syquia_Mansion.jpg",
      ],
    ],
    thumbnail: viganBaguio,
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
      "https://i.pinimg.com/originals/11/06/0a/11060ac72a8f607a36d20ed20a977f34.jpg",
    description:
      "Cool mountain escape known for pine forests, scenic views, and a relaxed city vibe.",
    tourCount: 12,
  },
  {
    id: 2,
    name: "Sagada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sagada_Rice_Terraces_2.jpg/640px-Sagada_Rice_Terraces_2.jpg",
    description:
      "Quiet highland town offering misty mountains, ancient traditions, and soulful adventure.",
    tourCount: 8,
  },
  {
    id: 3,
    name: "Ilocos Norte",
    image:
      "https://i.pinimg.com/originals/17/c3/ff/17c3ffd049efd7bbfaea929f2bab3736.jpg",
    description:
      "Land of wind-swept coasts, historic landmarks, and dramatic northern landscapes.",
    tourCount: 15,
  },
  {
    id: 4,
    name: "Ilocos Sur",
    image:
      "https://i.pinimg.com/originals/d9/74/4e/d9744e73199384ad741ffbac6beb8cb9.jpg",
    description:
      "Cultural heartland blending Spanish-era heritage, artisan crafts, and local flavors.",
    tourCount: 10,
  },
  {
    id: 5,
    name: "Baler",
    image:
      "https://i.pinimg.com/originals/92/ea/fb/92eafba8700755f288af5ab87a7f77ba.jpg",
    description:
      "Laid-back surf town where golden beaches meet lush mountains and rich history.",
    tourCount: 10,
  },
  {
    id: 6,
    name: "Vigan",
    image:
      "https://i.pinimg.com/originals/0a/c4/3c/0ac43cb365552c6de3d40e7d4b6feffa.jpg",
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
      "https://mediaim.expedia.com/destination/2/b3b9632c93fcca2237e43669d417b20b.jpg",
    header_desc: "Go for: Peaceful strolls, bike rides, boating",
    description:
      "This iconic urban park in the heart of Baguio boasts a scenic lake, manicured gardens, and tree‑lined walking paths—perfect for relaxing, picnics, or trying local street food right in the city center.",
  },
  {
    id: 2,
    name: "Mines View Park",
    image: "https://wanderera.com/wp-content/uploads/2022/11/Mines-View-11.jpg",
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
      "http://media-cache-ak0.pinimg.com/736x/e3/9b/4e/e39b4e7d9e88646bff42bfcc94b3344a.jpg",
    header_desc: "Peaceful strolls, bike rides, boating",
    description:
      "A historic woodland retreat with cool pine forests, café spots, historical sites, and bike and walking trails that weave through the old hill station grounds.",
  },
  {
    id: 5,
    name: "Baguio Cathedral (Our Lady of Atonement)",
    header_desc: "Peaceful strolls, bike rides, boating",
    image:
      "https://simbyahero.com/wp-content/uploads/2023/05/Benguet-Baguio-The-Baguio-Cathedral-of-Our-Lady-of-the-Atonement_c.jpg",
    description:
      "Perched on a hill, this cathedral is known for its vivid stained glass and sweeping views of the city—an iconic symbol of Baguio’s cultural landscape.",
  },
  {
    id: 6,
    name: "Session Road",
    header_desc: "Peaceful strolls, bike rides, boating",
    image:
      "https://www.vacationhive.com/images/spots/baguio-session-road-banner.png",
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
      "https://www.travel-palawan.com/wp-content/uploads/2023/04/Sabang-Beach-Puerto-Princesa-Palawan.jpeg",
    header_desc: "Surf culture and waves",
    description:
      "This broad, rolling stretch of Pacific coastline is famous among surfers and beach lovers for consistent waves and relaxed seaside energy.",
  },
  {
    id: 2,
    name: "Dicasalarin Cove",
    image:
      "https://simplyphilippines.net/wp-content/uploads/2014/11/baler-philippines-92-770x515.jpg",
    header_desc: "Secluded beach camping",
    description:
      "Hidden away from the main town, this white-sand cove is ideal for camping, relaxing beside the Pacific, and soaking in serenity.",
  },
  {
    id: 3,
    name: "Baler Church (San Luis Obispo Parish)",
    image:
      "https://i0.wp.com/www.appetizingadventure.com/wp-content/uploads/2017/06/April-11-2013-461-1.jpg?resize=1024%2C683&ssl=1",
    header_desc: "Heritage and quiet reflection",
    description:
      "One of the oldest churches in the region, this historic parish witnessed pivotal events in Philippine history and stands peacefully amid town life.",
  },
  {
    id: 4,
    name: "Museo de Baler",
    image:
      "http://1.bp.blogspot.com/-FalNC3FnbNI/UkhqH_OHwSI/AAAAAAAAfh4/5SI7A6yCbzg/s1600/Museo+de+Baler.jpg",
    header_desc: "Local history and exhibits",
    description:
      "Step inside to learn about Baler’s past, including the famed Siege of Baler, presidential stories, and cultural milestones in Aurora.",
  },
  {
    id: 5,
    name: "Diguisit Beach & Rock Formations",
    header_desc: "Scenic shorelines and sunrise views",
    image:
      "https://i.pinimg.com/originals/cd/5f/31/cd5f31d450c5aa1ac47dd1676b5f6aed.jpg",
    description:
      "Rocky outcrops and calm waters make this a beautiful sunrise destination, with tide-pools and dramatic seascapes to enjoy.",
  },
  {
    id: 6,
    name: "Quezon Park",
    header_desc: "Leisurely walks and shade",
    image:
      "https://1.bp.blogspot.com/-MlyC0TRrvCQ/XpGsH27Q0SI/AAAAAAAAVvU/syljMQjeLtoVbmA464tJiThI8pSwT2RyQCKgBGAsYHg/s1600/museo-de-baler-01.jpg",
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
      "https://1.bp.blogspot.com/-EK2nobt_-Wo/WUUhA6sf2TI/AAAAAAAAQcA/fBo9cEWlOxg7hGe3QSocZzzI__uzT2apACLcBGAs/s1600/Bangui-1.jpg",
    header_desc: "Iconic coastal views",
    description:
      "Towering turbines line the shoreline of Bangui Bay, creating a striking landscape where wind power and seaside vistas meet for memorable photos.",
  },
  {
    id: 2,
    name: "Saud Beach",
    image:
      "https://lakbaypinas.com/wp-content/uploads/2024/10/Snapinsta.app_434306090_391514813676490_6004269144404378717_n_1080.jpg",
    header_desc: "Beach relaxation & water sports",
    description:
      "One of the region’s most serene beaches with soft white sand and clear waters—popular for swimming and watersports.",
  },
  {
    id: 3,
    name: "Patapat Viaduct",
    image: "https://c2.staticflickr.com/6/5200/5856318459_d96b7f7526_b.jpg",
    header_desc: "Scenic coastal drive & photos",
    description:
      "A dramatic stretch of elevated roadway along the northern coast, offering sweeping views of sea and cliffs—great for road trips and photography.",
  },
  {
    id: 4,
    name: "Kapurpurawan Rock Formation",
    image: "https://live.staticflickr.com/8588/16016349609_0e363632cc_b.jpg",
    header_desc: "Natural limestone landscapes",
    description:
      "Unique pale limestone outcrops shaped by wind and waves—an otherworldly natural landmark perfect for walking and capturing striking shots.",
  },
  {
    id: 5,
    name: "Paoay Church (San Agustin Church)",
    header_desc: "History & architecture",
    image:
      "https://heroesofadventure.com/wp-content/uploads/2019/07/Paoay_Church_Ilocos_Norte.jpg",
    description:
      "A UNESCO World Heritage Site famed for its massive buttresses and ecclesiastical stone architecture—a classic Ilocos historical landmark.",
  },
  {
    id: 6,
    name: "La Paz Sand Dunes",
    header_desc: "Off‑road adventure & sandboarding",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5YFKIMdq5RSsgBcN3r40DmWZvuxOu6hN0s9-TzqxzIi8jDH9j_wM8XQK-PTOOG78snqgTEkZHp1xrLBtQoLSCO551NzhxzbK4_H6eRl4gnK4kE_1Hmvo_xKdF22OUZYLjl5cEXI9QHfk/s640/_DSC0638.JPG",
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
      "https://1.bp.blogspot.com/-j_5KGltSIfg/Xtz8NyF5YFI/AAAAAAAAwAg/49XPfz7pEDoAd5SeH34jOd4u_1Ya3wHkgCLcBGAsYHQ/s1600/Bantay%2BChurch%2BBell%2BTower%2B7.JPG",
    header_desc: "Historic views and heritage",
    description:
      "This hilltop belfry offers sweeping vistas over Vigan and countryside, and its adjacent church reflects Spanish colonial history and architecture.",
  },
  {
    id: 2,
    name: "Pagburnayan (Burnay Pottery)",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO8GzNYrlqlG4AI8E-efnJUJbbG3Lq6QCZi_5dbmCy3zGKHFM9gc99cA5K52p6khpzJrnO7-olovuZFo_xF1QOJhu1pK79yTjKPyAQDaMvUopCaR-miJ12cmlzQbYn8nSIHCR61Lt-cSQ/s1600/WP_20161203_15_26_31_Pro__highres.jpg",
    header_desc: "Hands on culture and crafts",
    description:
      "See traditional Ilocano pottery in action — form clay on a wheel and learn an art that’s been practiced here for generations.",
  },
  {
    id: 3,
    name: "Aw-asen Falls",
    image:
      "https://tanawexplorer.com/wp-content/uploads/2024/06/Aw-Asen-Falls.jpg",
    header_desc: "Nature trek and waterfall cool-down",
    description:
      "A hidden highland waterfall with a refreshing plunge pool — perfect for cooling off after hiking through lush surroundings.",
  },
  {
    id: 4,
    name: "Sangbay ni Ragsak Falls",
    image:
      "https://transitpinas.com/wp-content/uploads/2020/03/DSC07424_resize_20.jpg",
    header_desc: "Picturesque waterfall hikes",
    description:
      "Surrounded by rainforests and verdant cliffs, this cascading fall rewards hikers with nature’s serenity and dramatic views.",
  },
  {
    id: 5,
    name: "Dawara Falls",
    header_desc: "Gentel waterfall views",
    image:
      "https://i0.wp.com/transitpinas.com/wp-content/uploads/2020/03/DSC07561_resize_49.jpg?w=1038&ssl=1",
    description:
      "A short trek leads to beautiful falls giving misty sprays and peaceful vibes — great for contemplative nature moments.",
  },
  {
    id: 6,
    name: "Yamashita Cave",
    header_desc: "Historic spelunking and hiking",
    image:
      "https://flashpacking4life.de/wp-content/uploads/2025/03/Sumilon-Island-Yamashita-Cave.jpg",
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
      "https://www.funinthephilippines.com/wp-content/uploads/2023/10/cover-photo-sumaguing-cave-luzon.jpg",
    header_desc: "Spelunking adventure",
    description:
      "Nicknamed “Big Cave,” this guided cave system presents dramatic limestone formations and tunnels—ideal for explorers with sturdy shoes and a sense of adventure.",
  },
  {
    id: 2,
    name: "Bomod‑ok Falls",
    image:
      "https://images.squarespace-cdn.com/content/v1/5fa1522044bdda192713063c/88fde3f1-fafc-42c2-8c8e-48f0eee9e549/Bomod-Ok+Falls+of+Sagada",
    header_desc: "Hike & waterfall swim",
    description:
      "A scenic trek through rice terraces leads to a tall, cool waterfall where visitors can swim or relax beside cascading natural pools.",
  },
  {
    id: 3,
    name: "Kiltepan Peak",
    image:
      "https://wanderera.com/wp-content/uploads/2017/09/c208694c13abe30089346133d6906bf4-1024x576.jpg",
    header_desc: "Sunrise views & sea of clouds",
    description:
      "This early‑morning viewpoint rewards visitors with breathtaking vistas over rolling hills and clouds floating through deep valleys at dawn.",
  },
  {
    id: 4,
    name: "Echo Valley & Hanging Coffins",
    image:
      "https://adventuresofagoodman.com/wp-content/gallery/philippines/Hanging_Coffins-Echo_Valley-Sagada_Philippines-Greg_Goodman-AdventuresofaGoodMan-1-Edit.jpg",
    header_desc: "Culture & nature walk",
    description:
      "A short trail through lush forests leads to cliff‑side locations with traditional hanging coffins and echoing rock formations—an iconic Sagada cultural experience.",
  },
  {
    id: 5,
    name: "Sagada Weaving",
    header_desc: "Cultural crafts & souvenirs",
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2019/01/sagada-weaving.jpg",
    description:
      "A heritage weaving center where you can observe traditional textile‑making and take home handcrafted inabel items.",
  },
  {
    id: 6,
    name: "Lake Danum",
    header_desc: "Relaxing sunset stroll",
    image: "https://live.staticflickr.com/7545/15902413676_0c763779af_b.jpg",
    description:
      "A peaceful mountain lake framed by pine forests—ideal for picnics, reflections, and watching the sun dip over still waters.",
  },
];

// Vigan
export const vigan_spots = [
  {
    id: 1,
    name: "Calle Crisologo",
    image: "https://live.staticflickr.com/7589/16747582116_328402d58f_b.jpg",
    header_desc: "Timeless heritage strolls",
    description:
      "Walk or ride a traditional kalesa down this cobblestone street lined with centuries-old Spanish houses — a living picture of colonial Philippines.",
  },
  {
    id: 2,
    name: "Plaza Burgos / Plaza Salcedo",
    image:
      "https://2.bp.blogspot.com/-yYKl7VxAriA/WK1QvhLoEbI/AAAAAAAADe8/8HUHTqn9fOcnwUCTJ2m78BSnWBXD-LQPgCPcB/s1600/1484146_778858695464123_715916583_n.jpg",
    header_desc: "Local life and light shows",
    description:
      "These historic town squares offer a central gathering place, water shows, and a taste of Vigan’s community rhythm.",
  },
  {
    id: 3,
    name: "Vigan Cathedral",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghncuGcPoJ0lDQXRYHb2UD4EWxwbaO8IuunOigziTZZo49fUYGS1xxXSXcK-7QriFlHtGYRMUBn3uZ7iiKRN-EIvdcCFOiuKItx1Iy6Jc2ZBSjk6EZHJ3-9BbjIE4-KEM6IN60dXmMKQ/s400/Vigan+St+Pauls+Cathedral+night.jpg",
    header_desc: "Earthquake Baroque history",
    description:
      "This grand cathedral, part of the UNESCO-listed historic town, blends Spanish and local architectural influences, anchoring Vigan’s rich cultural roots.",
  },
  {
    id: 4,
    name: "Baluarte Zoo",
    image: "https://jontotheworld.com/wp-content/uploads/2017/07/baluarte.jpg",
    header_desc: "Family fun and wildlife encounters",
    description:
      "Spanning wide savannah-like grounds, this zoo brings visitors up close with exotic animals and interactive exhibits that delight kids and adults alike.",
  },
  {
    id: 5,
    name: "Ilocos Sur Adventure Zone",
    header_desc: "Ziplines and outdoor thrills",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1004364848502633&f=1&nofb=1&ipt=d701bcedaafd2b9c8a7a222f875c110cc0e40834b9bc6bac7d499a0f73a68f66",
    description:
      "Just outside the city, this outdoor activity hub offers ziplines, kayaking, and challenge courses against a backdrop of river and mountain scenery.",
  },
  {
    id: 6,
    name: "Mindoro Beach",
    header_desc: "Quiet sunset walks",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/57/63/00/in-my-xperia-z2.jpg?w=1000&h=-1&s=1",
    description:
      "A short drive from historic sites leads to a calm shoreline with dark sands and sea views — a nice contrast after city explorations.",
  },
];
