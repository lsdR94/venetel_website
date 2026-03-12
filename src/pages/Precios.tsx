import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Estándar",
    price: "$25",
    period: "/mes",
    badge: null,
    subtitle: "1 propiedad · Hasta 20 habitaciones",
    items: [
      "Todos los módulos incluidos",
      "Historial de reportes 3 meses",
      "1 propiedad",
      "Hasta 20 habitaciones",
      "Soporte por email en 48h",
    ],
    cta: "Empezar ahora",
    ctaLink: "https://app.venetel.com",
  },
  {
    name: "Pro",
    price: "$60",
    period: "/mes",
    badge: "Recomendado",
    subtitle: "Propiedades y habitaciones ilimitadas",
    items: [
      "Todo lo de Estándar",
      "Propiedades ilimitadas",
      "Habitaciones ilimitadas",
      "Historial de reportes ilimitado",
      "Exportación de datos en CSV",
      "Programa de referidos con descuentos",
      "Soporte prioritario en 24h",
    ],
    cta: "Empezar ahora",
    ctaLink: "https://app.venetel.com",
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
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 -left-32 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Precios</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Un plan para cada etapa<br />de tu hotel.
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto">
            Sin costos ocultos, sin comisiones sobre tus reservas. 14 días para probarlo sin tarjeta de crédito.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Plans */}
    <section className="bg-surface py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 flex flex-col h-full relative transition-all duration-300 ${
                plan.badge
                  ? "bg-background border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "bg-background border hover:shadow-lg"
              }`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.subtitle}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={plan.ctaLink} className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                  plan.badge
                    ? "bg-accent text-accent-foreground hover:brightness-110 shadow-md"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}>
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Referidos */}
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Programa de referidos</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Recomienda VENETEL y paga menos cada mes</h2>
            <p className="mt-3 text-muted-foreground">
              Comparte tu enlace personal. Por cada hotel que se una con él, tu mensualidad baja.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { refs: "1 referido", pct: "5%", desc: "de descuento en tu próxima factura" },
              { refs: "5 referidos", pct: "25%", desc: "acumulado sobre tu mensualidad" },
              { refs: "10 referidos", pct: "50%", desc: "máximo alcanzable. La mitad de tu plan" },
            ].map((step, i) => (
              <div key={i} className={`rounded-2xl p-6 border text-center relative overflow-hidden ${i === 2 ? "border-primary bg-primary/5" : "bg-background"}`}>
                {i === 2 && <span className="absolute top-3 right-3 text-xs font-bold text-accent uppercase tracking-widest">Máximo</span>}
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{step.refs}</p>
                <p className="mt-3 text-5xl font-extrabold text-primary">{step.pct}</p>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 rounded-2xl bg-surface border p-6 grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Tú te beneficias</p>
                <p className="text-xs text-muted-foreground mt-0.5">El descuento se mantiene activo mientras tu referido siga suscrito.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Tu referido también</p>
                <p className="text-xs text-muted-foreground mt-0.5">Recibe 5% de descuento en su primer mes al registrarse con tu enlace.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
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