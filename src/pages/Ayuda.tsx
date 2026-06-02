import { BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import RippleButton from "@/components/ui/RippleButton";

const Ayuda = () => (
  <>
    <section className="gradient-cta-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Centro de Ayuda</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Guías y documentación disponibles dentro de la plataforma.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 flex justify-center">
        <ScrollReveal>
          <div className="max-w-md rounded-xl border bg-surface p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-accent" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Accede con tu cuenta</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              La guía de uso y documentación de VENATEL está disponible dentro de la plataforma, accesible desde tu cuenta. Si aún no tienes acceso, contáctanos.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <RippleButton href="https://app.venatel.com.ve" variant="primary" className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                Acceder a VENATEL
              </RippleButton>
              <RippleButton href="https://wa.me/584226028310" variant="outline" className="rounded-lg border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                Contactar soporte
              </RippleButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Ayuda;
