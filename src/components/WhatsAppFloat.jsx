import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../siteConfig";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulso animado */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/40">
        <MessageCircle className="text-white" size={28} />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-juma-panel px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        ¡Escribinos!
      </span>
    </motion.a>
  );
}
