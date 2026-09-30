import Link from "next/link";
import { docsHref, docsItems } from "./navigation";

export function DocsPager({ slug }: { slug: string }) {
  const index = docsItems.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? docsItems[index - 1] : null;
  const next = index >= 0 && index < docsItems.length - 1 ? docsItems[index + 1] : null;

  return (
    <nav
      aria-label="Documentation pagination"
      className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={docsHref(previous.slug)}
          className="group min-h-20 rounded-lg border border-line bg-surface-elevated p-4 transition-colors hover:border-gungnir-blue"
        >
          <span className="block text-xs uppercase tracking-[0.12em] text-foreground/40">
            Previous
          </span>
          <span className="mt-1 block font-medium text-foreground transition-colors group-hover:text-gungnir-blue">
            ← {previous.label}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={docsHref(next.slug)}
          className="group min-h-20 rounded-lg border border-line bg-surface-elevated p-4 transition-colors hover:border-gungnir-blue sm:text-right"
        >
          <span className="block text-xs uppercase tracking-[0.12em] text-foreground/40">
            Next
          </span>
          <span className="mt-1 block font-medium text-foreground transition-colors group-hover:text-gungnir-blue">
            {next.label} →
          </span>
        </Link>
      )}
    </nav>
  );
}
