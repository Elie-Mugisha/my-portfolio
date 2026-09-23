import { BadgeProps } from "./Badge.types";

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300',
    active: 'bg-emerald-100/80 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-400',
    learning: 'bg-sky-100/80 dark:bg-sky-950/60 border-sky-300 dark:border-sky-800/60 text-sky-800 dark:text-sky-400',
    planned: 'bg-amber-100/80 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800/60 text-amber-800 dark:text-amber-400',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]}`}
    >
      { children }
    </span>
  );
}