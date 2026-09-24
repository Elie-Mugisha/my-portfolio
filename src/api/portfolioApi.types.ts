import { PortfolioData, Profile, Skill, Project, TimelineEvent, NowItem } from "@/types/portfolio";

export interface ApiResponse<T> {
  data: T;
  isFallback: boolean;
}

export interface PortfolioApiClient {
  getPortfolioData(): Promise<ApiResponse<PortfolioData>>
  getProfile(): Promise<ApiResponse<Profile>>
  getSkills(): Promise<ApiResponse<Skill[]>>
  getProjects(): Promise<ApiResponse<Project[]>>
  getTimeline(): Promise<ApiResponse<TimelineEvent[]>>
  getNow(): Promise<ApiResponse<NowItem[]>>
}