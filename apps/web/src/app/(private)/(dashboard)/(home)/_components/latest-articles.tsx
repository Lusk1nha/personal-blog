"use client";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { GetArticleList } from "@/components/data/get-article-list";
import { ArticleData } from "@/shared/entities/article.entity";

import { GoToAllArticlesAction } from "@/components/actions/go-to-all-articles-action";

const REQUEST_URL = "/api/articles/latest";

async function getLatestArticles(endpoint: string): Promise<ArticleData[]> {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}

export function LatestArticles() {
  return (
    <div className="flex flex-col gap-y-400">
      <ArticleHeaderTitle variant="right">Latest Articles</ArticleHeaderTitle>

      <GetArticleList apiKey={REQUEST_URL} promise={getLatestArticles} />

      <GoToAllArticlesAction />
    </div>
  );
}
