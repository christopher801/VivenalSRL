import { Link } from "react-router-dom";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-950 border-b-4 border-red-700 py-5">
        <div className="max-w-4xl mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/vivenal-image-logo-removebg-preview.png" alt="Vivenal" className="h-10 w-auto" onError={(e) => { e.target.style.display = "none"; }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }} className="text-white uppercase tracking-wide text-lg">
              Vivenal <span className="text-red-500">SRL</span>
            </span>
          </Link>
          <Link to="/" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 transition-colors">
            ← Volver
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-16">
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2.5rem" }} className="uppercase text-gray-900 mb-2">
          Política de Privacidad
        </h1>
        <div className="w-16 h-1 bg-red-700 mb-8" />
        <p className="text-gray-400 text-sm mb-10">Última actualización: mayo 2025</p>

        <div className="flex flex-col gap-8">
          {[
            {
              title: "1. Información que Recopilamos",
              text: "A través del formulario de contacto de nuestro sitio, recopilamos nombre completo, correo electrónico y el mensaje enviado. Esta información es proporcionada voluntariamente por el usuario.",
            },
            {
              title: "2. Uso de la Información",
              text: "La información recopilada se utiliza exclusivamente para responder a sus consultas y solicitudes de presupuesto. No utilizamos sus datos para envío de publicidad no solicitada ni los compartimos con terceros sin su consentimiento.",
            },
            {
              title: "3. Almacenamiento de Datos",
              text: "Los mensajes enviados a través del formulario de contacto son almacenados en Firebase (Google Cloud) con medidas de seguridad estándar de la industria. El acceso a estos datos está restringido al personal autorizado de Vivenal SRL.",
            },
            {
              title: "4. Cookies",
              text: "Este sitio web no utiliza cookies de rastreo ni publicidad. Solo se pueden utilizar cookies técnicas necesarias para el funcionamiento básico del sitio.",
            },
            {
              title: "5. Sus Derechos",
              text: "Usted tiene derecho a solicitar el acceso, rectificación o eliminación de sus datos personales en cualquier momento. Para ejercer estos derechos, contáctenos a vivenalsrl@gmail.com.",
            },
            {
              title: "6. Seguridad",
              text: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
            },
            {
              title: "7. Contacto",
              text: "Si tiene preguntas sobre nuestra política de privacidad, contáctenos en vivenalsrl@gmail.com o al +1 (849) 883-3125.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.3rem" }} className="uppercase text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Vivenal SRL. Todos los derechos reservados.
      </footer>
    </div>
  );
}