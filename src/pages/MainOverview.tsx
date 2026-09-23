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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100">
      <Navbar name={profile.name} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pb-16">
        <Hero profile={profile} />

        <div id="now">
          <NowWidget items={now} />
        </div>

        <div id="skills">
          <SkillsSection skills={skills} />
        </div>

        <div id="projects">
          <ProjectsSection projects={projects} />
        </div>

        <div id="timeline">
          <ExperienceTimeline events={timeline} />
        </div>

        <div id="contact">
          <ContactSection profile={profile} />
        </div>

        <footer className="pt-8 text-center text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-900">
           <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
