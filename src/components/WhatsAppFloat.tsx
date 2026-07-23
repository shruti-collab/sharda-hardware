import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/business";
import { useLang } from "@/lib/i18n";

const WhatsAppFloat = () => {
  const { t } = useLang();
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant transition-all hover:scale-105 hover:shadow-2xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">{t("Chat with us", "हमसे चैट करें")}</span>
    </a>
  );
};

export default WhatsAppFloat;
