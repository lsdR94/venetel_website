import { Link } from "react-router-dom";
import { Calendar, BedDouble, Users, ConciergeBell, Package, Wallet, CheckCircle2, XCircle, Instagram, CreditCard, Target, Eye, BarChart2, LayoutDashboard, TrendingUp, ArrowRight, Shield, Zap, Globe, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { motion } from "framer-motion";
import heroDashboard from "@/assets/dashboard-hero.png";

const features = [
  { icon: Calendar, title: "Reservas y Calendario", desc: "Visualiza y gestiona todas tus reservas sin cruces ni confusiones." },
  { icon: BedDouble, title: "Habitaciones y Tipos", desc: "Configura habitaciones, tarifas y tipos de alojamiento." },
  { icon: Users, title: "Huéspedes", desc: "Registro completo con historial de estadías y datos de contacto." },
  { icon: ConciergeBell, title: "Servicios y Extras", desc: "Gestiona servicios adicionales y alquileres que suman ingresos." },
  { icon: Package, title: "Inventario", desc: "Control de productos y suministros del hotel en tiempo real." },
  { icon: Wallet, title: "Pagos y Finanzas", desc: "Registra ingresos, egresos y obtén reportes financieros claros." },
];

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
    cta: "Hablar con ventas", ctaLink: "#contacto",
  },
];

const metrics = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "<2s", label: "Tiempo de carga" },
  { value: "100%", label: "En español" },
  { value: "$19", label: "Desde / mes" },
];

