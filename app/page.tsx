import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-graphite text-pearl-white">
      <header className="border-b border-soft-silver/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          <Link href="/" className="font-semibold tracking-[0.18em]">
            GUNGNIR
          </Link>
          <nav className="flex items-center gap-6 text-sm text-soft-silver">
            <Link href="/docs" className="transition hover:text-pearl-white">
              Documentation
            </Link>
            <a
              href="https://github.com/justinangeloperez327/gungnir"
              className="transition hover:text-pearl-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-precision-blue">
          Gungnir Framework
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-pearl-white sm:text-7xl lg:text-8xl">
          Modern C++ for expressive web development.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-soft-silver sm:text-xl">
          Gungnir is a C++23 web framework and source-language toolchain for
          building structured web applications with routing, controllers,
          models, database access, validation, views, middleware, background
          services, and an asynchronous HTTP runtime.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/docs"
            className="rounded-md bg-precision-blue px-5 py-3 text-sm font-semibold text-pearl-white transition hover:bg-royal-blue"
          >
            Read the documentation
          </Link>
          <a
            href="https://github.com/justinangeloperez327/gungnir"
            className="rounded-md border border-soft-silver/20 px-5 py-3 text-sm font-semibold text-soft-silver transition hover:border-soft-silver/40 hover:text-pearl-white"
          >
            View source
          </a>
        </div>

        <div className="mt-12 h-px w-40 bg-gradient-to-r from-royal-blue via-precision-blue to-transparent" />
      </section>
    </main>
  );
}
