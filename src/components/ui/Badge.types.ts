export type BadgeVariant = 'default' | 'active' | 'learning' | 'planned';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}