import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, HandshakeIcon, Truck, IndianRupee } from "lucide-react";
import { business, waLink } from "@/lib/business";
import { useLang } from "@/lib/i18n";

const Home = () => {
  const { t, lang } = useLang();
  const highlights = [
    { icon: ShieldCheck, title: t("Genuine brands", "असली ब्रांड"), text: t("UltraTech, TATA, JSW, Supreme — sourced directly.", "अल्ट्राटेक, टाटा, JSW, सुप्रीम — सीधे कंपनी से।") },
    { icon: IndianRupee, title: t("Fair pricing", "सही दाम"), text: t("Transparent contractor rates, no hidden markup.", "पारदर्शी ठेकेदार दर, कोई छुपा शुल्क नहीं।") },
    { icon: Truck, title: t("Site delivery", "साइट डिलीवरी"), text: t("Fast delivery across Bokaro & nearby sectors.", "बोकारो और आस-पास के सेक्टरों में तेज़ डिलीवरी।") },
    { icon: HandshakeIcon, title: t("Trusted advice", "भरोसेमंद सलाह"), text: t("Guidance from a family that has built for years.", "वर्षों से निर्माण में लगे परिवार से मार्गदर्शन।") },
  ];

  return (
    <>
      <Hero />

      <section className="border-y border-border bg-ivory/60">
        <div className="container-shell grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass-dark">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <div className={`text-base text-navy ${lang === "hi" ? "font-hindi" : "font-display"}`}>{h.title}</div>
                <div className={`text-sm text-cement ${lang === "hi" ? "font-hindi" : ""}`}>{h.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Catalog"
              eyebrowHindi="हमारा उत्पाद"
              title="Everything to build strong."
              titleHindi="मज़बूत निर्माण के लिए सब कुछ।"
              hindi="मज़बूत निर्माण के लिए सब कुछ।"
              subtitle="From foundation to finishing — cement, steel, sand, pipes, roofing sheets and tools, all under one roof."
              subtitleHindi="नींव से लेकर फिनिशिंग तक — सीमेंट, सरिया, बालू, पाइप, छत की चादर और औज़ार, सब एक ही छत के नीचे।"
            />
            <Link
              to="/products"
              className={`group inline-flex items-center gap-1.5 text-sm font-medium text-brass-dark hover:text-navy ${lang === "hi" ? "font-hindi" : ""}`}
            >
              {t("View all categories", "सभी श्रेणियाँ देखें")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-[hsl(229_52%_28%)] px-6 py-14 text-center text-ivory sm:px-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brass/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
            <h3 className={`mx-auto max-w-2xl text-3xl sm:text-4xl ${lang === "hi" ? "font-hindi" : "font-display"}`}>
              {t("Planning your next construction?", "अगला निर्माण की योजना बना रहे हैं?")}
            </h3>
            <p className={`mx-auto mt-3 max-w-xl text-ivory/75 ${lang === "hi" ? "font-hindi" : ""}`}>
              {t("Send us your material list on WhatsApp — we'll share a fair quote within the hour.", "व्हाट्सएप पर अपनी सामग्री की सूची भेजें — एक घंटे में सही दाम मिल जाएगा।")}
            </p>
            <p className="mt-2 font-hindi text-sm text-brass">{business.taglineHindi}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink(t("Namaste! I'd like a quotation for the following materials: ", "नमस्ते! मुझे निम्न सामग्री के दाम चाहिए: "))}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-navy hover:bg-brass-dark hover:text-ivory transition-colors ${lang === "hi" ? "font-hindi" : ""}`}
              >
                {t("WhatsApp Enquiry", "व्हाट्सएप पूछताछ")}
              </a>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory hover:bg-ivory/10 ${lang === "hi" ? "font-hindi" : ""}`}
              >
                {t("Visit our store", "हमारी दुकान पर आइए")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
