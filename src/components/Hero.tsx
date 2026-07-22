import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Truck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroAsset from "@/assets/sharda-hero.png.asset.json";
import { Button } from "@/components/ui/button";
import { business, waLink, telLink } from "@/lib/business";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden hero-bg-pattern">
      {/* decorative top border stripe (tricolor-inspired) */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-cream to-maroon" />

      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.05fr_1fr] md:gap-12 md:py-24 lg:py-28">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-maroon/25 bg-cream/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-maroon"
          >
            <Star className="h-3.5 w-3.5 fill-marigold text-marigold" />
            Trusted in Bokaro for {business.yearsInBusiness}+ years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[2.75rem] font-500 leading-[1.02] tracking-tightest text-ink sm:text-5xl lg:text-[4.25rem]"
          >
            Building Bokaro,
            <br />
            <span className="italic text-maroon">brick by brick.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-hindi text-xl text-maroon-deep/80"
          >
            {business.taglineHindi}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft"
          >
            {business.name} supplies premium cement, TMT steel, roofing sheets, pipes, sand
            and tools — everything you need to build a strong Indian home. Fair prices,
            honest advice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full bg-maroon text-cream shadow-soft hover:bg-maroon-deep hover:shadow-elegant">
              <Link to="/products">
                Browse Catalog
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-marigold bg-cream text-maroon-deep hover:bg-marigold hover:text-ink">
              <a href={waLink("Namaste! I would like a quotation for construction materials.")} target="_blank" rel="noreferrer">
                WhatsApp Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-ink hover:text-maroon">
              <a href={telLink()}>
                <Phone className="mr-1 h-4 w-4" /> {business.phoneDisplay}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-soft"
          >
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-maroon" /> Genuine brands only</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-maroon" /> Bokaro site delivery</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-marigold fill-marigold" /> Contractor rates</span>
          </motion.div>
        </div>

        {/* Right: owner portrait, fully visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-marigold/25 via-transparent to-maroon/20 blur-2xl" />
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem] border border-maroon/15 bg-cream shadow-elegant md:max-w-none">
            {!loaded && (
              <div className="aspect-[3/4] w-full animate-pulse bg-gradient-to-br from-muted via-cream to-muted" />
            )}
            <img
              src={heroAsset.url}
              alt="Sharda Hardware & Cement Agency — proprietor at the Bokaro storefront"
              width={1280}
              height={1700}
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover object-center transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-maroon/15 bg-cream/95 p-4 shadow-soft backdrop-blur md:block"
          >
            <div className="font-display text-3xl leading-none text-maroon">{business.yearsInBusiness}+ yrs</div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-soft">serving Bokaro Steel City</div>
          </motion.div>

          {/* Small marigold seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -right-3 -top-3 hidden h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-marigold to-saffron text-center text-[10px] font-semibold uppercase tracking-wider text-ink shadow-warm md:grid"
          >
            <div>
              <div className="font-display text-sm normal-case tracking-normal">Since</div>
              <div className="font-display text-lg leading-none">2020</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
