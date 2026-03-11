import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const tosItems = [
  { title: "1. Aceptación de los términos", content: "Al acceder y utilizar la plataforma VENETEL, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio. Nos reservamos el derecho de actualizar estos términos en cualquier momento, notificando a los usuarios de cambios significativos." },
  { title: "2. Descripción del servicio", content: "VENETEL es una plataforma de software como servicio (SaaS) de gestión hotelera que permite a los usuarios administrar reservas, habitaciones, huéspedes, inventario, servicios y finanzas de establecimientos hoteleros. El servicio se proporciona \"tal cual\" y \"según disponibilidad\"." },
  { title: "3. Registro y cuenta de usuario", content: "Para utilizar VENETEL, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta." },
  { title: "4. Planes, pagos y cancelación", content: "VENETEL ofrece distintos planes de suscripción con precios y características detallados en la página de precios. Los pagos se procesan mensualmente. Puede cancelar su suscripción en cualquier momento sin penalizaciones, manteniendo acceso hasta el final del período pagado." },
  { title: "5. Uso aceptable", content: "Usted se compromete a utilizar VENETEL únicamente para fines legítimos de gestión hotelera. Queda prohibido el uso del servicio para actividades ilegales, distribución de malware, o cualquier acción que pueda dañar la plataforma o a otros usuarios." },
  { title: "6. Propiedad intelectual", content: "Todo el contenido, diseño, código fuente, marcas registradas y demás elementos de propiedad intelectual de VENETEL pertenecen exclusivamente a la empresa. Los datos ingresados por los usuarios siguen siendo propiedad de cada usuario." },
  { title: "7. Limitación de responsabilidad", content: "VENETEL no será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de uso del servicio. Nuestra responsabilidad total no excederá el monto pagado por el usuario en los últimos 12 meses." },
  { title: "8. Modificaciones al servicio", content: "Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del servicio en cualquier momento. Notificaremos a los usuarios con anticipación razonable sobre cambios significativos que afecten la funcionalidad principal." },
  { title: "9. Ley aplicable", content: "Estos términos se regirán e interpretarán de acuerdo con las leyes de la República Bolivariana de Venezuela. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes del país." },
];

const privacyItems = [
  { title: "1. Información que recopilamos", content: "Recopilamos información que usted nos proporciona directamente: nombre, correo electrónico, datos del establecimiento hotelero y datos operativos ingresados en la plataforma. También recopilamos datos de uso como registros de acceso y actividad dentro del sistema." },
  { title: "2. Cómo usamos la información", content: "Utilizamos su información para proporcionar y mejorar el servicio, procesar pagos, enviar comunicaciones relacionadas con el servicio, y generar reportes operativos solicitados por usted. No usamos sus datos para publicidad de terceros." },
  { title: "3. Almacenamiento y seguridad de datos", content: "Toda la información se almacena en infraestructura de base de datos empresarial con encriptación en tránsito (TLS) y en reposo. Implementamos controles de acceso estrictos y realizamos auditorías de seguridad periódicas." },
  { title: "4. Cookies", content: "VENETEL utiliza únicamente cookies técnicas esenciales para el funcionamiento del servicio, como sesiones de autenticación. No utilizamos cookies de rastreo, publicidad ni análisis de terceros." },
  { title: "5. Compartir información con terceros", content: "No vendemos, alquilamos ni compartimos su información personal con terceros. La única excepción es cuando sea requerido por ley o para procesar pagos a través de nuestros procesadores de pago certificados." },
  { title: "6. Retención y eliminación de datos", content: "Mantenemos sus datos mientras su cuenta esté activa. Al cancelar su suscripción, los datos se conservan hasta el final del período pagado y luego se eliminan permanentemente de nuestros sistemas." },
  { title: "7. Derechos del usuario", content: "Usted tiene derecho a acceder, corregir, exportar y solicitar la eliminación de sus datos personales en cualquier momento. Puede ejercer estos derechos contactando a nuestro equipo de soporte." },
  { title: "8. Contacto", content: "Para consultas relacionadas con privacidad y protección de datos, puede comunicarse con nuestro equipo a través del formulario de contacto en nuestra página principal o mediante nuestras redes sociales." },
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
          <p className="mt-3 text-center text-muted-foreground">Última actualización: 2025</p>
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
