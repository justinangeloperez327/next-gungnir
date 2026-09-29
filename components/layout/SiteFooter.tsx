import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gungnir-silver bg-gungnir-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <Link href="/" aria-label="Gungnir home">
          <Image
            src="/images/logo.png"
            alt="Gungnir"
            width={240}
            height={96}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/70">
          <Link className="transition-colors hover:text-gungnir-blue" href="/docs">
            Documentation
          </Link>
          <a
            className="transition-colors hover:text-gungnir-blue"
            href="https://github.com/justinangeloperez327/gungnir"
          >
            GitHub
          </a>
          <span>v0.1.0 · Active development</span>
        </div>
      </div>
    </footer>
  );
}
