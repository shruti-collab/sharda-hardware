import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/business";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Only genuine, ISI-marked materials",
  "Fair, transparent pricing for every customer",
  "Personal guidance from the proprietor himself",
  "Quick delivery to your construction site",
  "Long-standing relationships with local contractors",
];

const About = () => (
  <section className="py-16 sm:py-20">
    <div className="container-shell">
      <SectionHeading
        eyebrow="Our Story"
        title="A family shop built on trust."
        hindi="विश्वास पर बना एक पारिवारिक व्यवसाय।"
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-5 text-[15px] leading-relaxed text-cement"
        >
          <p>
            <span className="font-display text-navy">{business.name}</span> has been serving builders,
            contractors and homeowners in <strong className="text-navy">Bokaro Steel City</strong>{" "}
            for over {business.yearsInBusiness} years. Founded by{" "}
            <strong className="text-navy">Mr. {business.owner}</strong>, our shop began with a simple
            promise: honest materials at honest prices.
          </p>
          <p>
            From a modest counter of cement bags and TMT rods, we&apos;ve grown into a trusted
            neighbourhood destination for a complete range of construction materials —
            without ever losing the personal touch of a family-run business.
          </p>
          <p>
            Whether you&apos;re laying the foundation of your first home, reroofing your
            workshop, or supplying a large project, we&apos;re here to help you build strong.
          </p>
          <p className="font-hindi text-base text-brass-dark">
            आपके सपनों का घर, हमारी मज़बूत सामग्री के साथ।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg text-navy">What we stand for</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-navy/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
