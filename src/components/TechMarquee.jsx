/**
 * Cinta infinita con las tecnologías que usa Juma.
 * La lista se duplica para que el loop CSS sea continuo y sin saltos.
 */
const techs = [
  "React",
  "Next.js",
  "Three.js",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "Vite",
  "Figma",
  "Vercel",
  "PostgreSQL",
  "WordPress",
  "SEO",
];

export default function TechMarquee() {
  return (
    <section
      aria-label="Tecnologías que usamos"
      className="relative border-y border-white/5 bg-juma-darker/60 py-5 overflow-hidden"
    >
      {/* Difuminado en los bordes para que entre/salga suave */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-juma-dark to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-juma-dark to-transparent z-10" />

      {/* Cada ítem lleva su propio espaciado (pr-10) para que el -50% del
          loop caiga exacto y no se note el empalme */}
      <div className="marquee-track flex w-max items-center">
        {[...techs, ...techs].map((t, i) => (
          <span
            key={t + i}
            aria-hidden={i >= techs.length || undefined}
            className="flex items-center gap-4 pr-10 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-juma-orange/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
