import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { departments } from "@/lib/nav-config";

export default function DashboardPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Dashboard" }]} title="Welcome to COSops" />
      <div className="flex-1 overflow-y-auto p-8">
        <p className="mb-6 max-w-2xl text-sm text-foreground/60">
          Your single entry point to every ConnectOS department&apos;s tools, links and resources.
          Pick a department to see what&apos;s inside.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((department) => {
            const Icon = department.icon;
            return (
              <Link
                key={department.slug}
                href={`/${department.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-cosops-border bg-white p-5 transition-colors hover:border-cosops-gold"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cosops-charcoal text-cosops-gold">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground group-hover:text-cosops-gold">
                    {department.label}
                  </h2>
                  <p className="mt-0.5 text-xs text-foreground/50">
                    {department.submenus.length} links
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
