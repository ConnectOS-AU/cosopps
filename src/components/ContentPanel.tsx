import { Clock3, ExternalLink } from "lucide-react";
import type { SubmenuItem } from "@/lib/nav-config";

export default function ContentPanel({ submenu }: { submenu: SubmenuItem }) {
  if (submenu.embedUrl) {
    return (
      <div className="flex-1 p-6">
        <iframe
          src={submenu.embedUrl}
          title={submenu.label}
          className="h-full w-full rounded-xl border border-cosops-border bg-white"
        />
      </div>
    );
  }

  if (submenu.externalUrl) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="flex max-w-md flex-col items-center gap-3 rounded-xl border border-cosops-border bg-white px-8 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cosops-gold/15 text-cosops-gold">
            <ExternalLink size={22} />
          </div>
          <h2 className="text-base font-semibold text-foreground">{submenu.label}</h2>
          <p className="text-sm text-foreground/60">{submenu.description}</p>
          <a
            href={submenu.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-lg bg-cosops-charcoal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cosops-charcoal-dark"
          >
            Open {submenu.label}
            <ExternalLink size={14} />
          </a>
          <p className="text-xs text-foreground/40">
            Opens in a new tab — Microsoft doesn&apos;t allow this page to be embedded directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="flex max-w-md flex-col items-center gap-3 rounded-xl border border-dashed border-cosops-border bg-white px-8 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cosops-gold/15 text-cosops-gold">
          <Clock3 size={22} />
        </div>
        <h2 className="text-base font-semibold text-foreground">{submenu.label}</h2>
        <p className="text-sm text-foreground/60">{submenu.description}</p>
        <p className="text-xs text-foreground/40">
          Content coming soon. Set <code className="rounded bg-black/5 px-1 py-0.5">embedUrl</code> in{" "}
          <code className="rounded bg-black/5 px-1 py-0.5">nav-config.ts</code> to embed this tool here.
        </p>
      </div>
    </div>
  );
}
