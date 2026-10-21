import { Link, useLocation } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

// ============================================================
// CONTENIDO
// ============================================================
// Texto literal de venatel_legal_v2.md, versión 002-2026-10. No se reescribe
// acá: si cambia el texto, cambia también TERMS_VERSION en el repo de la app
// (src/config/venatel.ts), porque profiles.terms_version guarda qué versión
// aceptó cada cliente.
//
// `cuerpo` es una lista de bloques en orden: una cadena es un párrafo, un
// arreglo es una lista con viñetas. Los planes, los proveedores y los plazos
// de retención se leen mucho mejor como listas que como prosa corrida.

type Seccion = {
  title: string;
  cuerpo: (string | string[])[];
};

const CONTACTO = "soporte@venatel.com.ve · WhatsApp +58 422 6028310 · Instagram @venatelgestion";

const tosItems: Seccion[] = [
  {
    title: "0. Titular del servicio",
    cuerpo: [
      `VENATEL es el nombre comercial bajo el cual opera Luis Rivera, persona natural, RIF V-24895363-9, con domicilio en Caracas, Venezuela (en adelante, "VENATEL"). Contacto: ${CONTACTO}.`,
    ],
  },
  {
    title: "1. Aceptación de los términos",
    cuerpo: [
      "La aceptación de estos Términos de Servicio y de la Política de Privacidad se realiza de forma expresa al crear la cuenta, mediante la casilla de aceptación habilitada para ello. VENATEL conserva registro de la fecha y la versión aceptada. Si no está de acuerdo con estos términos, no podrá utilizar el servicio. VENATEL puede actualizar estos términos; los cambios relevantes se notificarán al correo electrónico registrado con al menos 15 días de anticipación, y el uso continuado del servicio después de esa fecha implica su aceptación.",
    ],
  },
  {
    title: "2. Descripción del servicio",
    cuerpo: [
      "VENATEL es una plataforma de software como servicio (SaaS) de gestión hotelera que permite administrar reservas, habitaciones, huéspedes, inventario, extras, restaurante y finanzas de establecimientos hoteleros desde un entorno web. El servicio se presta por suscripción mensual y requiere conexión a internet; se recomienda contar con una conexión de respaldo. De forma opcional, el hotel puede contratar el módulo de mensajería y la licencia del Agente de IA descritos en la sección 8.",
    ],
  },
  {
    title: "3. Acceso y registro",
    cuerpo: [
      "El acceso se otorga únicamente por invitación de VENATEL, dentro de un proceso de onboarding personalizado. No existe registro público. Quien crea la cuenta declara actuar en nombre y con facultades suficientes del establecimiento que registra. El servicio está destinado exclusivamente a uso empresarial. El cliente es responsable de la confidencialidad de sus credenciales y de toda actividad realizada desde su cuenta y por los usuarios que habilite.",
    ],
  },
  {
    title: "4. Planes y precios",
    cuerpo: [
      "VENATEL ofrece los siguientes planes de suscripción mensual:",
      [
        "Estándar (USD 40/mes): una propiedad de hasta 10 habitaciones; acceso a los datos de los últimos 3 meses.",
        "PRO (USD 100/mes): una propiedad con habitaciones ilimitadas; incluye módulo de restaurante, historial ilimitado y programa de referidos.",
        "MULTI (precio por posada activa, a convenir): varias propiedades de un mismo titular; incluye todo lo de PRO. Se factura por cada posada activa y sus condiciones se pactan por escrito en cada caso.",
        "Licencia del Agente de IA: complemento opcional, según la tarifa vigente publicada o comunicada por VENATEL.",
      ],
      "El detalle de funcionalidades de cada plan es el publicado en venatel.com.ve/precios en cada momento. Los nuevos clientes pueden disponer de un período de prueba gratuito de 14 días.",
    ],
  },
  {
    title: "5. Cambios de precios y funcionalidades",
    cuerpo: [
      "VENATEL puede modificar los precios de sus planes y complementos con un aviso mínimo de 30 días al correo registrado. Las nuevas funcionalidades podrán incorporarse a los planes existentes con el ajuste de precio correspondiente, u ofrecerse como complementos de contratación separada. Si el cliente no acepta un cambio de precio, puede cancelar antes de su entrada en vigor; el pago de la mensualidad posterior a esa fecha implica su aceptación.",
      "Los clientes que contrataron un plan a un precio anterior conservan ese precio mientras su suscripción permanezca activa y al día, salvo que cambien de plan.",
    ],
  },
  {
    title: "6. Pagos",
    cuerpo: [
      "Los pagos son mensuales y por adelantado. Los precios están expresados en dólares estadounidenses (USD). Los pagos en bolívares se calculan a la tasa oficial publicada por el Banco Central de Venezuela del día en que se realiza el pago. Métodos aceptados: Pago Móvil, transferencia bancaria en bolívares y PayPal en dólares. Confirmado el pago, se envía un comprobante al correo registrado. VENATEL no cobra comisiones sobre las reservas gestionadas.",
      "Los costos cobrados por Meta Platforms por el uso de WhatsApp Business Platform corren por cuenta del hotel y se pagan directamente a Meta. VENATEL puede facturar el consumo del Agente de IA y de las APIs asociadas según la tarifa vigente, con un tope mensual explícito definido en la configuración de la licencia. Al alcanzar ese tope, el Agente se pausa automáticamente hasta el siguiente período o hasta que el hotel amplíe el tope.",
    ],
  },
  {
    title: "7. Prueba, impago, cancelación y archivo",
    cuerpo: [
      [
        "Fin de la prueba o impago: al vencer el período de prueba o la fecha de corte sin pago, el acceso se bloquea. El hotel dispone de 7 días de gracia para regularizar el pago y recuperar el acceso sin pérdida de información.",
        "Archivo: vencidos los 7 días de gracia, o al término del período pagado en caso de cancelación, la cuenta y sus datos se archivan durante 14 días. Durante ese plazo, la cuenta puede reactivarse mediante el pago correspondiente.",
        "Eliminación: vencido el plazo de archivo, los datos se eliminan conforme al documento Eliminación de datos.",
        "La cancelación puede hacerse en cualquier momento, sin penalización ni permanencia. No se realizan reembolsos por períodos parciales.",
      ],
    ],
  },
  {
    title: "8. Módulo de mensajería y Agente de IA",
    cuerpo: [
      "8.1. El módulo de mensajería permite conectar la cuenta de WhatsApp Business o de Instagram del hotel para recibir y responder los mensajes de sus huéspedes, de forma manual o mediante el Agente de IA.",
      "8.2. El Agente de IA se ofrece como licencia de pago independiente. El hotel define sus parámetros (información disponible, tono, alcance de las respuestas y si puede informar o confirmar reservas). La contratación de la licencia y la activación de esas opciones constituyen la autorización expresa del hotel para que el Agente responda en su nombre.",
      "8.3. El Agente responde en nombre del hotel, con la información que el propio hotel registra en la plataforma. El hotel es el único responsable de la exactitud de esa información, de la configuración del Agente y de supervisar su funcionamiento, y puede pausarlo y responder manualmente en cualquier momento. Las respuestas generadas por inteligencia artificial pueden contener errores; VENATEL no garantiza su exactitud ni responde por los compromisos asumidos frente a terceros a través del Agente.",
      "8.4. El Agente se desarrolla y ajusta con datos de prueba creados por VENATEL, no con datos de clientes. Si el hotel lo solicita, el Agente puede adaptar su estilo de redacción usando las conversaciones del propio hotel, exclusivamente para el servicio de ese hotel.",
      "8.5. Meta Platforms puede limitar, suspender o cerrar canales según sus propias políticas. VENATEL no es responsable de esas decisiones ni de sus consecuencias.",
    ],
  },
  {
    title: "9. Uso aceptable y responsabilidad por los mensajes",
    cuerpo: [
      "El servicio solo puede utilizarse para fines lícitos de gestión hotelera. El hotel es el titular del número de WhatsApp y de la cuenta de Instagram conectados, y el emisor de todos los mensajes enviados desde ellos. VENATEL provee únicamente la herramienta de software: no decide los destinatarios ni el contenido de las comunicaciones del hotel. En consecuencia, el hotel es el único responsable de obtener el consentimiento de sus contactos, de no enviar mensajes no solicitados o promocionales sin ese consentimiento, de atender de inmediato las solicitudes de baja y de cumplir las políticas de WhatsApp Business y de Instagram. El incumplimiento faculta a VENATEL a suspender el módulo de mensajería o la cuenta sin previo aviso.",
    ],
  },
  {
    title: "10. Propiedad intelectual y contenido",
    cuerpo: [
      "El software, código fuente, diseño, marcas y demás elementos de VENATEL son propiedad exclusiva de su titular. Los datos que el hotel ingresa y el contenido que genera o publica a través de la plataforma son propiedad del hotel, que es el único responsable de ellos y garantiza contar con los derechos necesarios sobre el material que utiliza. El hotel otorga a VENATEL una licencia limitada, no exclusiva y revocable para procesar ese contenido con el único fin de prestar el servicio.",
    ],
  },
  {
    title: "11. Restricciones de uso",
    cuerpo: [
      "El acceso al servicio no transfiere ningún derecho sobre el software ni sobre su infraestructura. El cliente y los usuarios que habilite se obligan a no:",
      [
        "descompilar, aplicar ingeniería inversa, desensamblar ni intentar derivar el código fuente, la estructura de la base de datos o la arquitectura de la plataforma;",
        "copiar, reproducir, adaptar, traducir ni crear obras derivadas de cualquier parte de la plataforma, incluidas su interfaz, su diseño y su documentación;",
        "utilizar el servicio, ni la información obtenida a través de él, para desarrollar, financiar o facilitar un producto o servicio que compita con VENATEL;",
        "extraer datos de forma automatizada mediante scraping, bots, rastreadores o cualquier medio distinto de las funciones previstas en la plataforma;",
        "revender, arrendar, sublicenciar, ceder ni compartir el acceso con terceros ajenos al establecimiento registrado, ni emplear una misma cuenta para establecimientos distintos de los contratados;",
        "eliminar, alterar u ocultar avisos de propiedad, marcas, logotipos o atribuciones presentes en la plataforma o en los documentos que genera.",
      ],
      "El cliente reconoce que el incumplimiento de esta sección causa a VENATEL un daño de difícil reparación económica. En consecuencia, VENATEL podrá solicitar medidas cautelares o de cesación inmediata ante los tribunales competentes, además de la indemnización por los daños causados, y suspender el acceso sin previo aviso mientras la controversia se resuelve.",
    ],
  },
  {
    title: "12. Confidencialidad",
    cuerpo: [
      "Cada parte se obliga a mantener en reserva la información no pública de la otra a la que acceda con motivo de esta relación.",
      "Es información confidencial de VENATEL el código fuente, la arquitectura, los esquemas de base de datos, las condiciones comerciales particulares, los planes de desarrollo y cualquier material técnico no publicado. Es información confidencial del cliente su información operativa y los datos de sus huéspedes.",
      "Ninguna de las partes revelará esa información a terceros ni la empleará para fines distintos de la ejecución del servicio, salvo autorización escrita de la otra parte o requerimiento legal, caso en el cual se notificará a la otra parte cuando la ley lo permita. La obligación subsiste durante tres años contados desde el fin de la relación, y de forma indefinida respecto del código fuente y de los secretos industriales de VENATEL.",
    ],
  },
  {
    title: "13. Programa de referidos",
    cuerpo: [
      "13.1. Cada cliente de los planes PRO o MULTI, activo y al día en sus pagos, dispone de un enlace de referido. Por cada nuevo establecimiento que contrate un plan de pago a través de ese enlace, el referidor obtiene un 5% de descuento sobre su mensualidad, acumulable hasta un máximo del 50%. El establecimiento referido obtiene un 5% de descuento en su primera mensualidad pagada.",
      "13.2. El descuento del referidor se mantiene mientras el establecimiento referido permanezca activo y al día en sus pagos.",
      "13.3. No generan beneficio los autorreferidos, ni los establecimientos del mismo titular o grupo económico que el referidor, ni los clientes que ya lo fueron de VENATEL.",
      "13.4. Los descuentos no son canjeables por dinero, no son transferibles y se aplican solo sobre la mensualidad del plan.",
      "13.5. VENATEL puede modificar o terminar el programa con un aviso de 30 días, respetando los descuentos ya generados hasta esa fecha, y puede anular beneficios obtenidos de forma fraudulenta.",
    ],
  },
  {
    title: "14. Limitación de responsabilidad",
    cuerpo: [
      `El servicio se presta "tal cual" y "según disponibilidad", sin garantía de funcionamiento ininterrumpido. VENATEL no responde por daños indirectos, incidentales, especiales o consecuentes, lucro cesante ni pérdida de reservas o ingresos. Tampoco responde por fallas atribuibles a terceros (incluidos Meta, Anthropic y los proveedores de infraestructura), fallas de conectividad, fuerza mayor, información ingresada por el hotel ni respuestas del Agente de IA. En cualquier caso, la responsabilidad total de VENATEL frente al cliente, por cualquier concepto, no excederá el monto efectivamente pagado por el cliente en los 3 meses anteriores al hecho que origine el reclamo.`,
    ],
  },
  {
    title: "15. Indemnidad",
    cuerpo: [
      "El hotel mantendrá indemne a VENATEL y a su titular frente a cualquier reclamo, sanción, daño o gasto, incluidos honorarios de abogados, derivado de: los mensajes enviados desde su número o cuenta; la falta de consentimiento de sus contactos; el incumplimiento de las políticas de Meta; el contenido que publique o procese en la plataforma; los datos de huéspedes que haya obtenido o tratado indebidamente; o el incumplimiento de estos términos.",
    ],
  },
  {
    title: "16. Modificaciones del servicio",
    cuerpo: [
      "VENATEL puede modificar, mejorar o descontinuar funcionalidades. Los cambios que afecten de forma significativa la funcionalidad principal se notificarán con al menos 15 días de anticipación. Las mejoras se incorporan de forma continua sin necesidad de aviso.",
    ],
  },
  {
    title: "17. Cesión",
    cuerpo: [
      "VENATEL puede ceder este contrato, junto con la cartera de clientes, a una sociedad que constituya su titular o a un tercero adquirente del negocio, notificándolo por correo electrónico. El cliente no puede ceder su posición sin consentimiento escrito de VENATEL.",
    ],
  },
  {
    title: "18. Notificaciones",
    cuerpo: [
      "Las comunicaciones se realizan válidamente al correo electrónico registrado en la cuenta, y a soporte@venatel.com.ve en el caso de comunicaciones dirigidas a VENATEL.",
    ],
  },
  {
    title: "19. Disposiciones generales",
    cuerpo: [
      "Si alguna cláusula resulta inválida, el resto conserva su vigencia. Estos términos, junto con la Política de Privacidad, el documento Eliminación de datos y, en su caso, el acuerdo escrito del plan MULTI, constituyen el acuerdo completo entre las partes. La falta de ejercicio de un derecho no implica su renuncia.",
    ],
  },
  {
    title: "20. Ley aplicable y jurisdicción",
    cuerpo: [
      "Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Las partes procurarán primero una solución amistosa; de no lograrse, someten cualquier controversia a los tribunales competentes de la ciudad de Caracas.",
    ],
  },
];

