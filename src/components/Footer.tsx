import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import venetelLogo from "@/assets/venetel-logo2.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={venetelLogo} alt="VENETEL" className="object-contain" style={{ width: 60, height: 60 }} />
          <span className="text-sm opacity-80">2026 VENETEL. Todos los derechos reservados</span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/funcionalidades" className="hover:opacity-80 transition-opacity">Funcionalidades</Link>
          <Link to="/precios" className="hover:opacity-80 transition-opacity">Precios</Link>
          <Link to="/ayuda" className="hover:opacity-80 transition-opacity">Ayuda</Link>
          <Link to="/legal" className="hover:opacity-80 transition-opacity">Legal</Link>
        </div>

        <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
