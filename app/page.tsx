import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="gungnir-shell min-h-screen text-pearl-white">
      <header className="border-b border-deep-steel/35 bg-graphite/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          <Link href="/" aria-label="Gungnir home" className="block">
            <Image
              src="/images/logo.png"
              alt="Gungnir"
              width={240}
              height={96}
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>
          <nav className="flex items-center gap-6 text-sm text-soft-silver">
            <Link
              href="/docs"
              className="transition hover:text-cyan-highlight"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/justinangeloperez327/gungnir"
              className="transition hover:text-cyan-highlight"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-highlight">
            Gungnir Framework
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-pearl-white sm:text-7xl lg:text-8xl">
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
              className="gungnir-blue-glow rounded-md bg-gradient-to-r from-royal-blue to-precision-blue px-5 py-3 text-sm font-semibold text-pearl-white transition hover:brightness-110"
            >
              Read the documentation
            </Link>
            <a
              href="https://github.com/justinangeloperez327/gungnir"
              className="rounded-md border border-deep-steel/70 bg-midnight-navy/35 px-5 py-3 text-sm font-semibold text-soft-silver transition hover:border-cyan-highlight/45 hover:text-pearl-white"
            >
              View source
            </a>
          </div>

          <div className="mt-12 h-px w-48 bg-gradient-to-r from-royal-blue via-precision-blue to-cyan-highlight" />
        </div>
      </section>
    </main>
  );
}
