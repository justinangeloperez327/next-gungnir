import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gungnir-silver/70 bg-gungnir-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Gungnir home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Gungnir"
            width={240}
            height={96}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm font-medium text-ink sm:gap-7">
          <Link className="transition-colors hover:text-gungnir-blue" href="/docs">
            Documentation
          </Link>
          <a
            className="transition-colors hover:text-gungnir-blue"
            href="https://github.com/justinangeloperez327/gungnir"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
