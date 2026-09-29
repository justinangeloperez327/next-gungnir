# Next Gungnir

The official website and documentation site for the Gungnir Framework.

Gungnir is presented as an expressive web framework built in C++. The website focuses on what developers need to build applications with the framework: installation, conventions, routing, controllers, models, database access, validation, views, middleware, security, application services, testing, and deployment.

## Development

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` — framework landing page
- `/docs` — framework documentation

## Quality checks

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
