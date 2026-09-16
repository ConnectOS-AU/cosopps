import Link from "next/link";
import { CompassIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Dashboard", href: "/" }]} title="Page not found" />
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="flex max-w-md flex-col items-center gap-3 rounded-xl border border-dashed border-cosops-border bg-white px-8 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cosops-gold/15 text-cosops-gold">
            <CompassIcon size={22} />
          </div>
          <h2 className="text-base font-semibold text-foreground">We couldn&apos;t find that page</h2>
          <p className="text-sm text-foreground/60">
            The department or link you&apos;re looking for doesn&apos;t exist yet.
          </p>
          <Link href="/" className="mt-1 text-sm font-medium text-cosops-gold hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
