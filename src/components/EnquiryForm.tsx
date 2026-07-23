import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { business, waLink } from "@/lib/business";
import { toast } from "@/hooks/use-toast";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const RECIPIENTS = ["bbkgupta6@gmail.com", "shrutikumari916200@gmail.com"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone")
    .max(20)
    .regex(/^[0-9 +\-()]+$/, "Only digits and + - ( ) allowed"),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

type FormValues = z.infer<typeof schema>;

const EnquiryForm = () => {
  const { t, lang } = useLang();
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const update = (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return null;
    }
    return parsed.data;
  };

  const buildBody = (v: FormValues) =>
    [
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      v.email ? `Email: ${v.email}` : null,
      v.interest ? `Interested in: ${v.interest}` : null,
      "",
      "Message:",
      v.message,
      "",
      "— Sent from Sharda Hardware website",
    ]
      .filter(Boolean)
      .join("\n");

  const sendEmail = () => {
    const v = validate();
    if (!v) return;
    const subject = `New enquiry from ${v.name} — Sharda Hardware`;
    const body = buildBody(v);
    const mailto = `mailto:${RECIPIENTS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({
      title: t("Opening your email app…", "आपका ईमेल ऐप खुल रहा है…"),
      description: t(
        "Please press Send in your email app to complete the enquiry.",
        "पूछताछ पूरी करने के लिए अपने ईमेल ऐप में Send दबाएँ।",
      ),
    });
  };

  const sendWhatsApp = () => {
    const v = validate();
    if (!v) return;
    const text = `Namaste! New enquiry from Sharda Hardware website:\n\n${buildBody(v)}`;
    window.open(waLink(text), "_blank", "noreferrer");
  };

  const hi = lang === "hi";

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="mb-6">
        <h3 className={`text-2xl text-navy ${hi ? "font-hindi" : "font-display"}`}>
          {t("Send an enquiry", "पूछताछ भेजें")}
        </h3>
        <p className={`mt-1 text-sm text-cement ${hi ? "font-hindi" : ""}`}>
          {t(
            "Fill this and we'll get back to you shortly.",
            "यह भरें, हम जल्द ही आपसे संपर्क करेंगे।",
          )}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name" className={hi ? "font-hindi" : ""}>
            {t("Your name", "आपका नाम")} *
          </Label>
          <Input id="name" value={values.name} onChange={update("name")} maxLength={80} className="mt-1.5" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone" className={hi ? "font-hindi" : ""}>
            {t("Phone", "फ़ोन")} *
          </Label>
          <Input id="phone" value={values.phone} onChange={update("phone")} maxLength={20} inputMode="tel" className="mt-1.5" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="email" className={hi ? "font-hindi" : ""}>
            {t("Email (optional)", "ईमेल (वैकल्पिक)")}
          </Label>
          <Input id="email" type="email" value={values.email} onChange={update("email")} maxLength={120} className="mt-1.5" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="interest" className={hi ? "font-hindi" : ""}>
            {t("Interested in", "किसमें रुचि")}
          </Label>
          <Input
            id="interest"
            value={values.interest}
            onChange={update("interest")}
            maxLength={120}
            placeholder={t("Cement, TMT rods, roofing…", "सीमेंट, सरिया, छत…")}
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message" className={hi ? "font-hindi" : ""}>
            {t("Message", "संदेश")} *
          </Label>
          <Textarea
            id="message"
            value={values.message}
            onChange={update("message")}
            maxLength={1000}
            rows={4}
            placeholder={t("Quantities, site location, or any details…", "मात्रा, साइट का पता, या कोई विवरण…")}
            className="mt-1.5"
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button type="submit" className={`gap-2 ${hi ? "font-hindi" : ""}`}>
          <Mail className="h-4 w-4" />
          {t("Send by Email", "ईमेल से भेजें")}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={sendWhatsApp}
          className={`gap-2 border-[#25D366]/40 text-[hsl(142_70%_30%)] hover:bg-[#25D366]/10 ${hi ? "font-hindi" : ""}`}
        >
          <MessageCircle className="h-4 w-4" />
          {t("Send on WhatsApp", "व्हाट्सएप पर भेजें")}
        </Button>
      </div>

      <p className={`mt-4 text-xs text-cement ${hi ? "font-hindi" : ""}`}>
        {t(
          `Emails go to ${business.email} and our team. Prefer voice? Call ${business.phoneDisplay}.`,
          `ईमेल ${business.email} और हमारी टीम को जाता है। बात करना चाहें तो ${business.phoneDisplay} पर कॉल करें।`,
        )}
      </p>
    </motion.form>
  );
};

export default EnquiryForm;
