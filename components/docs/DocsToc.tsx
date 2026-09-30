export type TocItem = {
  id: string;
  label: string;
};

export function DocsToc({ items }: { items: TocItem[] }) {
  if (items.length < 2) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 border-l border-line pl-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/50">
          On this page
        </p>
        <nav aria-label="On this page" className="mt-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={"#" + item.id}
                  className="block text-sm leading-6 text-muted transition-colors hover:text-gungnir-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
