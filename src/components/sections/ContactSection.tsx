import { ContactSectionProps } from "./ContactSection.types";
import { Card } from "../ui/Card";
import { Mail, Send, MapPin, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">Get In Touch</h2>
      </div>

      <Card className="p-8 space-y-6">
        <div className="max-w-xl space-y-3">
          <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Let's build something together</h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I am actively looking for software engineering opportunities and collaborations. Feel free to reach out directly
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <a href="mailto:iradukunda2k26@gmail.com"
            className="flex items-center gap-3 p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-sky-500/50 transition-all group"
          >
            <div className="p-2.5 bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 rounded-lg text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Direct Email</p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                Send an Email
              </p>
            </div>
            <Send className="w-4 h-4 text-zinc-400 dark:text-zinc-500 ml-auto group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="flex items-center justify-between p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-700/60 rounded-lg text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Base Location</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {profile.socialLinks.map(link => {
                const isGithub = link.platform.toLowerCase() === 'github';
                const isLinkedin = link.platform.toLowerCase() === 'linkedin';

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    title={link.platform}
                  >
                    {isGithub && <FaGithub className="w-5 h-5" />}
                    {isLinkedin && <FaLinkedin className="w-5 h-5 text-sky-600 dark:text-sky-400" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}