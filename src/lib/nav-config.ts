import {
  LayoutDashboard,
  Crown,
  Workflow,
  Megaphone,
  TrendingUp,
  Users,
  Wallet,
  Laptop,
  UserPlus,
  Building2,
  Settings2,
  type LucideIcon,
} from "lucide-react";

export type SubmenuItem = {
  slug: string;
  label: string;
  description: string;
  /** When set, the content panel embeds this URL in an iframe. Leave unset for a "coming soon" placeholder. */
  embedUrl?: string;
};

export type Department = {
  slug: string;
  label: string;
  icon: LucideIcon;
  submenus: SubmenuItem[];
};

export const dashboard = {
  slug: "",
  label: "Dashboard",
  icon: LayoutDashboard,
};

/**
 * Placeholder department + submenu structure, named after ConnectOS's actual
 * department folders. Swap labels, icons and embedUrl values as real content
 * and internal tools are ready to link in.
 */
export const departments: Department[] = [
  {
    slug: "leadership",
    label: "Leadership",
    icon: Crown,
    submenus: [
      { slug: "announcements", label: "Announcements", description: "Company-wide updates from leadership." },
      { slug: "org-chart", label: "Org Chart", description: "Company structure and reporting lines." },
      { slug: "strategy", label: "Strategy", description: "Strategic plans and goals." },
    ],
  },
  {
    slug: "dto",
    label: "DTO",
    icon: Workflow,
    submenus: [
      { slug: "projects", label: "Projects", description: "Digital Transformation Office project tracker." },
      { slug: "automations", label: "Automations", description: "Automation catalogue and requests." },
      { slug: "data-analytics", label: "Data & Analytics", description: "Reporting and analytics resources." },
    ],
  },
  {
    slug: "marketing",
    label: "Marketing",
    icon: Megaphone,
    submenus: [
      {
        slug: "coscomms",
        label: "COScomms",
        description:
          "ConnectOS's internal email campaign and survey platform, built by the Marketing team.",
        embedUrl: "https://coscomms.connectos.co",
      },
      { slug: "brand-assets", label: "Brand Assets", description: "Logos, templates and brand guidelines." },
      { slug: "campaign-calendar", label: "Campaign Calendar", description: "Upcoming campaigns and key dates." },
    ],
  },
  {
    slug: "sales",
    label: "Sales",
    icon: TrendingUp,
    submenus: [
      { slug: "crm", label: "CRM", description: "Customer relationship management tools." },
      { slug: "pipeline", label: "Pipeline", description: "Sales pipeline and forecasts." },
      { slug: "collateral", label: "Collateral", description: "Sales decks and proposal templates." },
    ],
  },
  {
    slug: "hr",
    label: "HR",
    icon: Users,
    submenus: [
      { slug: "policies", label: "Policies", description: "HR policies and employee handbook." },
      { slug: "onboarding", label: "Onboarding", description: "New hire onboarding resources." },
      { slug: "benefits", label: "Benefits", description: "Employee benefits and leave." },
    ],
  },
  {
    slug: "finance",
    label: "Finance",
    icon: Wallet,
    submenus: [
      { slug: "billing", label: "Billing", description: "Client billing and invoicing." },
      { slug: "payroll", label: "Payroll", description: "Payroll schedules and forms." },
      { slug: "reports", label: "Reports", description: "Financial reports and dashboards." },
    ],
  },
  {
    slug: "it",
    label: "IT",
    icon: Laptop,
    submenus: [
      { slug: "helpdesk", label: "Helpdesk", description: "Submit and track IT support tickets." },
      { slug: "systems-status", label: "Systems Status", description: "Status of internal systems and outages." },
      { slug: "access-requests", label: "Access Requests", description: "Request access to systems and tools." },
    ],
  },
  {
    slug: "recruitment",
    label: "Recruitment",
    icon: UserPlus,
    submenus: [
      { slug: "open-roles", label: "Open Roles", description: "Current job openings and requisitions." },
      { slug: "candidate-pipeline", label: "Candidate Pipeline", description: "Track candidates through the hiring process." },
      { slug: "referrals", label: "Employee Referrals", description: "Refer a candidate and track referral bonuses." },
    ],
  },
  {
    slug: "facilities",
    label: "Facilities",
    icon: Building2,
    submenus: [
      { slug: "office-info", label: "Office Info", description: "Office locations, hours and amenities." },
      { slug: "bookings", label: "Room Bookings", description: "Book meeting rooms and desks." },
      { slug: "maintenance", label: "Maintenance Requests", description: "Report facilities issues." },
    ],
  },
  {
    slug: "operations",
    label: "Operations",
    icon: Settings2,
    submenus: [
      { slug: "processes", label: "Processes", description: "Standard operating procedures." },
      { slug: "sops", label: "SOPs", description: "Step-by-step operational guides." },
      { slug: "vendor-management", label: "Vendor Management", description: "Vendor contacts and contracts." },
    ],
  },
];

export function findDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function findSubmenu(
  departmentSlug: string,
  submenuSlug: string,
): { department: Department; submenu: SubmenuItem } | undefined {
  const department = findDepartment(departmentSlug);
  const submenu = department?.submenus.find((s) => s.slug === submenuSlug);
  if (!department || !submenu) return undefined;
  return { department, submenu };
}
