import { motion } from "framer-motion";
import { ExternalLink, Dumbbell } from "lucide-react";

// Proyecto destacado
const featured = {
  img: "/img/optimus-cai.png",
  title: "Optimus — Gestión Integral",
  tag: "Software a medida",
  client: "Gimnasio Optimus · Club Atlético Independiente (CAI), Jujuy",
  desc: "Plataforma de gestión integral que digitaliza por completo la operación del gimnasio: administración de socios, control de asistencias, caja, ventas, membresías y fichaje de instructores. Incluye un módulo de reportes financieros con métricas en tiempo real y exportación a PDF y Excel para una toma de decisiones más inteligente.",
  stack: ["Gestión de socios", "Reportes financieros", "Control de caja", "Asistencias"],
};

const projects = [
  {
    img: "/img/proyecto1.png",
    title: "DevTech Podcast",
    tag: "Landing Page",
    desc: "Sitio promocional para un podcast de tecnología, con un diseño dinámico y llamados a la acción que invitan a escuchar y suscribirse.",
  },
  {
    img: "/img/proyecto2.png",
    title: "Portfolio Profesional",
    tag: "Portfolio",
    desc: "Portfolio interactivo full-stack con secciones animadas y una identidad visual única que destaca la trayectoria del cliente.",
  },
  {
    img: "/img/proyecto3.jpeg",
    title: "Facultad de Ingeniería — UNJu",
    tag: "Web Institucional",
    desc: "Plataforma informativa de carreras universitarias con navegación clara, buscador integrado y una arquitectura pensada para crecer.",
  },
  {
    img: "/img/proyecto4.jpg",
    title: "Aplicación Web a Medida",
    tag: "Desarrollo",
    desc: "Desarrollo de una solución web construida desde cero según las necesidades específicas del cliente, con foco en rendimiento.",
  },
  {
    img: "/img/proyecto5.jpg",
    title: "Experiencia Responsiva",
    tag: "UI/UX",
    desc: "Interfaz moderna y 100% adaptable, diseñada para ofrecer una experiencia impecable en cualquier dispositivo.",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24 px-5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-juma-orange font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Proyectos que <span className="text-gradient">generan impacto</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Soluciones reales desarrolladas por Juma, desde software de gestión
            hasta experiencias web a medida.
          </p>
        </motion.div>

        {/* Proyecto destacado */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl ring-1 ring-white/10 bg-juma-panel group"
        >
          <div className="relative overflow-hidden min-h-[260px] lg:min-h-[420px]">
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-juma-panel/80 lg:to-juma-panel" />
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-juma-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
              <Dumbbell size={14} /> Proyecto destacado
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
              {featured.title}
            </h3>
            <p className="mt-1 text-sm text-juma-sun">{featured.client}</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              {featured.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span
                  key={t}
                  className="glass rounded-full px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Resto de proyectos */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-juma-panel"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-juma-darker via-transparent to-transparent" />
                <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-juma-sun">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="shrink-0 text-slate-500 group-hover:text-juma-orange transition-colors"
                  />
                </div>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
