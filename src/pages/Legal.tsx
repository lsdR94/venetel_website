import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const tosItems = [
  {
    title: "1. Aceptación de los términos",
    content: "Al acceder y utilizar la plataforma VENATEL, usted acepta quedar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio. VENATEL se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios significativos serán notificados con anticipación razonable a través del correo electrónico registrado.",
  },
  {
    title: "2. Descripción del servicio",
    content: "VENATEL es una plataforma de software como servicio (SaaS) de gestión hotelera que permite a los usuarios administrar reservas, habitaciones, huéspedes, inventario, extras y finanzas de establecimientos hoteleros desde un entorno web centralizado. El servicio se proporciona en modalidad de suscripción mensual, sin instalación de software adicional. VENATEL requiere conexión a internet para operar; para garantizar la continuidad del servicio, recomendamos contar con una conexión de respaldo disponible.",
  },
  {
    title: "3. Acceso y registro",
    content: "El acceso a VENATEL se gestiona a través de un proceso de onboarding personalizado. No existe registro público abierto. Una vez coordinada la sesión introductoria con nuestro equipo, la cuenta se crea de forma paralela al onboarding, de modo que al finalizar el cliente ya dispone de acceso completo a su entorno. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades realizadas bajo su cuenta.",
  },
  {
    title: "4. Planes y precios",
    content: "VENATEL ofrece tres planes de suscripción mensual: Estándar (USD $25/mes): reservas, huéspedes, pagos, extras e inventario; 1 propiedad, hasta 10 habitaciones; historial de los últimos 3 meses; soporte por email en 48h. Pro (USD $60/mes): todo lo del plan Estándar, más propiedades y habitaciones ilimitadas, historial ilimitado, 1 importación de datos, programa de referidos y soporte prioritario en 24h. Pro+ (USD $60/mes, precio regular USD $100/mes): todo lo del plan Pro, más módulo de restaurante, importaciones y exportaciones ilimitadas, prioridad en el roadmap de desarrollo y soporte directo en menos de 4h. Todos los nuevos clientes inician con un período de prueba gratuito de 14 días con acceso equivalente al plan Pro+.",
  },
  {
    title: "5. Pagos y métodos de pago",
    content: "Los pagos se procesan mensualmente. VENATEL acepta los siguientes métodos de pago: Pago Móvil (Venezuela), transferencia bancaria en bolívares y PayPal para pagos en dólares. Una vez confirmado el pago por nuestro equipo, se emite un comprobante al correo electrónico registrado. Los precios están expresados en dólares estadounidenses (USD). VENATEL no aplica comisiones sobre las reservas gestionadas en la plataforma ni costos ocultos adicionales al plan contratado.",
  },
  {
    title: "6. Cancelación y política de datos",
    content: "La suscripción puede cancelarse en cualquier momento sin penalizaciones ni contratos de permanencia. Al cancelar, se conserva el acceso activo hasta el final del período ya pagado. Transcurrido ese período, la información será desincorporada de nuestros sistemas en un plazo máximo de 7 días. En caso de no renovar el pago en la fecha de corte, se enviará un aviso de cobro. Si el pago no se procesa dentro de los 7 días posteriores a esa fecha, se procederá a la desincorporación definitiva de la información. VENATEL no realiza reembolsos por períodos parciales.",
  },
  {
    title: "7. Programa de referidos",
    content: "Cada cliente activo cuenta con un enlace de referido personal. Por cada establecimiento que se suscriba a través de ese enlace, el referidor acumula un 5% de descuento sobre su mensualidad, con un tope máximo del 50%. El cliente referido también recibe un 5% de descuento durante su primer mes. Los beneficios se mantienen activos mientras el referido permanezca suscrito. Los descuentos acumulados se aplican directamente sobre el monto de la mensualidad del plan vigente.",
  },
  {
    title: "8. Uso aceptable",
    content: "Usted se compromete a utilizar VENATEL únicamente para fines legítimos de gestión hotelera. Queda prohibido el uso del servicio para actividades ilegales, la distribución de contenido malicioso, el acceso no autorizado a sistemas, o cualquier acción que pueda comprometer la seguridad o disponibilidad de la plataforma para otros usuarios. El incumplimiento de esta cláusula faculta a VENATEL a suspender o cancelar la cuenta sin previo aviso.",
  },
  {
    title: "9. Propiedad intelectual",
    content: "Todo el contenido, diseño, código fuente, marcas, logotipos y demás elementos de propiedad intelectual de VENATEL pertenecen exclusivamente a la empresa. Los datos operativos ingresados por los usuarios (reservas, huéspedes, inventario, etc.) siguen siendo propiedad exclusiva de cada cliente. VENATEL no utiliza estos datos con fines distintos a la prestación del servicio.",
  },
  {
    title: "10. Limitación de responsabilidad",
    content: "VENATEL no será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de uso del servicio. VENATEL no asume responsabilidad por pérdidas operativas derivadas de interrupciones del servicio, incluyendo aquellas ocasionadas por terceros, fallas de conectividad o causas de fuerza mayor. El servicio se proporciona \"tal cual\" y \"según disponibilidad\"; aunque nos esforzamos por garantizar la continuidad, no garantizamos disponibilidad ininterrumpida.",
  },
  {
    title: "11. Modificaciones al servicio",
    content: "VENATEL se reserva el derecho de modificar, mejorar o descontinuar funcionalidades del servicio en cualquier momento. Los cambios que afecten significativamente la funcionalidad principal serán notificados con un mínimo de 15 días de anticipación a través del correo electrónico registrado. Las mejoras y nuevas funcionalidades se incorporan de forma continua sin notificación previa.",
  },
  {
    title: "12. Ley aplicable y jurisdicción",
    content: "Estos términos se regirán e interpretarán de acuerdo con las leyes de la República Bolivariana de Venezuela. Cualquier disputa derivada de o relacionada con estos términos será sometida a la jurisdicción de los tribunales competentes de la ciudad de Caracas, Venezuela. Las partes acuerdan agotar una instancia de resolución amigable antes de iniciar cualquier proceso formal.",
  },
];

