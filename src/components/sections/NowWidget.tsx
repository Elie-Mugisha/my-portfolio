import { NowWidgetProps } from "./NowWidget.types";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Clock, Wrench, BookOpen, Compass } from "lucide-react";

export function NowWidget({ items }: NowWidgetProps) {
  const getCategoryMeta = (category: string) => {
    switch (category) {
      case 'building':
        return { label: 'Building', variant: 'active' as const, icon: Wrench };
      case 'learning':
        return { label: 'Learning', variant: 'learning' as const, icon: BookOpen };
      case 'exploring':
        return { label: 'Exploring', variant: 'planned' as const, icon: Compass };
      default:
        return { label: 'Exploring', variant: 'planned' as const, icon: Compass };
    }
  };

  return (
    <section className="py-8 border-b border-zinc-800/80">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-sky-400" />
        <h2 className="text-xl font-bold text-white tracking-tight">What I'm Doing Now</h2>
        <span className="text-xs text-zinc-500 font-mono ml-auto">Updated Sep 2026</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const { label, variant, icon: Icon } = getCategoryMeta(item.category);

          return (
            <Card key={item.id} className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={variant}>{label}</Badge>
                  <Icon className="w-4 h-4 text-zinc-300" />
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}