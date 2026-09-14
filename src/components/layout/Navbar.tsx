import { NavbarProps, NavLink } from "./Navbar.types";
import { Code2 } from "lucide-react";

export function Navbar({ name }: NavbarProps) {
  const navLinks: NavLink[] = [
    { label: 'Now', href: '#now' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sky-400 group-hover:border-sky-500/50 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          {/*<span className="text-sm font-semibold text-white tracking-tight group-hover:text-sky-400 transition-colors">
            {name}
          </span>*/}
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}