import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter", price: "$19", period: "/mes", badge: null,
    subtitle: "1 propiedad · Hasta 10 habitaciones",
    items: ["Dashboard y métricas", "Gestión de reservas", "Control de inventario", "Soporte por email"],
    cta: "Comenzar gratis", ctaLink: "https://app.venetel.com",
  },
  {
    name: "Pro", price: "$39", period: "/mes", badge: "Más popular",
    subtitle: "1 propiedad · Hasta 30 habitaciones",
    items: ["Todo lo de Starter", "Pagos y finanzas avanzado", "Reportes detallados", "Gestión de extras y servicios", "Soporte prioritario"],
    cta: "Comenzar gratis", ctaLink: "https://app.venetel.com",
  },
  {
    name: "Multi", price: "$35", period: "/propiedad/mes", badge: null,
    subtitle: "Propiedades ilimitadas · Habitaciones ilimitadas",
    items: ["Todo lo de Pro en cada propiedad", "Panel unificado multi-propiedad", "Gestión centralizada de equipos", "Soporte dedicado"],
    cta: "Hablar con ventas", ctaLink: "#",
  },
];

const referralSteps = [
  { refs: 1, pct: 5 },
  { refs: 5, pct: 25 },
  { refs: 10, pct: 50 },
];

const faqs = [
  { q: "¿Necesito instalar algo?", a: "No. VENETEL es 100% web — funciona desde cualquier navegador en computadora, tablet o teléfono. Sin instalaciones, sin actualizaciones manuales." },
  { q: "¿Mis datos están seguros?", a: "Sí. Toda tu información se almacena en infraestructura de base de datos empresarial con encriptación en tránsito y en reposo. No usamos cookies de rastreo, no compartimos tu información con terceros y nunca vendemos los datos de nuestros clientes." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí, sin penalizaciones. Al cancelar, conservas el acceso hasta el final del período ya pagado. Una vez vencido, tus datos son eliminados del sistema para proteger tu privacidad." },
  { q: "¿Funciona si mi internet es inestable?", a: "VENETEL requiere conexión a internet para operar. Para garantizar continuidad, recomendamos tener una conexión de respaldo disponible, como datos móviles." },
  { q: "¿Hay contrato de permanencia?", a: "No. VENETEL es mes a mes. Sin contratos, sin letra pequeña." },
  { q: "¿Cómo funciona el programa de referidos?", a: "Cada cliente activo recibe un enlace personal. Por cada hotel que se suscriba con tu enlace, acumulas 5% de descuento en tu mensualidad, hasta un máximo de 50%. El referido también recibe 5% en su primer mes. Los descuentos se mantienen mientras el referido permanezca suscrito." },
];

const Precios = () => (
  <>
    {/* Hero */}
    <section className="relative gradient-cta-dark pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Planes simples. Sin sorpresas.</h1>
          <p className="mt-4 text-lg text-primary-foreground/70">14 días de prueba gratuita en todos los planes. Sin tarjeta de crédito.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Plans */}
    <section className="bg-surface py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={`rounded-xl bg-background p-8 shadow-sm flex flex-col h-full relative ${plan.badge ? "border-2 border-accent" : "border"}`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
                <ul className="mt-6 space-y-2 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={plan.ctaLink} className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${plan.badge ? "bg-accent text-accent-foreground hover:brightness-110" : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 text-center text-muted-foreground">¿Tienes más de 3 propiedades? <a href="#" className="text-accent font-semibold hover:underline">Contáctanos para un precio especial.</a></p>
        </ScrollReveal>
      </div>
    </section>

    {/* Referidos */}
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-foreground">Recomienda VENETEL y reduce tu mensualidad</h2>
          <p className="mt-4 text-center text-muted-foreground leading-relaxed">
            Cada cliente activo recibe un enlace de referido personal. Por cada hotel que se suscriba con tu enlace, acumulas 5% de descuento acumulable en tu mensualidad — hasta un máximo de 50% con 10 referidos activos. El hotel referido recibe 5% de descuento en su primer mes. Los descuentos se mantienen mientras el referido permanezca suscrito.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex items-center justify-center gap-4">
            {referralSteps.map((step, i) => (
              <div key={step.refs} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-accent">{step.pct}%</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{step.refs} referido{step.refs > 1 ? "s" : ""}</p>
                </div>
                {i < referralSteps.length - 1 && <div className="w-8 h-0.5 bg-accent/30" />}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Preguntas frecuentes</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4 bg-background">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Precios;
