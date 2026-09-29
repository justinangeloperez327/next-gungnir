import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPage } from "@/components/docs/DocPage";
import { docsPages, docsSlugs } from "@/components/docs/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return docsSlugs
    .filter((slug) => slug !== "introduction")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = docsPages[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function DocumentationTopic({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = docsPages[slug];

  if (!page || slug === "introduction") {
    notFound();
  }

  return <DocPage slug={slug} page={page} />;
}
