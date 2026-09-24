import { PortfolioData, Profile, Skill, Project, TimelineEvent, NowItem } from "@/types/portfolio";
import { portfolioData as fallbackData } from "@/data/portfolio";
import { ApiResponse, PortfolioApiClient } from "./portfolioApi.types";

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const TIMEOUT_MS = 1000;

async function fetchWithFallback<T>(endpoint: string, fallback: T): Promise<ApiResponse<T>>{
  if (!API_BASE_URL) {
    return {data: fallback, isFallback: true}
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, isFallback: false };
    
  } catch (error) {
    clearTimeout(timeoutId);
    if (import.meta.env.DEV) {
      console.warn(
        `[API Fallback] Endpoint '${endpoint}' unreachable or timed out (${TIMEOUT_MS}ms). Serving offline fallback store.`, error
      );
    }
    return {data: fallback, isFallback: true}
  }
}

export const portfolioApi: PortfolioApiClient = {
  async getPortfolioData(): Promise<ApiResponse<PortfolioData>> {
    return fetchWithFallback<PortfolioData>('/portfolio', fallbackData)
  },
  
  async getProfile(): Promise<ApiResponse<Profile>> {
    return fetchWithFallback<Profile>('/profile', fallbackData.profile)
  },

  async getSkills(): Promise<ApiResponse<Skill[]>> {
    return fetchWithFallback<Skill[]>('/skills', fallbackData.skills);
  },

  async getProjects(): Promise<ApiResponse<Project[]>> {
    return fetchWithFallback<Project[]>('/projects', fallbackData.projects)
  },

  async getTimeline(): Promise<ApiResponse<TimelineEvent[]>> {
    return fetchWithFallback<TimelineEvent[]>('/timeline', fallbackData.timeline)
  },

  async getNow(): Promise<ApiResponse<NowItem[]>> {
    return fetchWithFallback<NowItem[]>('/now', fallbackData.now)
}
}