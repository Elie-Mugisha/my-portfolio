import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { NowWidget } from "@/components/sections/NowWidget";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/ContactSection";

export function MainOverview() {
  const { profile, skills, projects, timeline, now } = portfolioData;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <Navbar name={}></Navbar>
    </div>
  )
}