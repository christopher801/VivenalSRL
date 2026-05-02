const services = [
  {
    icon: "🪟",
    title: "Vidrios",
    description:
      "Vidrios templados, laminados, espejos y todo tipo de cristal para interiores y exteriores.",
    tags: ["Templado", "Laminado", "Mamparas", "Espejos"],
  },
  {
    icon: "🚪",
    title: "Ventanas",
    description:
      "Ventanas de aluminio, personalizadas según las necesidades de cada cliente.",
    tags: [ "P-92", "P-65", "P-40", "Tradicional", "Ect..."],
  },
  {
    icon: "🏗️",
    title: "Aluminio",
    description:
      "Estructuras de aluminio, puertas corredizas, y fachadas de alta calidad.",
    tags: ["Cancelería", "Fachadas", "Puertas"],
  },
  {
    icon: "🔧",
    title: "Instalación & Mantenimiento",
    description:
      "Servicio de instalación profesional y mantenimiento continuo de todas nuestras estructuras y productos.",
    tags: ["Instalación", "Reparación", "Mantenimiento" ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-700 text-xs font-bold uppercase tracking-widest mb-4">
            — Lo que hacemos
          </span>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800 }}
            className="uppercase text-gray-900"
          >
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-red-700 mx-auto mt-4" />
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales en vidrio y aluminio para todo tipo de proyectos
            residenciales y comerciales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 p-7 hover:border-red-700 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-default"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
                className="text-gray-900 uppercase mb-3"
              >
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wide text-red-700 bg-red-50 group-hover:bg-red-700 group-hover:text-white px-2 py-1 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
