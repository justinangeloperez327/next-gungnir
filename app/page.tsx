export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#8db8ff]">
          Gungnir Framework
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          Modern C++ for expressive web development.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
          A framework designed around clear conventions, asynchronous execution,
          strong performance, and a Laravel-inspired developer experience.
        </p>
      </section>
    </main>
  );
}
