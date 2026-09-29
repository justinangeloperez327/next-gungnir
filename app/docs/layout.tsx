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

      <div className="mx-auto grid max-w-[1540px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <DocsSidebar />

        <article className="min-w-0 px-5 py-8 sm:px-8 lg:px-12 lg:py-12 xl:px-16">
          <div className="mx-auto max-w-4xl">
            <MobileDocsNavigation />
            <div className="mt-8 lg:mt-0">{children}</div>
          </div>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
