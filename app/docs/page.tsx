import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Gungnir documentation for installation, routing, controllers, models, ORM, migrations, middleware, validation, views, async programming, and tooling.",
};

const groups = [
  {
    title: "Getting Started",
    items: [
      ["Introduction", "introduction"],
      ["Requirements", "requirements"],
      ["Installation", "installation"],
      ["First Application", "first-application"],
    ],
  },
  {
    title: "Core",
    items: [
      ["Gungnir Language", "language"],
      ["Routing", "routing"],
      ["Controllers", "controllers"],
      ["Middleware", "middleware"],
      ["Validation", "validation"],
      ["Views", "views"],
    ],
  },
  {
    title: "Data",
    items: [
      ["Models & ORM", "orm"],
      ["Relationships", "relationships"],
      ["Migrations", "migrations"],
      ["Database Backends", "database"],
    ],
  },
  {
    title: "Runtime & Tooling",
    items: [
      ["Async & Await", "async"],
      ["HTTP Runtime", "http-runtime"],
      ["CLI & Code Generation", "cli"],
      ["Framework Services", "services"],
    ],
  },
];

function Code({ children }: { children: string }) {
  return (
    <pre className="gungnir-blue-glow overflow-x-auto rounded-lg border border-deep-steel/55 bg-graphite/90 p-5 text-sm leading-7 text-soft-silver">
      <code>{children}</code>
    </pre>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-deep-steel/35 py-12">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-pearl-white">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-soft-silver">
        {children}
      </div>
    </section>
  );
}

