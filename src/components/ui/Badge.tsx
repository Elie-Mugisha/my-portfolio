import { BadgeProps } from "./Badge.types";

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-zinc-900 border-zinc-800 text-zinc-300',
    active: 'bg-emerald-950/60 border-emerald-800/60 text-emerald-400',
    learning: 'bg-sky-950/60 border-amber-800/60 text-amber-400',
    planned: 'bg-amber-950/60 border-amber-800/60 text-amber-400',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]}`}
    >
      { children }
    </span>
  );
}