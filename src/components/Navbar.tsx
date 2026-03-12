import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import venetelLogo from "@/assets/venetel-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // check initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    // Re-check scroll on route change (Layout scrolls to top)
    const timer = setTimeout(() => setScrolled(window.scrollY > 10), 50);
    return () => clearTimeout(timer);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/funcionalidades", label: "Funcionalidades" },
    { to: "/precios", label: "Precios" },
    { to: "/ayuda", label: "Ayuda" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={venetelLogo} alt="VENETEL" className="object-contain" style={{ width: 70, height: 70 }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.venetel.com"
            className={`inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Iniciar sesión
          </a>
          <a
            href="https://app.venetel.com"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
          >
            Empezar Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4">
          <div className="flex flex-col gap-3 py-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground py-2">
                {l.label}
              </Link>
            ))}
            <a href="https://app.venetel.com" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary">
              Iniciar sesión
            </a>
            <a href="https://app.venetel.com" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
              Empezar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
