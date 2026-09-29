export type DocPageData = {
  title: string;
  description: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
  codeLabel?: string;
  terminal?: boolean;
};

export const docsPages: Record<string, DocPageData> = {
  introduction: {
    title: "Introduction",
    description: "Gungnir is an expressive web framework built in C++.",
    paragraphs: [
      "Gungnir provides the common conventions and services used to build server-side web applications in C++.",
      "A typical application is organized around routes, controllers, models, middleware, migrations, requests, views, jobs, events, mail, notifications, and other application services.",
    ],
    code: "gungnir new my-app\\ncd my-app\\ngungnir dev",
    codeLabel: "Create an application",
    terminal: true,
  },
  requirements: {
    title: "Requirements",
    description: "Software required to build and run a Gungnir application.",
    paragraphs: ["Install the required build tools before creating an application."],
    bullets: [
      "A C++23-capable compiler",
      "CMake 3.25 or newer",
      "The Gungnir framework and command-line tools",
      "The client library required by any database backend you plan to use",
    ],
  },
  installation: {
    title: "Installation",
    description: "Build Gungnir and create your first application.",
    paragraphs: [
      "Build the framework and command-line tools with CMake. After the tools are available, create a project with the Gungnir CLI.",
    ],
    code: "cmake -S . -B build -DGUNGNIR_BUILD_TOOLS=ON\\ncmake --build build\\n\\ngungnir new my-app\\ncd my-app\\ngungnir dev",
    codeLabel: "Terminal",
    terminal: true,
  },
  configuration: {
    title: "Configuration",
    description: "Configure environment-specific application behavior.",
    paragraphs: [
      "Keep environment-specific values outside controllers and models so the same application code can run in development, testing, and production.",
    ],
    bullets: [
      "Application host and port",
      "Database connection",
      "View directory",
      "Session settings",
      "Cache backend",
      "Mail transport",
      "Storage configuration",
      "Request and runtime limits",
    ],
  },
  "project-structure": {
    title: "Project Structure",
    description: "Organize a Gungnir project around clear application responsibilities.",
    paragraphs: [
      "Keep controllers focused on HTTP orchestration, models focused on application data, middleware focused on request and response concerns, and jobs or listeners focused on background behavior.",
      "Use CLI generators to create the common application classes.",
    ],
    code: "gungnir make:model User\\ngungnir make:controller UserController\\ngungnir make:middleware AuthMiddleware\\ngungnir make:migration CreateUsersTable\\ngungnir make:request StoreUserRequest\\ngungnir make:job SendWelcomeEmail",
    codeLabel: "Generators",
    terminal: true,
  },
  routing: {
    title: "Routing",
    description: "Map HTTP methods and paths to your application.",
    paragraphs: [
      "Define routes by pairing an HTTP method and path with a controller action or route handler.",
      "Use route groups for shared prefixes or middleware, named routes for reusable URLs, parameter constraints for stricter matching, and fallback handlers for unmatched routes.",
    ],
    code: "Route::get(\"/users\", UserController::index);\\nRoute::get(\"/users/{id}\", UserController::show);\\nRoute::post(\"/users\", UserController::store);\\nRoute::put(\"/users/{id}\", UserController::update);\\nRoute::delete(\"/users/{id}\", UserController::destroy);",
    codeLabel: "Routes",
  },
  controllers: {
    title: "Controllers",
    description: "Group related request actions into focused controller classes.",
    paragraphs: [
      "Controllers coordinate request input, validation, models, application services, and the response returned to the client.",
      "Keep reusable business behavior in models or dedicated services instead of growing controller actions indefinitely.",
    ],
    code: "controller UserController\\n{\\n    Response index()\\n    {\\n        const users = User::all();\\n        return view(\"users/index\", { \"users\": users });\\n    }\\n}",
    codeLabel: "UserController",
  },
  requests: {
    title: "Requests",
    description: "Read incoming request data inside controller actions.",
    paragraphs: [
      "Controller actions can accept a request and read input, query values, route parameters, headers, cookies, and JSON data.",
      "Use helpers such as input, has, only, and except when an action only needs selected scalar values.",
    ],
    code: "Response store(Request request)\\n{\\n    const name = request.input(\"name\");\\n    const email = request.input(\"email\");\\n    return response(\"User received\");\\n}",
    codeLabel: "Request input",
  },
  responses: {
    title: "Responses",
    description: "Return the response type appropriate for each route.",
    paragraphs: [
      "Gungnir actions can return text, JSON, rendered views, redirects, downloads, HTML, and no-content responses.",
    ],
    code: "return response(\"Saved\", 201);\\nreturn json(user);\\nreturn view(\"users/show\", { \"user\": user });\\nreturn redirect(\"/users\");",
    codeLabel: "Responses",
  },
  middleware: {
    title: "Middleware",
    description: "Apply shared request and response behavior around routes.",
    paragraphs: [
      "Middleware is appropriate for concerns that apply across multiple routes, including authentication, sessions, CSRF protection, request limits, and headers.",
      "Register reusable aliases and compose them into middleware groups when routes share the same request pipeline.",
    ],
    code: "app.middleware_alias<AuthMiddleware>(\"auth\");\\napp.middleware_group(\"web\", {\"session\", \"csrf\", \"auth\"});",
    codeLabel: "Middleware registration",
  },
  validation: {
    title: "Validation",
    description: "Validate request data before using it in your application.",
    paragraphs: [
      "Use request validation for concise action-level rules. Use reusable request-validation classes when several actions share a larger rule set.",
    ],
    bullets: ["required", "nullable", "string", "integer", "numeric", "boolean", "email", "accepted", "min / max", "in", "same", "confirmed"],
    code: "const data = request.validate({\\n    \"name\": \"required|min:2|max:100\",\\n    \"email\": \"required|email\"\\n});",
    codeLabel: "Validation",
  },
  views: {
    title: "Views",
    description: "Render server-side HTML from controller actions.",
    paragraphs: [
      "Return a view and pass the data needed by the template. Standard interpolation is escaped by default; use raw output only for trusted HTML.",
    ],
    code: "<h1>{{ title }}</h1>\\n\\n<ul>\\n{{#each users}}\\n    <li>{{ name }}</li>\\n{{/each}}\\n</ul>",
    codeLabel: "users/index.html",
  },
  "database-configuration": {
    title: "Database Configuration",
    description: "Configure the database connection used by your application.",
    paragraphs: [
      "Configure the active database connection before querying models or running migrations. Applications that use more than one database can select the appropriate connection at the model or database-operation level.",
    ],
    bullets: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  },
  models: {
    title: "Models",
    description: "Represent application records with expressive model classes.",
    paragraphs: [
      "Models are the normal entry point for querying and persistence.",
      "By convention, models use an integer id primary key, infer a table name, and maintain created_at and updated_at timestamps unless configured otherwise.",
    ],
    code: "model User\\n{\\n    string name;\\n    string email;\\n    bool active = true;\\n\\n    posts()\\n    {\\n        return hasMany<Post>();\\n    }\\n}",
    codeLabel: "User model",
  },
  querying: {
    title: "Querying",
    description: "Build model queries with chainable conditions.",
    paragraphs: [
      "Start from a model and compose filtering, ordering, eager loading, pagination, and lookup operations before retrieving records.",
    ],
    code: "const users = User::where(\"active\", true)\\n    .orderBy(\"name\")\\n    .get();\\n\\nconst user = User::findOrFail(id);",
    codeLabel: "Model queries",
  },
  relationships: {
    title: "Relationships",
    description: "Define and load related model data.",
    paragraphs: [
      "Define relationships as model methods. Use eager loading when a collection of parent models needs related records.",
      "Default foreign keys and pivot names are inferred when possible; provide explicit values for databases that use different naming conventions.",
    ],
    code: "posts() { return hasMany<Post>(); }\\nprofile() { return hasOne<Profile>(); }\\nuser() { return belongsTo<User>(); }\\nroles() { return belongsToMany<Role>(); }",
    codeLabel: "Relationships",
  },
  migrations: {
    title: "Migrations",
    description: "Keep database structure changes versioned with your application.",
    paragraphs: [
      "Create migrations for table and column changes, then apply them through the migration runner.",
    ],
    bullets: ["Apply pending migrations", "Roll back the latest batch", "Reset applied migrations", "Check migration status"],
    code: "class CreateUsersTable : public Migration {\\npublic:\\n    void up() override {\\n        Table::create(\"users\", [](Column& column) {\\n            column.id();\\n            column.string(\"name\");\\n            column.string(\"email\").unique();\\n            column.timestamps();\\n        });\\n    }\\n};",
    codeLabel: "Migration",
  },
  authentication: {
    title: "Authentication",
    description: "Identify application users and protect authenticated routes.",
    paragraphs: [
      "Use Gungnir authentication services when a route needs an identified user. Apply authentication middleware to route groups that require a signed-in user.",
      "Keep authentication state and credential checks in the authentication layer rather than duplicating them in individual controllers.",
    ],
  },
  authorization: {
    title: "Authorization",
    description: "Keep access decisions separate from request handling.",
    paragraphs: [
      "Use policies or application authorization services for permission checks. Controllers should ask whether an action is allowed rather than reimplementing the access rule themselves.",
    ],
  },
  sessions: {
    title: "Sessions",
    description: "Persist request-to-request application state.",
    paragraphs: [
      "Use sessions for state such as authenticated user data, flash messages, and other short-lived values that need to survive across requests.",
      "Keep durable business data in the database rather than using the session as application storage.",
    ],
  },
  "security-middleware": {
    title: "Security Middleware",
    description: "Apply common HTTP security behavior consistently.",
    paragraphs: [
      "Use middleware and runtime configuration for security concerns that should apply consistently across requests.",
    ],
    bullets: ["CSRF protection", "CORS", "Rate limiting", "Host validation", "Trusted proxy rules", "Request size and header limits"],
  },
  cache: {
    title: "Cache",
    description: "Cache reusable application data behind a framework service.",
    paragraphs: [
      "Use the cache for data that is expensive to reproduce and safe to reuse between requests. Keep cache-specific details outside controllers when caching is part of a reusable service.",
    ],
  },
  events: {
    title: "Events",
    description: "Decouple application actions with events and listeners.",
    paragraphs: [
      "Dispatch events when one application action should notify one or more independent listeners. Use listeners for reactions that do not belong directly inside the originating controller or model operation.",
    ],
  },
  queues: {
    title: "Queues",
    description: "Move background work out of the request cycle.",
    paragraphs: [
      "Use queued jobs for work that does not need to finish before the HTTP response is returned.",
    ],
    code: "gungnir make:job SendWelcomeEmail",
    codeLabel: "Generate a job",
    terminal: true,
  },
  mail: {
    title: "Mail",
    description: "Build and send application email through configured transports.",
    paragraphs: [
      "Keep message construction separate from transport configuration. Mail classes describe the message while the configured transport handles delivery.",
    ],
  },
  notifications: {
    title: "Notifications",
    description: "Represent user-facing notifications as reusable application classes.",
    paragraphs: [
      "Use notifications when the same application event may need to be delivered through one or more configured channels. Keep delivery concerns outside controllers.",
    ],
  },
  storage: {
    title: "Storage",
    description: "Work with application files through the storage service.",
    paragraphs: [
      "Use the storage API for application file operations instead of hard-coding filesystem paths in controllers or models.",
    ],
  },
  scheduler: {
    title: "Scheduler",
    description: "Define recurring application work in one place.",
    paragraphs: [
      "Register recurring tasks with the scheduler instead of scattering operating-system scheduling commands throughout the project.",
    ],
  },
  "async-actions": {
    title: "Async Actions",
    description: "Use async and await in controller actions where needed.",
    paragraphs: [
      "Declare a controller action async when it performs asynchronous work and await the asynchronous operation inside the action.",
    ],
    code: "async Response index()\\n{\\n    const result = await fetchResponse();\\n    return result;\\n}",
    codeLabel: "Async controller",
  },
  logging: {
    title: "Logging",
    description: "Record useful application and operational events.",
    paragraphs: [
      "Use structured application logging for operational events, request context, and errors that need to be investigated.",
    ],
    bullets: ["Do not log passwords or credentials", "Do not log authentication tokens", "Do not log application secrets", "Avoid sensitive database values unless explicitly safe to record"],
  },
  testing: {
    title: "Testing",
    description: "Keep framework applications easy to verify as they grow.",
    paragraphs: [
      "Use the framework testing helpers for route and application behavior. Keep database-dependent tests separate from unit-level logic where practical.",
    ],
    bullets: ["Test controller-visible behavior through the HTTP testing API", "Keep business behavior in testable services or models", "Use dedicated test configuration", "Avoid production infrastructure in normal test runs"],
  },
  deployment: {
    title: "Deployment",
    description: "Build and run a Gungnir application in production.",
    paragraphs: [
      "Build the application in release mode and provide production environment configuration.",
    ],
    bullets: ["Run database migrations as part of deployment", "Configure appropriate HTTP runtime limits", "Configure process supervision", "Configure TLS termination", "Connect production database, cache, queue, and mail services as required"],
    code: "gungnir build --release\\ngungnir run --release",
    codeLabel: "Production",
    terminal: true,
  },
};

export const docsSlugs = Object.keys(docsPages);
