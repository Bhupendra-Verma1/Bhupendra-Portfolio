import { Project, Experience, Metric, SkillCategory, Certification, Education } from './types';
import cloudShare from "../assets/images/cloud_share.png";
import apium from "../assets/images/apium4.png";
import profile from "../assets/images/Profile_Image.png";
import resume from "../assets/images/Bhupendra-verma-resume.pdf";


export const PERSONAL_INFO = {
  name: "Bhupendra Verma",
  title: "Full-Stack Java Developer",
  headline: "Full-Stack Java Developer",
  heroDescription: "I build robust, scalable applications with a focus on high-performance APIs, secure architectures, and delivering reliable production code.",
  email: "bhupendrav945@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhupendra-verma-dev",
  github: "https://github.com/bhupendra-verma1",
  location: "Agra, India",
  image: profile,
  resume: resume,
  aboutParagraphs: [
    "I'm a Full-Stack Java Developer focused on building reliable and scalable web applications using Java, Spring Boot, React, REST APIs, databases, and secure application architectures. My professional experience includes backend development, API optimization, database performance tuning, authentication and authorization, and full-stack application development.",
    "I enjoy solving practical engineering problems, improving application performance, building secure APIs, and connecting robust backend systems with modern frontend interfaces."
  ],
  coreFocus: [
    {
      id: "backend",
      title: "Backend Development",
      description: "Building backend applications using Java and Spring Boot.",
      icon: "Layers"
    },
    {
      id: "api",
      title: "API Development",
      description: "Designing and optimizing RESTful APIs.",
      icon: "Cpu"
    },
    {
      id: "security",
      title: "Security",
      description: "Authentication and role-based authorization using Spring Security and JWT.",
      icon: "ShieldCheck"
    },
    {
      id: "database",
      title: "Database Optimization",
      description: "Optimizing SQL Server, PostgreSQL, MySQL, and MongoDB-based applications where applicable.",
      icon: "Database"
    },
    {
      id: "fullstack",
      title: "Full-Stack Integration",
      description: "Connecting Spring Boot backends with React-based frontend applications.",
      icon: "Workflow"
    }
  ]
};

