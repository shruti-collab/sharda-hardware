import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

interface Props {
  eyebrow?: string;
  eyebrowHindi?: string;
  title: string;
  titleHindi?: string;
  subtitle?: string;
  subtitleHindi?: string;
  hindi?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, eyebrowHindi, title, titleHindi, subtitle, subtitleHindi, hindi, align = "left" }: Props) => {
  const { lang, t } = useLang();
  const showHindiLine = lang === "en" && hindi;
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass"
        >
          {t(eyebrow, eyebrowHindi || eyebrow)}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl leading-tight text-navy sm:text-4xl ${lang === "hi" ? "font-hindi" : "font-display"}`}
      >
        {t(title, titleHindi || title)}
      </motion.h2>
      {showHindiLine && <div className="mt-2 font-hindi text-base text-brass-dark">{hindi}</div>}
      {subtitle && <p className={`mt-3 text-base leading-relaxed text-cement ${lang === "hi" ? "font-hindi" : ""}`}>{t(subtitle, subtitleHindi || subtitle)}</p>}
    </div>
  );
};

export default SectionHeading;
