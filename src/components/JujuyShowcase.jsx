import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

/**
 * Interludio cinemático: video aéreo de las Serranías del Hornocal al
 * atardecer, a pantalla completa, con el manifiesto de la marca encima.
 * El video solo se reproduce cuando está en pantalla (IntersectionObserver)
 * y si el usuario no pidió menos movimiento; en ese caso queda la foto.
 */
export default function JujuyShowcase() {
  const videoRef = useRef(null);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section
      aria-label="Paisaje de Jujuy"
      className="grain relative h-[72vh] min-h-[480px] overflow-hidden"
    >
      {reduceMotion ? (
        <img
          src="/img/jujuy-hornocal.jpg"
          alt="Serranías del Hornocal, Quebrada de Humahuaca"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster="/img/jujuy-hornocal.jpg"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/hornocal-sunset.mp4" type="video/mp4" />
        </video>
      )}

      {/* Degradados para fundirse con el resto de la página */}
      <div className="absolute inset-0 bg-gradient-to-b from-juma-dark via-transparent to-juma-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-juma-darker/70 via-transparent to-transparent" />

      {/* Manifiesto */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-juma-sun font-semibold text-sm uppercase tracking-widest"
        >
          Nuestra tierra, nuestra inspiración
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg"
        >
          El color de estos cerros vive en cada proyecto que creamos.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4 text-xs text-slate-300"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-juma-orange" />
            Serranías del Hornocal · Quebrada de Humahuaca, Jujuy
          </span>
          <span className="text-slate-400">
            Video: Pedro Slinger · Pexels
          </span>
        </motion.div>
      </div>
    </section>
  );
}
