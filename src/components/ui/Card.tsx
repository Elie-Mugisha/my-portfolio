import { CardProps } from "./Card.types";

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  const baseStyles = 'p-6 bg-zinc-900/80 border border-zinc-800/80 rounded-xl transition-all duration-200';
  const hoverStyles = hoverEffect ? 'hover:border-zinc-700 hover:bg-zinc-900' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}