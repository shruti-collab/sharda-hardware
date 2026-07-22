import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, HandshakeIcon, Truck, IndianRupee } from "lucide-react";
import { business, waLink } from "@/lib/business";

const highlights = [
  { icon: ShieldCheck, title: "Genuine brands", text: "UltraTech, TATA, JSW, Supreme — sourced directly." },
  { icon: IndianRupee, title: "Fair pricing", text: "Transparent contractor rates, no hidden markup." },
  { icon: Truck, title: "Site delivery", text: "Fast delivery across Bokaro & nearby sectors." },
  { icon: HandshakeIcon, title: "Trusted advice", text: "Guidance from a family that has built for years." },
];

const Home = () => (
  <>
    <Hero />

    {/* Highlights */}
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
              <div className="font-display text-base text-navy">{h.title}</div>
              <div className="text-sm text-cement">{h.text}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Products preview */}
    <section className="py-20">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Catalog"
            title="Everything to build strong."
            hindi="मज़बूत निर्माण के लिए सब कुछ।"
            subtitle="From foundation to finishing — cement, steel, sand, pipes, roofing sheets and tools, all under one roof."
          />
          <Link
            to="/products"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-brass-dark hover:text-navy"
          >
            View all categories
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid />
        </div>
      </div>
    </section>

    {/* CTA */}
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
          <h3 className="mx-auto max-w-2xl font-display text-3xl sm:text-4xl">
            Planning your next construction?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-ivory/75">
            Send us your material list on WhatsApp — we&apos;ll share a fair quote within the hour.
          </p>
          <p className="mt-2 font-hindi text-sm text-brass">{business.taglineHindi}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink("Namaste! I'd like a quotation for the following materials: ")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-navy hover:bg-brass-dark hover:text-ivory transition-colors"
            >
              WhatsApp Enquiry
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory hover:bg-ivory/10"
            >
              Visit our store
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Home;
