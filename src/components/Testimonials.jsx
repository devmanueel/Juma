import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import AuroraBackground from "./AuroraBackground";

// Reemplazá estos testimonios por reseñas reales de tus clientes.
const testimonials = [
  {
    quote:
      "Juma digitalizó por completo la gestión del gimnasio. Pasamos de los papeles a tener todo el control de socios, caja y reportes en un solo sistema. Un antes y un después.",
    name: "Gimnasio Optimus",
    role: "Club Atlético Independiente · Jujuy",
    initials: "OP",
  },
  {
    quote:
      "Profesionales, rápidos y siempre atentos a lo que necesitábamos. El sitio quedó moderno y la atención fue de diez. Súper recomendables.",
    name: "Cliente satisfecho",
    role: "Proyecto web · San Salvador de Jujuy",
    initials: "CS",
  },
  {
    quote:
      "Entendieron mi idea desde el primer día y la llevaron a otro nivel. La comunicación durante todo el proceso fue clarísima.",
    name: "Emprendedor local",
    role: "Landing page · Jujuy",
    initials: "EL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 px-5 overflow-hidden">
      <AuroraBackground className="opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-juma-orange font-semibold text-sm uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-slate-400">
            La confianza se construye con resultados. Estas son algunas voces.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col"
            >
              <Quote className="text-juma-orange" size={28} />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className="text-juma-sun fill-juma-sun"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-300 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <span className="h-11 w-11 rounded-full bg-juma-gradient flex items-center justify-center text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