const privacyItems: Seccion[] = [
  {
    title: "1. Responsable",
    cuerpo: [
      "Luis Rivera, persona natural, RIF V-24895363-9, bajo el nombre comercial VENATEL. Contacto de privacidad: soporte@venatel.com.ve.",
    ],
  },
  {
    title: "2. Información que recopilamos",
    cuerpo: [
      [
        "Datos de la cuenta: nombre, correo electrónico y datos del establecimiento.",
        "Datos operativos ingresados por el hotel: reservas, huéspedes, inventario, restaurante y finanzas.",
        "Datos técnicos de uso: registros de acceso, navegador y actividad, recogidos solo para operar y mantener el servicio.",
        "Módulo de mensajería (si está activo): el número de teléfono o identificador de cuenta del remitente, su nombre de perfil, el contenido de los mensajes y su fecha y hora.",
      ],
    ],
  },
  {
    title: "3. Uso de la información",
    cuerpo: [
      "Usamos la información exclusivamente para prestar el servicio, procesar pagos, enviar comunicaciones operativas y generar los reportes que el cliente solicite. No usamos datos de clientes ni de huéspedes para publicidad ni para entrenar o desarrollar el Agente de IA, que se construye con datos de prueba creados por VENATEL. Las conversaciones de un hotel solo se usan para ajustar el estilo de su propio Agente, y solo si el hotel lo solicita.",
    ],
  },
  {
    title: "4. Almacenamiento y seguridad",
    cuerpo: [
      "Los datos se alojan en servidores ubicados en Estados Unidos. El cifrado en tránsito (TLS) y en reposo lo provee nuestro proveedor de infraestructura. Aplicamos aislamiento de datos por cliente mediante Row Level Security y control de acceso por roles. El acceso a los datos de producción está restringido al titular y al personal autorizado.",
    ],
  },
  {
    title: "5. Cookies",
    cuerpo: [
      "Usamos únicamente cookies y almacenamiento técnicos, necesarios para la sesión y el funcionamiento del servicio. No usamos cookies de publicidad ni de analítica de terceros.",
    ],
  },
  {
    title: "6. Proveedores que procesan datos",
    cuerpo: [
      [
        "Supabase (EE. UU.): base de datos, autenticación y archivos.",
        "Cloudflare (EE. UU.): alojamiento web y red.",
        "Google (EE. UU.): correo saliente.",
        "Meta Platforms (EE. UU.): WhatsApp Business Platform e Instagram Messaging, para los hoteles que activen la mensajería.",
        "Anthropic (EE. UU.): modelo de inteligencia artificial que genera las respuestas del Agente.",
      ],
      "Cada proveedor trata los datos conforme a sus propias condiciones y políticas. Según las condiciones comerciales vigentes de Anthropic, el contenido enviado a través de su API no se utiliza para entrenar sus modelos. No vendemos, alquilamos ni cedemos datos con fines publicitarios. Solo los compartimos con estos proveedores en la medida necesaria, para procesar pagos o por mandato legal.",
    ],
  },
  {
    title: "7. Módulo de mensajería",
    cuerpo: [
      "Los datos de mensajería se usan solo para mostrar las conversaciones al personal del hotel, generar las respuestas del Agente y dejar constancia del intercambio. Cada hotel accede únicamente a sus propias conversaciones. El hotel puede borrar conversaciones desde la plataforma en cualquier momento.",
    ],
  },
  {
    title: "8. Datos de los huéspedes",
    cuerpo: [
      "Respecto de los datos de sus huéspedes y contactos, el hotel es el responsable del tratamiento y VENATEL actúa como encargado, tratándolos solo por instrucción del hotel. Corresponde al hotel informar a sus huéspedes y obtener los consentimientos exigidos por la ley y por las políticas de WhatsApp e Instagram. Las solicitudes de huéspedes se gestionan según el documento Eliminación de datos.",
    ],
  },
  {
    title: "9. Retención",
    cuerpo: [
      [
        "Los datos se conservan mientras la cuenta esté activa.",
        "Tras el bloqueo por impago o fin de prueba (7 días de gracia), o tras la cancelación, la cuenta se archiva durante 14 días y luego se elimina.",
        "Las conversaciones de mensajería se eliminan cuando el hotel lo solicita o las borra, o dentro de los 7 días siguientes a la desconexión del canal.",
        "Los registros de facturación y pagos se conservan según lo exija la ley.",
        "Las copias de respaldo del proveedor de infraestructura se sobrescriben según su ciclo de rotación y no se restauran salvo para recuperación ante incidentes.",
      ],
    ],
  },
  {
    title: "10. Derechos",
    cuerpo: [
      "El cliente puede acceder a sus datos, corregirlos y exportarlos desde la plataforma, y solicitar su eliminación conforme al documento Eliminación de datos. Las solicitudes se atienden en un máximo de 5 días hábiles.",
    ],
  },
  {
    title: "11. Cambios en esta política",
    cuerpo: [
      "Los cambios relevantes se notificarán al correo registrado con al menos 15 días de anticipación.",
    ],
  },
  {
    title: "12. Contacto",
    cuerpo: [`${CONTACTO}. Respuesta estimada: 24 a 48 horas hábiles.`],
  },
];

