import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { business, waLink } from "@/lib/business";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-navy text-ivory/90">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-brass to-brass-dark text-ivory font-display text-lg">
              श
            </div>
            <div>
              <div className="font-display text-lg text-ivory">Sharda Hardware</div>
              <div className="font-hindi text-xs text-ivory/60">शारदा हार्डवेयर</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-ivory/70">
            {business.tagline}
          </p>
          <p className="mt-1 font-hindi text-sm text-brass">{business.taglineHindi}</p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-brass">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brass">Home</Link></li>
            <li><Link to="/products" className="hover:text-brass">Products</Link></li>
            <li><Link to="/about" className="hover:text-brass">About</Link></li>
            <li><Link to="/contact" className="hover:text-brass">Contact</Link></li>
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-brass">WhatsApp Enquiry</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-brass">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> {business.address.line1}, {business.address.city}, {business.address.state} {business.address.pincode}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brass" /> <a href={`tel:${business.phone}`} className="hover:text-brass">{business.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brass" /> <a href={`mailto:${business.email}`} className="hover:text-brass">{business.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-brass">Store Hours</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-brass" /> Open daily: {business.hours.weekdays}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/60 md:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Proprietor: {business.owner} · Bokaro Steel City, Jharkhand</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
