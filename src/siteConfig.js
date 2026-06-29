// Datos centralizados de la marca Juma.
// Cambiá cualquier valor acá y se actualiza en toda la página.

export const site = {
  brand: "Juma",
  owner: "Manuel Santiago Mendoza",
  city: "San Salvador de Jujuy, Argentina",
  logo: "/img/JUMA.jpeg",

  // Contacto
  phone: "5493884605498", // formato internacional sin "+" para wa.me
  phoneDisplay: "+54 9 388 460 5498",
  email: "santiagomendoza.sm64@gmail.com",
  whatsappMessage:
    "¡Hola Juma! 👋 Vi tu landing y quiero más información sobre sus servicios.",

  // Redes sociales
  social: {
    facebook:
      "https://www.facebook.com/manuelsantiago.mendoza.56?locale=es_LA",
    instagram:
      "https://www.instagram.com/manuelsantiago.mendoza.56?igsh=eDB3N2d3ZTI5c2c2",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

// Helpers para los enlaces de contacto
export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Consulta desde la web de Juma"
)}`;
