# Juma — Landing Page 🏔️⚡

Landing page moderna, tecnológica y 100% responsiva para **Juma**, desarrollo
web e innovación desde San Salvador de Jujuy.

Creada por **Manuel Santiago Mendoza**.

## 🧰 Stack

- ⚛️ **React 18** + **Vite** (build ultrarrápido, deploy directo en Vercel)
- 🎨 **Tailwind CSS** (mobile-first)
- 🎬 **Framer Motion** (animaciones al hacer scroll)
- 🧊 **React Three Fiber + Drei** (modelo 3D animado en el Hero)
- ✨ **Lucide React** (iconos)

## 🚀 Cómo correrlo

```bash
# 1. Instalar TODAS las dependencias (ya están en package.json)
npm install

# 2. Levantar el servidor de desarrollo
npm run dev      # abre http://localhost:5173

# 3. Compilar para producción
npm run build

# 4. Previsualizar el build
npm run preview
```

> Si querés instalar las librerías extra manualmente:
>
> ```bash
> npm install three @react-three/fiber @react-three/drei framer-motion lucide-react
> npm install -D tailwindcss postcss autoprefixer
> ```

## ☁️ Deploy en Vercel

1. Subí el proyecto a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New Project** → importá el repo.
3. Vercel detecta Vite automáticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click en **Deploy**. ¡Listo! 🎉

## 📁 Estructura

```
JUMA/
├── public/img/        → logo JUMA + imágenes de proyectos
├── src/
│   ├── components/     → Header, Hero, Scene3D, Services, About,
│   │                     Projects, Contact, Footer, WhatsAppFloat
│   ├── siteConfig.js   → datos de contacto y redes (editá acá)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── vite.config.js
```

## ✏️ Personalización rápida

Todos los datos (teléfono, email, redes, textos del menú) están en
[`src/siteConfig.js`](src/siteConfig.js). Cambialos ahí y se actualizan en
toda la página.