const deletionItems: Seccion[] = [
  {
    title: "1. Alcance",
    cuerpo: [
      "Una eliminación borra la información asociada a la cuenta en los sistemas de VENATEL: datos del establecimiento y del titular, reservas, huéspedes, inventario, extras, restaurante, movimientos financieros y archivos. Si la mensajería estaba activa, también borra las conversaciones de WhatsApp e Instagram, con sus mensajes, números e identificadores. Se elimina además el acceso de todos los usuarios vinculados. Se exceptúan los registros de facturación que la ley obligue a conservar.",
    ],
  },
  {
    title: "2. Solicitud del cliente",
    cuerpo: [
      `Escriba a soporte@venatel.com.ve desde el correo registrado, con el asunto "Eliminación de datos" e indicando el establecimiento. Verificamos la titularidad antes de ejecutar la eliminación. Una eliminación solicitada expresamente es definitiva: no pasa por archivo y no puede revertirse. Si desea conservar una copia de sus datos, expórtelos antes de solicitarla.`,
    ],
  },
  {
    title: "3. Solicitud de un huésped",
    cuerpo: [
      "Si escribió por WhatsApp o Instagram a un hotel que usa VENATEL, puede pedir la eliminación de su conversación escribiendo a soporte@venatel.com.ve. Indique el nombre del hotel y el número o la cuenta desde la que escribió; no necesita tener cuenta en VENATEL.",
      "Trasladamos la solicitud al hotel, como responsable del tratamiento. Si el hotel no responde en 5 días hábiles, VENATEL elimina las conversaciones de mensajería de ese huésped. Los demás datos del huésped que el hotel haya registrado (por ejemplo, sus reservas) dependen del hotel, y puede dirigirse directamente a él.",
    ],
  },
  {
    title: "4. Plazos y confirmación",
    cuerpo: [
      "Las solicitudes se atienden en un máximo de 5 días hábiles, salvo el plazo adicional del punto 3. Confirmamos por escrito cuando la eliminación se ha completado. Si la solicitud no puede atenderse, por ejemplo por no poder verificar la identidad, lo informamos en el mismo plazo, explicando el motivo.",
    ],
  },
  {
    title: "5. Eliminación automática",
    cuerpo: [
      [
        "Fin de prueba o impago: bloqueo, 7 días de gracia, 14 días de archivo y luego eliminación.",
        "Cancelación: acceso hasta el fin del período pagado, 14 días de archivo y luego eliminación.",
        "Desconexión de un canal sin cancelar la cuenta: las conversaciones de ese canal se eliminan dentro de los 7 días siguientes; el resto de la información permanece.",
      ],
    ],
  },
  {
    title: "6. Copias de respaldo y terceros",
    cuerpo: [
      "Las copias de respaldo del proveedor de infraestructura se sobrescriben según su ciclo de rotación y no se restauran salvo para recuperación ante incidentes. Meta Platforms y Anthropic tratan los datos que procesan conforme a sus propias políticas, sobre las cuales VENATEL no tiene control. Para eliminar datos en esas plataformas, debe dirigirse a ellas.",
    ],
  },
];

