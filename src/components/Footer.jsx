import { Facebook, Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import { site, whatsappLink, mailtoLink } from "../siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-juma-darker">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={site.logo}
                alt="Logo de Juma"
                className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/15"
              />
              <span className="font-display text-2xl font-extrabold text-white">
                JUMA
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Tecnología e innovación con identidad jujeña. Transformamos tus
              ideas en experiencias digitales memorables.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold text-white">Navegación</h4>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-juma-orange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + redes */}
          <div>
            <h4 className="font-semibold text-white">Seguinos</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-juma-indigo/30 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-juma-red/30 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-green-500/30 transition"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={mailtoLink}
                aria-label="Email"
                className="h-10 w-10 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-juma-orange/30 transition"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">{site.phoneDisplay}</p>
            <p className="text-sm text-slate-400 break-all">{site.email}</p>
          </div>
        </div>

        {/* Créditos */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {year} Juma. Todos los derechos reservados.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Hecho con <Heart size={14} className="text-juma-red fill-juma-red" />{" "}
            por{" "}
            <span className="text-gradient font-semibold">{site.owner}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
