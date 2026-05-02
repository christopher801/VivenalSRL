import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const info = [
  { icon: "📍", label: "Dirección", value: "Calle Moca #218, Villas Agrícolas, Santo Domingo", link: null },
  { icon: "📞", label: "Teléfono / WhatsApp", value: "+1 (849) 883-3125", link: "tel:+18498833125" },
  { icon: "✉️", label: "Email", value: "vivenalsrl@gmail.com", link: "mailto:vivenalsrl@gmail.com" },
];

const socials = [
  { icon: "F", label: "Facebook", href: "https://www.facebook.com/profile.php?id=100070009849810", color: "#1877f2" },
  { icon: "IG", label: "Instagram", href: "https://www.instagram.com/vivenalsrl", color: "#e1306c" },
  { icon: "WA", label: "WhatsApp", href: "https://wa.me/18498833125", color: "#25d366" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Por favor ingresa tu nombre.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Ingresa un correo válido.";
    if (!form.message.trim()) e.message = "Por favor escribe tu mensaje.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setFirebaseError("");
    try {
      await addDoc(collection(db, "mensajes"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        leido: false,
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setFirebaseError("Hubo un error al enviar. Intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block text-red-700 text-xs font-bold uppercase tracking-widest mb-4">— Hablemos</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800 }} className="uppercase text-gray-900">
            Contáctenos
          </h2>
          <div className="w-16 h-1 bg-red-700 mx-auto mt-4" />
          <p className="mt-5 text-gray-500 max-w-xl mx-auto">Solicite un presupuesto sin compromiso. Respondemos en menos de 24 horas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="bg-gray-900 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ background: "repeating-linear-gradient(45deg, #c62828 0, #c62828 1px, transparent 0, transparent 50%)", backgroundSize: "15px 15px" }} />
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.6rem" }} className="uppercase mb-8">Información de Contacto</h3>
            <div className="flex flex-col gap-6 mb-10">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">{item.label}</div>
                    {item.link
                      ? <a href={item.link} className="text-white/80 hover:text-white transition-colors text-sm">{item.value}</a>
                      : <span className="text-white/80 text-sm">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Redes Sociales</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-white font-bold text-xs border border-white/20 hover:-translate-y-1 transition-all duration-200"
                    style={{ background: s.color }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-700" />
          </div>

          {/* Form */}
          <div className="bg-white p-10 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
                <div className="text-5xl">✅</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem" }} className="uppercase text-gray-900">¡Mensaje Enviado!</h3>
                <p className="text-gray-500">Gracias por contactarnos. Le responderemos pronto.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-sm text-red-700 font-bold uppercase tracking-wider underline">Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <input type="text" placeholder="Nombre completo *" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3 border text-sm outline-none transition-colors duration-200 focus:border-red-700 bg-gray-50 ${errors.name ? "border-red-500" : "border-gray-200"}`} />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder="Correo electrónico *" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3 border text-sm outline-none transition-colors duration-200 focus:border-red-700 bg-gray-50 ${errors.email ? "border-red-500" : "border-gray-200"}`} />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea placeholder="Su mensaje *" rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 border text-sm outline-none transition-colors duration-200 focus:border-red-700 bg-gray-50 resize-none ${errors.message ? "border-red-500" : "border-gray-200"}`} />
                  {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                </div>
                {firebaseError && <p className="text-red-600 text-sm text-center">{firebaseError}</p>}
                <button type="submit" disabled={loading}
                  className="bg-red-700 hover:bg-red-800 disabled:bg-red-400 text-white font-bold uppercase tracking-widest py-4 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2">
                  {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</> : "Enviar Mensaje →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}