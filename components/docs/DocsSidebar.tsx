"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsHref, docsNavigation } from "./navigation";

function NavigationList() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation navigation" className="space-y-8">
      {docsNavigation.map((group) => (
        <section key={group.title}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            {group.title}
          </h2>
          <ul className="space-y-1">
            {group.items.map(([label, slug]) => {
              const href = docsHref(slug);
              const active = pathname === href;

              return (
                <li key={slug}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "block rounded-md bg-gungnir-blue/10 px-3 py-1.5 text-sm font-medium leading-6 text-gungnir-blue"
                        : "block rounded-md px-3 py-1.5 text-sm leading-6 text-foreground/65 transition-colors hover:bg-surface-muted hover:text-gungnir-blue"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside className="hidden border-r border-line bg-surface-elevated px-4 py-8 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
        <NavigationList />
      </div>
    </aside>
  );
}

export function MobileDocsNavigation() {
  return (
    <details className="rounded-lg border border-line bg-surface-elevated p-4 lg:hidden">
      <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">
        Browse documentation
      </summary>
      <div className="mt-5 border-t border-line pt-5">
        <NavigationList />
      </div>
    </details>
  );
}
