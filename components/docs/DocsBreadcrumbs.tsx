import Link from "next/link";
import { docsItems } from "./navigation";

export function DocsBreadcrumbs({ slug }: { slug: string }) {
  const item = docsItems.find((entry) => entry.slug === slug);

  if (!item) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/docs" className="transition-colors hover:text-gungnir-blue">
            Docs
          </Link>
        </li>
        <li aria-hidden="true" className="text-foreground/25">/</li>
        <li>{item.group}</li>
        <li aria-hidden="true" className="text-foreground/25">/</li>
        <li aria-current="page" className="text-foreground/80">
          {item.label}
        </li>
      </ol>
    </nav>
  );
}
