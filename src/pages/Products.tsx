import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";
import { productCategories, waLink } from "@/lib/business";
import { useLang } from "@/lib/i18n";

const Products = () => {
  const { t, lang } = useLang();
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sharda Hardware & Cement Agency — Product Catalog",
    itemListElement: productCategories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: c.name,
        description: c.description,
        category: c.name,
      },
    })),
  };
  return (
    <section className="py-16 sm:py-20">
      <SEO
        title="Product Catalog — Cement, Steel, Pipes & Tools | Sharda Hardware"
        description="Browse cement, TMT steel rods, roofing sheets, PVC/CPVC pipes, sand, aggregate and tools available at Sharda Hardware, Bokaro."
        path="/products"
        jsonLd={itemListJsonLd}
      />
      <div className="container-shell">
        <SectionHeading
          eyebrow="Product Catalog"
          eyebrowHindi="उत्पाद सूची"
          title="Materials for every stage of construction."
          titleHindi="निर्माण के हर चरण के लिए सामग्री।"
          hindi="हर निर्माण चरण के लिए सामग्री।"
          subtitle="Explore our full range of cement, steel, roofing, plumbing, aggregates and tools. Prices vary — WhatsApp us for the day's quote."
          subtitleHindi="सीमेंट, सरिया, छत, प्लंबिंग, गिट्टी और औज़ारों की पूरी रेंज देखें। दाम बदलते हैं — आज का भाव व्हाट्सएप पर पूछें।"
        />
        <div className="mt-12">
          <ProductGrid />
        </div>

        <div className={`mt-14 rounded-2xl border border-border bg-card p-6 text-sm text-cement sm:p-8 ${lang === "hi" ? "font-hindi" : ""}`}>
          <p>
            <span className={`text-base text-navy ${lang === "hi" ? "font-hindi" : "font-display"}`}>{t("Bulk orders & contractor pricing:", "थोक ऑर्डर और ठेकेदार दर:")}</span>{" "}
            {t("For projects above 50 bags of cement or 1 tonne of steel, please", "50 बोरी से अधिक सीमेंट या 1 टन से अधिक सरिया के लिए, कृपया")}{" "}
            <a href={waLink(t("I'd like bulk pricing for: ", "मुझे थोक दाम चाहिए: "))} target="_blank" rel="noreferrer" className="font-semibold text-brass-dark underline underline-offset-4 hover:text-navy">
              {t("message us on WhatsApp", "व्हाट्सएप पर संदेश भेजें")}
            </a>{" "}
            — {t("we offer special rates and free delivery within Bokaro Steel City.", "हम विशेष दर और बोकारो स्टील सिटी में मुफ़्त डिलीवरी देते हैं।")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
