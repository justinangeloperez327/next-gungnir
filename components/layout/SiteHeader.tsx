import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Gungnir home" className="flex min-h-11 items-center">
          <Image
            src="/images/logo-alt.png"
            alt="Gungnir"
            width={240}
            height={96}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-2 text-sm font-medium text-foreground sm:gap-5"
        >
          <Link
            className="inline-flex min-h-11 items-center rounded px-2 transition-colors hover:text-gungnir-blue"
            href="/docs"
          >
            Documentation
          </Link>
          <a
            className="hidden min-h-11 items-center rounded px-2 transition-colors hover:text-gungnir-blue sm:inline-flex"
            href="https://github.com/justinangeloperez327/gungnir"
          >
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
