import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import { waLink } from "@/lib/business";

const Products = () => (
  <section className="py-16 sm:py-20">
    <div className="container-shell">
      <SectionHeading
        eyebrow="Product Catalog"
        title="Materials for every stage of construction."
        hindi="हर निर्माण चरण के लिए सामग्री।"
        subtitle="Explore our full range of cement, steel, roofing, plumbing, aggregates and tools. Prices vary — WhatsApp us for the day's quote."
      />
      <div className="mt-12">
        <ProductGrid />
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-card p-6 text-sm text-cement sm:p-8">
        <p>
          <span className="font-display text-base text-navy">Bulk orders & contractor pricing:</span>{" "}
          For projects above 50 bags of cement or 1 tonne of steel, please{" "}
          <a href={waLink("I'd like bulk pricing for: ")} target="_blank" rel="noreferrer" className="font-semibold text-brass-dark underline underline-offset-4 hover:text-navy">
            message us on WhatsApp
          </a>{" "}
          — we offer special rates and free delivery within Bokaro Steel City.
        </p>
      </div>
    </div>
  </section>
);

export default Products;
