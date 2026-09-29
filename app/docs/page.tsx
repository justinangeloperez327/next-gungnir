import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocsHeader } from "@/components/docs/DocsHeader";
import {
  DocsSidebar,
  MobileDocsNavigation,
} from "@/components/docs/DocsSidebar";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Gungnir framework documentation covering installation, language syntax, routing, controllers, ORM, migrations, application services, runtime behavior, and tooling.",
};

const installCode = [
  "cmake -S . -B build -DGUNGNIR_BUILD_TOOLS=ON",
  "cmake --build build",
].join("\n");

const newProjectCode = [
  "gungnir new my-app",
  "cd my-app",
  "gungnir dev",
].join("\n");

const firstAppCode = [
  "controller HomeController",
  "{",
  "    Response index()",
  "    {",
  "        return response(\"Hello from Gungnir\");",
  "    }",
  "}",
  "",
  "Application app;",
  "Route::get(\"/\", HomeController::index);",
  "app.listen(8000);",
].join("\n");

const modelCode = [
  "model User",
  "{",
  "    string name;",
  "    string email;",
  "    string? nickname;",
  "    bool active = true;",
  "",
  "    posts()",
  "    {",
  "        return hasMany<Post>();",
  "    }",
  "}",
].join("\n");

const routingCode = [
  "Route::get(\"/users\", UserController::index);",
  "Route::get(\"/users/{id}\", UserController::show);",
  "Route::post(\"/users\", UserController::store);",
  "Route::put(\"/users/{id}\", UserController::update);",
  "Route::delete(\"/users/{id}\", UserController::destroy);",
].join("\n");

const controllerCode = [
  "controller UserController",
  "{",
  "    inject Logger logger;",
  "",
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

const requestCode = [
  "Response store(Request request)",
  "{",
  "    const name = request.input(\"name\");",
  "    const values = request.only([\"name\", \"email\"]);",
  "",
  "    return json(values);",
  "}",
].join("\n");

const middlewareCode = [
  "app.middleware_alias<AuthMiddleware>(\"auth\");",
  "app.middleware_group(\"web\", {\"session\", \"csrf\", \"auth\"});",
  "app.middleware_priority({\"session\", \"csrf\", \"auth\"});",
].join("\n");

const validationCode = [
  "data = request.validate({",
  "    \"name\": \"required|min:2|max:100\",",
  "    \"email\": \"required|email\"",
  "});",
].join("\n");

const viewCode = [
  "<h1>{{ title }}</h1>",
  "",
  "<ul>",
  "{{#each users}}",
  "    <li>{{ name }}</li>",
  "{{/each}}",
  "</ul>",
].join("\n");

const ormCode = [
  "const users = User::where(\"active\", true)",
  "    .orderBy(\"name\")",
  "    .withTrashed()",
  "    .get();",
  "",
  "const user = User::findOrFail(id);",
].join("\n");

const migrationCode = [
  "class CreateUsersTable : public Migration {",
  "public:",
  "    void up() override {",
  "        Table::create(\"users\", [](Column& column) {",
  "            column.id();",
  "            column.string(\"name\");",
  "            column.string(\"email\").unique();",
  "            column.timestamps();",
  "        });",
  "    }",
  "};",
].join("\n");

const asyncCode = [
  "controller UserController",
  "{",
  "    async Response index()",
  "    {",
  "        const result = await fetchResponse();",
  "        return result;",
  "    }",
  "}",
].join("\n");

const cliCode = [
  "gungnir new my-app",
  "gungnir build",
  "gungnir run",
  "gungnir dev",
].join("\n");

const generatorCode = [
  "gungnir make:model User",
  "gungnir make:controller UserController",
  "gungnir make:middleware AuthMiddleware",
  "gungnir make:migration CreateUsersTable",
  "gungnir make:request StoreUserRequest",
  "gungnir make:job SendWelcomeEmail",
].join("\n");

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-gungnir-silver py-12">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-ink">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-[15px] leading-7 text-ink/68">
        {children}
      </div>
    </section>
  );
}

function MiniTopic({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 rounded-lg border border-gungnir-silver p-5">
      <h3 className="font-semibold text-ink">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-ink/62">{children}</div>
    </section>
  );
}

