"use client";

import useSWR from "swr";
import { ErrorComponent } from "../errors/error-component";
import { getLatestArticles } from "./get-article-list.fetch";
import { ArticlesListSkeleton } from "./article-list-skeleton";
import { ArticleListRender } from "./article-list-render";

const REQUEST_URL = "/api/articles/latest";

export function GetArticleList() {
  const {
    data: articles,
    error,
    isLoading,
  } = useSWR(REQUEST_URL, () => getLatestArticles(REQUEST_URL), {
    fallbackData: [],
  });

  if (error)
    return (
      <ErrorComponent
        title="Failed to load latest articles"
        description={error?.message}
      />
    );
  if (isLoading || !articles) return <ArticlesListSkeleton />;

  return <ArticleListRender articles={articles} />;
}
