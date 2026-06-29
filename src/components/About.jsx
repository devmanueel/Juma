import { motion } from "framer-motion";
import { Mountain, Zap, Heart, Users, MapPin } from "lucide-react";
import { site } from "../siteConfig";

const stats = [
  { icon: Zap, value: "+2 años", label: "de experiencia" },
  { icon: Users, value: "100%", label: "atención personalizada" },
  { icon: Heart, value: "Jujuy", label: "raíces y orgullo" },
];

// Paisajes reales de Jujuy (fotos propias en /public/img).
const cityImages = [
  {
    src: "/img/jujuy-purmamarca.jpg",
    alt: "Cerro de los Siete Colores, Purmamarca",
    place: "Purmamarca",
    className: "row-span-2",
  },
  {
    src: "/img/jujuy-humahuaca.jpg",
    alt: "Monumento a la Independencia y cardones, Humahuaca",
    place: "Humahuaca",
    className: "",
  },
  {
    src: "/img/jujuy-valle.jpg",
    alt: "Valle verde de las Termas de Reyes, Jujuy",
    place: "Termas de Reyes",
    className: "",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 px-5 overflow-hidden">
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-juma-red/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Galería de imágenes con filtro tecnológico */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 grid-rows-2 gap-4 h-[440px]"
        >
          {cityImages.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Filtro tech: degradado + tinte de marca */}
              <div className="absolute inset-0 bg-gradient-to-t from-juma-darker via-juma-dark/30 to-transparent" />
              <div className="absolute inset-0 bg-juma-indigo/10 mix-blend-color" />
              {/* Etiqueta del lugar */}
              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-semibold text-white drop-shadow">
                <MapPin size={13} className="text-juma-orange" />
                {img.place}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-juma-orange font-semibold text-sm uppercase tracking-widest">
            <Mountain size={16} /> Nosotros
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Innovación con el alma del{" "}
            <span className="text-gradient">norte argentino</span>
          </h2>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Juma nace en{" "}
            <strong className="text-white">San Salvador de Jujuy</strong>, donde
            la tradición de la quebrada se encuentra con la tecnología del
            futuro. Como nuestro logo —cerros, sol y circuitos— creemos que la
            innovación más poderosa es la que tiene raíces.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Bajo el liderazgo de{" "}
            <strong className="text-white">{site.owner}</strong>, trabajamos
            cerca de cada cliente, con la energía y la frescura de un equipo
            joven que disfruta crear cosas modernas, divertidas y bien hechas.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <s.icon className="mx-auto text-juma-orange" size={22} />
                <p className="mt-2 font-display text-lg font-bold text-white">
                  {s.value}
                </p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Marca personal */}
          <div className="mt-8 flex items-center gap-3 glass rounded-2xl p-4">
            <div className="h-11 w-11 rounded-full bg-juma-gradient flex items-center justify-center font-display font-bold text-white">
              MM
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Una marca creada por {site.owner}
              </p>
              <p className="text-xs text-slate-400">
                Full-Stack Developer · Fundador de Juma
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
