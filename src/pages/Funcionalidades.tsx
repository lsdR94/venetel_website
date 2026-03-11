import { Calendar, BedDouble, Users, ConciergeBell, Package, Wallet, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";

const modules = [
  {
    icon: Calendar, title: "Reservas y Calendario", color: "bg-blue-500/10 text-blue-600",
    desc: "Gestiona todas tus reservas desde una vista de calendario intuitiva. Confirma, modifica o cancela sin perder el control.",
    caps: ["Vista mensual y semanal", "Check-in y check-out", "Estado de reservas en tiempo real", "Historial completo"],
  },
  {
    icon: BedDouble, title: "Habitaciones y Tipos", color: "bg-violet-500/10 text-violet-600",
    desc: "Configura cada habitación con sus características, tarifas y disponibilidad. Adapta el sistema a la estructura real de tu propiedad.",
    caps: ["Tipos de habitación personalizables", "Tarifas por temporada", "Estado de ocupación en tiempo real", "Configuración de capacidad"],
  },
  {
    icon: Users, title: "Huéspedes", color: "bg-emerald-500/10 text-emerald-600",
    desc: "Centraliza toda la información de tus huéspedes en un solo lugar.",
    caps: ["Registro completo de datos", "Historial de estadías", "Búsqueda rápida", "Datos de contacto"],
  },
  {
    icon: ConciergeBell, title: "Servicios y Extras", color: "bg-amber-500/10 text-amber-600",
    desc: "Registra y cobra servicios adicionales, alquileres y consumos que incrementan tus ingresos por reserva.",
    caps: ["Catálogo de servicios configurable", "Asignación por reserva", "Registro de alquileres", "Impacto automático en facturación"],
  },
  {
    icon: Package, title: "Inventario", color: "bg-rose-500/10 text-rose-600",
    desc: "Mantén el control de tus productos, suministros y artículos de alquiler sin hojas de cálculo.",
    caps: ["Registro de entradas y salidas", "Alertas de stock bajo", "Categorización de ítems", "Historial de movimientos"],
  },
  {
    icon: Wallet, title: "Pagos y Finanzas", color: "bg-cyan-500/10 text-cyan-600",
    desc: "Registra ingresos y egresos, y obtén una visión clara de la salud financiera de tu hotel.",
    caps: ["Registro de pagos por reserva", "Control de egresos", "Reportes de período", "Dashboard financiero"],
  },
];

const Funcionalidades = () => (
  <>
    {/* Hero */}
    <section className="gradient-cta-dark pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Funcionalidades</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary-foreground">Todo lo que VENETEL hace<br className="hidden md:block" /> por tu hotel</h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">Cada módulo diseñado para simplificar tu operación diaria.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Modules — unified grid layout */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-20">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.title} delay={0.05}>
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                {/* Info column — 2 cols */}
                <div className="lg:col-span-2">
                  <div className={`w-12 h-12 rounded-xl ${mod.color.split(" ")[0]} flex items-center justify-center mb-5`}>
                    <mod.icon size={22} className={mod.color.split(" ")[1]} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{mod.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{mod.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {mod.caps.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Screenshot — 3 cols */}
                <div className="lg:col-span-3">
                  <div className="rounded-2xl overflow-hidden border shadow-lg shadow-primary/5">
                    <ScreenshotPlaceholder label={mod.title} />
                  </div>
                </div>
              </div>
              {i < modules.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-cta-dark py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">¿Listo para probarlo?</h2>
          <p className="mt-3 text-primary-foreground/70 text-lg">14 días gratis. Sin tarjeta de crédito.</p>
          <a href="https://app.venetel.com" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-accent-foreground hover:brightness-110 transition shadow-lg shadow-accent/20">
            Comenzar gratis
            <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Funcionalidades;
