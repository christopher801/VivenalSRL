import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      {/* Top bar */}
      <div className="border-t-4 border-red-700" />

      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/vivenal-image-logo-removebg-preview.png"
                alt="Vivenal SRL"
                className="h-10 w-auto"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Líderes en vidrios, ventanas y estructuras de aluminio en la
              República Dominicana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
              className="uppercase text-xs tracking-widest text-red-400 mb-5"
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {["Inicio", "Servicios", "Proyectos", "Nosotros", "Contacto"].map((item) => (
                <li key={item}
                  
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
              className="uppercase text-xs tracking-widest text-red-400 mb-5"
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Términos y Condiciones", to: "/terminos" },
                { label: "Política de Privacidad", to: "/privacidad" },
                { label: "Aviso Legal", to: "/aviso-legal" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {year} Vivenal SRL. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Creado por{" "}
            <span className="text-red-500 font-semibold">
              <a href="https://wa.me/18494850059?text=Hola%2C%20me%20interesa%20el%20sitio%20web%20de%20Vivenal%20SRL">
                Christopher
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}