import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Truck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/sharda-hero.jpg";
import { business, waLink, telLink } from "@/lib/business";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden hero-bg-pattern">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24 lg:py-28">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brass/40 bg-ivory/60 px-3 py-1 text-xs font-medium text-brass-dark"
          >
            <Star className="h-3.5 w-3.5 fill-brass text-brass" />
            Trusted in Bokaro for {business.yearsInBusiness}+ years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
          >
            Building Bokaro,
            <br />
            <span className="italic text-brass">brick by brick.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-cement"
          >
            {business.name} supplies premium cement, TMT steel, roofing sheets, pipes, sand and tools —
            everything you need to build a strong Indian home. Fair prices, honest advice.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-3 font-hindi text-lg text-navy/70"
          >
            {business.taglineHindi}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory shadow-soft transition-all hover:bg-navy/90 hover:shadow-elegant"
            >
              Browse Catalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink("Namaste! I would like a quotation for construction materials.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brass bg-ivory px-6 py-3 text-sm font-medium text-brass-dark transition-all hover:bg-brass hover:text-ivory"
            >
              WhatsApp Quote
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-navy hover:text-brass-dark"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-cement"
          >
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brass" /> Genuine brands only</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-brass" /> Bokaro site delivery</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-brass" /> Contractor rates</span>
          </motion.div>
        </div>

        {/* Right: hero image, fully visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-muted shadow-elegant md:max-w-none">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-ivory to-muted" />
            )}
            <img
              src={heroImage}
              alt="Sharda Hardware storefront with cement bags and steel rods in Bokaro"
              width={1280}
              height={1600}
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover object-center transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-ivory p-4 shadow-soft md:block"
          >
            <div className="font-display text-2xl text-navy">{business.yearsInBusiness}+ yrs</div>
            <div className="text-xs text-cement">serving Bokaro Steel City</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
