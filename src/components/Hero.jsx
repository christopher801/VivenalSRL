export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(140,0,0,0.6) 100%), url('/hero.jpg') center/cover no-repeat`,
      }}
    >
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10"
        style={{ background: "repeating-linear-gradient(45deg, #c62828 0, #c62828 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
        style={{ background: "repeating-linear-gradient(45deg, #c62828 0, #c62828 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
      />

      {/* Red accent bar */}
      <div className="absolute left-0 top-1/4 w-1.5 h-40 bg-red-700" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center text-white">
        <div className="anim-in mb-4">
          <span className="inline-block bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
            República Dominicana · Desde 2016
          </span>
        </div>

        <h1
          className="anim-up d1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          Calidad y resistencia
          <br />
          <span className="text-red-500">en vidrios</span> y aluminio
        </h1>

        <p className="anim-up d2 mt-6 mb-10 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          Más de 8 años de experiencia en la fabricación e instalación de vidrios,
          ventanas y estructuras de aluminio para hogares y negocios en toda la
          República Dominicana.
        </p>

        <div className="anim-up d3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            Solicitar Presupuesto
          </button>
          <button
            onClick={() => scrollTo("servicios")}
            className="border-2 border-white/60 hover:border-white text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition-all duration-200 hover:bg-white/10"
          >
            Ver Servicios
          </button>
        </div>

        {/* Stats */}
        <div className="anim-up d4 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { n: "8+", label: "Años de experiencia" },
            { n: "500+", label: "Proyectos realizados" },
            { n: "100%", label: "Satisfacción garantizada" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800 }}
                className="text-red-400"
              >
                {s.n}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
