import { Link, useLocation } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const tosItems = [
  {
    title: "1. Aceptación de los términos",
    content: "Al acceder y utilizar la plataforma VENATEL, usted acepta quedar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio. VENATEL se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios significativos serán notificados con anticipación razonable a través del correo electrónico registrado.",
  },
  {
    title: "2. Descripción del servicio",
    content: "VENATEL es una plataforma de software como servicio (SaaS) de gestión hotelera que permite a los usuarios administrar reservas, habitaciones, huéspedes, inventario, extras y finanzas de establecimientos hoteleros desde un entorno web centralizado. El servicio se proporciona en modalidad de suscripción mensual, sin instalación de software adicional. VENATEL requiere conexión a internet para operar; para garantizar la continuidad del servicio, recomendamos contar con una conexión de respaldo disponible. De forma opcional, el hotel puede activar el módulo de mensajería, que conecta su cuenta de WhatsApp Business o de Instagram para recibir los mensajes de sus huéspedes y responderlos, de forma manual o mediante un asistente automático basado en inteligencia artificial. El asistente responde con la información registrada en la plataforma por el propio hotel; sus respuestas no constituyen una oferta vinculante ni una confirmación de reserva salvo que el hotel lo habilite expresamente en la configuración del módulo.",
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
    content: "Usted se compromete a utilizar VENATEL únicamente para fines legítimos de gestión hotelera. Queda prohibido el uso del servicio para actividades ilegales, la distribución de contenido malicioso, el acceso no autorizado a sistemas, o cualquier acción que pueda comprometer la seguridad o disponibilidad de la plataforma para otros usuarios. Si activa el módulo de mensajería, usted se compromete además a: obtener el consentimiento previo y expreso de cada persona antes de iniciar una conversación con ella, no enviar mensajes no solicitados ni promocionales sin ese consentimiento, atender las solicitudes de baja de forma inmediata, y cumplir las políticas de WhatsApp Business y de Instagram, cuyo incumplimiento puede resultar en la suspensión del canal por parte de Meta. El incumplimiento de esta cláusula faculta a VENATEL a suspender el módulo de mensajería o cancelar la cuenta sin previo aviso.",
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
    content: "Recopilamos la información que usted nos proporciona directamente: nombre, correo electrónico, datos del establecimiento hotelero y datos operativos ingresados en la plataforma (reservas, huéspedes, inventario, finanzas). También recopilamos datos técnicos de uso como registros de acceso, navegador y actividad dentro del sistema, con el único propósito de mantener y mejorar el servicio. Si el hotel activa el módulo de mensajería, recibimos además los mensajes que sus huéspedes le envían por WhatsApp o Instagram, junto con el número de teléfono o identificador de cuenta y el nombre de perfil del remitente; esto se detalla en la sección \"Módulo de mensajería\".",
  },
  {
    title: "2. Cómo usamos la información",
    content: "Utilizamos su información exclusivamente para: proveer y mejorar el servicio contratado, procesar y confirmar pagos, enviar comunicaciones operativas relacionadas con su cuenta (confirmaciones, avisos de cobro, actualizaciones del servicio) y generar reportes operativos solicitados por usted. No utilizamos sus datos para publicidad de terceros ni para fines ajenos a la prestación del servicio.",
  },
  {
    title: "3. Almacenamiento y seguridad de datos",
    content: "Toda la información se almacena en infraestructura de base de datos empresarial con encriptación en tránsito (TLS 1.2+) y en reposo. Implementamos controles de acceso estrictos por roles, aislamiento de datos por cliente (multi-tenant con Row Level Security) y realizamos auditorías de seguridad periódicas. El acceso a datos de producción está restringido al personal autorizado de VENATEL. La infraestructura está alojada en servidores ubicados en Estados Unidos; al usar el servicio desde Venezuela u otro país, sus datos se transfieren y procesan allí.",
  },
  {
    title: "4. Cookies y rastreo",
    content: "VENATEL utiliza únicamente cookies técnicas esenciales para el funcionamiento del servicio, como la gestión de sesiones de autenticación. No utilizamos cookies de rastreo, publicidad ni analítica de terceros. No compartimos información de comportamiento del usuario con plataformas externas.",
  },
  {
    title: "5. Compartir información con terceros",
    content: "No vendemos ni alquilamos su información personal a terceros, ni la cedemos con fines publicitarios o comerciales ajenos al servicio. Compartimos información únicamente con los proveedores de infraestructura necesarios para operar la plataforma (ver la sección \"Proveedores que procesan datos\"), para el procesamiento de pagos a través de los métodos aceptados (Pago Móvil, PayPal), o cuando sea requerido por mandato legal. En cada caso se comparte solo la información estrictamente necesaria, y esos proveedores están obligados contractualmente a procesarla únicamente por instrucción de VENATEL.",
  },
  {
    title: "6. Proveedores que procesan datos",
    content: "VENATEL opera sobre servicios de terceros que, por la naturaleza técnica del servicio, procesan datos en nuestro nombre: Supabase (Estados Unidos) aloja la base de datos, la autenticación y el almacenamiento de archivos; Cloudflare (Estados Unidos) presta alojamiento web y red de distribución; Google (Estados Unidos) presta el servicio de correo saliente. Para los hoteles que activen el módulo de mensajería: Meta Platforms (Estados Unidos) opera WhatsApp Business Platform e Instagram Messaging y procesa los mensajes intercambiados; Anthropic (Estados Unidos) presta el modelo de inteligencia artificial que genera las respuestas automáticas. Anthropic no utiliza el contenido enviado a través de su API para entrenar sus modelos. Ninguno de estos proveedores está autorizado a usar los datos para fines propios.",
  },
  {
    title: "7. Módulo de mensajería (WhatsApp e Instagram)",
    content: "Los hoteles que lo activen pueden conectar su cuenta de WhatsApp Business o de Instagram para que VENATEL reciba y responda los mensajes de sus huéspedes. Cuando el módulo está activo recibimos y almacenamos: el número de teléfono o identificador de la cuenta del remitente, el nombre de perfil que esa persona tiene configurado en la plataforma correspondiente, el contenido de los mensajes intercambiados y la fecha y hora de cada uno. Esa información se usa exclusivamente para mostrar la conversación al personal del hotel, generar la respuesta automática y dejar constancia del intercambio. El contenido de los mensajes se envía a Anthropic para generar la respuesta; no se usa para publicidad, no se vende y no se comparte con otros hoteles. Cada hotel accede únicamente a las conversaciones de su propio establecimiento. El agente automático puede pausarse en cualquier momento y el personal del hotel puede responder manualmente.",
  },
  {
    title: "8. Datos de los huéspedes del hotel",
    content: "Al usar VENATEL, el hotel introduce en la plataforma datos de terceros: sus huéspedes y sus contactos. Respecto de esos datos, el hotel es el responsable del tratamiento y VENATEL actúa únicamente como encargado: los procesamos por instrucción del hotel y para prestarle el servicio, nunca para fines propios. Corresponde al hotel informar a sus huéspedes sobre este tratamiento, obtener el consentimiento que exija la normativa aplicable y, en el caso del módulo de mensajería, obtener el consentimiento previo y expreso que exigen las políticas de WhatsApp e Instagram antes de iniciar una conversación. Un huésped que desee ejercer sus derechos sobre esos datos puede dirigirse al hotel o escribirnos a soporte@venatel.com.ve indicando el establecimiento; en ese caso trasladaremos la solicitud al hotel responsable y la atenderemos según su instrucción.",
  },
  {
    title: "9. Retención y eliminación de datos",
    content: "Sus datos se conservan mientras su cuenta esté activa. Al cancelar la suscripción, los datos se mantienen hasta el final del período pagado. Transcurrido ese período, la información es eliminada permanentemente de nuestros sistemas en un plazo máximo de 7 días. En caso de suspensión por falta de pago, el mismo plazo de 7 días aplica desde la fecha de corte si no se regulariza el pago. Las conversaciones del módulo de mensajería se conservan mientras la cuenta esté activa y se eliminan con el resto de la información en los mismos plazos; al desconectar el canal de WhatsApp o Instagram, las conversaciones asociadas se eliminan en un plazo máximo de 7 días. Una vez eliminados, los datos no pueden ser recuperados. El procedimiento para solicitar una eliminación anticipada, incluido el caso de los huéspedes que escriben al hotel por WhatsApp o Instagram, está descrito en el documento Eliminación de datos.",
  },
  {
    title: "10. Derechos del usuario",
    content: "Usted tiene derecho a acceder, corregir y exportar sus datos en cualquier momento desde la plataforma. También puede solicitar la eliminación anticipada de su información; el procedimiento completo está descrito en el documento Eliminación de datos. Nos comprometemos a atender estas solicitudes en un plazo máximo de 5 días hábiles.",
  },
  {
    title: "11. Contacto",
    content: "Para consultas relacionadas con privacidad, protección de datos o el ejercicio de sus derechos, puede comunicarse con nuestro equipo a través de: correo electrónico soporte@venatel.com.ve, WhatsApp +58 412 602 8385, o Instagram @venatel.app. Tiempo de respuesta estimado: 24 a 48 horas hábiles.",
  },
];

