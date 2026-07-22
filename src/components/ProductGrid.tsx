import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { productCategories, type ProductCategory } from "@/lib/business";

const CategoryCard = ({ cat, index }: { cat: ProductCategory; index: number }) => {
  const Icon = cat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brass/60 hover:shadow-elegant"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brass/15 to-brass/5 text-brass-dark ring-1 ring-brass/20">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-xl text-navy">{cat.name}</h3>
        <span className="font-hindi text-sm text-brass">{cat.nameHindi}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-cement">{cat.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {cat.items.slice(0, 4).map((it) => (
          <li key={it} className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-navy/80">
            {it}
          </li>
        ))}
      </ul>
      <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-cement opacity-0 transition-all group-hover:opacity-100" />
    </motion.div>
  );
};

const ProductGrid = ({ compact = false }: { compact?: boolean }) => {
  const list = compact ? productCategories.slice(0, 6) : productCategories;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => (
        <CategoryCard key={c.slug} cat={c} index={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
export { CategoryCard };
