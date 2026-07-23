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
  phone: "+919939159582",
  phoneDisplay: "+91 99391 59582",
  whatsapp: "919939159582",
  email: "shardahardware.bokaro@gmail.com",
  address: {
    line1: "Near Sharda Jewellers, M37G+9HM, Biada Road",
    city: "Railway Colony, Bokaro Steel City",
    state: "Jharkhand",
    pincode: "827001",
    country: "India",
  },
  hours: {
    weekdays: "8:00 AM – 9:00 PM",
    sunday: "8:00 AM – 9:00 PM",
  },
  mapsUrl: "https://www.google.com/maps/place/M37G%2B9HM+%E0%A4%B6%E0%A4%BE%E0%A4%B0%E0%A4%A6%E0%A4%BE+%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A1%E0%A4%B5%E0%A5%87%E0%A4%AF%E0%A4%B0+%E0%A4%8F%E0%A4%A3%E0%A5%8D%E0%A4%A1+%E0%A4%B8%E0%A4%BF%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F+%E0%A4%8F%E0%A4%9C%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80,+Biada+Road,+Railway+Colony,+Bokaro+Steel+City,+Bokaro,+Jharkhand+827001",
  mapsEmbedQuery: "M37G+9HM Sharda Hardware and Cement Agency, Biada Road, Railway Colony, Bokaro Steel City, Jharkhand 827001",
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
  descriptionHindi: string;
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
    image: cementImg,
    items: ["UltraTech OPC 53", "ACC PPC", "Ambuja Plus", "Shree Cement", "Dalmia DSP"],
  },
  {
    slug: "steel-rods",
    name: "Steel & TMT Rods",
    nameHindi: "सरिया",
    description: "High-grade Fe500 & Fe550D TMT bars, angles and flats for reinforced concrete work.",
    icon: Boxes,
    image: steelImg,
    items: ["TATA Tiscon 8mm–25mm", "SAIL TMT", "Kamdhenu", "MS Angles", "MS Flats"],
  },
  {
    slug: "roofing",
    name: "Roofing Sheets",
    nameHindi: "छत की चादर",
    description: "Colour-coated, galvanised and polycarbonate roofing sheets for homes, sheds and workshops.",
    icon: HomeIcon,
    image: roofingImg,
    items: ["JSW Colour Coated", "TATA Shaktee GC", "Polycarbonate", "Ridge Caps", "Fasteners"],
  },
  {
    slug: "pipes",
    name: "Pipes & Fittings",
    nameHindi: "पाइप",
    description: "PVC, CPVC and GI pipes with a full range of fittings for plumbing and water supply.",
    icon: Waves,
    image: pipesImg,
    items: ["Supreme CPVC", "Astral Pipes", "Finolex PVC", "GI Pipes", "Elbows & Tees"],
  },
  {
    slug: "sand-aggregate",
    name: "Sand & Aggregate",
    nameHindi: "बालू और गिट्टी",
    description: "Clean river sand, stone chips and bricks — delivered directly to your site in Bokaro.",
    icon: Layers,
    image: sandImg,
    items: ["River Sand", "M-Sand", "10mm Chips", "20mm Chips", "Red Bricks"],
  },
  {
    slug: "tools",
    name: "Tools & Hardware",
    nameHindi: "औज़ार",
    description: "Hand tools, power tools and general hardware for masons, carpenters and electricians.",
    icon: Wrench,
    image: toolsImg,
    items: ["Trowels & Levels", "Drill Machines", "Grinders", "Nails & Screws", "Safety Gear"],
  },
];

export const waLink = (message = "Hello, I would like to enquire about your products.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${business.phone}`;
