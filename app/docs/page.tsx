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
    "Learn how to build web applications with Gungnir, including routing, controllers, models, validation, views, database access, authentication, queues, and deployment.",
};

const installCode = [
  "cmake -S . -B build -DGUNGNIR_BUILD_TOOLS=ON",
  "cmake --build build",
].join("\n");

const createProjectCode = [
  "gungnir new my-app",
  "cd my-app",
  "gungnir dev",
].join("\n");

const routeCode = [
  "Route::get(\"/users\", UserController::index);",
  "Route::get(\"/users/{id}\", UserController::show);",
  "Route::post(\"/users\", UserController::store);",
  "Route::put(\"/users/{id}\", UserController::update);",
  "Route::delete(\"/users/{id}\", UserController::destroy);",
].join("\n");

const controllerCode = [
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

const requestCode = [
  "Response store(Request request)",
  "{",
  "    const name = request.input(\"name\");",
  "    const email = request.input(\"email\");",
  "",
  "    return response(\"User received\");",
  "}",
].join("\n");

const responseCode = [
  "return response(\"Saved\", 201);",
  "return json(user);",
  "return view(\"users/show\", { \"user\": user });",
  "return redirect(\"/users\");",
].join("\n");

const middlewareCode = [
  "app.middleware_alias<AuthMiddleware>(\"auth\");",
  "app.middleware_group(\"web\", {\"session\", \"csrf\", \"auth\"});",
].join("\n");

const validationCode = [
  "const data = request.validate({",
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

const modelCode = [
  "model User",
  "{",
  "    string name;",
  "    string email;",
  "    bool active = true;",
  "",
  "    posts()",
  "    {",
  "        return hasMany<Post>();",
  "    }",
  "}",
].join("\n");

const queryCode = [
  "const users = User::where(\"active\", true)",
  "    .orderBy(\"name\")",
  "    .get();",
  "",
  "const user = User::findOrFail(id);",
].join("\n");

const relationshipsCode = [
  "posts()",
  "{",
  "    return hasMany<Post>();",
  "}",
  "",
  "profile()",
  "{",
  "    return hasOne<Profile>();",
  "}",
  "",
  "roles()",
  "{",
  "    return belongsToMany<Role>();",
  "}",
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
  "async Response index()",
  "{",
  "    const result = await fetchResponse();",
  "",
  "    return result;",
  "}",
].join("\n");

const cliCode = [
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

function TopicGrid({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Topic({
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
                Build web applications with clear conventions.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/65">
                This documentation focuses on the conventions and APIs you use to
                build a Gungnir application: routes, controllers, models,
                validation, views, database access, security, background work, and
                deployment.
              </p>
            </header>

            <DocSection id="introduction" title="Introduction">
              <p>
                Gungnir is an expressive web framework built in C++. It provides
                the common building blocks used by server-side applications while
                keeping application code organized around familiar framework
                concepts.
              </p>
              <p>
                A typical Gungnir application is composed of routes, controllers,
                models, middleware, migrations, requests, views, jobs, events,
                mail, notifications, and other application services.
              </p>
            </DocSection>

            <DocSection id="requirements" title="Requirements">
              <p>Before creating a Gungnir application, install:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A C++23-capable compiler</li>
                <li>CMake 3.25 or newer</li>
                <li>The Gungnir framework and command-line tools</li>
                <li>The client library for any database backend you plan to use</li>
              </ul>
            </DocSection>

            <DocSection id="installation" title="Installation">
              <p>Build Gungnir and its command-line tools with CMake:</p>
              <CodeBlock code={installCode} label="Build Gungnir" terminal />
              <p>Create a new application and start the development server:</p>
              <CodeBlock code={createProjectCode} label="Create an application" terminal />
            </DocSection>

            <DocSection id="configuration" title="Configuration">
              <p>
                Configure application behavior at startup using environment and
                application configuration. Typical settings include the
                application port, database connection, view directory, session
                settings, cache backend, mail transport, storage, and runtime
                limits.
              </p>
              <p>
                Keep environment-specific values outside your application classes
                so the same code can run in development, testing, and production.
              </p>
            </DocSection>

            <DocSection id="project-structure" title="Project Structure">
              <p>
                Organize application code by responsibility. The CLI generators
                create source files for the common framework concepts and avoid
                overwriting existing files.
              </p>
              <CodeBlock code={cliCode} label="Common generators" terminal />
              <p>
                Keep controllers focused on request handling, models focused on
                data, middleware focused on request/response concerns, and jobs or
                listeners focused on background application behavior.
              </p>
            </DocSection>

            <DocSection id="routing" title="Routing">
              <p>
                Define routes by pairing an HTTP method and path with a controller
                action or route handler.
              </p>
              <CodeBlock code={routeCode} label="Routes" />
              <p>
                Route groups can share prefixes and middleware. Named routes and
                parameter constraints can be used where an application needs
                reusable URLs or stricter parameter matching.
              </p>
            </DocSection>

            <DocSection id="controllers" title="Controllers">
              <p>
                Controllers group related request actions. Use them to coordinate
                request input, models, validation, application services, and the
                response returned to the client.
              </p>
              <CodeBlock code={controllerCode} label="UserController" />
              <p>
                Keep business or infrastructure-heavy logic out of controllers
                when it belongs in a dedicated service, model, job, listener, or
                other application class.
              </p>
            </DocSection>

            <DocSection id="requests" title="Requests">
              <p>
                Controller actions can accept a request and read input, query
                values, route parameters, headers, cookies, and JSON data through
                the request API.
              </p>
              <CodeBlock code={requestCode} label="Request input" />
              <p>
                Use helpers such as <code>input</code>, <code>has</code>,{" "}
                <code>only</code>, and <code>except</code> when you only need
                selected scalar input.
              </p>
            </DocSection>

            <DocSection id="responses" title="Responses">
              <p>
                Return the response type that matches the route: text, JSON, a
                rendered view, redirect, download, HTML, or no-content response.
              </p>
              <CodeBlock code={responseCode} label="Responses" />
            </DocSection>

            <DocSection id="middleware" title="Middleware">
              <p>
                Middleware runs around a route and is useful for concerns shared
                across many requests, such as authentication, sessions, CSRF,
                rate limits, headers, or request policies.
              </p>
              <CodeBlock code={middlewareCode} label="Middleware registration" />
              <p>
                Register middleware under aliases and compose aliases into groups
                when several routes share the same request pipeline.
              </p>
            </DocSection>

            <DocSection id="validation" title="Validation">
              <p>
                Validate request data before using it in the rest of the
                application.
              </p>
              <CodeBlock code={validationCode} label="Validate request data" />
              <p>
                Common rules include required, nullable, string, integer, numeric,
                boolean, email, accepted, min, max, in, same, and confirmed.
                Reusable request-validation classes are appropriate when multiple
                actions share a larger rule set.
              </p>
            </DocSection>

            <DocSection id="views" title="Views">
              <p>
                Render HTML by returning a view and passing the data needed by the
                template.
              </p>
              <CodeBlock code={viewCode} label="View template" />
              <p>
                Standard interpolation is escaped by default. Use raw output only
                for trusted HTML.
              </p>
            </DocSection>

            <DocSection id="database-configuration" title="Database Configuration">
              <p>
                Configure the database connection used by your application before
                querying models or running migrations. Gungnir supports relational
                database adapters and MongoDB through their respective database
                integrations.
              </p>
              <p>
                Applications that use multiple connections can select the
                appropriate connection at the model or database-operation level.
              </p>
            </DocSection>

            <DocSection id="models" title="Models">
              <p>
                Models represent application records and provide the normal entry
                point for querying and persistence.
              </p>
              <CodeBlock code={modelCode} label="User model" />
              <p>
                By convention, models use an integer <code>id</code> primary key,
                infer a table name, and maintain <code>created_at</code> and{" "}
                <code>updated_at</code> timestamps unless configured otherwise.
              </p>
            </DocSection>

            <DocSection id="querying" title="Querying">
              <p>
                Start queries from the model and compose conditions before
                retrieving records.
              </p>
              <CodeBlock code={queryCode} label="Model queries" />
              <p>
                Use model query methods for filtering, ordering, pagination,
                eager loading, soft-delete behavior, and common record lookups.
              </p>
            </DocSection>

            <DocSection id="relationships" title="Relationships">
              <p>
                Define relationships on models and use eager loading when related
                records are needed for a collection of parent models.
              </p>
              <CodeBlock code={relationshipsCode} label="Model relationships" />
              <p>
                Conventional keys are inferred where possible. Provide explicit
                keys when working with an existing database that does not follow
                the default conventions.
              </p>
            </DocSection>

            <DocSection id="migrations" title="Migrations">
              <p>
                Use migrations to keep database structure changes versioned with
                the application.
              </p>
              <CodeBlock code={migrationCode} label="Create users table" />
              <p>
                Migration commands support applying pending migrations, rolling
                back the latest batch, resetting migrations, and checking status.
              </p>
            </DocSection>

            <DocSection id="security" title="Security">
              <TopicGrid>
                <Topic id="authentication" title="Authentication">
                  Use the authentication services when a route needs an identified
                  application user. Authentication middleware can protect groups of
                  routes that require a signed-in user.
                </Topic>
                <Topic id="authorization" title="Authorization">
                  Keep access decisions in authorization policies or application
                  authorization logic instead of scattering permission checks
                  throughout controllers.
                </Topic>
                <Topic id="sessions" title="Sessions">
                  Use sessions for request-to-request state such as authenticated
                  user state, flash data, and other short-lived application values.
                </Topic>
                <Topic id="security-middleware" title="Security Middleware">
                  Apply CSRF, CORS, rate limiting, host validation, proxy rules, and
                  request limits through the appropriate middleware and runtime
                  configuration.
                </Topic>
              </TopicGrid>
            </DocSection>

            <DocSection id="application-services" title="Application Services">
              <TopicGrid>
                <Topic id="cache" title="Cache">
                  Cache data that is expensive to reproduce and can safely be reused
                  between requests.
                </Topic>
                <Topic id="events" title="Events">
                  Dispatch events when application behavior should notify one or
                  more listeners without tightly coupling those actions together.
                </Topic>
                <Topic id="queues" title="Queues">
                  Use queued jobs for work that does not need to finish before the
                  HTTP response is returned.
                </Topic>
                <Topic id="mail" title="Mail">
                  Build mail messages separately from the transport used to send
                  them.
                </Topic>
                <Topic id="notifications" title="Notifications">
                  Represent application notifications as reusable classes and route
                  them through the configured delivery channels.
                </Topic>
                <Topic id="storage" title="Storage">
                  Use the storage API instead of hard-coding filesystem behavior
                  directly into controllers.
                </Topic>
                <Topic id="scheduler" title="Scheduler">
                  Register recurring application tasks in the scheduler rather than
                  duplicating scheduling logic across scripts.
                </Topic>
              </TopicGrid>
            </DocSection>

            <DocSection id="async-actions" title="Async Actions">
              <p>
                Use <code>async</code> controller actions when an operation is
                asynchronous and <code>await</code> the asynchronous work inside
                that action.
              </p>
              <CodeBlock code={asyncCode} label="Async controller action" />
            </DocSection>

            <DocSection id="logging" title="Logging">
              <p>
                Use application logging for operational events, errors, and useful
                request context. Avoid logging secrets, authentication credentials,
                or sensitive database values.
              </p>
            </DocSection>

            <DocSection id="testing" title="Testing">
              <p>
                Keep application behavior testable by separating request handling,
                data access, and services. Use the framework testing helpers for
                routes and application behavior, and keep database-dependent tests
                isolated from unit-level logic where practical.
              </p>
            </DocSection>

            <DocSection id="deployment" title="Deployment">
              <p>
                Build the application in release mode, provide production
                environment configuration, run database migrations as part of the
                deployment process, and configure the HTTP runtime limits
                appropriate for the environment.
              </p>
              <CodeBlock
                code={"gungnir build --release\ngungnir run --release"}
                label="Production build"
                terminal
              />
              <p>
                Place TLS termination, process supervision, logging, and any
                external database or cache services according to the deployment
                environment used by your application.
              </p>
            </DocSection>
          </div>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
