export interface Project {
  id: string;
  title: string;
  description: string;
  impactMetrics?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  bentoSpan?: "col-span-1" | "col-span-2" | "col-span-3";
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database & Cloud" | "DevOps & Tools";
  skills: { name: string; proficiency?: string; iconName?: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techUsed: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    bio: string;
    availabilityStatus: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  metrics: { label: string; value: string }[];
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
}
