import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/business";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ownerPortrait from "@/assets/owner-portrait.png";

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

      <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-marigold/30 via-transparent to-maroon/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-maroon/15 bg-cream shadow-elegant">
              <img
                src={ownerPortrait}
                alt={`${business.owner}, proprietor of ${business.name}`}
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-xl border border-maroon/15 bg-cream/95 px-4 py-2 shadow-soft backdrop-blur">
              <div className="font-display text-base text-maroon">{business.owner}</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-soft">Proprietor</div>
            </div>
          </div>
        </motion.div>

        {/* Story + values */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 space-y-6"
        >
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              <span className="font-display text-ink">{business.name}</span> has been
              serving builders, contractors and homeowners in{" "}
              <strong className="text-ink">Bokaro Steel City</strong> for over{" "}
              {business.yearsInBusiness} years. Founded by{" "}
              <strong className="text-ink">Mr. {business.owner}</strong>, our shop began
              with a simple promise: honest materials at honest prices.
            </p>
            <p>
              From a modest counter of cement bags and TMT rods, we&apos;ve grown into a
              trusted neighbourhood destination for a complete range of construction
              materials — without ever losing the personal touch of a family-run business.
            </p>
            <p>
              Whether you&apos;re laying the foundation of your first home, reroofing your
              workshop, or supplying a large project, we&apos;re here to help you build
              strong.
            </p>
            <p className="font-hindi text-lg text-maroon">
              आपके सपनों का घर, हमारी मज़बूत सामग्री के साथ।
            </p>
          </div>

          <Card className="rounded-2xl border-maroon/10 warm-card shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-display text-lg tracking-tight text-maroon">
                What we stand for
              </h3>
              <div className="paisley-divider my-3" />
              <ul className="mt-2 space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm text-ink/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
                    {v}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
