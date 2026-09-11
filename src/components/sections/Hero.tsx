import { HeroProps } from "./Hero.types";
import { Badge } from "../ui/Badge";
import { Github, Linkedin, MapPin } from 'lucide-react';

export function Hero({ profile }: HeroProps) {
  return (
    <section className="py-12 border-b border-zinc-800/80">
      <div className="flex flex-col gap-6">

        {/* Availability Status Badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opcacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <Badge variant="active">Available</Badge>
        </div>

        {/*Name & Title*/}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="text-xl text-sky-400 font-medium flex items-center gap-2">
            {profile.title}
            <span className="text-zinc-600">•</span>
            <span className="text-sm text-zinc-400 font-normal flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {profile.location}
            </span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-zinc-300 max-w-2xl text-base leading-relaxed">{profile.tagline}</p>

        <div className="flex items-center gap-4 pt-2">
          {profile.socialLinks.map((link) => {
            const isGithub = link.platform.toLowerCase() === 'github';
            const isLinkedin = link.platform.toLowerCase() === 'linkedin';
            const Icon = isGithub ? Github : isLinkedin ? Linkedin : null;

            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                {Icon && <Icon className="w-4 h-4 text-zinc-400" />}
                <span>{link.platform}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}