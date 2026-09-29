import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const heroCode = [
  "model User",
  "{",
  "    string name;",
  "    string email;",
  "",
  "    posts()",
  "    {",
  "        return hasMany<Post>();",
  "    }",
  "}",
].join("\n");

const languageCode = [
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

const ormCode = [
  "const users = User::where(\"active\", true)",
  "    .with(\"posts\")",
  "    .orderBy(\"name\")",
  "    .get();",
].join("\n");

const routesCode = [
  "Route::get(\"/users\", UserController::index);",
  "Route::get(\"/users/{id}\", UserController::show);",
  "Route::post(\"/users\", UserController::store);",
].join("\n");

const asyncCode = [
  "async Response index()",
  "{",
  "    const result = await fetchResponse();",
  "",
  "    return result;",
  "}",
].join("\n");

const features = [
  ["Routing", "Map HTTP methods and paths to application handlers."],
  ["Controllers", "Keep request orchestration in focused application classes."],
  ["Models & ORM", "Query and persist application data through model APIs."],
  ["Relationships", "Define related data with conventional model relationships."],
  ["Migrations", "Version database structure through explicit migration plans."],
  ["Validation", "Validate request input with reusable rule declarations."],
  ["Middleware", "Compose request and response behavior around route handlers."],
  ["Views", "Render server-side HTML with escaped template expressions."],
  ["Authentication", "Build identity flows on the framework authentication foundation."],
  ["Authorization", "Express access decisions through application authorization APIs."],
  ["Queues", "Move background work into queued jobs."],
  ["Events", "Decouple application behavior with events and listeners."],
  ["Mail", "Send application mail through framework transport contracts."],
  ["Notifications", "Model user-facing notifications independently from delivery."],
  ["Scheduling", "Define recurring application work through the scheduler."],
  ["Storage", "Work with application files through storage abstractions."],
] as const;

const pipeline = [
  ".gnr source",
  "Lexer",
  "Parser / AST",
  "Generated C++23",
  "Native binary",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-gungnir-white text-ink">
      <SiteHeader />

      <section className="border-b border-gungnir-silver">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-12 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gungnir-blue">
              Gungnir Framework
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
              Modern C++ for expressive web development.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68 sm:text-xl">
              Gungnir is a C++23 web framework and source-language toolchain for
              building structured, high-performance web applications with clear
              application conventions and native C++ interoperability.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="rounded-md bg-gungnir-blue px-5 py-3 text-sm font-semibold text-gungnir-white transition hover:brightness-95"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/justinangeloperez327/gungnir"
                className="rounded-md border border-gungnir-silver bg-gungnir-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-gungnir-blue hover:text-gungnir-blue"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <div className="lg:pl-4">
            <CodeBlock code={heroCode} label="user.gnr" />
          </div>
        </div>
      </section>

      <section className="border-b border-gungnir-silver">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Framework
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Everything needed to build an application.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65">
              Gungnir keeps common server-side capabilities under one coherent
              application model while preserving explicit C++ runtime behavior.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-gungnir-silver sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, description]) => (
              <article
                key={title}
                className="border-b border-r border-gungnir-silver p-6"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block h-2 w-2 rounded-full bg-gungnir-blue"
                />
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gungnir-silver">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
                Gungnir Language
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Application code without framework plumbing.
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/65">
                Gungnir source files use the <code>.gnr</code> extension. The
                frontend parses framework-aware syntax and lowers it into ordinary,
                inspectable C++23 before native compilation.
              </p>
            </div>
            <CodeBlock code={languageCode} label="user_controller.gnr" />
          </div>

          <ol className="mt-12 grid gap-3 sm:grid-cols-5">
            {pipeline.map((step, index) => (
              <li
                key={step}
                className="relative rounded-md border border-gungnir-silver px-4 py-4 text-sm font-medium text-ink"
              >
                <span className="mb-2 block text-xs font-semibold text-gungnir-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-gungnir-silver">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <CodeBlock code={ormCode} label="ORM query" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Models & ORM
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Keep data access expressive and explicit.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/65">
              Models provide query entry points, persistence, hydration, eager
              loading, relationship metadata, timestamps, and soft-delete support.
              Query values stay parameterized at the database boundary.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
              {[
                "Expressive models",
                "Relationships",
                "Eager loading",
                "Migrations",
                "Parameterized queries",
                "Multiple database backends",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gungnir-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-gungnir-silver">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Routing & Controllers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Route requests directly into application code.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/65">
              Routes connect HTTP methods and paths to controller actions. Route
              groups, middleware, named routes, constraints, and fallback handlers
              remain part of the same routing layer.
            </p>
          </div>
          <CodeBlock code={routesCode} label="routes.gnr" />
        </div>
      </section>

      <section className="surface-soft border-b border-gungnir-silver">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Async Runtime
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Async syntax backed by native C++ coroutines.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/65">
              Language-level <code>async</code> and <code>await</code> lower into
              Gungnir task types and C++ coroutine mechanics. Suspension remains
              explicit, and synchronous operations stay synchronous until their
              runtime implementation is genuinely asynchronous.
            </p>
          </div>
          <CodeBlock code={asyncCode} label="Async controller" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Documentation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Start building with Gungnir.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/65">
              Learn the framework from installation through routing, models,
              migrations, async programming, application services, and production
              runtime behavior.
            </p>
            <Link
              href="/docs"
              className="mt-8 inline-flex rounded-md bg-gungnir-blue px-5 py-3 text-sm font-semibold text-gungnir-white transition hover:brightness-95"
            >
              Read the documentation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
