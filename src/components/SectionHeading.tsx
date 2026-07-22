import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  hindi?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, subtitle, hindi, align = "left" }: Props) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass"
      >
        {eyebrow}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-3xl leading-tight text-navy sm:text-4xl"
    >
      {title}
    </motion.h2>
    {hindi && <div className="mt-2 font-hindi text-base text-brass-dark">{hindi}</div>}
    {subtitle && <p className="mt-3 text-base leading-relaxed text-cement">{subtitle}</p>}
  </div>
);

export default SectionHeading;
