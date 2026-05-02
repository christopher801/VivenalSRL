const values = [
  {
    icon: "🏅",
    title: "Calidad",
    desc: "Materiales de primera y acabados perfectos en cada proyecto que emprendemos.",
  },
  {
    icon: "🤝",
    title: "Confianza",
    desc: "Construimos relaciones a largo plazo con nuestros clientes basadas en transparencia.",
  },
  {
    icon: "⭐",
    title: "Experiencia",
    desc: "8 años de conocimiento y especialización respaldan cada trabajo que realizamos.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <div className="relative h-96 lg:h-auto">
            <div className="relative grid grid-cols-2 gap-3 h-96">
              <img
                src="/edificio2.jpg"
                alt="Trabajo en aluminio"
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3">
                <img
                  src="/about-imag.jpg"
                  alt="Fachada vidrio"
                  className="w-full flex-1 object-cover"
                />
                <div className="bg-red-700 flex items-center justify-center p-4 flex-1">
                  <div className="text-center text-white">
                    <div
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}
                    >
                      8+
                    </div>
                    <div className="text-xs uppercase tracking-widest font-bold mt-1">
                      Años de experiencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-red-700 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 -z-10" />
          </div>

          {/* Right: text */}
          <div>
            <span className="inline-block text-red-700 text-xs font-bold uppercase tracking-widest mb-4">
              — Sobre nosotros
            </span>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
              className="uppercase text-gray-900 mb-6"
            >
              Sobre Vivenal SRL
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vivenal SRL se ha consolidado como una empresa líder en el sector de vidrios,
              ventanas y aluminio en la República Dominicana. Nuestro compromiso con la
              calidad y la satisfacción del cliente nos ha permitido crecer y mantener una
              reputación sólida en el mercado.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Contamos con un equipo de profesionales altamente capacitados y utilizamos
              tecnología de vanguardia para ofrecer productos duraderos y soluciones
              innovadoras para cada cliente.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 group">
                  <div className="text-2xl bg-red-50 group-hover:bg-red-700 w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-200">
                    {v.icon}
                  </div>
                  <div>
                    <h3
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                      className="uppercase text-gray-900"
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
