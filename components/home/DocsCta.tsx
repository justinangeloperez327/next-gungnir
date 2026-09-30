import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function DocsCta() {
  return (
    <section>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gungnir-blue sm:text-sm">
            Documentation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            Start building with Gungnir.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Learn the framework through focused guides for installation, routing,
            controllers, models, validation, views, security, application
            services, testing, and deployment.
          </p>
          <Link
            href="/docs"
            className="mt-7 inline-flex min-h-11 items-center rounded-md bg-button-primary px-5 text-sm font-semibold text-button-primary-text transition-colors hover:bg-button-primary-hover"
          >
            Read the documentation
          </Link>
        </div>
      </Container>
    </section>
  );
}
