import React from "react";

import { ArticleHeader } from "./_components/article-header";
import { ArticleMarkdown } from "./_components/article-markdown";
import { getArticleBySlug } from "@/app/api/articles/[slug]/route";
import { ArticleData } from "@/shared/entities/article.entity";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

async function getServerArticleBySlug(slug: string): Promise<ArticleData> {
  const article = await getArticleBySlug(slug);

  if (!article) {
    throw new Error("Article not found");
  }

  return article;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = await getServerArticleBySlug(slug);

  return (
    <React.Fragment>
      <ArticleHeader data={article} />
      <ArticleMarkdown content={article.content} />
    </React.Fragment>
  );
}
