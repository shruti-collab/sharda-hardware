import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/business";

const WhatsAppFloat = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant transition-all hover:scale-105 hover:shadow-2xl"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
  </a>
);

export default WhatsAppFloat;
