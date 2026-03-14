import { useState } from "react";
import { Calendar, BedDouble, Users, ConciergeBell, Package, Wallet, Settings, ArrowRight, ChevronLeft, ChevronRight, CreditCard } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import calendario from "@/assets/calendario.png";
import reservas from "@/assets/reservas.png";
import tipos_tarifas from "@/assets/tipos_tarifas.png";
import habitaciones from "@/assets/habitaciones.png";
import huespedes from "@/assets/huespedes.png";
import extras from "@/assets/extras.png";
import inventario from "@/assets/inventario.png";
import pagos from "@/assets/pagos.png";
import finanzas from "@/assets/finanzas.png";

interface Module {
  icon: any;
  title: string;
  color: string;
  desc: string;
  caps: string[];
  image?: string;
}

const modules: Module[] = [
  {
    icon: Calendar, title: "Calendario", image: calendario, color: "bg-blue-500/10 text-blue-600",
    desc: "Visualiza toda la ocupación de tu hotel en una vista de calendario. Identifica disponibilidad, cruces y períodos de alta demanda de un vistazo.",
    caps: ["Vista mensual y semanal", "Ocupación por habitación", "Identificación de disponibilidad", "Navegación entre períodos"],
  },
  {
    icon: Calendar, title: "Reservas", image: reservas, color: "bg-indigo-500/10 text-indigo-600",
    desc: "Gestiona el ciclo completo de cada reserva desde la creación hasta el check-out. Confirma, modifica o cancela sin perder el historial.",
    caps: ["Creación rápida de reservas", "Check-in y check-out", "Estados de reserva", "Historial completo"],
  },
  {
    icon: BedDouble, title: "Tipos de Habitaciones", image: tipos_tarifas, color: "bg-violet-500/10 text-violet-600",
    desc: "Define las categorías de habitaciones de tu hotel con sus características, tarifas base y capacidad. La base de tu estructura tarifaria.",
    caps: ["Tipos personalizables", "Tarifa base por tipo", "Capacidad máxima", "Descripción y amenidades"],
  },
  {
    icon: BedDouble, title: "Habitaciones", image: habitaciones, color: "bg-purple-500/10 text-purple-600",
    desc: "Administra cada habitación individualmente. Asigna su tipo, número, piso y estado operativo en tiempo real.",
    caps: ["Registro por habitación", "Estado de ocupación en vivo", "Asignación de tipo", "Vista de disponibilidad"],
  },
  {
    icon: Users, title: "Huéspedes", image: huespedes, color: "bg-emerald-500/10 text-emerald-600",
    desc: "Centraliza la información de todos tus huéspedes. Accede a su historial de estadías y datos de contacto en segundos.",
    caps: ["Registro completo de datos", "Historial de estadías", "Búsqueda rápida", "Datos de contacto"],
  },
  {
    icon: ConciergeBell, title: "Extras y Servicios", image: extras, color: "bg-amber-500/10 text-amber-600",
    desc: "Registra y cobra servicios adicionales por reserva: desayunos, alquileres, traslados y cualquier consumo que sume a tus ingresos.",
    caps: ["Catálogo de servicios configurable", "Asignación por reserva", "Registro de alquileres", "Impacto automático en factura"],
  },
  {
    icon: Package, title: "Inventario", image: inventario, color: "bg-rose-500/10 text-rose-600",
    desc: "Controla entradas y salidas de productos y suministros del hotel. Sin hojas de cálculo, sin pérdidas por descontrol.",
    caps: ["Registro de movimientos", "Alertas de stock bajo", "Categorización de ítems", "Historial de entradas y salidas"],
  },
  {
    icon: Wallet, title: "Pagos", image: pagos, color: "bg-cyan-500/10 text-cyan-600",
    desc: "Registra todos los pagos asociados a reservas. Lleva un control claro de lo cobrado, lo pendiente y los métodos de pago utilizados.",
    caps: ["Pagos por reserva", "Métodos de pago múltiples", "Estado de deuda por huésped", "Resumen de cobros"],
  },
  {
    icon: CreditCard, title: "Finanzas", image: finanzas, color: "bg-teal-500/10 text-teal-600",
    desc: "Registra los egresos del hotel y obtén reportes financieros por período. Visualiza la rentabilidad de tu operación en el dashboard.",
    caps: ["Control de egresos", "Reportes por período", "Dashboard financiero", "Comparativa de ingresos vs egresos"],
  }
];

const Funcionalidades = () => {
  const [active, setActive] = useState(0);
  const mod = modules[active];
  const iconColor = mod.color.split(" ")[1];
  const iconBg = mod.color.split(" ")[0];

  const prev = () => setActive((a) => (a === 0 ? modules.length - 1 : a - 1));
  const next = () => setActive((a) => (a === modules.length - 1 ? 0 : a + 1));

  return (
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

    {/* Carousel */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {modules.map((m, i) => {
                const Icon = m.icon;
                const isActive = i === active;
                return (
                  <button key={m.title} onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-surface border text-muted-foreground hover:text-foreground hover:border-primary/30"
                    }`}>
                    <Icon size={14} />
                    {m.title}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Slide — info izquierda, imagen derecha */}
          <div className="relative max-w-7xl mx-auto">

            {/* Flecha izquierda */}
            <button onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border shadow-md flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all">
              <ChevronLeft size={20} />
            </button>

            {/* Flecha derecha */}
            <button onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border shadow-md flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all">
              <ChevronRight size={20} />
            </button>

            <div className="grid lg:grid-cols-5 gap-10 items-start px-6">

              {/* Info izquierda — 2 cols */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                    <mod.icon size={20} className={iconColor} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{mod.title}</h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{mod.desc}</p>
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
                <p className="mt-8 text-xs text-muted-foreground">{active + 1} / {modules.length}</p>
              </div>

              {/* Imagen derecha — 3 cols */}
              <div className="lg:col-span-3 rounded-2xl overflow-hidden border shadow-lg shadow-primary/5">
                {mod.image
                  ? <img src={mod.image} alt={mod.title} className="w-full h-auto object-cover" />
                  : <ScreenshotPlaceholder label={mod.title} />
                }
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Funcionalidades;