import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { productCategories, type ProductCategory } from "@/lib/business";
import { useLang } from "@/lib/i18n";

const CategoryCard = ({ cat, index }: { cat: ProductCategory; index: number }) => {
  const Icon = cat.icon;
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-maroon/10 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-elegant">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={cat.image}
            alt={`${cat.name} available at Sharda Hardware, Bokaro`}
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <div className="flex items-center gap-2 text-cream">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-cream/15 text-cream backdrop-blur-sm ring-1 ring-cream/25">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <span className="font-hindi text-lg drop-shadow">{cat.nameHindi}</span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-cream/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className={`text-xl tracking-tight text-ink ${lang === "hi" ? "font-hindi" : "font-display"}`}>{lang === "hi" ? cat.nameHindi : cat.name}</h3>
          <p className={`mt-2 text-sm leading-relaxed text-ink-soft ${lang === "hi" ? "font-hindi" : ""}`}>{lang === "hi" ? cat.descriptionHindi : cat.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {cat.items.slice(0, 4).map((it) => (
              <Badge
                key={it}
                variant="secondary"
                className="rounded-full border border-maroon/10 bg-muted text-[11px] font-medium text-ink/80 hover:bg-marigold/30"
              >
                {it}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductGrid = ({ compact = false }: { compact?: boolean }) => {
  const list = compact ? productCategories.slice(0, 6) : productCategories;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => (
        <CategoryCard key={c.slug} cat={c} index={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
export { CategoryCard };