// Documento aparte y no una sección de la política: Meta pide una URL propia
// para la eliminación de datos en Configuración → Básica, y un ancla dentro de
// otro documento no es lo mismo que una página dedicada. La política lo
// referencia en su sección 10 en vez de repetir el texto.
const deletionItems = [
  {
    title: "1. Qué se elimina",
    content: "Al atender una solicitud de eliminación se borra de forma permanente toda la información asociada a la cuenta: datos del establecimiento y del titular, reservas, huéspedes, inventario, extras, movimientos financieros, archivos adjuntos y, si el módulo de mensajería estaba activo, las conversaciones completas de WhatsApp e Instagram con sus mensajes, números de teléfono e identificadores de cuenta. También se elimina el acceso de todos los usuarios vinculados al establecimiento. La eliminación es irreversible: una vez ejecutada, los datos no pueden recuperarse ni reconstruirse.",
  },
  {
    title: "2. Si usted es cliente de VENATEL",
    content: "Escriba a soporte@venatel.com.ve desde el correo electrónico registrado en su cuenta, con el asunto \"Eliminación de datos\", indicando el nombre del establecimiento. Verificamos que la solicitud provenga del titular antes de ejecutarla. Si prefiere conservar una copia de su información, solicite primero la exportación: puede descargar sus datos desde la plataforma o pedirnos el archivo antes de la eliminación.",
  },
  {
    title: "3. Si usted es huésped de un hotel que usa VENATEL",
    content: "Si escribió por WhatsApp o Instagram a un hotel que usa VENATEL y desea que se eliminen su conversación y sus datos, escriba a soporte@venatel.com.ve indicando el nombre del hotel y el número de teléfono o la cuenta desde la que escribió. Respecto de esos datos el hotel es el responsable del tratamiento y VENATEL actúa como encargado, así que trasladamos su solicitud al hotel y la ejecutamos en el mismo plazo. También puede dirigirse directamente al hotel. No es necesario tener una cuenta en VENATEL para pedirlo.",
  },
  {
    title: "4. Plazos y confirmación",
    content: "Atendemos las solicitudes de eliminación en un plazo máximo de 5 días hábiles desde su recepción, y confirmamos por escrito al correo o canal desde el que se solicitó cuando la eliminación se ha completado. Si la solicitud no puede atenderse —por ejemplo, porque no logramos verificar la identidad del solicitante— lo informamos dentro del mismo plazo explicando el motivo.",
  },
  {
    title: "5. Eliminación automática al cancelar o no renovar",
    content: "No es necesario solicitar nada para que sus datos se eliminen al dejar de usar el servicio. Al cancelar la suscripción, la información se conserva hasta el final del período ya pagado y se elimina dentro de los 7 días siguientes. Si no se renueva el pago en la fecha de corte, el mismo plazo de 7 días corre desde esa fecha. Al desconectar un canal de WhatsApp o Instagram sin cancelar la cuenta, las conversaciones asociadas a ese canal se eliminan dentro de los 7 días siguientes y el resto de la información permanece intacta.",
  },
  {
    title: "6. Datos en poder de terceros",
    content: "Los mensajes intercambiados por WhatsApp e Instagram también son procesados por Meta Platforms conforme a sus propias políticas, sobre las que VENATEL no tiene control; para solicitar su eliminación en esas plataformas debe dirigirse a Meta. Las respuestas automáticas se generan con el modelo de Anthropic, que no conserva el contenido enviado a su API para entrenar sus modelos. La eliminación que ejecutamos abarca toda la información almacenada en los sistemas de VENATEL.",
  },
];

