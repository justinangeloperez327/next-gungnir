import Link from "next/link";
import { CodeBlock } from "./CodeBlock";
import { docsItems, docsHref } from "./navigation";
import type { DocPageData } from "./content";

export function DocPage({
  slug,
  page,
}: {
  slug: string;
  page: DocPageData;
}) {
  const index = docsItems.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? docsItems[index - 1] : null;
  const next = index >= 0 && index < docsItems.length - 1 ? docsItems[index + 1] : null;

  return (
    <>
      <header className="border-b border-line pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
          Gungnir Documentation
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/65">
          {page.description}
        </p>
      </header>

      <div className="py-10 text-[15px] leading-7 text-foreground/70">
        <div className="space-y-5">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {page.bullets && (
          <ul className="mt-7 list-disc space-y-2 pl-6">
            {page.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {page.code && (
          <div className="mt-8">
            <CodeBlock
              code={page.code}
              label={page.codeLabel}
              terminal={page.terminal}
            />
          </div>
        )}
      </div>

      <nav
        aria-label="Documentation pagination"
        className="grid gap-4 border-t border-line py-10 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={docsHref(previous.slug)}
            className="rounded-lg border border-line bg-surface-elevated p-4 transition-colors hover:border-gungnir-blue"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-foreground/45">
              Previous
            </span>
            <span className="mt-1 block font-medium text-foreground">
              {previous.label}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={docsHref(next.slug)}
            className="rounded-lg border border-line bg-surface-elevated p-4 text-left transition-colors hover:border-gungnir-blue sm:text-right"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-foreground/45">
              Next
            </span>
            <span className="mt-1 block font-medium text-foreground">
              {next.label}
            </span>
          </Link>
        )}
      </nav>
    </>
  );
}
