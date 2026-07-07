/**
 * Fondo tipo "Aurora Waves" (MotionSites): manchas de luz difusas que
 * derivan lentamente detrás del contenido. CSS puro, así que es gratis
 * en rendimiento y funciona igual de bien en móviles.
 */
export default function AuroraBackground({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="aurora-blob left-[-15%] top-[-25%] bg-juma-orange/20" />
      <span className="aurora-blob right-[-10%] top-[20%] bg-juma-indigo/20 [animation-delay:-6s]" />
      <span className="aurora-blob left-[25%] bottom-[-30%] bg-juma-red/15 [animation-delay:-12s]" />
    </div>
  );
}
