import Link from "next/link";
import { CodeFeature } from "@/components/home/CodeFeature";
import { DocsCta } from "@/components/home/DocsCta";
import { FrameworkOverview } from "@/components/home/FrameworkOverview";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const routingCode = [
  "Route::get(\"/users\", UserController::index);",
  "Route::get(\"/users/{id}\", UserController::show);",
  "Route::post(\"/users\", UserController::store);",
  "",
  "controller UserController",
  "{",
  "    Response index()",
  "    {",
  "        return view(\"users/index\", {",
  "            \"users\": User::all()",
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
  "",
  "const users = User::where(\"active\", true)",
  "    .with(\"posts\")",
  "    .orderBy(\"name\")",
  "    .get();",
].join("\n");

const asyncCode = [
  "async Response index()",
  "{",
  "    const result = await fetchResponse();",
  "",
  "    return result;",
  "}",
].join("\n");

const essentials = [
  {
    title: "Validation",
    description:
      "Keep request rules close to application input and reuse larger rule sets when actions share them.",
    href: "/docs/validation",
  },
  {
    title: "Middleware",
    description:
      "Apply sessions, authentication, security, limits, and shared request behavior consistently.",
    href: "/docs/middleware",
  },
  {
    title: "Views",
    description:
      "Render server-side HTML with concise templates and escaped interpolation by default.",
    href: "/docs/views",
  },
] as const;

const services = [
  ["Cache", "/docs/cache"],
  ["Events", "/docs/events"],
  ["Queues", "/docs/queues"],
  ["Mail", "/docs/mail"],
  ["Notifications", "/docs/notifications"],
  ["Storage", "/docs/storage"],
  ["Scheduler", "/docs/scheduler"],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Hero />
      <FrameworkOverview />

      <CodeFeature
        eyebrow="Routing & Controllers"
        title="Routes stay readable. Controllers stay focused."
        description="Map HTTP methods and URLs to controller actions, then keep request handling organized around clear application responsibilities."
        code={routingCode}
        label="routes.gnr"
        href="/docs/routing"
        linkLabel="Explore routing"
      />

      <CodeFeature
        eyebrow="Models & ORM"
        title="Work with application data through expressive models."
        description="Define model fields and relationships, compose queries, and eager load related data without scattering database concerns throughout controllers."
        code={modelCode}
        label="user.gnr"
        href="/docs/models"
        linkLabel="Explore models"
        reverse
        muted
      />

      <section className="border-b border-line">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gungnir-blue sm:text-sm">
              Everyday Application Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
              Validate input, compose middleware, and render views.
            </h2>
          </div>

          <div className="mt-10 grid border-t border-line md:grid-cols-3">
            {essentials.map((item) => (
              <article
                key={item.title}
                className="border-b border-line py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-foreground transition-colors hover:text-gungnir-blue"
                >
                  Learn more <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CodeFeature
        eyebrow="Async Actions"
        title="Use async and await where the application needs them."
        description="Keep asynchronous controller actions straightforward for network-bound and other asynchronous application work."
        code={asyncCode}
        label="Async controller action"
        href="/docs/async-actions"
        linkLabel="Explore async actions"
      />

      <section className="border-b border-line bg-surface-muted">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gungnir-blue sm:text-sm">
                Application Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
                Common services belong in the framework, not in every controller.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                Keep background work, notifications, files, scheduled tasks, and
                reusable application behavior behind consistent framework
                conventions.
              </p>
            </div>

            <div className="grid border-t border-line sm:grid-cols-2">
              {services.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-14 items-center justify-between border-b border-line py-3 text-sm font-medium text-foreground transition-colors hover:text-gungnir-blue sm:px-4 sm:odd:pl-0 sm:even:border-l"
                >
                  {label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DocsCta />
      <SiteFooter />
    </main>
  );
}
