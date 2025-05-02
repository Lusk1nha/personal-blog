import { MarkdownGenerator } from "@/components/markdown/markdown-generator";

import { SYSTEM_ABOUT_ME_DESCRIPTION } from "@/shared/mocks";

export function AboutPageContent() {
  return <MarkdownGenerator>{SYSTEM_ABOUT_ME_DESCRIPTION}</MarkdownGenerator>;
}
