import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import Scene3D from "./Scene3D";
import { whatsappLink } from "../siteConfig";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-juma-radial" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-juma-orange/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-juma-indigo/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl w-full px-5 grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-juma-sun"
          >
            <Sparkles size={14} />
            Tecnología con identidad jujeña
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white"
          >
            Transformamos ideas en{" "}
            <span className="text-gradient">experiencias digitales</span> que
            impulsan tu marca.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-slate-300 max-w-xl"
          >
            En <strong className="text-white">Juma</strong> creamos sitios web,
            aplicaciones y soluciones tecnológicas modernas, rápidas y a medida.
            Innovación de vanguardia hecha por jóvenes apasionados.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Empezar mi proyecto <ArrowRight size={18} />
            </a>
            <a href="#proyectos" className="btn-ghost">
              Ver proyectos
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <MapPin size={16} className="text-juma-orange" />
            Operamos desde San Salvador de Jujuy, Argentina 🇦🇷
          </motion.div>
        </motion.div>

        {/* Animación 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[360px] sm:h-[460px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-[2rem]">
            <Scene3D />
          </div>
          <p className="absolute bottom-2 inset-x-0 text-center text-xs text-slate-500">
            ✋ Arrastrá para girar el modelo 3D
          </p>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-6 rounded-full border border-white/20 flex justify-center p-1">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-juma-orange"
          />
        </span>
      </div>
    </section>
  );
}
