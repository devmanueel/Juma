import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Rocket, Search, Cog } from "lucide-react";
import TiltCard from "./TiltCard";
import AuroraBackground from "./AuroraBackground";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Sitios y aplicaciones a medida con React, Next.js y las últimas tecnologías. Rápidos, seguros y escalables.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsivo",
    desc: "Tu marca impecable en cualquier dispositivo. Experiencia mobile-first cuidada al detalle.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces modernas, intuitivas y con identidad propia que enamoran a tus usuarios.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Optimizamos velocidad y posicionamiento para que te encuentren y se queden.",
  },
  {
    icon: Rocket,
    title: "Despliegue & Hosting",
    desc: "Puesta en producción en Vercel y dominios profesionales, listo para crecer.",
  },
  {
    icon: Cog,
    title: "Mantenimiento",
    desc: "Acompañamiento continuo, mejoras y soporte para que tu proyecto nunca se detenga.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-5 overflow-hidden">
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-juma-orange font-semibold text-sm uppercase tracking-widest">
            Lo que hacemos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Soluciones <span className="text-gradient">tecnológicas</span> de
            punta a punta
          </h2>
          <p className="mt-4 text-slate-400">
            Todo lo que tu marca necesita para destacar en el mundo digital, en
            un solo lugar.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="group glass rounded-2xl p-7 h-full hover:border-juma-orange/40 transition-colors duration-300">
                <div className="h-14 w-14 rounded-xl bg-juma-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="text-white" size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
