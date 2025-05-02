"use client";

import { MarkdownGenerator } from "@/components/markdown/markdown-generator";
import { FadeAnimate } from "@/components/utilities/animation";

interface ArticleMarkdownProps {
  content: string;
  className?: string;
}

export function ArticleMarkdown(props: Readonly<ArticleMarkdownProps>) {
  const { content, className } = props;

  return (
    <FadeAnimate className={className}>
      <MarkdownGenerator>{content}</MarkdownGenerator>
    </FadeAnimate>
  );
}
