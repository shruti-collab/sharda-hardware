import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { business, telLink } from "@/lib/business";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const links = [
    { to: "/", label: t("Home", "मुख्य पृष्ठ") },
    { to: "/products", label: t("Products", "उत्पाद") },
    { to: "/about", label: t("About", "हमारे बारे में") },
    { to: "/contact", label: t("Contact", "संपर्क") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-ivory/85 backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-brass to-brass-dark text-ivory font-display text-lg leading-none">
            श
          </div>
          <div className="leading-tight">
            <div className="font-display text-base text-navy">Sharda Hardware</div>
            <div className="font-hindi text-[10px] text-cement">& Cement Agency</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium text-navy/80 transition-colors hover:text-navy",
                  isActive && "text-navy after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-brass"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink()}
            className="hidden items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-ivory transition-all hover:bg-navy/90 hover:shadow-md md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {t("Call Now", "अभी कॉल करें")}
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-navy md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-ivory md:hidden">
          <div className="container-shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium text-navy/80 hover:bg-muted",
                    isActive && "bg-muted text-navy"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={telLink()}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-ivory"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
