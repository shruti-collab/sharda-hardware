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

import cementAsset from "@/assets/products/cement.jpg";
import steelAsset from "@/assets/products/steel.jpg";
import roofingAsset from "@/assets/products/roofing.jpg";
import pipesAsset from "@/assets/products/pipes.jpg";
import sandAsset from "@/assets/products/sand.jpg";
import toolsAsset from "@/assets/products/tools.jpg";
const cementImg = cementAsset;
const steelImg = steelAsset;
const roofingImg = roofingAsset;
const pipesImg = pipesAsset;
const sandImg = sandAsset;
const toolsImg = toolsAsset;

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
    descriptionHindi: "भरोसेमंद भारतीय ब्रांडों की OPC और PPC सीमेंट — नींव, कॉलम और प्लास्टर के लिए बेहतरीन।",
    icon: Layers,
    image: cementImg,
    items: ["UltraTech OPC 53", "ACC PPC", "Ambuja Plus", "Shree Cement", "Dalmia DSP"],
  },
  {
    slug: "steel-rods",
    name: "Steel & TMT Rods",
    nameHindi: "सरिया",
    description: "High-grade Fe500 & Fe550D TMT bars, angles and flats for reinforced concrete work.",
    descriptionHindi: "उच्च गुणवत्ता वाले Fe500 और Fe550D टीएमटी सरिया, एंगल और फ्लैट — मज़बूत निर्माण के लिए।",
    icon: Boxes,
    image: steelImg,
    items: ["TATA Tiscon 8mm–25mm", "SAIL TMT", "Kamdhenu", "MS Angles", "MS Flats"],
  },
  {
    slug: "roofing",
    name: "Roofing Sheets",
    nameHindi: "छत की चादर",
    description: "Colour-coated, galvanised and polycarbonate roofing sheets for homes, sheds and workshops.",
    descriptionHindi: "रंगीन, गैल्वनाइज़्ड और पॉलीकार्बोनेट छत की चादरें — घर, शेड और वर्कशॉप के लिए।",
    icon: HomeIcon,
    image: roofingImg,
    items: ["JSW Colour Coated", "TATA Shaktee GC", "Polycarbonate", "Ridge Caps", "Fasteners"],
  },
  {
    slug: "pipes",
    name: "Pipes & Fittings",
    nameHindi: "पाइप",
    description: "PVC, CPVC and GI pipes with a full range of fittings for plumbing and water supply.",
    descriptionHindi: "पीवीसी, सीपीवीसी और जीआई पाइप — प्लंबिंग और जल आपूर्ति के लिए पूरी रेंज।",
    icon: Waves,
    image: pipesImg,
    items: ["Supreme CPVC", "Astral Pipes", "Finolex PVC", "GI Pipes", "Elbows & Tees"],
  },
  {
    slug: "sand-aggregate",
    name: "Sand & Aggregate",
    nameHindi: "बालू और गिट्टी",
    description: "Clean river sand, stone chips and bricks — delivered directly to your site in Bokaro.",
    descriptionHindi: "साफ नदी का बालू, गिट्टी और ईंट — सीधे आपके निर्माण स्थल तक पहुँचाया जाता है।",
    icon: Layers,
    image: sandImg,
    items: ["River Sand", "M-Sand", "10mm Chips", "20mm Chips", "Red Bricks"],
  },
  {
    slug: "tools",
    name: "Tools & Hardware",
    nameHindi: "औज़ार",
    description: "Hand tools, power tools and general hardware for masons, carpenters and electricians.",
    descriptionHindi: "मिस्त्री, बढ़ई और इलेक्ट्रीशियन के लिए हैंड टूल्स, पावर टूल्स और सामान्य हार्डवेयर।",
    icon: Wrench,
    image: toolsImg,
    items: ["Trowels & Levels", "Drill Machines", "Grinders", "Nails & Screws", "Safety Gear"],
  },
];

export const waLink = (message = "Hello, I would like to enquire about your products.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${business.phone}`;
