import SectionHeading from "@/components/SectionHeading";
import { business, waLink, telLink } from "@/lib/business";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${business.address.line1}, ${business.address.city}, ${business.address.state}`
  )}&output=embed`;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Visit, call, or message us on WhatsApp."
          hindi="हमसे संपर्क करें।"
          subtitle="We're happy to answer any question — about materials, prices, or delivery to your site."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {[
              { icon: MapPin, label: "Visit us", value: `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.pincode}` },
              { icon: Phone, label: "Call", value: business.phoneDisplay, href: telLink() },
              { icon: MessageCircle, label: "WhatsApp", value: business.phoneDisplay, href: waLink() },
              { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
              { icon: Clock, label: "Hours", value: `Mon–Sat ${business.hours.weekdays} · Sun ${business.hours.sunday}` },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || undefined}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brass/60 hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass-dark">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-cement">{c.label}</div>
                  <div className="mt-0.5 text-sm font-medium text-navy break-words">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border shadow-soft lg:col-span-3"
          >
            <iframe
              title="Sharda Hardware location map"
              src={mapsSrc}
              width="100%"
              height="100%"
              style={{ minHeight: 460, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
