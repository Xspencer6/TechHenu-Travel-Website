import diamond from "@/app/assets/icons/diamond.svg.svg";
import ticket from "@/app/assets/icons/ticket.svg.svg";
import balloon from "@/app/assets/icons/hot-air-balloon.svg.svg"

// Packages Data
interface Package {
    id: number;
    title: string;
    description: string;
    duration: string[];
    inclusions: string;
    exclusions: string;
    sites: string;
    thumbnail: string;
    is_popular: boolean;
}

export const packages: Package[] = [
    {
        id: 0,
        title: "Baler Tour Package",
        description: "Chase waterfalls, stroll along pristine beaches, and uncover the charm of Baler. Adventure and relaxation await in every corner.",
        duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1494676051766-7a7454d53904?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        is_popular: true,
    },
    {
        id: 1,
        title: "Baguio Tour Package",
        duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
        description: "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio’s culture and charm are waiting for you.",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 2,
        title: "Baguio Tour Package with Northern Blossom",
        duration: ["3 Days 2 Nights - P3599", "2 Days 1 Night - P2699"],
        description: "Breathe in the cool mountain air, wander vibrant markets, and enjoy scenic hillsides. Baguio’s culture and charm are waiting for you.",
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 3,
        title: "Sagada Tour Package",
        description: "Explore mystical caves, towering cliffs, and hanging coffins in Sagada. A journey full of adventure and unforgettable views.",
        duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 4,
        title: "Ilocos Tour Package",
        description: "Step back in time through historic towns, lighthouse views, and rolling coastlines. Ilocos blends culture, scenery, and discovery.",
        duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
    {
        id: 5,
        title: "Vigan/Baguio Tour Package",
        description: "Experience the colonial streets of Vigan and the serene highlands of Baguio. A perfect mix of history, scenery, and relaxation.",
        duration: ["3 Days 2 Nights - P3299", "2 Days 1 Night - P2299"],
        inclusions: "Van transfer MNL/BALER/MNL, Accommodation with aircondition and wifi, Complete Baler tour",
        exclusions: "Entrance fees, Environmental fees",
        sites: "Balete tree, Motehr Falls, Ermita hill, Rock formation, Museo de Baler, Baler marker, Pasalubong center",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        is_popular: false,
    },
];

// Destination Data
interface Destination {
  id: number
  name: string
  image: string
  description: string
  tourCount: number
}


export const destinations: Destination[] = [
    {
        id: 1,
        name: "Baguio",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
        description: "Cool mountain escape known for pine forests, scenic views, and a relaxed city vibe.",
        tourCount: 12
    },
    {
        id: 2,
        name: "Sagada",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
        description: "Quiet highland town offering misty mountains, ancient traditions, and soulful adventure.",
        tourCount: 8
    },
    {
        id: 3,
        name: "Ilocos Norte",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
        description: "Land of wind-swept coasts, historic landmarks, and dramatic northern landscapes.",
        tourCount: 15
    },
    {
        id: 4,
        name: "Ilocos Sur",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
        description: "Cultural heartland blending Spanish-era heritage, artisan crafts, and local flavors.",
        tourCount: 10
    },
    {
        id: 5,
        name: "Baler",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
        description: "Laid-back surf town where golden beaches meet lush mountains and rich history.",
        tourCount: 10
    },
    {
        id: 6,
        name: "Vigan",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
        description: "Timeless heritage city with cobblestone streets, colonial charm, and living history.",
        tourCount: 6
    },
]


export const provisions = [
        {
            icon: diamond,
            what: 'Skilled and Accommodating Drivers',
            why: 'Drivers ensure every journey safe, smooth, and enjoyable for the whole family.',
        },
        {
            icon: ticket,
            what: 'Complete Tour',
            why: 'Experience all the highlights with a carefully planned itinerary that maximizes your adventure.',
        },
        {
            icon: balloon,
            what: 'Round Trip Van Transfers',
            why: 'Round-trip transfers are handled in comfort, taking care of every detail from start to finish.',
        }
    ]