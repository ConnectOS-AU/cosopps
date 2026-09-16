import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { findDepartment } from "@/lib/nav-config";

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: departmentSlug } = await params;
  const department = findDepartment(departmentSlug);
  if (!department) notFound();

  return (
    <>
      <PageHeader crumbs={[{ label: "Dashboard", href: "/" }, { label: department.label }]} title={department.label} />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {department.submenus.map((submenu) => (
            <Link
              key={submenu.slug}
              href={`/${department.slug}/${submenu.slug}`}
              className="group flex flex-col gap-2 rounded-xl border border-cosops-border bg-white p-5 transition-colors hover:border-cosops-gold"
            >
              <h2 className="text-sm font-semibold text-foreground group-hover:text-cosops-gold">
                {submenu.label}
              </h2>
              <p className="text-xs text-foreground/50">{submenu.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
