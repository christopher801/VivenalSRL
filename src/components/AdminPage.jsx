import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Credenciales incorrectas. Intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <img src="/vivenal-image-logo-removebg-preview.png" alt="Vivenal" className="h-14 mx-auto mb-4" onError={(e) => { e.target.style.display = "none"; }} />
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem" }} className="uppercase text-white tracking-wide">
            Vivenal <span className="text-red-500">Admin</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Panel de mensajes</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Correo electrónico</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@vivenal.com" required
                className="w-full bg-gray-800 border border-gray-700 focus:border-red-600 px-4 py-3 text-white text-sm outline-none transition-colors" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required
                className="w-full bg-gray-800 border border-gray-700 focus:border-red-600 px-4 py-3 text-white text-sm outline-none transition-colors" />
            </div>
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button type="submit" disabled={loading}
              className="mt-2 bg-red-700 hover:bg-red-800 disabled:bg-red-900 text-white font-bold uppercase tracking-widest py-3 text-sm transition-all duration-200 flex items-center justify-center gap-2">
              {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Accediendo...</> : "Iniciar Sesión →"}
            </button>
          </form>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors">
            ← Volver al sitio web
          </Link>
        </div>
        <p className="text-center text-gray-600 text-xs mt-3">© {new Date().getFullYear()} Vivenal SRL</p>
      </div>
    </div>
  );
}

function MessageCard({ msg, onMarkRead, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const date = msg.createdAt?.toDate
    ? msg.createdAt.toDate().toLocaleString("es-DO", { dateStyle: "medium", timeStyle: "short" })
    : "—";

  return (
    <div className={`border transition-all duration-200 ${msg.leido ? "bg-white border-gray-200" : "bg-red-50 border-red-200"}`}>
      <div className="flex items-start justify-between gap-4 p-5 border-b border-inherit">
        <div className="flex items-center gap-3 min-w-0">
          {!msg.leido && <span className="shrink-0 w-2 h-2 rounded-full bg-red-600" />}
          <div className="min-w-0">
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem" }} className="text-gray-900 uppercase truncate">{msg.name}</p>
            <a href={`mailto:${msg.email}`} className="text-red-700 text-sm hover:underline">{msg.email}</a>
          </div>
        </div>
        <span className="shrink-0 text-xs text-gray-400 mt-1">{date}</span>
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
      </div>
      <div className="flex items-center gap-3 px-5 pb-5">
        {!msg.leido && (
          <button onClick={() => onMarkRead(msg.id)} className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 border border-gray-300 hover:border-gray-500 px-3 py-1.5 transition-colors">
            ✓ Marcar leído
          </button>
        )}
        <a href={`mailto:${msg.email}?subject=Re: Consulta Vivenal SRL`} className="text-xs font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-800 px-3 py-1.5 transition-colors">
          Responder
        </a>
        <button onClick={() => { if (!confirmDelete) { setConfirmDelete(true); return; } onDelete(msg.id); }}
          className={`ml-auto text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-colors ${confirmDelete ? "text-white bg-red-700 hover:bg-red-900" : "text-gray-400 hover:text-red-600"}`}>
          {confirmDelete ? "¿Confirmar?" : "Eliminar"}
        </button>
        {confirmDelete && (
          <button onClick={() => setConfirmDelete(false)} className="text-xs text-gray-400 hover:text-gray-600">Cancelar</button>
        )}
      </div>
    </div>
  );
}

function Dashboard({ user }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    const q = query(collection(db, "mensajes"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleMarkRead = (id) => updateDoc(doc(db, "mensajes", id), { leido: true });
  const handleDelete = (id) => deleteDoc(doc(db, "mensajes", id));

  const filtered = messages.filter((m) => {
    if (filter === "nuevos") return !m.leido;
    if (filter === "leidos") return m.leido;
    return true;
  });

  const nuevosCount = messages.filter((m) => !m.leido).length;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/vivenal-image-logo-removebg-preview.png" alt="Vivenal" className="h-8 w-auto" onError={(e) => { e.target.style.display = "none"; }} />
             <span className="text-red-500">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs hidden sm:block">{user.email}</span>
            <Link
              to="/"
              className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 transition-colors"
            >
              ← Sitio web
            </Link>
            <button onClick={() => signOut(auth)} className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 transition-colors">
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-10">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total", value: messages.length, color: "border-gray-300" },
            { label: "Nuevos", value: nuevosCount, color: "border-red-500" },
            { label: "Leídos", value: messages.length - nuevosCount, color: "border-green-500" },
          ].map((s) => (
            <div key={s.label} className={`bg-white border-t-4 ${s.color} p-5 text-center`}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem" }} className="text-gray-900">{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          {["todos", "nuevos", "leidos"].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors ${filter === f ? "bg-red-700 text-white" : "bg-white text-gray-500 hover:text-gray-900 border border-gray-200"}`}>
              {f}
              {f === "nuevos" && nuevosCount > 0 && (
                <span className="ml-2 bg-white text-red-700 rounded-full text-xs w-5 h-5 inline-flex items-center justify-center font-bold">{nuevosCount}</span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="w-8 h-8 border-2 border-gray-200 border-t-red-700 rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-sm uppercase tracking-widest font-bold">No hay mensajes</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((msg) => (
              <MessageCard key={msg.id} msg={msg} onMarkRead={handleMarkRead} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => { setUser(u); setChecking(false); });
    return () => unsub();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-gray-700 border-t-red-600 rounded-full animate-spin" />
      </div>
    );
  }

  return user ? <Dashboard user={user} /> : <LoginForm />;
}