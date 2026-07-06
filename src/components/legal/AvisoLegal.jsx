import { Link } from "react-router-dom";

export default function AvisoLegal() {
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
          Aviso Legal
        </h1>
        <div className="w-16 h-1 bg-red-700 mb-8" />
        <p className="text-gray-400 text-sm mb-10">Última actualización: julio 2026</p>

        <div className="flex flex-col gap-8">
          {[
            {
              title: "1. Datos del Titular",
              text: "Razón social: Vivenal SRL. Actividad: Fabricación e instalación de vidrios, ventanas y estructuras de aluminio. Domicilio: Calle Ernesto Gómez #14, Villa juana, Santo Domingo Teléfono: +1 (849) 883-3125. Email: vivenalsrl@gmail.com.",
            },
            {
              title: "2. Objeto",
              text: "El presente aviso legal regula el acceso y uso del sitio web vivenalsrl.vercel.app, titularidad de Vivenal SRL, con el fin de proporcionar información sobre sus productos y servicios.",
            },
            {
              title: "3. Condiciones de Acceso",
              text: "El acceso al sitio web es gratuito. Vivenal SRL se reserva el derecho de modificar, suspender o interrumpir el acceso al sitio en cualquier momento y sin previo aviso.",
            },
            {
              title: "4. Propiedad Intelectual",
              text: "Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, y demás contenidos audiovisuales, son propiedad intelectual de Vivenal SRL o de terceros que han autorizado su uso.",
            },
            {
              title: "5. Responsabilidad",
              text: "Vivenal SRL no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web, incluyendo los producidos en los sistemas informáticos o los causados por la introducción de virus.",
            },
            {
              title: "6. Legislación Aplicable",
              text: "Las relaciones entre Vivenal SRL y los usuarios del sitio web se rigen por la legislación vigente en la República Dominicana, siendo competentes los Tribunales y Juzgados de Santo Domingo para resolver cualquier controversia.",
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