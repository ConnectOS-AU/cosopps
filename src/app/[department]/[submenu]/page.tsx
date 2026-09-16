import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentPanel from "@/components/ContentPanel";
import { findSubmenu } from "@/lib/nav-config";

export default async function SubmenuPage({
  params,
}: {
  params: Promise<{ department: string; submenu: string }>;
}) {
  const { department: departmentSlug, submenu: submenuSlug } = await params;
  const match = findSubmenu(departmentSlug, submenuSlug);
  if (!match) notFound();
  const { department, submenu } = match;

  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Dashboard", href: "/" },
          { label: department.label, href: `/${department.slug}` },
          { label: submenu.label },
        ]}
        title={submenu.label}
      />
      <ContentPanel submenu={submenu} />
    </>
  );
}
