export interface SkillCategory {
    title: string;
    description: string;
    skills: {
      name: string;
      level: "production" | "knowledge" | "learning";
    }[];
  }
  
  export const SKILLS_DATA: SkillCategory[] = [
    {
      title: "Desarrollo Frontend & Mobile",
      description: "Creación de interfaces interactivas, accesibles y multiplataforma.",
      skills: [
        { name: "TypeScript", level: "production" },
        { name: "Next.js", level: "production" },
        { name: "React / React Native", level: "production" },
        { name: "Tailwind CSS", level: "production" },
        { name: "Vue.js", level: "knowledge" },
        { name: "JavaScript (ES6+)", level: "production" },
      ],
    },
    {
      title: "Desarrollo Backend & APIs",
      description: "Construcción de arquitecturas de servidor y APIs REST seguras.",
      skills: [
        { name: "Node.js", level: "production" },
        { name: "NestJS", level: "production" },
        { name: "Python", level: "knowledge" },
        { name: "Spring Boot (Java)", level: "knowledge" },
        { name: "PHP", level: "knowledge" },
        { name: "JWT & Autenticación", level: "production" },
      ],
    },
    {
      title: "Bases de Datos & Persistencia",
      description: "Modelado, gestión y optimización de almacenamiento de datos.",
      skills: [
        { name: "PostgreSQL", level: "production" },
        { name: "MongoDB", level: "production" },
        { name: "SQLite", level: "production" },
        { name: "Prisma ORM", level: "production" },
        { name: "MySQL", level: "knowledge" },
        { name: "Consultas SQL Avanzadas", level: "production" },
      ],
    },
    {
      title: "Infraestructura, Redes & Seguridad",
      description: "Fundamentos de conectividad, entornos Linux y seguridad.",
      skills: [
        { name: "Git & GitHub", level: "production" },
        { name: "Linux / Terminal", level: "knowledge" },
        { name: "CCNA (Redes)", level: "knowledge" },
        { name: "Fundamentos Pentesting", level: "learning" },
        { name: "Ethical Hacking", level: "learning" },
      ],
    },
  ];
  
  export const LEVEL_LABELS = {
    production: {
      label: "Experiencia Práctica",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      dotClass: "bg-emerald-500",
    },
    knowledge: {
      label: "Conocimiento Aplicable",
      badgeClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      dotClass: "bg-indigo-400",
    },
    learning: {
      label: "En Profundización",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      dotClass: "bg-amber-400",
    },
  };