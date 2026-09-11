import { ExperienceTimelineProps } from "./ExperienceTimeline.types";
import { Briefcase, GraduationCap, Flag, Calendar } from "lucide-react";

export function ExperienceTimeline({ events }: ExperienceTimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
      case 'milestone':
        return <Flag className="w-3.5 h-3.5 text-emerald-400" />
      case 'experience':
      default:
        return <Briefcase className="w-3.5 h-3.5 text-sky-400" />
    }
  };

  return (
    <section className="py-8 border-b border-zinc-800/80">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="w-5 h-5 text-sky-400" />
        <h2 className="text-xl font-bold text-white tracking-light">Timeline & Education</h2>
      </div>

      <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
        {events.map(event => (
          <div key={event.id} className="relative group">
            <div className="absolute -left-6 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-sky-400 transition-colors">
              {getEventIcon(event.type)}
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-white">{event.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-mono bg-zinc-800/60 px-2.5 py-1 rounded">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {event.date}
                </span>
              </div>

              <p className="text-xs font-medium text-sky-400">
                {event.organization}
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}