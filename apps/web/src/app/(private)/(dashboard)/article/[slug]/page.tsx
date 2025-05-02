import React from "react";

import { SYSTEM_ARTICLES } from "@/shared/mocks";
import { ArticleHeader } from "./_components/article-header";
import { ArticleMarkdown } from "./_components/article-markdown";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

async function getArticleBySlug(slug: string) {
  const article = SYSTEM_ARTICLES.find((article) => article.slug === slug);

  if (!article) {
    throw new Error("Article not found");
  }

  return article;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  return (
    <React.Fragment>
      <ArticleHeader data={article} />
      <ArticleMarkdown content={article.content} />
    </React.Fragment>
  );
}
