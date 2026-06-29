import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "../siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/30 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={site.logo}
            alt="Logo de Juma"
            className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/15 shadow-glow transition-transform group-hover:scale-105"
          />
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            JUMA
          </span>
        </a>

        {/* Menú centrado (desktop) */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-juma-gradient after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <a href="#contacto" className="hidden md:inline-flex btn-primary !px-6 !py-2.5 text-sm">
          Hablemos
        </a>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass mt-2 mx-4 rounded-2xl"
          >
            <ul className="flex flex-col p-4 gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Hablemos
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
