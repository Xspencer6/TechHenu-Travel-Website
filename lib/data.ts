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