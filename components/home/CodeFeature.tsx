import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Container } from "@/components/layout/Container";

export function CodeFeature({
  eyebrow,
  title,
  description,
  code,
  label,
  href,
  linkLabel,
  reverse = false,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  code: string;
  label: string;
  href: string;
  linkLabel: string;
  reverse?: boolean;
  muted?: boolean;
}) {
  const sectionClass = muted
    ? "border-b border-line bg-surface-muted"
    : "border-b border-line";
  const gridClass = reverse
    ? "grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24 lg:[&>*:first-child]:order-2"
    : "grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24";

  return (
    <section className={sectionClass}>
      <Container className={gridClass}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gungnir-blue sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            {description}
          </p>
          <Link
            href={href}
            className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-foreground transition-colors hover:text-gungnir-blue"
          >
            {linkLabel} <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>

        <div className="min-w-0">
          <CodeBlock code={code} label={label} />
        </div>
      </Container>
    </section>
  );
}
