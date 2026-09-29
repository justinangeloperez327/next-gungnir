"use client";

import { useMemo, useState } from "react";
import { docsNavigation } from "./navigation";

const allItems = docsNavigation.flatMap((group) =>
  group.items.map(([label, id]) => ({ label, id, group: group.title })),
);

export function DocsSearch() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return [];
    }

    return allItems
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
        id="docs-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search documentation"
        autoComplete="off"
        className="h-10 w-full rounded-md border border-gungnir-silver bg-gungnir-white px-3 text-sm text-ink outline-none transition focus:border-gungnir-blue focus:ring-2 focus:ring-gungnir-blue/20"
      />

      {query.trim() && (
        <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-md border border-gungnir-silver bg-gungnir-white shadow-[0_12px_30px_rgba(11,13,16,0.12)]">
          {matches.length > 0 ? (
            <ul aria-label="Documentation search results" className="py-1">
              {matches.map((item) => (
                <li key={item.id}>
                  <a
                    href={"#" + item.id}
                    onClick={() => setQuery("")}
                    className="block px-3 py-2.5 text-sm text-ink transition-colors hover:bg-gungnir-silver/25 hover:text-gungnir-blue"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-2 text-xs text-ink/50">{item.group}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3 text-sm text-ink/55">No matching section.</p>
          )}
        </div>
      )}
    </div>
  );
}
