import { SkillsSectionProps } from "./SkillsSection.types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Cpu, Code2, Server, Terminal, Cloud } from "lucide-react";

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [
    { key: 'languages', label: 'Languages & Web Standards', icon: Code2 },
    { key: 'frontend', label: 'Frontend Development', icon: Cpu },
    { key: 'backend', label: 'Backend & Databases', icon: Server },
    { key: 'tools', label: 'Tools & Workstation', icon: Terminal },
    { key: 'cloud', label: 'Cloud & Infrastructure', icon: Cloud },
  ];

  return (
    <section className="py-8 border-b border-zinc-800/80">
      <div className="flex items-center gap-2 mb-6">
        <Cpu className="w-5 h-5 text-sky-400" />
        <h2 className="text-xl font-bold text-white tracking-light">Technical Skills</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map(({ key, label, icon: Icon }) => {
          const categorySkills = skills.filter(skill => skill.category === key);
          if (categorySkills.length === 0) return null;

          return (
            <Card key={key} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800/60">
                <Icon className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">{label}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {categorySkills.map(skill => (
                  <Badge key={skill.id} variant={skill.level === 'active' ? 'default' : 'learning'}>
                    {skill.name}
                    {skill.level === 'learning' && (
                      <span className="ml-1 text-[10px] text-sky-400 font-normal">(Learning)</span>
                    )}
                  </Badge>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}