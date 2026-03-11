import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const Ayuda = () => (
  <>
    <section className="gradient-cta-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Centro de Ayuda</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Documentación y recursos para sacarle el máximo a VENETEL.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 flex justify-center">
        <ScrollReveal>
          <div className="max-w-md rounded-xl border bg-surface p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Construction size={32} className="text-accent" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Documentación en desarrollo</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Estamos preparando guías detalladas para cada módulo de VENETEL. Mientras tanto, nuestro equipo está disponible para resolver cualquier duda.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Escribirnos por Instagram
              </a>
              <Link to="/#contacto" className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition">
                Contactar soporte
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Ayuda;
