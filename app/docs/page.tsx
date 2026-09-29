import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { docsPages } from "@/components/docs/content";

export const metadata: Metadata = {
  title: "Documentation",
  description: docsPages.introduction.description,
};

export default function DocumentationIndex() {
  return <DocPage slug="introduction" page={docsPages.introduction} />;
}