const Index = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden gradient-cta-dark min-h-[100vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/[0.02] rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Plataforma operativa para hoteles
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-6 text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-primary-foreground">
                Opera tu hotel con<br /><span className="text-accent">precisión profesional</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 text-base lg:text-lg text-primary-foreground/70 leading-relaxed max-w-md">
                Simplificamos la gestión de tu hotel para que te concentres en dar un buen servicio. Nosotros nos encargamos de organizar y estimar tu desempeño para que tú no tengas que hacerlo.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://app.venetel.com" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                  Comenzar prueba gratuita
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link to="/funcionalidades" className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  Explorar módulos
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-10 flex flex-wrap gap-6">
                {[
                  { icon: Shield, text: "Datos privados y encriptados" },
                  { icon: Zap, text: "Sin instalación" },
                  { icon: Globe, text: "100% en español" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-primary-foreground/50 text-xs font-medium">
                    <item.icon size={14} className="text-accent/70" />
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div className="lg:col-span-6" initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />
                
                {/* Browser frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#1a1a2e' }}>
                    <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                    <div className="flex-1 mx-4 h-5 rounded-md flex items-center px-3" style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>app.venetel.com/dashboard</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <img
                    src={heroDashboard}
                    alt="Dashboard VENETEL — gestión hotelera"
                    className="w-full block"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* ═══════════════════ POR QUÉ VENETEL ═══════════════════ */}
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Texto izquierda */}
            <div className="lg:col-span-4 self-center">
              <ScrollReveal>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">¿Por qué VENETEL y no otras plataformas?</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Somos la alternativa <span style={{ color: '#FFD100' }}>VEN</span><span style={{ color: '#003893' }}>EZO</span><span style={{ color: '#CF142B' }}>LANA</span> que lo tiene todo, y sino... lo construimos.
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ten el control total de tu hotel sin saltar entre herramientas de gestión de activos y análisis financiero. Te ayudamos a medir y cuantificar cada resultado.
                </p>
              </ScrollReveal>
            </div>

            {/* Feature list derecha */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, hsl(var(--accent) / 0.6), hsl(var(--accent) / 0.1))' }} />
                <div className="space-y-0">
                  {[
                    {
                      icon: CreditCard,
                      title: "Sin comisiones",
                      description: "Pagas tu suscripción mensual y nada más. No te cobramos porcentaje sobre tus reservas como hacen muchas plataformas internacionales.",
                      color: "hsl(var(--accent))",
                    },
                    {
                      icon: BarChart2,
                      title: "Métricas y reportes en tiempo real",
                      description: "Ocupación, ingresos y pagos pendientes siempre actualizados. Información clara para tomar decisiones, no para interpretarlas.",
                      color: "hsl(var(--accent))",
                    },
                    {
                      icon: LayoutDashboard,
                      title: "Todo en una sola plataforma",
                      description: "Reservas, finanzas, inventario y huéspedes en un solo lugar. Sin integraciones adicionales ni herramientas de terceros.",
                      color: "hsl(var(--accent))",
                    },
                    {
                      icon: TrendingUp,
                      title: "Crece contigo",
                      description: "Escuchamos a nuestros clientes y construimos en función de sus necesidades reales. El producto mejora con cada conversación.",
                      color: "hsl(var(--accent))",
                    },
                    {
                      icon: Globe,
                      title: "Hecho con talento venezolano",
                      description: "Desarrollado localmente, con soporte en español y un equipo que entiende el mercado desde adentro.",
                      color: "hsl(var(--accent))",
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.08}>
                      <div className="group relative flex items-start gap-6 py-6">
                        <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: `${item.color}15` }}>
                          <item.icon size={22} style={{ color: item.color }} />
                        </div>
                        <div className="pt-1">
                          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ FUNCIONALIDADES ═══════════════════ */}
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Nuestra propuesta</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Un flujo de trabajo completo para la operación de tu hotel.</h2>
              <p className="mt-3 text-muted-foreground text-lg">Cada módulo fue diseñado para trabajar junto a los demás, no por separado.</p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="group rounded-2xl bg-background border p-7 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <f.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link to="/funcionalidades" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Ver todas las funcionalidades <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Precios</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Planes simples. Sin sorpresas.</h2>
              <p className="mt-3 text-muted-foreground text-lg">14 días de prueba gratuita en todos los planes. Sin tarjeta de crédito.</p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 flex flex-col h-full relative transition-all duration-300 ${
                  plan.badge
                    ? "bg-background border-2 border-accent shadow-xl shadow-accent/10 scale-[1.02]"
                    : "bg-background border hover:shadow-lg"
                }`}>
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">
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
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link to="/precios" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Ver todos los detalles de precios <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ SOBRE NOSOTROS ═══════════════════ */}
      <section className="relative py-24 overflow-hidden bg-surface">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Nuestra historia</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">¿Quiénes somos?</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Misión", icon: Target, text: "En VENETEL creemos que cada hotelero merece operar con herramientas profesionales sin pagar precios inalcanzables. Democratizar la gestión hotelera es nuestra razón de ser." },
              { label: "Visión", icon: Eye, text: "Convertirnos en la plataforma de gestión hotelera de referencia en Venezuela y llevar ese estándar a toda Latinoamérica, un hotel a la vez." },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.15}>
                <div className="relative bg-background rounded-2xl p-10 h-full overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-1 rounded-full mb-8" style={{ background: 'hsl(var(--accent))' }} />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'hsl(var(--accent) / 0.1)' }}>
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-accent">{item.label}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACTO ═══════════════════ */}
      <section id="contacto" className="bg-surface py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Contacto</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">¿Tienes alguna pregunta?</h2>
              <p className="mt-3 text-muted-foreground">Escríbenos y te respondemos a la brevedad.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-4">
              <input type="text" placeholder="Nombre" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
              <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
              <textarea placeholder="Mensaje" rows={4} required value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none" />
              <button type="submit" className="w-full rounded-xl bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground hover:brightness-110 transition shadow-md shadow-accent/20">
                Enviar mensaje
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Instagram size={18} />
              <a href="#" className="hover:text-accent transition-colors">Síguenos en Instagram</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CTA FINAL ═══════════════════ */}
      <section className="gradient-cta-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Tu hotel, bajo control desde hoy.</h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Comienza tu prueba gratuita de 14 días — sin tarjeta de crédito, sin compromisos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://app.venetel.com" className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-accent-foreground hover:brightness-110 transition shadow-lg shadow-accent/20">
                Comenzar gratis
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition">
                Ver demo
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