// ============================================================
// RUTAS
// ============================================================
// Un documento por URL, uno por cada campo que pide Meta en Configuración →
// Básica. /legal no repite ninguno: es el índice que enlaza los tres.

const DOCUMENTOS = {
  "/terminos-de-uso": { titulo: "Términos de Servicio", items: tosItems },
  "/privacidad": { titulo: "Política de Privacidad", items: privacyItems },
  "/eliminacion-datos": { titulo: "Eliminación de datos", items: deletionItems },
} as const;

type RutaLegal = keyof typeof DOCUMENTOS;

const NAV: { to: RutaLegal; label: string; resumen: string }[] = [
  {
    to: "/terminos-de-uso",
    label: "Términos de Servicio",
    resumen: "Condiciones de uso, planes, pagos, el módulo de mensajería y el Agente de IA.",
  },
  {
    to: "/privacidad",
    label: "Política de Privacidad",
    resumen: "Qué datos recopilamos, para qué, quién los procesa y cuánto los conservamos.",
  },
  {
    to: "/eliminacion-datos",
    label: "Eliminación de datos",
    resumen: "Cómo pedir que borremos su información, los plazos y qué se elimina solo.",
  },
];

// Sube el consecutivo con cada cambio sustantivo del texto. Tiene que ir a la
// par de TERMS_VERSION en el repo de la app (src/config/venatel.ts): es lo que
// se graba en profiles.terms_version al crear una cuenta, y si una cambia sin
// la otra el registro apunta a la versión equivocada.
const VERSION = "Versión 003-2026-10 · octubre 2026";
const TITULAR = "VENATEL · Luis Rivera · RIF V-24895363-9";

