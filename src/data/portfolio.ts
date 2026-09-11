import { Profile, Skill, Project, TimelineEvent, NowItem } from "../types/portfolio";

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  timeline: TimelineEvent[];
  now: NowItem[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Elie Mugisha Iradukunda",
    title: "Software Engineer",
    "tagline": "Software Engineer grounded in core web technologies and fundamental software principles, dedicated to building clean, maintainable applications while progressing toward backend systems and scalable architecture.",
    bioSummary: "Trained through intensive software engineering fundamentals at The Gym Rwanda. Dedicated to writing clean, maintainable code and building toward resilient software and systems.",
    location: "Rwanda",
    socialLinks: [
      { platform: "Github", url: "https://github.com/Mugisha-Elie" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/iradukunda-mugisha-elie-013585361" }
    ]
  },

  skills: [
    { id: "s1", name: "TypeScript", category: "languages", level: "active" },
    { id: "s2", name: "JavaScript (ES6+)", category: "languages", level: "active" },
    { id: "s3", name: "HTML5 / CSS3", category: "languages", level: "active" },
    { id: "s4", name: "SQL", category: "languages", level: "active" },
    { id: "s5", name: "React", category: "frontend", level: "active" },
    { id: "s6", name: "Next.js", category: "frontend", level: "learning" },
    { id: "s7", name: "GSAP", category: "frontend", level: "learning" },
    { id: "s8", name: "Node.js", category: "backend", level: "active" },
    { id: "s9", name: "NestJS", category: "backend", level: "learning" },
    { id: "s10", name: "Java", category: "backend", level: "learning" },
    { id: "s11", name: "Git", category: "tools", level: "active" },
    { id: "s12", name: "Linux (Fedora 44)", category: "tools", level: "active" },
    { id: "s13", name: "Cloud Fundamentals", category: "cloud", level: "learning" }
  ],

  projects: [
    {
      id: "p1",
      title: "Carsharing Backend API",
      slug: "carsharing-backend-api",
      summary: "A backend service engineered with NestJS for car sharing platform operations.",
      description: "A production-oriented backend API built with NestJS and SQL to manage car sharing workflows, user bookings, and vehicle availability.",
      techStack: ["NestJS", "Node.js", "TypeScript", "SQL"],
      status: "active-development",
      githubUrl: "https://github.com/TheGymRwanda/ulk-code-warriors-carsharing-backend",
      isFeatured: true
    },
    {
      id: "p2",
      title: "Developer Portfolio & Architecture Platform",
      slug: "developer-portfolio-platform",
      summary: "An engineering-first personal portfolio showcase built with React and TypeScript.",
      description: "A fast, responsive showcase application powered by strict TypeScript contracts, designed to transition seamlessly to a decoupled NestJS backend.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      status: "active-development",
      githubUrl: "https://github.com/Elie-Mugisha/my-portfolio",
      isFeatured: true
    },
    {
      id: "p3",
      title: "Decoupled Portfolio CMS Service",
      slug: "decoupled-portfolio-cms",
      summary: "Upcoming NestJS + PostgreSQL API microservice for dynamic data management.",
      description: "A dedicated REST API service to replace Phase 1 mock data with persistent PostgreSQL storage, authenticated admin management, and raw SQL queries.",
      techStack: ["NestJS", "PostgreSQL", "TypeScript", "Docker"],
      status: "planned",
      isFeatured: false
    }
  ],

  timeline: [
    {
      id: "t1",
      date: "July 2025 – October 2026",
      title: "Software Engineering Apprentice",
      organization: "The Gym Rwanda",
      description: "Intensive 1+ year technical training focused on computer science fundamentals, full-stack software development, and software engineering discipline.",
      type: "education"
    },
    {
      id: "t2",
      date: "September 2026",
      title: "Portfolio & Systems Architecture Kickoff",
      organization: "Personal Project",
      description: "Initiated multi-phase personal engineering platform, establishing strict domain schemas and Vite/React foundation.",
      type: "milestone"
    }
  ],

  now: [
    {
      id: "n1",
      category: "building",
      content: "Developing the Carsharing Backend API using NestJS and SQL.",
      updatedAt: "2026-09"
    },
    {
      id: "n2",
      category: "building",
      content: "Scaffolding personal portfolio platform with React, TypeScript, and Vite.",
      updatedAt: "2026-09"
    },
    {
      id: "n3",
      category: "learning",
      content: "Exploring Linux Fedora 44 Workstation workflows and researching projects to feature.",
      updatedAt: "2026-09"
    }
  ]
}