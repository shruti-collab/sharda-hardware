import {
  Layers,
  Hammer,
  Wrench,
  Waves,
  Home as HomeIcon,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "Sharda Hardware & Cement Agency",
  shortName: "Sharda Hardware",
  tagline: "Building Bokaro, brick by brick.",
  taglineHindi: "हर घर की नींव, हमारे साथ।",
  owner: "Birendra Gupta",
  yearsInBusiness: 5,
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "shardahardware.bokaro@gmail.com",
  address: {
    line1: "Main Road, Sector 4",
    city: "Bokaro Steel City",
    state: "Jharkhand",
    pincode: "827004",
    country: "India",
  },
  hours: {
    weekdays: "8:00 AM – 8:00 PM",
    sunday: "9:00 AM – 2:00 PM",
  },
  mapsQuery: "Sharda Hardware Bokaro Steel City",
};

import cementImg from "@/assets/products/cement.jpg";
import steelImg from "@/assets/products/steel.jpg";
import roofingImg from "@/assets/products/roofing.jpg";
import pipesImg from "@/assets/products/pipes.jpg";
import sandImg from "@/assets/products/sand.jpg";
import toolsImg from "@/assets/products/tools.jpg";

export type ProductCategory = {
  slug: string;
  name: string;
  nameHindi: string;
  description: string;
  icon: LucideIcon;
  image: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "cement",
    name: "Cement",
    nameHindi: "सीमेंट",
    description: "OPC & PPC cement from trusted Indian brands — ideal for foundations, columns and plaster work.",
    icon: Layers,
    items: ["UltraTech OPC 53", "ACC PPC", "Ambuja Plus", "Shree Cement", "Dalmia DSP"],
  },
  {
    slug: "steel-rods",
    name: "Steel & TMT Rods",
    nameHindi: "सरिया",
    description: "High-grade Fe500 & Fe550D TMT bars, angles and flats for reinforced concrete work.",
    icon: Boxes,
    items: ["TATA Tiscon 8mm–25mm", "SAIL TMT", "Kamdhenu", "MS Angles", "MS Flats"],
  },
  {
    slug: "roofing",
    name: "Roofing Sheets",
    nameHindi: "छत की चादर",
    description: "Colour-coated, galvanised and polycarbonate roofing sheets for homes, sheds and workshops.",
    icon: HomeIcon,
    items: ["JSW Colour Coated", "TATA Shaktee GC", "Polycarbonate", "Ridge Caps", "Fasteners"],
  },
  {
    slug: "pipes",
    name: "Pipes & Fittings",
    nameHindi: "पाइप",
    description: "PVC, CPVC and GI pipes with a full range of fittings for plumbing and water supply.",
    icon: Waves,
    items: ["Supreme CPVC", "Astral Pipes", "Finolex PVC", "GI Pipes", "Elbows & Tees"],
  },
  {
    slug: "sand-aggregate",
    name: "Sand & Aggregate",
    nameHindi: "बालू और गिट्टी",
    description: "Clean river sand, stone chips and bricks — delivered directly to your site in Bokaro.",
    icon: Layers,
    items: ["River Sand", "M-Sand", "10mm Chips", "20mm Chips", "Red Bricks"],
  },
  {
    slug: "tools",
    name: "Tools & Hardware",
    nameHindi: "औज़ार",
    description: "Hand tools, power tools and general hardware for masons, carpenters and electricians.",
    icon: Wrench,
    items: ["Trowels & Levels", "Drill Machines", "Grinders", "Nails & Screws", "Safety Gear"],
  },
];

export const waLink = (message = "Hello, I would like to enquire about your products.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${business.phone}`;