// ============================================================
// COMPONENT
// ============================================================

const Legal = () => {
  const { pathname } = useLocation();
  const doc = DOCUMENTOS[pathname as RutaLegal];

  // pt-32 y no py-20: el navbar es fixed y mide h-24 (96px), así que 80px de
  // padding dejaban el título debajo de él.
  return (
    <section className="bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">

        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            {doc ? doc.titulo : "Documentos legales"}
          </h1>
          <p className="mt-2 text-center text-muted-foreground font-medium">{TITULAR}</p>
          <p className="mt-1 text-center text-muted-foreground">{VERSION}</p>

          {/* Los tres documentos, en línea y centrados. Link y no button para
              que sean hipervínculos de verdad: se pueden abrir en otra
              pestaña, copiar la dirección, y un crawler los sigue. */}
          <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {NAV.map((n, i) => (
              <span key={n.to} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-muted-foreground/40 select-none">·</span>}
                <Link
                  to={n.to}
                  className={`text-sm font-medium underline underline-offset-4 transition-colors ${
                    n.to === pathname
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground decoration-muted-foreground/40"
                  }`}
                >
                  {n.label}
                </Link>
              </span>
            ))}
          </nav>
        </ScrollReveal>

        {doc ? (
          /* ── Un documento ──────────────────────────────── */
          <div className="mt-12 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                {doc.items.map((item) => (
                  <div key={item.title}>
                    <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                    {item.cuerpo.map((bloque, i) =>
                      Array.isArray(bloque) ? (
                        <ul key={i} className="mt-2 space-y-2">
                          {bloque.map((punto) => (
                            <li key={punto} className="flex gap-3 text-muted-foreground leading-relaxed">
                              <span aria-hidden="true" className="select-none text-accent">·</span>
                              <span>{punto}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p key={i} className="mt-2 text-muted-foreground leading-relaxed">{bloque}</p>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        ) : (
          /* ── /legal: el índice ─────────────────────────── */
          <div className="mt-12 max-w-2xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
                  >
                    <h2 className="text-lg font-semibold text-foreground">{n.label}</h2>
                    <p className="mt-1 text-muted-foreground">{n.resumen}</p>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
};

export default Legal;
