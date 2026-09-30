import Link from "next/link";
import { CodeBlock } from "./CodeBlock";
import { DocsBreadcrumbs } from "./DocsBreadcrumbs";
import { DocsPager } from "./DocsPager";
import { DocsToc, type TocItem } from "./DocsToc";
import { docsHref, docsItems } from "./navigation";
import type { DocPageData } from "./content";

export function DocPage({
  slug,
  page,
}: {
  slug: string;
  page: DocPageData;
}) {
  const current = docsItems.find((item) => item.slug === slug);
  const related = current
    ? docsItems.filter(
        (item) => item.group === current.group && item.slug !== current.slug,
      )
    : [];

  const tocItems: TocItem[] = [
    { id: "usage", label: "Usage" },
    ...(page.code ? [{ id: "example", label: "Example" }] : []),
    ...(page.bullets ? [{ id: "conventions", label: "Conventions" }] : []),
    ...(related.length ? [{ id: "related", label: "Related" }] : []),
  ];

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,800px)_200px] xl:gap-12 2xl:gap-16">
      <article className="min-w-0">
        <DocsBreadcrumbs slug={slug} />

        <header className="mt-6 border-b border-line pb-9">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[72ch] text-base leading-8 text-muted sm:text-lg">
            {page.description}
          </p>
        </header>

        <section id="usage" className="scroll-mt-28 py-10">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
            Usage
          </h2>
          <div className="mt-5 max-w-[76ch] space-y-4 text-[15px] leading-7 text-muted sm:text-base">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {page.code && (
          <section id="example" className="scroll-mt-28 border-t border-line py-10">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
              Example
            </h2>
            <div className="mt-6">
              <CodeBlock
                code={page.code}
                label={page.codeLabel}
                terminal={page.terminal}
              />
            </div>
          </section>
        )}

        {page.bullets && (
          <section id="conventions" className="scroll-mt-28 border-t border-line py-10">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
              Conventions
            </h2>
            <ul className="mt-5 max-w-[76ch] space-y-3 text-[15px] leading-7 text-muted sm:text-base">
              {page.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gungnir-blue"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section id="related" className="scroll-mt-28 border-t border-line py-10">
            <h2 className="text-xl font-semibold text-foreground">Related</h2>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={docsHref(item.slug)}
                  className="text-sm font-medium text-muted transition-colors hover:text-gungnir-blue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="pb-10">
          <DocsPager slug={slug} />
        </div>
      </article>

      <DocsToc items={tocItems} />
    </div>
  );
}
