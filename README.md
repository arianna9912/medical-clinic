# 🏥 Clínica Vitalis — Medical Landing Page

Landing page moderna y responsive para una clínica médica de servicios de salud. Construida con **Next.js** y **Tailwind CSS**, presenta animaciones fluidas, diseño minimalista y una experiencia visual de alto nivel orientada a la conversión de pacientes.

---

## ✨ Secciones

- **Hero** con fondo cuadriculado, imagen de la doctora y animaciones de entrada.
- **Estadísticas** con contadores animados al hacer scroll.
- **Servicios médicos** 🩺 (Medicina General, Cardiología, Pediatría, Neurología, Traumatología, Oftalmología, Laboratorio Clínico, Urgencias 24/7).
- **Sobre nosotros** (nosotros, por qué elegirnos).
- **Especialistas** con tarjetas animadas.
- **Testimonios** de pacientes.
- **Preguntas frecuentes** (FAQ) con acordeón.
- **Llamada a la acción** para agendar citas.


---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
| :-- | :-- |
| [Next.js 16](https://nextjs.org) | Framework de React con renderizado optimizado y App Router |
| [React 19](https://react.dev) | Biblioteca de interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org) | Superconjunto tipado de JavaScript |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos utility-first y sistema de diseño |
| [shadcn/ui](https://ui.shadcn.com) | Componentes accesibles y personalizables |
| [Motion](https://motion.dev) | Animaciones y transiciones |
| [lucide-react](https://lucide.dev) | Iconografía |
| [Vercel](https://vercel.com) | Plataforma de despliegue y análisis |

---

## 🚀 Cómo instalar y ejecutar

### Requisitos previos

- **Node.js** v20.16 o superior
- **npm**, **yarn** o **pnpm** (gestor de paquetes de tu preferencia)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/arianna9912/medical-clinic.git
cd medical-clinic

# 2. Instalar dependencias
npm install
# o
# yarn install
# o
# pnpm install
```

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. Los cambios en los archivos se recargan automáticamente.

### Build de producción

```bash
npm run build
npm run start
```

### Verificación de tipos

```bash
npx tsc --noEmit
```

---

## 🗂️ Estructura del proyecto

```
medical-clinic/
├── app/                  # Rutas y páginas (App Router)
│   ├── layout.tsx        # Layout raíz y metadatos
│   ├── page.tsx          # Página principal (landing)
│   ├── globals.css       # Paleta de colores y estilos globales
│   └── servicios/        # Páginas de especialidades
├── components/
│   ├── landing/          # Secciones de la landing page
│   └── ui/               # Componentes reutilizables (shadcn)
├── lib/                  # Utilidades
├── public/               # Imágenes, iconos y favicon
└── package.json
```

---

Desarrollado con ❤️ por **arianna9912**