export default function Documentation() {
  return (
    <main className="gungnir-docs-shell min-h-screen text-pearl-white">
      <header className="sticky top-0 z-50 border-b border-deep-steel/40 bg-graphite/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="Gungnir home" className="block">
              <Image
                src="/images/logo.png"
                alt="Gungnir"
                width={220}
                height={88}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <span className="hidden text-sm text-soft-silver sm:inline">
              Documentation
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm text-soft-silver">
            <span className="hidden rounded border border-deep-steel/60 bg-midnight-navy/50 px-2.5 py-1 text-xs text-soft-silver sm:inline">
              v0.1.0
            </span>
            <a
              href="https://github.com/justinangeloperez327/gungnir"
              className="transition hover:text-pearl-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden border-r border-deep-steel/35 bg-graphite/20 px-6 py-10 lg:block">
          <nav className="sticky top-24 space-y-8">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-highlight">
                  {group.title}
                </p>
                <ul className="space-y-2">
                  {group.items.map(([label, id]) => (
                    <li key={id}>
                      <a
                        href={"#" + id}
                        className="text-sm text-soft-silver transition hover:text-pearl-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="max-w-4xl">
            <div className="border-b border-deep-steel/35 pb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-highlight">
                Gungnir Documentation
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Build structured web applications in modern C++.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-soft-silver">
                Gungnir combines a C++23 runtime with an expressive{" "}
                <code>.gnr</code> application language. It provides the major
                application layers needed for server-side development while
                compiling to ordinary, inspectable C++.
              </p>
              <div className="mt-8 rounded-lg border border-precision-blue/35 bg-precision-blue/10 p-5 text-sm leading-6 text-soft-silver">
                Gungnir is under active development. Version 0.1.0 is not yet
                considered API-stable, so applications should pin the exact
                version or commit they validate against.
              </div>
            </div>

            <Section id="introduction" title="Introduction">
              <p>
                Gungnir is a web application framework, runtime, and
                source-language toolchain built around C++23. Application code
                uses framework-aware syntax while the compiler frontend lowers
                that source into native C++.
              </p>
              <p>
                The framework includes routing, request and response handling,
                controllers, dependency injection, validation, ORM, migrations,
                views, sessions, cache, authentication and authorization
                foundations, storage, events, queues, mail, notifications,
                scheduling, structured logging, testing helpers, and production
                runtime contracts.
              </p>
            </Section>

            <Section id="requirements" title="Requirements">
              <ul className="list-disc space-y-2 pl-6">
                <li>A C++23-capable compiler</li>
                <li>CMake 3.25 or newer</li>
                <li>Gungnir CLI/compiler tools for .gnr source files</li>
                <li>A database client library when using an optional production adapter</li>
              </ul>
              <p>
                Gungnir targets modern Clang, GCC, and MSVC toolchains.
              </p>
            </Section>

            <Section id="installation" title="Installation">
              <p>
                Build the framework and command-line tools with CMake:
              </p>
              <Code>{"cmake -S . -B build -DGUNGNIR_BUILD_TOOLS=ON\ncmake --build build"}</Code>
              <p>Create a project and start its development server:</p>
              <Code>{"gungnir new my-app\ncd my-app\ngungnir dev"}</Code>
            </Section>

            <Section id="first-application" title="Your First Application">
              <p>
                Application code defines routes and application classes while
                Gungnir owns the HTTP listener and dispatch lifecycle.
              </p>
              <Code>{"controller HomeController\n{\n    Response index()\n    {\n        return response(\"Hello from Gungnir\");\n    }\n}\n\nApplication app;\nRoute::get(\"/\", HomeController::index);\napp.listen(8000);"}</Code>
            </Section>

            <Section id="language" title="Gungnir Language">
              <p>
                Gungnir source files use the <code>.gnr</code> extension. The
                frontend parses source into an AST, lowers it to generated
                C++23, and delegates native compilation to the system compiler.
              </p>
              <Code>{"model User\n{\n    string name;\n    string email;\n    string? nickname;\n    bool active = true;\n}"}</Code>
              <p>
                First-class declarations such as <code>model</code>,{" "}
                <code>controller</code>, <code>migration</code>, and{" "}
                <code>middleware</code> keep C++ inheritance and framework
                plumbing out of normal application code.
              </p>
              <Code>{"gungnirc app/controllers/user_controller.gnr -o .gungnir/user_controller.cpp\ngungnirc --check app/controllers/user_controller.gnr"}</Code>
            </Section>

            <Section id="routing" title="Routing">
              <p>
                Routes map HTTP methods and paths to synchronous or asynchronous
                handlers and controller actions.
              </p>
              <Code>{"Route::get(\"/users\", UserController::index);\nRoute::get(\"/users/{id}\", UserController::show);\nRoute::post(\"/users\", UserController::store);\nRoute::put(\"/users/{id}\", UserController::update);\nRoute::delete(\"/users/{id}\", UserController::destroy);"}</Code>
              <p>
                The router supports GET, POST, PUT, PATCH, DELETE, OPTIONS, and
                HEAD together with middleware, groups, named routes, parameter
                constraints, reverse URL generation, and fallback handlers.
              </p>
            </Section>

            <Section id="controllers" title="Controllers">
              <p>
                Controllers are container-resolved request handlers responsible
                for HTTP orchestration.
              </p>
              <Code>{"controller UserController\n{\n    inject Logger logger;\n\n    Response index()\n    {\n        const users = User::all();\n        return view(\"users/index\", { \"users\": users });\n    }\n}"}</Code>
            </Section>

            <Section id="middleware" title="Middleware">
              <p>
                Middleware forms an asynchronous pipeline around route handlers.
                It can run before an action, short-circuit with a response, or
                perform work after the next handler completes.
              </p>
              <Code>{"app.middleware_alias<AuthMiddleware>(\"auth\");\napp.middleware_group(\"web\", {\"session\", \"csrf\", \"auth\"});\napp.middleware_priority({\"session\", \"csrf\", \"auth\"});"}</Code>
            </Section>

            <Section id="validation" title="Validation">
              <p>
                Request validation uses concise rules and supports reusable
                validated request types.
              </p>
              <Code>{"data = request.validate({\n    \"name\": \"required|min:2|max:100\",\n    \"email\": \"required|email\"\n});"}</Code>
              <p>
                Built-in rules cover required/present values, nullable and
                conditional fields, strings, integers, numeric values, booleans,
                email, accepted values, lengths, ranges, inclusion, matching,
                and confirmation.
              </p>
            </Section>

            <Section id="views" title="Views">
              <p>
                Controllers can render server-side HTML with typed view data.
                Models and ORM collections can be passed directly to templates.
              </p>
              <Code>{"return view(\"users/index\", {\n    \"users\": users,\n    \"title\": \"Users\"\n});"}</Code>
              <Code>{"<h1>{{ title }}</h1>\n\n<ul>\n{{#each users}}\n    <li>{{ name }}</li>\n{{/each}}\n</ul>"}</Code>
              <p>
                Standard interpolation is HTML-escaped by default. Raw output is
                explicit and intended only for trusted HTML.
              </p>
            </Section>

            <Section id="orm" title="Models & ORM">
              <p>
                Models provide querying, persistence, hydration, dirty tracking,
                timestamps, soft deletes, eager loading, and relationship
                metadata. Query values are passed as bindings rather than
                interpolated into SQL.
              </p>
              <Code>{"const users = User::where(\"active\", true)\n    .orderBy(\"name\")\n    .get();\n\nconst user = User::findOrFail(id);"}</Code>
            </Section>

            <Section id="relationships" title="Relationships">
              <p>
                Relationships use concise model methods with conventional key
                inference and explicit overrides when needed.
              </p>
              <Code>{"posts() { return hasMany<Post>(); }\nprofile() { return hasOne<Profile>(); }\nuser() { return belongsTo<User>(); }\nroles() { return belongsToMany<Role>(); }"}</Code>
              <p>
                Eager loading batches relationship keys to avoid issuing one
                relationship query for every parent model.
              </p>
            </Section>

            <Section id="migrations" title="Migrations">
              <p>
                Migrations express database changes with table and column
                operations and are compiled for the selected backend.
              </p>
              <Code>{"migration CreateUsersTable\n{\n    up()\n    {\n        Table::create(\"users\", [](Column& column) {\n            column.id();\n            column.string(\"name\");\n            column.string(\"email\").unique();\n            column.timestamps();\n        });\n    }\n}"}</Code>
              <p>
                Migration tooling supports migrate, rollback, reset, status, and
                plan operations.
              </p>
            </Section>

            <Section id="database" title="Database Backends">
              <p>
                The data layer separates query compilation from execution.
                Gungnir contains adapter foundations for PostgreSQL, MySQL, SQL
                Server, and MongoDB. Backend-specific capabilities remain
                explicit instead of being forced into a single abstraction.
              </p>
            </Section>

            <Section id="async" title="Async & Await">
              <p>
                Language-level <code>async</code> and <code>await</code> lower
                into native C++ coroutine mechanics.
              </p>
              <Code>{"controller UserController\n{\n    async Response index()\n    {\n        const result = await fetchResponse();\n        return result;\n    }\n}"}</Code>
            </Section>

            <Section id="http-runtime" title="HTTP Runtime">
              <p>
                Gungnir includes an HTTP/1.1 non-blocking readiness reactor. The
                runtime owns connection admission, parsing, dispatch, response
                serialization, keep-alive handling, timeouts, cancellation, and
                graceful shutdown.
              </p>
            </Section>

            <Section id="cli" title="CLI & Code Generation">
              <p>
                The CLI is project-aware and generates Gungnir source rather than
                requiring application developers to write framework plumbing.
              </p>
              <Code>{"gungnir new my-app\ngungnir build\ngungnir run\ngungnir dev\n\ngungnir make:model User\ngungnir make:controller UserController\ngungnir make:middleware AuthMiddleware\ngungnir make:migration CreateUsersTable\ngungnir make:request StoreUserRequest\ngungnir make:job SendWelcomeEmail"}</Code>
            </Section>

            <Section id="services" title="Framework Services">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Authentication & authorization",
                  "Sessions & cache",
                  "Events & listeners",
                  "Queues & jobs",
                  "Mail & notifications",
                  "Task scheduling",
                  "Filesystem storage",
                  "Structured logging",
                  "Testing helpers",
                  "Extension & provider APIs",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-deep-steel/50 bg-graphite/55 px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            <footer className="py-12 text-sm text-soft-silver">
              Documentation describes implemented behavior. Capabilities still
              under development remain explicitly identified rather than being
              presented as stable guarantees.
            </footer>
          </div>
        </article>
      </div>
    </main>
  );
}
