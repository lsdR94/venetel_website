import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const content = {
  es: {
    subtitle: "Información de contacto del equipo Venatel.",
    name: "Nombre",
    role: "Rol",
    roleValue: "Fundador, Desarrollador Principal & Optimizador de Presencia Digital",
  },
  en: {
    subtitle: "Venatel team contact information.",
    name: "Name",
    role: "Role",
    roleValue: "Founder, Lead Developer & Digital Presence Optimizer",
  },
};

const Contacto = () => {
  const [lang, setLang] = useState<"es" | "en">("en");
  const t = content[lang];

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <>
      {/* Barra azul decorativa */}
      <section className="gradient-cta-dark py-10 lg:py-14" />

      {/* Contenido sobre fondo blanco */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Toggle + subtítulo alineados a la derecha */}
          <div className="flex flex-col items-end mb-8">
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-1.5 text-sm font-semibold transition-colors ${
                  lang === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1.5 text-sm font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Card centrado */}
          <div className="flex justify-center">
            <ScrollReveal>
              <div className="rounded-xl border bg-surface p-8 md:p-12 flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-2xl w-full">

                {/* Foto de perfil */}
                <div className="shrink-0">
                  <div className="w-36 rounded-xl border-2 border-border overflow-hidden">
                    <img
                      src="https://mjkzmjupkurezuqzgnvo.supabase.co/storage/v1/object/public/assets/photo_2026-08-03_11-07-53.jpg"
                      alt="Luisdaniel Rivera"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                {/* Información */}
                <div className="flex flex-col gap-4 text-left">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{t.name}</p>
                    <p className="text-xl font-bold text-foreground">Luisdaniel Antonio Rivera Curbelo</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{t.role}</p>
                    <p className="text-sm text-foreground">{t.roleValue}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-foreground">Venatel Gestión Hotelera (Venatel)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-accent shrink-0" />
                    <a href="mailto:luisdarc@gmail.com" className="text-sm text-foreground hover:text-accent transition-colors">
                      luisdarc@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-accent shrink-0" />
                    <a href="tel:+584126028385" className="text-sm text-foreground hover:text-accent transition-colors">
                      +58 412 602 8385
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Linkedin size={16} className="text-accent shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/lsdr94/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/lsdr94
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contacto;
