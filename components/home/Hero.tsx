import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Container } from "@/components/layout/Container";

const code = [
  "Route::get(\"/users\", UserController::index);",
  "",
  "controller UserController",
  "{",
  "    Response index()",
  "    {",
  "        const users = User::all();",
  "",
  "        return view(\"users/index\", {",
  "            \"users\": users",
  "        });",
  "    }",
  "}",
].join("\n");

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gungnir-blue sm:text-sm">
            Gungnir Framework
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
            GUNGNIR is an expressive web framework built in C++.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Build structured web applications with routing, controllers, models,
            validation, middleware, views, authentication, background jobs, and
            common application services.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="inline-flex min-h-11 items-center rounded-md bg-button-primary px-5 text-sm font-semibold text-button-primary-text transition-colors hover:bg-button-primary-hover"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/justinangeloperez327/gungnir"
              className="inline-flex min-h-11 items-center rounded-md border border-line bg-surface-elevated px-5 text-sm font-semibold text-foreground transition-colors hover:border-gungnir-blue hover:text-gungnir-blue"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <CodeBlock code={code} label="routes.gnr" />
        </div>
      </Container>
    </section>
  );
}
