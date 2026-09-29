import Image from "next/image";
import Link from "next/link";
import { DocsSearch } from "./DocsSearch";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gungnir-silver bg-gungnir-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1540px] flex-wrap items-center gap-4 px-5 py-3 sm:px-8 lg:h-[68px] lg:flex-nowrap lg:py-0">
        <div className="flex shrink-0 items-center gap-5">
          <Link href="/" aria-label="Gungnir home">
            <Image
              src="/images/logo-alt.png"
              alt="Gungnir"
              width={220}
              height={88}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
          <span className="hidden border-l border-gungnir-silver pl-5 text-sm font-medium text-ink/65 sm:inline">
            Documentation
          </span>
        </div>

        <div className="order-3 w-full lg:order-none lg:mx-auto lg:w-auto lg:flex-1 lg:px-8">
          <DocsSearch />
        </div>

        <a
          href="https://github.com/justinangeloperez327/gungnir"
          className="ml-auto shrink-0 text-sm font-medium text-ink transition-colors hover:text-gungnir-blue"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
