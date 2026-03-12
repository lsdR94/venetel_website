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
            {[
              { icon: Mail, text: 'hola@venetel.com', href: 'mailto:hola@venetel.com' },
              { icon: () => (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L0 24l6.336-1.502A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.368l-.36-.214-3.726.883.916-3.618-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              ), text: '+58 000 000 0000', href: '#' },
              { icon: MapPin, text: 'Venezuela', href: '#' },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <item.icon size={14} style={{ color: '#f9a410', flexShrink: 0 }} />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Redes */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#f9a410' }}>Nuestras redes</p>
          <ul className="space-y-3">
            {[
              { label: 'Instagram', handle: '@venetel.app', href: '#', color: '#E1306C', icon: Instagram },
              { label: 'TikTok', handle: '@venetel.app', href: '#', color: '#ffffff', icon: () => (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z"/>
                </svg>
              )},
              { label: 'WhatsApp', handle: '+58 000 000 0000', href: '#', color: '#25D366', icon: () => (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L0 24l6.336-1.502A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.368l-.36-.214-3.726.883.916-3.618-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              )},
              { label: 'Email', handle: 'hola@venetel.com', href: 'mailto:hola@venetel.com', color: '#f9a410', icon: Mail },
            ].map((social) => (
              <li key={social.label}>
                <a href={social.href} className="flex items-center gap-3 transition-opacity hover:opacity-100">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${social.color}20`, color: social.color }}>
                    <social.icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>{social.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{social.handle}</p>
                  </div>
                </a>
              </li>
            ))}
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