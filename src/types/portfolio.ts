/**
 * Domain Models & Strict Contracts for Personal Portfolio & CMS Platform
 */

export type SkillCategory = 'languages' | 'frontend' | 'backend' | 'tools' | 'cloud';

export type SkillLevel = 'active' | 'learning';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
}

export type ProjectStatus = 'completed' | 'active-development' | 'planned';

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export type TimelineEventType = 'education' | 'experience' | 'milestone';

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: TimelineEventType;
}

export type NowCategory = 'building' | 'learning' | 'exploring';

export interface NowItem {
  id: string;
  category: NowCategory;
  content: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bioSummary: string;
  location: string;
  avatarUrl?: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
