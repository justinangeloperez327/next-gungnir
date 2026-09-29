export type DocsNavItem = readonly [label: string, slug: string];

export type DocsNavGroup = {
  title: string;
  items: readonly DocsNavItem[];
};

export const docsNavigation: readonly DocsNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      ["Introduction", "introduction"],
      ["Requirements", "requirements"],
      ["Installation", "installation"],
      ["Configuration", "configuration"],
      ["Project Structure", "project-structure"],
    ],
  },
  {
    title: "The Basics",
    items: [
      ["Routing", "routing"],
      ["Controllers", "controllers"],
      ["Requests", "requests"],
      ["Responses", "responses"],
      ["Middleware", "middleware"],
      ["Validation", "validation"],
      ["Views", "views"],
    ],
  },
  {
    title: "Database",
    items: [
      ["Database Configuration", "database-configuration"],
      ["Models", "models"],
      ["Querying", "querying"],
      ["Relationships", "relationships"],
      ["Migrations", "migrations"],
    ],
  },
  {
    title: "Security",
    items: [
      ["Authentication", "authentication"],
      ["Authorization", "authorization"],
      ["Sessions", "sessions"],
      ["Security Middleware", "security-middleware"],
    ],
  },
  {
    title: "Application Services",
    items: [
      ["Cache", "cache"],
      ["Events", "events"],
      ["Queues", "queues"],
      ["Mail", "mail"],
      ["Notifications", "notifications"],
      ["Storage", "storage"],
      ["Scheduler", "scheduler"],
    ],
  },
  {
    title: "Application",
    items: [
      ["Async Actions", "async-actions"],
      ["Logging", "logging"],
      ["Testing", "testing"],
      ["Deployment", "deployment"],
    ],
  },
] as const;

export const docsItems = docsNavigation.flatMap((group) =>
  group.items.map(([label, slug]) => ({
    label,
    slug,
    group: group.title,
  })),
);

export function docsHref(slug: string) {
  return slug === "introduction" ? "/docs" : `/docs/${slug}`;
}
