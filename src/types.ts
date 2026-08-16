export interface Project {
  id: string;
  title: string;
  image: string,
  category: string;
  description: string;
  fullDescription?: string;
  keyFeatures: string[];
  tags: string[];
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    storage?: string;
    payments?: string;
    execution?: string;
    ai?: string;
  };
  githubUrl: string;
  liveDemoUrl?: string;
  previewType: 'cloud-share' | 'code-editor';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  tags: string[];
  keyProjects?: {
    name: string;
    details: string;
  }[];
  align: 'left' | 'right';
}

export interface Metric {
  id: string;
  value: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'neutral' | 'tools';
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: 'udemy' | 'hackerrank' | 'freecodecamp' | 'trophy';
  link?: string;
  year?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}
