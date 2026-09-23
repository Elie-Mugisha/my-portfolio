import { ProjectsPageProps } from "./ProjectsPage.types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function ProjectsPage({ projects }: ProjectsPageProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active-development':
        return <Badge variant="active">In Active Development</Badge>
      case 'completed':
        return <Badge variant="default">Completed</Badge>
      case 'planned':
      default:
        return <Badge variant="planned">Planned / Roadmap</Badge>
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg-px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <span>Back to Portfolio Overview</span>
        </Link>

        <div className="space-y-2 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-sky-400">
            <FolderGit2 className="w-6 h-6" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Engineering Projects Archive
            </h1>
          </div>
          <p className="text-sm text-zinc-400 max-2-2xl">
            A comprehensive overview of backend services, full-stack applications, and systems projects built across software fundamentals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(project => (
            <Card key={project.id} className="flex flex-col justify-between space-y-6">
              <div className="spac-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h2>
                  {getStatusBadge(project.status)}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded text-xs text-zinc-300 font-mono"
                    >
                      {tech}
                    </span>
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
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
