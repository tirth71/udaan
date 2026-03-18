import { Wheat,Leaf , Package ,Flame, } from "lucide-react";

export type ServiceCategory = {
  slug: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  products: string[];
  color: string;
};

export const services: ServiceCategory[] = [
  {
    slug: "grains",
    icon: Wheat,
    title: "Grains & Pluses & Millets ",
    description:
      "High-quality grains & Pluses & Millets sourced from reliable farms for domestic and global markets.",
    features: [
      "Quality Tested",
    "Bulk Supply",
    "Moisture Controlled Storage",
    "Export Packaging",
    ],
    products: [
      "Sorghum",
    "Millet",
    "Quinoa",
    "Basmati Rice",
    "Corn",
    "Kidney Beans",
    "Chana Dal",
    "Masoor Dal",
    ],
    color: "bg-pink-500/10 text-pink-600",
  },
{
  slug: "dehydrated-products",
  icon: Package,
  title: "Dehydrated Products",
  description:
    "Premium dehydrated food products processed for longer shelf life and export markets.",
  features: [
    "Low Moisture Technology",
    "Vacuum Packaging",
    "Extended Shelf Life",
    "Export Quality",
  ],
  products: [
    "Onion Powder (White, Pink & Red)",
    "Onion Minced (White, Pink & Red)",
    "Onion Chopped (White, Pink & Red)",
    "Onion Flakes (White, Pink & Red)",
    "Onion Granules (White, Pink & Red)",
    "Garlic Powder",
    "Garlic Flakes",
  ],
  color: "bg-amber-500/10 text-amber-600",
},

  {
    slug: "fruits-vegetables",
    icon: Leaf,
    title: "Fruits & Vegetable ",
    description:
      "Fresh, high-quality fruits and vegetables sourced for local & global markets.",
    features: [
      "Cold-chain Logistics",
      "Quality Inspection",
      "Bulk Orders",
      "Export Documentation",
    ],
    products: [
       "KESAR MANGO",
      "DESI PARWAR",
      "SAPOTA CHIKU",
      "CARROT",
      "ORGANIC YELLOW HALDI",
      "Onions",
       "TUVER DANA",
      "BIG GUAVA",
      "COCONUT",
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "spices",
    icon: Flame,
    title: "Spices",
    description:
      "Premium quality spices sourced from trusted farms for domestic and international markets.",
    features: [
    "Quality Certification",
    "Hygienic Packaging",
    "Bulk Supply",
    "Export Ready",
    ],
    products: [
      "Red Chilli Whole",
    "Turmeric Fingers",
    "Nutmeg Whole",
    "Cinnamon & Cassia",
    "Cloves",
    "Dry Ginger",
    "Black Pepper",
    "Star Anise",
    ],
    color: "bg-purple-500/10 text-purple-600",
  },

];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
