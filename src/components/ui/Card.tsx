import { CardProps } from "./Card.types";

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  const baseStyles = 'p-6 rounded-xl border transition-all duration-200';
  const themeStyles = 'bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-100';
  const hoverStyles = hoverEffect ? 'hover:border-sky-500/50 hover:shadow-sm' : '';

  return (
    <div className={`${baseStyles} ${themeStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}