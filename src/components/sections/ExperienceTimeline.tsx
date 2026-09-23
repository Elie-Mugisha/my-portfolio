import { ExperienceTimelineProps } from "./ExperienceTimeline.types";
import { Briefcase, GraduationCap, Flag, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ExperienceTimeline({ events }: ExperienceTimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
      case 'milestone':
        return <Flag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
      case 'experience':
      default:
        return <Briefcase className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
    }
  };

  return (
    <section className="py-8 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="flex items-center justify-beween mb-8">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white tracking-light">Timeline & Education</h2>
        </div>

        <Link
          to="/timeline"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors group"
        >
          <span>Explore Timeline</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
        {events.map(event => (
          <div key={event.id} className="relative group">
            <div className="absolute -left-6 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-colors">
              {getEventIcon(event.type)}
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-5 space-y-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{event.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 font-mono bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded">
                  <Calendar className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                  {event.date}
                </span>
              </div>

              <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                {event.organization}
              </p>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}