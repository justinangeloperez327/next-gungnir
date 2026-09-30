import Link from "next/link";
import { Container } from "@/components/layout/Container";

const groups = [
  {
    title: "HTTP & Routing",
    description: "Define the request flow from URL to response.",
    links: [["Routing", "/docs/routing"], ["Controllers", "/docs/controllers"], ["Requests", "/docs/requests"], ["Responses", "/docs/responses"], ["Middleware", "/docs/middleware"]],
  },
  {
    title: "Data",
    description: "Model application data with expressive database conventions.",
    links: [["Models", "/docs/models"], ["Querying", "/docs/querying"], ["Relationships", "/docs/relationships"], ["Migrations", "/docs/migrations"]],
  },
  {
    title: "Security",
    description: "Keep identity, permissions, and request protection consistent.",
    links: [["Authentication", "/docs/authentication"], ["Authorization", "/docs/authorization"], ["Sessions", "/docs/sessions"], ["Security Middleware", "/docs/security-middleware"]],
  },
  {
    title: "Application Services",
    description: "Move recurring application concerns into reusable framework services.",
    links: [["Cache", "/docs/cache"], ["Events", "/docs/events"], ["Queues", "/docs/queues"], ["Mail", "/docs/mail"], ["Notifications", "/docs/notifications"], ["Storage", "/docs/storage"], ["Scheduler", "/docs/scheduler"]],
  },
  {
    title: "Presentation",
    description: "Accept input safely and return clear server-rendered output.",
    links: [["Validation", "/docs/validation"], ["Views", "/docs/views"]],
  },
  {
    title: "Development",
    description: "Build, test, observe, and deploy the application.",
    links: [["Project Structure", "/docs/project-structure"], ["Async Actions", "/docs/async-actions"], ["Logging", "/docs/logging"], ["Testing", "/docs/testing"], ["Deployment", "/docs/deployment"]],
  },
] as const;

export function FrameworkOverview() {
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gungnir-blue sm:text-sm">
            Framework
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            A complete application structure without unnecessary ceremony.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Gungnir groups common web application concerns into predictable
            conventions so developers know where code belongs and how pieces work
            together.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 border-t border-line md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <section key={group.title} className="border-b border-line py-8">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {group.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-foreground/70 transition-colors hover:text-gungnir-blue"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