const privacyItems = [
  {
    title: "1. Información que recopilamos",
    content: "Recopilamos la información que usted nos proporciona directamente: nombre, correo electrónico, datos del establecimiento hotelero y datos operativos ingresados en la plataforma (reservas, huéspedes, inventario, finanzas). También recopilamos datos técnicos de uso como registros de acceso, navegador y actividad dentro del sistema, con el único propósito de mantener y mejorar el servicio.",
  },
  {
    title: "2. Cómo usamos la información",
    content: "Utilizamos su información exclusivamente para: proveer y mejorar el servicio contratado, procesar y confirmar pagos, enviar comunicaciones operativas relacionadas con su cuenta (confirmaciones, avisos de cobro, actualizaciones del servicio) y generar reportes operativos solicitados por usted. No utilizamos sus datos para publicidad de terceros ni para fines ajenos a la prestación del servicio.",
  },
  {
    title: "3. Almacenamiento y seguridad de datos",
    content: "Toda la información se almacena en infraestructura de base de datos empresarial con encriptación en tránsito (TLS 1.2+) y en reposo. Implementamos controles de acceso estrictos por roles, aislamiento de datos por cliente (multi-tenant con Row Level Security) y realizamos auditorías de seguridad periódicas. El acceso a datos de producción está restringido al personal autorizado de VENATEL.",
  },
  {
    title: "4. Cookies y rastreo",
    content: "VENATEL utiliza únicamente cookies técnicas esenciales para el funcionamiento del servicio, como la gestión de sesiones de autenticación. No utilizamos cookies de rastreo, publicidad ni analítica de terceros. No compartimos información de comportamiento del usuario con plataformas externas.",
  },
  {
    title: "5. Compartir información con terceros",
    content: "No vendemos, alquilamos ni compartimos su información personal con terceros. La única excepción se produce cuando sea requerido por mandato legal o para el procesamiento de pagos a través de los métodos aceptados (Pago Móvil, PayPal). En estos casos, solo se comparte la información estrictamente necesaria para completar la transacción.",
  },
  {
    title: "6. Retención y eliminación de datos",
    content: "Sus datos se conservan mientras su cuenta esté activa. Al cancelar la suscripción, los datos se mantienen hasta el final del período pagado. Transcurrido ese período, la información es eliminada permanentemente de nuestros sistemas en un plazo máximo de 7 días. En caso de suspensión por falta de pago, el mismo plazo de 7 días aplica desde la fecha de corte si no se regulariza el pago. Una vez eliminados, los datos no pueden ser recuperados.",
  },
  {
    title: "7. Derechos del usuario",
    content: "Usted tiene derecho a acceder, corregir y exportar sus datos en cualquier momento desde la plataforma. También puede solicitar la eliminación anticipada de su información contactando a nuestro equipo de soporte. Nos comprometemos a atender estas solicitudes en un plazo máximo de 5 días hábiles.",
  },
  {
    title: "8. Contacto",
    content: "Para consultas relacionadas con privacidad, protección de datos o el ejercicio de sus derechos, puede comunicarse con nuestro equipo a través de: correo electrónico soporte@venatel.com.ve, WhatsApp +58 412 602 8385, o Instagram @venetel.app. Tiempo de respuesta estimado: 24 a 48 horas hábiles.",
  },
];

const Legal = () => {
  const [active, setActive] = useState<"tos" | "privacy">("tos");

  const navItems = [
    { id: "tos" as const, label: "Términos de Servicio", items: tosItems },
    { id: "privacy" as const, label: "Política de Privacidad", items: privacyItems },
  ];

  const currentItems = active === "tos" ? tosItems : privacyItems;

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">Términos de Servicio y Política de Privacidad</h1>
          <p className="mt-2 text-center text-muted-foreground font-medium">VENATEL · RIF: V-24895363-9</p>
          <p className="mt-1 text-center text-muted-foreground">Última actualización: abril 2026</p>
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Sidebar nav */}
          <ScrollReveal>
            <nav className="lg:sticky lg:top-24 space-y-1">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActive(n.id)}
                  className={`w-full text-left text-sm px-4 py-2.5 rounded-lg font-medium transition-colors ${active === n.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {n.label}
                </button>
              ))}
            </nav>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground">{active === "tos" ? "Términos de Servicio" : "Política de Privacidad"}</h2>
              {currentItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Legal;
