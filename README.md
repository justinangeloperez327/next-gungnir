# Gungnir Framework Website

Official website and documentation for the Gungnir Framework.

Gungnir is an expressive web framework built in C++. The website focuses on the conventions and APIs developers use to build applications with the framework.

## Website

The site includes:

- Framework landing page
- Getting started documentation
- Routing and controllers
- Requests and responses
- Middleware and validation
- Views
- Database configuration
- Models and querying
- Relationships and migrations
- Authentication and authorization
- Sessions and security middleware
- Cache, events, queues, mail, notifications, storage, and scheduling
- Async actions
- Logging
- Testing
- Deployment guidance

## Brand

Logo:

```text
public/images/logo-alt.png
```

Primary colors:

- Blue: `#0A7BEF`
- White: `#F8FAFC`
- Silver: `#C7D0DA`
- Black text: `#0B0D10`

## Development

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` — framework landing page
- `/docs` — framework documentation

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## CI/CD

GitHub Actions runs linting, type checking, and a production build for pushes and pull requests. Production deployment from `main` can use Vercel when the required repository secrets are configured.

## Structure

```text
app/
├── docs/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── docs/
└── layout/

public/
└── images/
    └── logo-alt.png
```

## Related Repository

Framework source:

```text
justinangeloperez327/gungnir
```
