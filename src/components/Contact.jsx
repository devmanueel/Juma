import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { site, whatsappLink, mailtoLink } from "../siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // El formulario arma un mensaje y lo abre por WhatsApp (sin backend).
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Juma! 👋%0A%0ANombre: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/${site.phone}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="relative py-24 px-5 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-juma-orange/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-juma-orange font-semibold text-sm uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            ¿Listo para crear algo{" "}
            <span className="text-gradient">increíble</span>?
          </h2>
          <p className="mt-4 text-slate-400">
            Escribinos por el medio que prefieras. Respondemos rápido. 🚀
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Accesos directos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-green-400/50 hover:-translate-y-1 transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-green-500/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={26} />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400">Chat directo · respuesta inmediata</p>
              </div>
            </a>

            <a
              href={mailtoLink}
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-juma-orange/50 hover:-translate-y-1 transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-juma-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={26} />
              </div>
              <div>
                <p className="font-semibold text-white">Correo electrónico</p>
                <p className="text-sm text-slate-400 break-all">{site.email}</p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-juma-orange" />
                <span className="text-sm">{site.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-juma-orange" />
                <span className="text-sm">{site.city}</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-juma-orange focus:ring-1 focus:ring-juma-orange transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@email.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-juma-orange focus:ring-1 focus:ring-juma-orange transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Contanos sobre tu proyecto..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-juma-orange focus:ring-1 focus:ring-juma-orange transition resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> ¡Abriendo WhatsApp!
                </>
              ) : (
                <>
                  Enviar mensaje <Send size={18} />
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-500">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para mandar.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
