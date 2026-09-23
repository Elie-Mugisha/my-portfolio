import { CardProps } from "./Card.types";

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  const baseStyles = 'p-6 rounded-xl border transition-all duration-200';
  const themeStyles = 'bg-[var(--bg-card)] border-[var(--border-card)] text-[var(--text-primary)]';
  const hoverStyles = hoverEffect ? 'hover:border-sky-500/50 hover:shadow-sm' : '';

  return (
    <div className={`${baseStyles} ${themeStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}