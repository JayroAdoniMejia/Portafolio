export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  role: string;
  highlights: string[];
  category: "Proyecto Personal" | "Proyecto Académico";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "med-management",
    title: "FUNDESUR - Sistema de Gestión Médica",
    description: "Plataforma web PWA para la gestión de medicamentos y atención médica en centros de salud.",
    longDescription: "Sistema de gestión médica e inventario farmacéutico diseñado para operar incluso sin conexión constante a internet. Cuenta con procesamiento asíncrono para reportes pesados y sincronización automática de datos.",
    tags: ["Python", "Django", "React", "Material UI", "PostgreSQL", "Celery", "Redis", "PWA"],
    role: "Desarrollador Full Stack",
    highlights: [
      "Arquitectura híbrida offline-first basada en PWA.",
      "Tareas en segundo plano con Redis y Celery para reportes.",
      "Sistema completo de auditoría y roles de usuario.",
    ],
    category: "Proyecto Académico",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "biblioteck",
    title: "Biblioteck - Módulo de Lectura & Gestión",
    description: "Plataforma de gestión de lecturas, planes de estudio y catálogo interactivo de documentos.",
    longDescription: "Arquitectura moderna orientada a servicios para la organización de bibliotecas digitales y planes de lectura estructurados.",
    tags: ["Java", "Spring Boot", "Vue.js", "MongoDB", "TypeScript"],
    role: "Backend & DB Architect",
    highlights: [
      "Persistencia de datos en MongoDB para flexibilidad de esquemas.",
      "APIs RESTful seguras construidas en Spring Boot.",
      "Interfaz reactiva e interactiva desarrollada en Vue.js.",
    ],
    category: "Proyecto Académico",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "vidsocial-mobile",
    title: "VidSocial - App Móvil Multiplataforma",
    description: "Aplicación móvil para interacción social y módulos de contenido especializado.",
    longDescription: "Desarrollo enfocado en rendimiento de UI/UX, consumo eficiente de APIs y gestión de estado local.",
    tags: ["React Native", "TypeScript", "Expo", "Tailwind CSS"],
    role: "Mobile Developer",
    highlights: [
      "Navegación nativa fluida y diseño adaptativo.",
      "Manejo de estado global y caché de peticiones.",
    ],
    category: "Proyecto Personal",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "music-store",
    title: "Music Store & Admin Dashboard",
    description: "E-commerce musical moderno con tienda para clientes y panel administrativo con analíticas de ventas e inventario.",
    longDescription: "Sistema completo de comercio electrónico desarrollado con Next.js 14/15. Incluye carrito de compras, pasarela de pagos con Stripe Checkout y Webhooks, panel de administración con gráficos estadísticos y gestión de base de datos relacional con Prisma ORM.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Stripe API"],
    role: "Full Stack Developer",
    highlights: [
      "Pasarela de pagos en línea e integración con Stripe Webhooks.",
      "Dashboard administrativo con gráficas de ingresos y ventas (Recharts).",
      "Gestión de inventario con operaciones CRUD completas.",
      "Protección de rutas de administración con Middleware.",
    ],
    category: "Proyecto Personal",
    githubUrl: "https://github.com/JayroAdoniMejia/Music-Store",
    featured: true,
  },
  {
    id: "registro-simulacion",
    title: "Sistema de Registro y Simulación",
    description: "Sistema web modular desarrollado en PHP para el registro, autenticación y gestión de datos.",
    longDescription: "Aplicación web enfocada en arquitectura modular estructurada en PHP. Integra control de acceso mediante flujo de autenticación, panel principal de control (dashboard), configuración de base de datos y organización limpia por módulos.",
    tags: ["PHP", "JavaScript", "MySQL", "HTML5/CSS3"],
    role: "Backend & Full Stack Developer",
    highlights: [
      "Arquitectura modular para separación de responsabilidades.",
      "Sistema de autenticación y gestión de sesiones de usuario.",
      "Dashboard de control centralizado.",
      "Conexión y gestión estructurada de base de datos.",
    ],
    category: "Proyecto Académico",
    githubUrl: "https://github.com/JayroAdoniMejia/registro-simulaci-n",
    featured: false,
  },
];