import { ProjectsSectionProps } from "./ProjectsSection.types";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FolderGit2, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active-development':
        return <Badge variant="active">In Active Development</Badge>;
      case 'completed':
        return <Badge variant="default">Completed</Badge>;
      case 'planned':
      default:
        return <Badge variant="planned">Planned / Roadmap</Badge>
    }
  };

  return (
    <section className="py-8 border-b border-zinc-800/80">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-sky-400" />
          <h2 className="text-xl font-bold text-white tracking-light">Projects</h2>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
        >
          <span>View Full Archive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(project => (
          <Card key={project.id} className="flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
                {getStatusBadge(project.status)}
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-0.5 bg-zinc-800/60 border border-zinc-700/50 rounded text-xs text-zinc-300 font-mono">{tech}</span>
                ))}
              </div>
            </div>

            {project.githubUrl && (
              <div className="pt-4 border-t border-zinc-800/60 flex items-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>View source Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}