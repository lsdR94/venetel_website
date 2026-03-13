import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import venetelLogo from "@/assets/venetel-logo.png";

const Footer = () => (
  <footer style={{ background: '#001d53' }}>
    {/* Main footer */}
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1 — Logo + descripción */}
        <div>
          <img src={venetelLogo} alt="VENETEL" className="object-contain" style={{ width: 120, height: 120 }} />
          <p className="mt-4 text-lg font-bold leading-tight" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Opera tu hotel con{' '}
            <span style={{ color: '#f9a410' }}>precisión profesional.</span>
          </p>
        </div>

        {/* Col 2 — Enlaces */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#f9a410' }}>Enlaces rápidos</p>
          <ul className="space-y-3">
            {[
              { label: 'Inicio', to: '/' },
              { label: 'Funcionalidades', to: '/funcionalidades' },
              { label: 'Precios', to: '/precios' },
              { label: 'Ayuda', to: '/ayuda' },
              { label: 'Legal', to: '/legal' },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm transition-opacity hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contacto */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#f9a410' }}>Contacto</p>
          <ul className="space-y-3">
            <li>
              <a href="mailto:venetelsaas@gmail.com" className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                <img src="https://img.icons8.com/color/48/gmail-new.png" alt="Gmail" />
                venetelsaas@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/584126028385" className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" />
                +58 412 6028385
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Redes */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#f9a410' }}>Nuestras redes</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-3 transition-opacity hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" />
                @venetel.app
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 transition-opacity hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                <img src="https://img.icons8.com/color/48/tiktok--v1.png" alt="TikTok" />
                @venetel.app
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2026 VENETEL. Todos los derechos reservados.</p>
        <Link to="/legal" className="text-xs hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Términos y Política de Privacidad
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;