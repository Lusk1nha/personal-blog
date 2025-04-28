"use client";

import useSWR from "swr";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { ArticleListRender } from "@/components/article-list-render/article-list-render";
import { getLatestArticles } from "./latest-articles.fetch";

import { LatestArticlesSkeleton } from "./latest-articles-skeleton";

const REQUEST_URL = "/api/articles/latest";

export function LatestArticles() {
  const {
    data: articles,
    error,
    isLoading,
  } = useSWR(REQUEST_URL, () => getLatestArticles(REQUEST_URL), {
    fallbackData: [],
  });

  if (error) return <div>Failed to load articles</div>;
  if (isLoading || !articles) return <LatestArticlesSkeleton />;

  return (
    <div className="flex flex-col gap-y-300">
      <ArticleHeaderTitle variant="right">Latest Articles</ArticleHeaderTitle>
      <ArticleListRender articles={articles} />
    </div>
  );
}
