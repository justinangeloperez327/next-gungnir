"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { docsHref, docsItems } from "./navigation";

export function DocsSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return [];
    }

    return docsItems
      .filter(
        (item) =>
          item.label.toLowerCase().includes(normalized) ||
          item.group.toLowerCase().includes(normalized),
      )
      .slice(0, 8);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="docs-search" className="sr-only">
        Search documentation
      </label>
      <input
        ref={inputRef}
        id="docs-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search documentation"
        autoComplete="off"
        className="h-10 w-full rounded-md border border-line bg-surface-elevated px-3 pr-16 text-sm text-foreground outline-none transition focus:border-gungnir-blue focus:ring-2 focus:ring-gungnir-blue/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-line px-1.5 py-0.5 text-[10px] text-foreground/40 sm:block"
      >
        Ctrl K
      </span>

      {query.trim() && (
        <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-md border border-line bg-surface-elevated shadow-2xl">
          {matches.length > 0 ? (
            <ul aria-label="Documentation search results" className="py-1">
              {matches.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={docsHref(item.slug)}
                    onClick={() => setQuery("")}
                    className="block px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-muted"
                  >
                    <span className="block font-medium">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted">{item.group}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3 text-sm text-muted">No matching page.</p>
          )}
        </div>
      )}
    </div>
  );
}
