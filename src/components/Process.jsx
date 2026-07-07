import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    n: "01",
    title: "Charlamos tu idea",
    desc: "Nos contás qué necesitás. Escuchamos, entendemos tu negocio y definimos objetivos claros. Sin compromiso.",
  },
  {
    icon: PenTool,
    n: "02",
    title: "Diseñamos la propuesta",
    desc: "Te presentamos una propuesta visual y un presupuesto transparente. Iteramos hasta que te enamores del resultado.",
  },
  {
    icon: Code2,
    n: "03",
    title: "Desarrollamos",
    desc: "Construimos tu proyecto con tecnología moderna, manteniéndote al tanto del avance en cada etapa.",
  },
  {
    icon: Rocket,
    n: "04",
    title: "Lanzamos y acompañamos",
    desc: "Publicamos tu proyecto y seguimos a tu lado con soporte y mejoras para que siga creciendo.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 px-5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-juma-orange font-semibold text-sm uppercase tracking-widest">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Un proceso <span className="text-gradient">simple y claro</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Trabajamos ordenados y de cerca, para que sepas exactamente qué pasa
            en cada paso.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6"
            >
              <span className="font-display text-5xl font-bold text-white/10">
                {s.n}
              </span>
              <div className="-mt-6 h-12 w-12 rounded-xl bg-juma-gradient flex items-center justify-center shadow-glow">
                <s.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {s.desc}
              </p>

              {/* Conector entre pasos (desktop) */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-juma-orange to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
