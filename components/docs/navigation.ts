export type DocsNavItem = readonly [label: string, id: string];

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
      ["First Application", "first-application"],
    ],
  },
  {
    title: "Core Concepts",
    items: [
      ["Gungnir Language", "language"],
      ["Routing", "routing"],
      ["Controllers", "controllers"],
      ["Request & Response", "request-response"],
      ["Middleware", "middleware"],
      ["Validation", "validation"],
      ["Views", "views"],
      ["Dependency Injection", "dependency-injection"],
    ],
  },
  {
    title: "Database",
    items: [
      ["Models", "models"],
      ["ORM", "orm"],
      ["Relationships", "relationships"],
      ["Query Builder", "query-builder"],
      ["Migrations", "migrations"],
      ["PostgreSQL", "postgresql"],
      ["MySQL", "mysql"],
      ["SQL Server", "sql-server"],
      ["MongoDB", "mongodb"],
    ],
  },
  {
    title: "Application Services",
    items: [
      ["Authentication", "authentication"],
      ["Authorization", "authorization"],
      ["Sessions", "sessions"],
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
    title: "Runtime",
    items: [
      ["Async Runtime", "async-runtime"],
      ["HTTP Runtime", "http-runtime"],
      ["Logging & Observability", "logging"],
      ["Error Handling", "errors"],
      ["Production", "production"],
    ],
  },
  {
    title: "Tooling",
    items: [
      ["CLI", "cli"],
      ["Code Generation", "code-generation"],
      ["Compiler", "compiler"],
      ["Testing", "testing"],
      ["Extensions", "extensions"],
    ],
  },
] as const;
