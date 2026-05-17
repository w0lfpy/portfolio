# Portfolio Académico con Astro

Portfolio web académico construido con [Astro](https://astro.build/), centrado en investigación, matemáticas, machine learning, software engineering y quantitative finance. El sitio está planteado como una presencia personal rigurosa y estructurada, con una estética institucional y una organización clara por áreas de estudio, proyectos y trayectoria profesional.

## Objetivo del proyecto

Este repositorio sirve como base del portfolio personal de **José Suárez Ares**, con un enfoque orientado a:

- presentar una identidad académica y técnica sólida;
- documentar intereses de investigación y líneas de estudio;
- mostrar proyectos universitarios y trabajos técnicos;
- centralizar CV, publicaciones, papers y vías de contacto;
- construir una presencia web mantenible, rápida y fácil de extender.

## Stack tecnológico

- `Astro 6`
- `TypeScript`
- `Tailwind CSS 4` mediante `@tailwindcss/vite`
- `MDX` con `@astrojs/mdx`
- `remark-math` + `rehype-katex` para notación matemática
- `lucide-astro` para iconografía

## Características principales

- Arquitectura ligera y rápida basada en Astro.
- Enfoque académico e institucional en contenido y diseño.
- Navegación por secciones temáticas del perfil.
- Renderizado de fórmulas matemáticas con KaTeX.
- Organización modular con `layouts`, `components` y `pages`.
- CV descargable en español e inglés.
- Espacio preparado para papers, working papers y publicaciones.

## Secciones del sitio

Actualmente el portfolio incluye las siguientes rutas principales:

- `/`:
  portada del perfil con resumen de enfoque académico y técnico.
- `/research`:
  áreas de investigación, publicaciones seleccionadas y working papers.
- `/mathematics`:
  fundamentos matemáticos y bibliografía clave.
- `/quant-finance`:
  recorrido estructurado por asset pricing, portfolio theory, derivatives, risk management y research programme.
- `/projects`:
  proyectos universitarios y técnicos.
- `/cv`:
  currículum académico y profesional, competencias, certificaciones y experiencia.
- `/contact`:
  información de contacto y colaboración.

## Estructura del proyecto

```text
/
├── public/
│   ├── cv/
│   ├── images/
│   └── papers/
├── src/
│   ├── components/
│   │   ├── article/
│   │   ├── cards/
│   │   ├── cv/
│   │   ├── layout/
│   │   ├── quant/
│   │   └── ui/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Requisitos

- `Node.js >= 22.12.0`
- `npm`

La versión mínima de Node está definida en `package.json`.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Por defecto, Astro levanta el entorno de desarrollo en `http://localhost:4321`.

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/`.

## Vista previa del build

```bash
npm run preview
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run astro
```

## Personalización de contenido

La mayor parte del contenido del portfolio está definida directamente en los archivos de `src/pages/` y en componentes reutilizables dentro de `src/components/`.

Puntos clave de edición:

- `src/pages/index.astro`:
  propuesta principal del portfolio y líneas de foco.
- `src/pages/research.astro`:
  investigación, papers y publicaciones.
- `src/pages/mathematics.astro`:
  formación matemática y libros de referencia.
- `src/pages/quant-finance.astro`:
  programa de estudio en finanzas cuantitativas.
- `src/pages/projects.astro`:
  proyectos técnicos y académicos.
- `src/pages/cv.astro`:
  CV, experiencia, certificaciones y competencias.
- `src/pages/contact.astro`:
  canales de contacto y disponibilidad.

## Assets y documentos

- Los CV en PDF se almacenan en `public/cv/`.
- Los papers y preprints se almacenan en `public/papers/`.
- Las imágenes estáticas se almacenan en `public/images/`.

Todo lo que esté dentro de `public/` se sirve como recurso estático.

## Sistema visual

El proyecto utiliza una identidad visual sobria y académica:

- tipografía serif para títulos y tono editorial;
- tipografía sans para legibilidad en navegación y bloques técnicos;
- paleta clara con azules institucionales;
- componentes reutilizables para tarjetas, tablas, secciones y bloques cuantitativos.

La base visual global está definida en `src/styles/global.css`.

## Soporte matemático y MDX

El proyecto está preparado para contenido técnico con notación matemática:

- `remark-math` procesa expresiones matemáticas en Markdown/MDX;
- `rehype-katex` renderiza las fórmulas en HTML;
- `katex` aporta el estilo visual del contenido matemático.

La configuración se encuentra en `astro.config.mjs`.

## Estado actual

El portfolio ya cuenta con una base funcional y coherente para uso académico, pero está pensado para seguir creciendo con:

- nuevas publicaciones y preprints;
- proyectos de investigación cuantitativa;
- notas técnicas más extensas;
- integración futura de contenido MDX;
- mejoras de SEO, metadata social y despliegue.

## Posibles mejoras futuras

- migrar parte del contenido estático a colecciones o archivos MDX;
- añadir SEO avanzado por página;
- incorporar una sección de blog o research notes;
- automatizar listado de papers/publicaciones;
- incluir analítica, sitemap y RSS si el proyecto evoluciona hacia publicación frecuente.

## Autor

**José Suárez Ares**  
GitHub: [w0lfpy](https://github.com/w0lfpy)  
LinkedIn: [jose-suarez-ares](https://www.linkedin.com/in/jose-suarez-ares/)

## Licencia

Este repositorio incluye un archivo [`LICENSE`](./LICENSE) con una licencia propietaria para el material original aquí contenido.

En términos prácticos:

- el repositorio puede ser visible públicamente;
- la web puede ser consultada por cualquier persona;
- pero el código, diseño, textos, assets y documentos académicos del repositorio no son de libre reutilización;
- los PDFs, preprints y materiales de research que se suban a este repositorio quedan cubiertos por esa licencia salvo indicación expresa en contrario.

Importante: los repositorios externos, librerías de terceros o materiales simplemente enlazados desde la web no quedan automáticamente cubiertos por esta licencia; cada recurso externo conserva sus propios términos.
