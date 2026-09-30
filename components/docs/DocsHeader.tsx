import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { DocsSearch } from "./DocsSearch";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-5 py-2 sm:px-8 lg:h-16 lg:flex-nowrap lg:px-10 lg:py-0">
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/" aria-label="Gungnir home" className="flex min-h-11 items-center">
            <Image
              src="/images/logo-alt.png"
              alt="Gungnir"
              width={220}
              height={88}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
          <span className="hidden border-l border-line pl-4 text-sm font-medium text-muted sm:inline">
            Documentation
          </span>
        </div>

        <div className="order-3 w-full lg:order-none lg:mx-auto lg:w-auto lg:flex-1 lg:px-8">
          <DocsSearch />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href="https://github.com/justinangeloperez327/gungnir"
            className="hidden min-h-10 items-center rounded px-2 text-sm font-medium text-foreground transition-colors hover:text-gungnir-blue sm:inline-flex"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