// Un documento por URL, uno por cada campo que pide Meta en Configuración →
// Básica. Ningún contenido se repite entre direcciones: /legal redirige a
// /terminos-de-uso con un 301 (ver public/_redirects).
const DOCUMENTOS = {
  "/terminos-de-uso": { titulo: "Términos de Servicio", items: tosItems },
  "/privacidad": { titulo: "Política de Privacidad", items: privacyItems },
  "/eliminacion-datos": { titulo: "Eliminación de datos", items: deletionItems },
} as const;

type RutaLegal = keyof typeof DOCUMENTOS;

const NAV: { to: RutaLegal; label: string }[] = [
  { to: "/terminos-de-uso", label: "Términos de Servicio" },
  { to: "/privacidad", label: "Política de Privacidad" },
  { to: "/eliminacion-datos", label: "Eliminación de datos" },
];

const Legal = () => {
  const { pathname } = useLocation();

  // Cuál documento mostrar lo manda la URL, no un useState: así cada
  // dirección tiene su propio contenido y su propio HTML prerenderizado.
  const doc = DOCUMENTOS[pathname as RutaLegal] ?? DOCUMENTOS["/terminos-de-uso"];

  // pt-32 y no py-20: el navbar es fixed y mide h-24 (96px), así que 80px de
  // padding dejaban el título debajo de él.
  return (
    <section className="bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* El h1 nombra solo el documento de esta URL. Antes decía "Términos
            de Servicio y Política de Privacidad" en una página cuyo cuerpo era
            uno de los dos, y el h2 repetía cuál. */}
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">{doc.titulo}</h1>
          <p className="mt-2 text-center text-muted-foreground font-medium">VENATEL · RIF: V-24895363-9</p>
          <p className="mt-1 text-center text-muted-foreground">Última actualización: octubre 2026</p>

          {/* Los tres documentos, en línea y centrados. Link y no button para
              que sean hipervínculos de verdad: se pueden abrir en otra
              pestaña, copiar la dirección, y un crawler los sigue. */}
          <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {NAV.map((n, i) => (
              <span key={n.to} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-muted-foreground/40 select-none">·</span>}
                <Link
                  to={n.to}
                  className={`text-sm font-medium transition-colors ${
                    n.to === pathname
                      ? "text-accent underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-muted-foreground/40"
                  }`}
                >
                  {n.label}
                </Link>
              </span>
            ))}
          </nav>
        </ScrollReveal>

        {/* Una sola columna centrada: la navegación ya no vive en un sidebar. */}
        <div className="mt-12 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              {doc.items.map((item) => (
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
