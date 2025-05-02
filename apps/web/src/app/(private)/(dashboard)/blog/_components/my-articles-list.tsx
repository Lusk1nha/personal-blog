"use client";

import { GetArticleList } from "@/components/data/get-article-list";
import { ArticleData } from "@/shared/entities/article.entity";

const REQUEST_URL = "/api/articles/all";

async function getArticles(): Promise<ArticleData[]> {
  const response = await fetch(REQUEST_URL, {
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

export function MyArticleList() {
  return (
    <GetArticleList
      apiKey={REQUEST_URL}
      promise={getArticles}
      mustShowDescription={true}
    />
  );
}
