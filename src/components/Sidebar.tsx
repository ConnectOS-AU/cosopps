"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, UserCircle } from "lucide-react";
import { dashboard, departments } from "@/lib/nav-config";

export default function Sidebar() {
  const pathname = usePathname();
  const activeDepartmentSlug = pathname.split("/")[1] ?? "";
  const [openSlug, setOpenSlug] = useState<string | null>(activeDepartmentSlug || null);

  // Sidebar persists across client-side navigations, so re-sync the expanded
  // section whenever the active department changes (e.g. via back/forward).
  const [syncedSlug, setSyncedSlug] = useState(activeDepartmentSlug);
  if (activeDepartmentSlug !== syncedSlug) {
    setSyncedSlug(activeDepartmentSlug);
    setOpenSlug(activeDepartmentSlug || null);
  }

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col bg-cosops-charcoal text-white">
      <div className="flex items-center gap-2 px-5 py-5">
        <span className="text-2xl font-bold text-cosops-gold">COS</span>
        <span className="text-2xl font-bold text-white">ops</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <Link
          href="/"
          className={`mb-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            pathname === "/"
              ? "bg-cosops-gold/15 text-cosops-gold"
              : "text-white/85 hover:bg-white/5 hover:text-white"
          }`}
        >
          <dashboard.icon size={18} strokeWidth={2} />
          {dashboard.label}
        </Link>

        <div className="my-2 border-t border-white/10" />

        <ul className="flex flex-col gap-0.5">
          {departments.map((department) => {
            const isOpen = openSlug === department.slug;
            const isActiveDepartment = activeDepartmentSlug === department.slug;
            const Icon = department.icon;

            return (
              <li key={department.slug}>
                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : department.slug)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActiveDepartment
                      ? "bg-cosops-gold/15 text-cosops-gold"
                      : "text-white/85 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                  <span className="flex-1">{department.label}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-4">
                    {department.submenus.map((submenu) => {
                      const href = `/${department.slug}/${submenu.slug}`;
                      const isActive = pathname === href;
                      return (
                        <li key={submenu.slug}>
                          <Link
                            href={href}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-cosops-gold/15 text-cosops-gold"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {submenu.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-2 border-t border-white/10 px-5 py-4 text-sm text-white/70">
        <UserCircle size={20} />
        <span>Signed in via Microsoft (coming soon)</span>
      </div>
    </aside>
  );
}
