import { TimelinePageProps } from "./TimelinePage.types";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, GraduationCap, Flag, Calendar } from "lucide-react";

export function TimelinePage({ events }: TimelinePageProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-sky-400" />
      case 'milestone':
        return <Flag className="w-4 h-4 text-emerald-400" />
      case 'experience':
      default:
        return <Briefcase className="w-4 h-4 text-sky-400"/>
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:transition-x-1 transition-transform" />
          <span>Back to Portfolio Overview</span>
        </Link>

        <div className="space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-sky-400">
            <Briefcase className="w-6 h-6" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Career & Education History
            </h1>
          </div>
          <p className="text-sm text-zinc-400 max-w-2xl">
            A complete chronological timeline of technical training, computer science fundamentals, software engineering apprenticeships, and platform architecture milestones.
          </p>
        </div>

        <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
          {events.map(event => (
            <div key={event.id} className="relative group">
              <div className="absolute -left-6 top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-sky-400 transition-colors">
                {getEventIcon(event.type)}
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-6 space-y-3 hover:border-zinc-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-lg font-semibold text-white">
                    {event.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-mono bg-zinc-800/60 px-2.5 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
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
      </div>
    </div>
  )
}