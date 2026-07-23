import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

const LanguageToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      title={lang === "en" ? "हिन्दी में देखें" : "View in English"}
      className="fixed bottom-24 right-6 z-50 flex items-center gap-1.5 rounded-full border border-maroon/20 bg-cream px-3.5 py-2.5 text-xs font-semibold text-maroon shadow-elegant transition-all hover:scale-105 hover:bg-marigold hover:text-ink"
    >
      <Languages className="h-4 w-4" />
      <span className={lang === "en" ? "font-display" : "font-hindi"}>
        {lang === "en" ? "हिन्दी" : "English"}
      </span>
    </button>
  );
};

export default LanguageToggle;