export default function Documentation() {
  return (
    <main className="min-h-screen bg-gungnir-white text-ink">
      <DocsHeader />

      <div className="mx-auto grid max-w-[1540px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <DocsSidebar />

        <article className="min-w-0 px-5 py-8 sm:px-8 lg:px-12 lg:py-12 xl:px-16">
          <div className="mx-auto max-w-4xl">
            <MobileDocsNavigation />

            <header className="border-b border-gungnir-silver py-10 lg:pt-2">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gungnir-blue">
                Gungnir Documentation
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                Build structured web applications in modern C++.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/65">
                Gungnir combines a C++23 runtime with an expressive{" "}
                <code>.gnr</code> application language. The framework provides
                common server-side application layers while compiling to ordinary,
                inspectable C++.
              </p>
              <div className="surface-soft mt-7 rounded-lg border border-gungnir-silver p-5 text-sm leading-6 text-ink/65">
                Gungnir is under active development. Version 0.1.0 is not yet
                API-stable, so applications should pin the exact version or commit
                they validate against.
              </div>
            </header>

            <DocSection id="introduction" title="Introduction">
              <p>
                Gungnir is a web application framework, runtime, and source-language
                toolchain built around C++23. It includes routing, request and
                response primitives, controllers, dependency injection, validation,
                ORM, migrations, views, sessions, cache, application services,
                tooling, and production runtime contracts.
              </p>
              <p>
                The language frontend remains separate from the runtime hot path.
                Framework-aware source is parsed and lowered to C++, leaving the
                generated application code inspectable and interoperable with native
                C++.
              </p>
            </DocSection>

            <DocSection id="requirements" title="Requirements">
              <ul className="list-disc space-y-2 pl-6">
                <li>A C++23-capable compiler</li>
                <li>CMake 3.25 or newer</li>
                <li>Gungnir CLI/compiler tools when using .gnr source</li>
                <li>Required database client libraries for optional production adapters</li>
              </ul>
              <p>Gungnir targets modern Clang, GCC, and MSVC toolchains.</p>
            </DocSection>

            <DocSection id="installation" title="Installation">
              <p>Build the framework and command-line tools with CMake.</p>
              <CodeBlock code={installCode} label="Build Gungnir" terminal />
              <p>Create a project and start the development workflow with the CLI.</p>
              <CodeBlock code={newProjectCode} label="Create a project" terminal />
            </DocSection>

            <DocSection id="configuration" title="Configuration">
              <p>
                Application configuration belongs at startup and environment
                boundaries rather than inside request handlers. Database connections,
                runtime limits, view roots, middleware registration, and service
                providers should be configured before the application begins serving
                traffic.
              </p>
            </DocSection>

            <DocSection id="project-structure" title="Project Structure">
              <p>
                The CLI is project-aware and discovers a Gungnir project by walking
                upward until it finds the project marker. Generated source should
                remain organized by application responsibility: controllers, models,
                middleware, migrations, requests, jobs, views, and configuration.
              </p>
            </DocSection>

            <DocSection id="first-application" title="Your First Application">
              <p>
                Define application classes and routes, then let the application own
                the HTTP listener and dispatch lifecycle.
              </p>
              <CodeBlock code={firstAppCode} label="app.gnr" />
            </DocSection>

            <DocSection id="language" title="Gungnir Language">
              <p>
                Gungnir source uses the <code>.gnr</code> extension. The frontend
                pipeline is lexer → parser/AST → lowering → generated C++23 → native
                compiler.
              </p>
              <CodeBlock code={modelCode} label="user.gnr" />
              <p>
                First-class framework declarations such as <code>model</code>,{" "}
                <code>controller</code>, <code>migration</code>, and{" "}
                <code>middleware</code> hide inheritance and framework namespace
                plumbing from normal application code.
              </p>
            </DocSection>

            <DocSection id="routing" title="Routing">
              <p>
                Routes map HTTP methods and paths to synchronous or asynchronous
                handlers and controller actions.
              </p>
              <CodeBlock code={routingCode} label="routes.gnr" />
              <p>
                The router supports GET, POST, PUT, PATCH, DELETE, OPTIONS, and HEAD,
                plus global and route middleware, path groups, named routes,
                parameter constraints, reverse URL generation, and fallbacks.
              </p>
            </DocSection>

            <DocSection id="controllers" title="Controllers">
              <p>
                Controllers are application-facing request handlers resolved through
                the Gungnir container. They should coordinate HTTP behavior rather
                than absorb database or transport plumbing.
              </p>
              <CodeBlock code={controllerCode} label="user_controller.gnr" />
            </DocSection>

            <DocSection id="request-response" title="Request & Response">
              <p>
                Request input keeps query values, form bodies, JSON, cookies,
                headers, and route parameters distinct internally while exposing a
                compact controller API.
              </p>
              <CodeBlock code={requestCode} label="Request input" />
              <p>
                Responses can represent text, JSON, views, HTML, downloads,
                redirects, and no-content results.
              </p>
            </DocSection>

            <DocSection id="middleware" title="Middleware">
              <p>
                Middleware forms an asynchronous pipeline around route handlers.
                Middleware can execute before the next handler, short-circuit with a
                response, and perform response-side work after the continuation.
              </p>
              <CodeBlock code={middlewareCode} label="Application middleware" />
            </DocSection>

            <DocSection id="validation" title="Validation">
              <p>
                Validation separates rule declarations, validation results, and HTTP
                exception behavior. Reusable validated request types keep repeated
                rules outside controller actions.
              </p>
              <CodeBlock code={validationCode} label="Request validation" />
            </DocSection>

            <DocSection id="views" title="Views">
              <p>
                The view engine renders server-side HTML with escaped interpolation
                by default. Models and collections can be converted through the
                framework model attribute contract.
              </p>
              <CodeBlock code={viewCode} label="users/index.html" />
            </DocSection>

            <DocSection id="dependency-injection" title="Dependency Injection">
              <p>
                The application container owns construction and lifetime rules for
                framework services and application dependencies. Gungnir source can
                declare controller dependencies with <code>inject</code>, while the
                frontend generates the native constructor wiring.
              </p>
            </DocSection>

            <DocSection id="models" title="Models">
              <p>
                Gungnir models expose ORM behavior without requiring application code
                to write CRTP, field-wrapper, primary-key, or attribute-metadata
                plumbing. Conventional table names, primary keys, fillable fields,
                and timestamps can be generated from model declarations.
              </p>
            </DocSection>

            <DocSection id="orm" title="ORM">
              <p>
                The ORM provides model query entry points, persistence, hydration,
                dirty tracking, pagination, eager loading, soft-delete behavior, and
                query observation.
              </p>
              <CodeBlock code={ormCode} label="Model query" />
            </DocSection>

            <DocSection id="relationships" title="Relationships">
              <p>
                Relationship APIs cover one-to-one, one-to-many, inverse, many-to-many,
                and through relationships. Conventional foreign keys and pivot names
                can be inferred, while explicit arguments override those conventions.
                Eager loading batches keys instead of issuing one relation query for
                every parent model.
              </p>
            </DocSection>

            <DocSection id="query-builder" title="Query Builder">
              <p>
                Query plans compile values into database bindings. Values are not
                interpolated directly into SQL. Backend-specific quoting,
                placeholders, and capability boundaries are handled by the database
                layer.
              </p>
            </DocSection>

            <DocSection id="migrations" title="Migrations">
              <p>
                Migrations describe table and column operations and are compiled for
                the active backend. The runner supports applying pending migrations,
                rolling back the latest batch, resetting applied batches, and
                reporting migration status.
              </p>
              <CodeBlock code={migrationCode} label="C++ migration API" />
            </DocSection>

            <DocSection id="database-backends" title="Database Backends">
              <div className="grid gap-4 sm:grid-cols-2">
                <MiniTopic id="postgresql" title="PostgreSQL">
                  Optional libpq-backed adapter support is documented in the main
                  framework repository. Availability depends on the client library
                  enabled at build time.
                </MiniTopic>
                <MiniTopic id="mysql" title="MySQL">
                  The MySQL adapter boundary uses the native client library and keeps
                  query compilation separate from execution.
                </MiniTopic>
                <MiniTopic id="sql-server" title="SQL Server">
                  SQL Server support is represented through the ODBC adapter boundary
                  with backend-specific SQL behavior kept explicit.
                </MiniTopic>
                <MiniTopic id="mongodb" title="MongoDB">
                  MongoDB uses document-query semantics and does not manufacture
                  relational concepts such as joins or row locks.
                </MiniTopic>
              </div>
            </DocSection>

            <DocSection id="application-services" title="Application Services">
              <div className="grid gap-4 sm:grid-cols-2">
                <MiniTopic id="authentication" title="Authentication">
                  Authentication foundations provide the contracts needed to identify
                  application users without coupling controllers directly to transport
                  mechanics.
                </MiniTopic>
                <MiniTopic id="authorization" title="Authorization">
                  Authorization APIs separate access decisions from request-routing
                  code.
                </MiniTopic>
                <MiniTopic id="sessions" title="Sessions">
                  Session contracts manage application state across requests while
                  keeping backend choice explicit.
                </MiniTopic>
                <MiniTopic id="cache" title="Cache">
                  Cache abstractions provide application-level caching without
                  requiring callers to depend on one concrete backend.
                </MiniTopic>
                <MiniTopic id="events" title="Events">
                  Events and listeners decouple application actions from downstream
                  reactions.
                </MiniTopic>
                <MiniTopic id="queues" title="Queues">
                  Queue and job foundations move suitable work out of the request
                  path.
                </MiniTopic>
                <MiniTopic id="mail" title="Mail">
                  Mail APIs separate message construction from transport.
                </MiniTopic>
                <MiniTopic id="notifications" title="Notifications">
                  Notifications model user-facing communication independently from
                  individual delivery channels.
                </MiniTopic>
                <MiniTopic id="storage" title="Storage">
                  Storage contracts provide a consistent application boundary for
                  filesystem operations.
                </MiniTopic>
                <MiniTopic id="scheduler" title="Scheduler">
                  The scheduler provides contracts for recurring application work.
                </MiniTopic>
              </div>
            </DocSection>

            <DocSection id="async-runtime" title="Async Runtime">
              <p>
                Gungnir exposes language-level <code>async</code> and{" "}
                <code>await</code> while lowering them into native C++ coroutine
                types and suspension mechanics.
              </p>
              <CodeBlock code={asyncCode} label="Async controller" />
              <p>
                Async is semantic rather than cosmetic: synchronous database and ORM
                operations remain synchronous until their implementations provide
                genuine asynchronous behavior.
              </p>
            </DocSection>

            <DocSection id="http-runtime" title="HTTP Runtime">
              <p>
                The HTTP/1.1 runtime uses a non-blocking readiness reactor. Runtime
                options cover request and header limits, connection limits,
                persistent-connection request counts, read/write/idle timeouts,
                request timeout, keep-alive behavior, cancellation, and graceful
                shutdown.
              </p>
            </DocSection>

            <DocSection id="logging" title="Logging & Observability">
              <p>
                Structured logging and query-observation hooks provide runtime
                visibility without requiring application code to copy database
                bindings or sensitive values into observer events.
              </p>
            </DocSection>

            <DocSection id="errors" title="Error Handling">
              <p>
                Framework subsystems use explicit error types so applications can
                distinguish validation, views, database, routing, and runtime failures
                rather than treating every failure as an undifferentiated exception.
              </p>
            </DocSection>

            <DocSection id="production" title="Production">
              <p>
                Production behavior should be configured through explicit runtime
                limits, health contracts, shutdown behavior, and backend choices.
                Capabilities that remain foundations are documented as such rather
                than presented as complete production guarantees.
              </p>
            </DocSection>

            <DocSection id="cli" title="CLI">
              <p>
                The CLI is project-aware and supports project creation, development,
                building, and running applications.
              </p>
              <CodeBlock code={cliCode} label="Project commands" terminal />
            </DocSection>

            <DocSection id="code-generation" title="Code Generation">
              <p>
                Generators emit Gungnir source and refuse to silently overwrite
                existing application files.
              </p>
              <CodeBlock code={generatorCode} label="Generators" terminal />
            </DocSection>

            <DocSection id="compiler" title="Compiler">
              <p>
                The source pipeline is lexer → parser and lexical-scope analysis →
                Gungnir AST → lowering → generated C++ → Clang, GCC, or MSVC. Source
                locations are preserved where supported so downstream diagnostics can
                point back to the originating <code>.gnr</code> source.
              </p>
            </DocSection>

            <DocSection id="testing" title="Testing">
              <p>
                The framework includes testing helpers and end-to-end fixtures that
                exercise Gungnir source through transpilation, native compilation,
                linking, and runtime dispatch.
              </p>
            </DocSection>

            <DocSection id="extensions" title="Extensions">
              <p>
                Provider and extension APIs define framework integration boundaries.
                Extension behavior should stay explicit and avoid bypassing normal
                application lifecycle and dependency-container rules.
              </p>
            </DocSection>
          </div>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
