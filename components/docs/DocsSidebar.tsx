"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { docsHref, docsNavigation } from "./navigation";

function NavigationList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation navigation" className="space-y-7">
      {docsNavigation.map((group) => (
        <section key={group.title}>
          <h2 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
            {group.title}
          </h2>
          <ul className="space-y-0.5">
            {group.items.map(([label, slug]) => {
              const href = docsHref(slug);
              const active = pathname === href;

              return (
                <li key={slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "block min-h-9 border-l-2 border-gungnir-blue bg-gungnir-blue/10 py-1.5 pl-3 pr-2 text-sm font-medium leading-6 text-gungnir-blue"
                        : "block min-h-9 border-l-2 border-transparent py-1.5 pl-3 pr-2 text-sm leading-6 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
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
    <aside className="hidden border-r border-line bg-surface-elevated px-4 py-7 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
        <NavigationList />
      </div>
    </aside>
  );
}

export function MobileDocsNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-docs-navigation"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-surface-elevated px-4 text-sm font-semibold text-foreground"
      >
        <span aria-hidden="true">☰</span>
        Browse documentation
      </button>

      {open && (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Close documentation navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/60"
          />
          <aside
            id="mobile-docs-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Documentation navigation"
            className="absolute inset-y-0 left-0 w-[min(88vw,360px)] overflow-y-auto border-r border-line bg-surface-elevated p-5 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <span className="text-sm font-semibold text-foreground">Documentation</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-xl text-foreground"
                aria-label="Close navigation"
              >
                ×
              </button>
            </div>
            <NavigationList onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </div>
  );
}
