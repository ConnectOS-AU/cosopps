import PageHeader from "@/components/PageHeader";
import ContentPanel from "@/components/ContentPanel";
import { myApps } from "@/lib/nav-config";

export default function MyAppsPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Dashboard", href: "/" }, { label: myApps.label }]} title={myApps.label} />
      <ContentPanel submenu={myApps} />
    </>
  );
}
