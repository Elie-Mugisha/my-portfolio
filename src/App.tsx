import { portfolioData } from "@/data/portfolio";
import { Hero } from "@/components/sections/Hero";
import { NowWidget } from "@/components/sections/NowWidget";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/ContactSection";

export function App() {
  const { profile, skills, projects, timeline, now } = portfolioData;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pb-16">
        <Hero profile={profile} />
        <NowWidget items={now} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceTimeline events={timeline} />
        <ContactSection profile={profile} />

        <footer className="pt-8 text-center text-xs text-zinc-500 border-t border-zinc-900">
          <p>©{new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}