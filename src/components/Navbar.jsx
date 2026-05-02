import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/vivenal-image-logo-removebg-preview.png"
            alt="Vivenal SRL"
            className="h-12 w-auto"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 relative group ${
                active === l.href ? "text-red-700" : "text-gray-700 hover:text-red-700"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-red-700 transition-all duration-300 ${
                  active === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="bg-red-700 hover:bg-red-800 text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Presupuesto
          </button>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-left py-3 text-base font-semibold uppercase tracking-wider border-b border-gray-100 transition-colors ${
                active === l.href ? "text-red-700" : "text-gray-700"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-3 bg-red-700 text-white font-bold uppercase tracking-wider py-3 text-center"
          >
            Solicitar Presupuesto
          </button>
        </nav>
      </div>
    </header>
  );
}