export const ENGINEERING_METRICS: Metric[] = [
  {
    id: "m1",
    value: "90%",
    title: "API Speed Improvement",
    description: "Streamlined API code using Java and Spring Boot."
  },
  {
    id: "m2",
    value: "30%",
    title: "API Response-Time Improvement",
    description: "Reduced API response times through code refactoring and performance tuning."
  },
  {
    id: "m3",
    value: "20%",
    title: "Code Complexity Reduction",
    description: "Reduced code complexity through query refactoring."
  },
  {
    id: "m4",
    value: "20%",
    title: "Query Execution Improvement",
    description: "Reduced average query execution time across critical database operations."
  },
  {
    id: "m5",
    value: "20+",
    title: "REST API Endpoints",
    description: "Developed and worked with 20+ REST API endpoints across projects."
  },
  {
    id: "m6",
    value: "3",
    title: "User Roles",
    description: "Implemented role-based authorization across Super Admin, Admin, and User roles."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "erp-daddy",
    role: "Java Backend Developer",
    company: "ERP Daddy",
    period: "Sept 2025 - Present",
    summary: "Focus on Java/Spring Boot backend, REST APIs, DB optimization, RBAC (Super Admin, Admin, User).",
    tags: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "SQL Server", "REST APIs"],
    keyProjects: [
      {
        name: "Normiqo",
        details: "CAPA, Audits, Work management, Schedulers, Module expiration."
      },
      {
        name: "PAYROLL",
        details: "Employee data/docs, machine attendance, leave workflows, salary slip, overtime, PF/ESIC reports."
      }
    ],
    align: "left"
  },
  {
    id: "atf-labs",
    role: "Software Developer Intern",
    company: "ATF Labs",
    period: "May 2025 - August 2025",
    summary: "React 18+, reusable components (MUI/Bootstrap), REST APIs, SQL Server/PostgreSQL optimization.",
    tags: ["React 18+", "Material UI", "React-Bootstrap", "REST APIs", "SQL Server", "PostgreSQL"],
    align: "right"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "Server",
    variant: "primary",
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA", "REST APIs", "OAuth2", "JWT"]
  },
  {
    title: "Frontend",
    icon: "Layout",
    variant: "neutral",
    skills: ["ReactJS", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    icon: "Database",
    variant: "neutral",
    skills: ["SQL", "SQL Server", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: "Wrench",
    variant: "tools",
    skills: ["Docker", "Git", "GitHub", "Maven", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cloud-share",
    title: "Cloud Share",
    image: cloudShare,
    category: "Full-Stack Web App",
    description: "A secure file sharing application. Frontend: ReactJS, Backend: Spring Boot, DB: MongoDB Atlas, Storage: Supabase, Payments: Razorpay.",
    fullDescription: "An enterprise-grade secure file management and sharing system built with fine-grained access control, encrypted cloud storage, public/private share links with expiry, and integrated payment tiering via Razorpay.",
    keyFeatures: [
      "File upload/sharing",
      "Public/Private access",
      "JWT",
      "Razorpay payments"
    ],
    tags: ["ReactJS", "Spring Boot", "MongoDB Atlas", "Supabase", "Razorpay"],
    architecture: {
      frontend: "ReactJS, Tailwind CSS",
      backend: "Spring Boot 3, Spring Security",
      database: "MongoDB Atlas",
      storage: "Supabase Storage",
      payments: "Razorpay Gateway"
    },
    githubUrl: "https://github.com/Bhupendra-Verma1/Cloud-Share",
    liveDemoUrl: "https://cloud-share-seven.vercel.app",
    previewType: "cloud-share"
  },
  {
    id: "code-editor",
    title: "Code Editor",
    image: apium,
    category: "Developer Tool & Cloud IDE",
    description: "A web-based code editor. Frontend: ReactJS, Tailwind CSS, Monaco Editor. Backend: Spring Boot, JPA. DB: MySQL. Execution: Docker. AI: Gemini AI.",
    fullDescription: "A high-performance in-browser IDE supporting 15+ programming languages, sandboxed code execution in isolated Docker containers, syntax highlighting with Monaco Editor, and real-time AI code completion & explanations powered by Gemini AI.",
    keyFeatures: [
      "15+ languages",
      "Docker execution",
      "AI chat/suggestions"
    ],
    tags: ["ReactJS", "Tailwind CSS", "Monaco Editor", "Spring Boot", "JPA", "MySQL", "Docker", "Gemini AI"],
    architecture: {
      frontend: "ReactJS, Monaco Editor, Tailwind CSS",
      backend: "Spring Boot, Hibernate/JPA",
      database: "MySQL 8.0",
      execution: "Isolated Docker Containers",
      ai: "Google Gemini 2.5 Flash API"
    },
    githubUrl: "https://github.com/Bhupendra-Verma1/Apium",
    liveDemoUrl: "",
    previewType: "code-editor"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c1",
    title: "Master Spring Boot 3 and Spring Framework 6 with Java",
    issuer: "Udemy",
    icon: "udemy",
    year: "2024"
  },
  {
    id: "c2",
    title: "React.js Frontend Certificate",
    issuer: "HackerRank",
    icon: "hackerrank",
    year: "2024"
  },
  {
    id: "c3",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    icon: "freecodecamp",
    year: "2023"
  },
  {
    id: "c4",
    title: "C Programming and Data Structure and Algorithm",
    issuer: "DD Informatics",
    icon: "trophy",
    year: "2023"
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Computer Application",
  institution: "Uttam Institute of Technology and Management Studies",
  period: "August 2022 – June 2025",
  location: "Runakata, Agra",
  details: [
    "Core subjects: Data Structures, Object-Oriented Programming (Java), Database Management Systems, Computer Networks, Software Engineering.",
    "Graduated with strong foundations in software architecture and algorithms."
  ]
};
