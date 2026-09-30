import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="Gungnir home" className="w-fit">
          <Image
            src="/images/logo-alt.png"
            alt="Gungnir"
            width={240}
            height={96}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
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
      </Container>
    </footer>
  );
}
