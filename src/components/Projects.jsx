import { useState } from "react";

const projects = [
  {
    title: "Vidrio Templado",
    desc: "Instalación en centro comercial",
    category: "Vidrio",
    img: "/glass.jpg",
  },
  {
    title: "Estructura de Aluminio",
    desc: "Fachada de edificio corporativo",
    category: "Aluminio",
    img: "/fachada.jpg",
  },
  {
    title: "Puertas de Aluminio",
    desc: "Proyecto residencial premium",
    category: "Aluminio",
    img: "/windows.jpg",
  },
  {
    title: "Mampara de Vidrio",
    desc: "Instalación de Mampara y puerta de baño en proyecto de remodelación ",
    category: "Vidrio",
    img: "/mampara.jpg",
  },
  {
    title: "Cancelería Comercial",
    desc: "Local comercial en zona colonial",
    category: "Aluminio",
    img: "/canceleria.png",
  },
  {
    title: "Espejo Decorativo",
    desc: "Instalación residencial de lujo",
    category: "Vidrio",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
  },
];

const categories = ["Todos", "Vidrio", "Aluminio", ];

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="proyectos" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            — Nuestro trabajo
          </span>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800 }}
            className="uppercase text-white"
          >
            Proyectos Realizados
          </h2>
          <div className="w-16 h-1 bg-red-700 mx-auto mt-4" />
          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Una muestra de nuestro trabajo en vidrio y aluminio a lo largo de la República Dominicana.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-200 ${
                active === cat
                  ? "bg-red-700 text-white"
                  : "border border-gray-600 text-gray-400 hover:border-red-700 hover:text-red-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="relative overflow-hidden cursor-pointer group"
              style={{ height: "280px" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />
              <div
                className={`absolute inset-0 bg-red-900/60 transition-opacity duration-300 ${
                  hovered === i ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                <span className="text-xs font-bold uppercase tracking-widest text-red-300 mb-1 block">
                  {p.category}
                </span>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
                  className="text-white uppercase"
                >
                  {p.title}
                </h3>
                <p
                  className={`text-white/70 text-sm mt-1 transition-all duration-300 ${
                    hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
