import { Link } from "react-router-dom";

export default function TerminosCondiciones() {
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
          Términos y Condiciones
        </h1>
        <div className="w-16 h-1 bg-red-700 mb-8" />
        <p className="text-gray-400 text-sm mb-10">Última actualización: julio 2026</p>

        <div className="prose max-w-none flex flex-col gap-8">
          {[
            {
              title: "1. Aceptación de los Términos",
              text: "Al acceder y utilizar el sitio web de Vivenal SRL (vivenalsrl.vercel.app), usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestro sitio.",
            },
            {
              title: "2. Servicios",
              text: "Vivenal SRL ofrece servicios de fabricación e instalación de vidrios, ventanas y estructuras de aluminio en la República Dominicana. Los precios, disponibilidad y especificaciones de los productos están sujetos a cambios sin previo aviso.",
            },
            {
              title: "3. Uso del Sitio",
              text: "Usted se compromete a utilizar este sitio únicamente para fines lícitos y de manera que no infrinja los derechos de terceros. Queda prohibido cualquier uso del sitio que pueda dañar, deshabilitar o sobrecargar nuestros servidores.",
            },
            {
              title: "4. Propiedad Intelectual",
              text: "Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos y diseños, es propiedad de Vivenal SRL y está protegido por las leyes de propiedad intelectual de la República Dominicana. Queda prohibida su reproducción sin autorización expresa.",
            },
            {
              title: "5. Limitación de Responsabilidad",
              text: "Vivenal SRL no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de este sitio web o de sus servicios.",
            },
            {
              title: "6. Modificaciones",
              text: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.",
            },
            {
              title: "7. Contacto",
              text: "Para cualquier consulta sobre estos términos, puede contactarnos en vivenalsrl@gmail.com o llamarnos al +1 (849) 883-3125.",
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