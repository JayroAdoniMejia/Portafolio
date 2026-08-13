export interface Certification {
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    status: string;
    details: string;
  }
  
  export const EDUCATION_DATA: Education[] = [
    {
      degree: "Licenciatura en Informática Administrativa",
      institution: "Universidad Nacional Autónoma de Honduras (UNAH)",
      period: "En curso",
      status: "Próximo a egresar",
      details: "Formación en desarrollo de software, gestión de proyectos de TI, redes y administración de bases de datos.",
    },
  ];
  
  export const CERTIFICATIONS_DATA: Certification[] = [
    {
      title: "CCNA: Introduction to Networks (ITN)",
      issuer: "Cisco Networking Academy",
      date: "2025",
      description: "Arquitectura de red, modelos OSI/TCP-IP, direccionamiento IPv4/IPv6, Ethernet y configuración inicial de routers y switches.",
      skills: ["Networking", "Routing & Switching", "IPv4/IPv6", "Cisco Packet Tracer"],
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / Python Institute",
      date: "2025",
      description: "Fundamentos de programación en Python, estructuras de datos, lógica algorítmica y POO.",
      skills: ["Python", "Algoritmos", "Estructuras de Datos"],
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "2026",
      description: "Análisis de datos, transformación de datasets, visualización e interpretación de patrones.",
      skills: ["Data Analytics", "SQL", "Visualización de Datos"],
    },
    {
      title: "Desarrollador PHP",
      issuer: "Capacitación Profesional",
      date: "2025",
      description: "Desarrollo web backend con PHP, integración con MySQL y construcción de aplicaciones dinámicas.",
      skills: ["PHP", "MySQL", "Backend Web"],
    },
    {
      title: "Administrador de Bases de Datos",
      issuer: "Capacitación Profesional",
      date: "2025",
      description: "Diseño, modelado, normalización y administración de sistemas gestores de bases de datos relacionales.",
      skills: ["SQL", "Administración de DB", "Optimización de Consultas"],
    },
    {
      title: "Certificaciones de Competencias Técnicas",
      issuer: "INFOP (Instituto Nacional de Formación Profesional)",
      date: "2025",
      description: "Acreditaciones en módulos técnicos y competencias informáticas aplicadas.",
      skills: ["Sistemas", "Soporte Técnico", "Ofimática Avanzada"],
    },
  ];