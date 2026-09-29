import { docsNavigation } from "./navigation";

function NavigationList() {
  return (
    <nav aria-label="Documentation navigation" className="space-y-8">
      {docsNavigation.map((group) => (
        <section key={group.title}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            {group.title}
          </h2>
          <ul className="space-y-2">
            {group.items.map(([label, id]) => (
              <li key={id}>
                <a
                  href={"#" + id}
                  className="block text-sm leading-6 text-ink/65 transition-colors hover:text-gungnir-blue"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside className="hidden border-r border-gungnir-silver bg-gungnir-white px-6 py-10 lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <NavigationList />
      </div>
    </aside>
  );
}

export function MobileDocsNavigation() {
  return (
    <details className="rounded-lg border border-gungnir-silver bg-gungnir-white p-4 lg:hidden">
      <summary className="cursor-pointer list-none text-sm font-semibold text-ink">
        Browse documentation
      </summary>
      <div className="mt-5 border-t border-gungnir-silver pt-5">
        <NavigationList />
      </div>
    </details>
  );
}
