import Link from "next/link";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const heroCode = [
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

const modelCode = [
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

const asyncCode = [
  "async Response index()",
  "{",
  "    const result = await fetchResponse();",
  "",
  "    return result;",
  "}",
].join("\n");

const features = [
  ["Routing", "Define application routes with clear HTTP method and path conventions."],
  ["Controllers", "Organize request handling into focused application controllers."],
  ["Models & ORM", "Query and persist application data through expressive models."],
  ["Relationships", "Work with related records through model relationships and eager loading."],
  ["Migrations", "Version database changes through repeatable migration files."],
  ["Validation", "Validate incoming data with concise, reusable rules."],
  ["Middleware", "Apply authentication, sessions, security, and request behavior around routes."],
  ["Views", "Render server-side HTML with simple template expressions."],
  ["Authentication", "Build sign-in and user identity flows on framework authentication services."],
  ["Authorization", "Keep permissions and access decisions separate from controllers."],
  ["Queues", "Move background work out of the request cycle."],
  ["Events", "Connect application behavior through events and listeners."],
  ["Mail", "Send application email through configured mail transports."],
  ["Notifications", "Deliver application notifications through reusable notification classes."],
  ["Scheduling", "Run recurring application tasks on a defined schedule."],
  ["Storage", "Store and retrieve application files through a consistent storage API."],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-12 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gungnir-blue">
              Gungnir Framework
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
              An expressive web framework built in C++.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/68 sm:text-xl">
              Gungnir gives C++ developers a structured way to build web
              applications with routing, controllers, models, validation,
              middleware, views, authentication, background jobs, and other
              common application services.
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
                className="rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-gungnir-blue hover:text-gungnir-blue"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <div className="lg:pl-4">
            <CodeBlock code={heroCode} label="A Gungnir application" />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Framework
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Everything needed for a modern web application.
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/65">
              Use familiar framework conventions to keep application code
              organized from the first route through database access,
              background work, and production services.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, description]) => (
              <article
                key={title}
                className="border-b border-r border-line p-6"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block h-2 w-2 rounded-full bg-gungnir-blue"
                />
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Convention First
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Write application code around the problem you are solving.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/65">
              Models, controllers, middleware, migrations, requests, jobs, and
              other application classes follow predictable conventions so the
              project stays easy to navigate as it grows.
            </p>
          </div>
          <CodeBlock code={modelCode} label="user.gnr" />
        </div>
      </section>

      <section className="surface-soft border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
              Async Actions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Use async and await where your application needs them.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/65">
              Controller actions can be asynchronous, keeping network-bound and
              other asynchronous work straightforward in application code.
            </p>
          </div>
          <CodeBlock code={asyncCode} label="Async controller action" />
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
            <p className="mt-5 text-base leading-7 text-foreground/65">
              Learn how to install Gungnir, structure an application, define
              routes and controllers, work with models and migrations, validate
              requests, render views, and configure application services.
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
