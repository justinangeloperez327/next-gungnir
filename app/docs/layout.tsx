import type { ReactNode } from "react";
import { DocsHeader } from "@/components/docs/DocsHeader";
import {
  DocsSidebar,
  MobileDocsNavigation,
} from "@/components/docs/DocsSidebar";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function DocumentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <DocsHeader />

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[264px_minmax(0,1fr)]">
        <DocsSidebar />

        <div className="min-w-0 px-5 py-6 sm:px-8 lg:px-10 lg:py-10 xl:px-12">
          <MobileDocsNavigation />
          <div className="mt-8 lg:mt-0">{children}</div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
