import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHeader({ crumbs, title }: { crumbs: Crumb[]; title: string }) {
  return (
    <header className="border-b border-cosops-border bg-white px-8 py-5">
      <nav className="mb-1 flex items-center gap-1.5 text-xs text-foreground/50">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} />}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-cosops-gold">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
    </header>
  );
}
