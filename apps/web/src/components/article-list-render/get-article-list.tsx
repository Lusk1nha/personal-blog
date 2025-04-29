"use client";

import useSWR from "swr";
import { ErrorComponent } from "../errors/error-component";
import { getUserArticles } from "./get-article-list.fetch";
import { ArticlesListSkeleton } from "./article-list-skeleton";
import { ArticleListRender } from "./article-list-render";

interface GetArticleListProps {
  mustGetAllArticles?: boolean;
  mustShowDescription?: boolean;
}

const REQUEST_URL = "/api/articles/latest";

export function GetArticleList(props: Readonly<GetArticleListProps>) {
  const { mustGetAllArticles, mustShowDescription } = props;

  const {
    data: articles,
    error,
    isLoading,
  } = useSWR(REQUEST_URL, () =>
    getUserArticles(REQUEST_URL, mustGetAllArticles)
  );

  if (error)
    return (
      <ErrorComponent
        title="Failed to load latest articles"
        description={error?.message}
      />
    );
  if (isLoading || !articles) return <ArticlesListSkeleton />;

  return (
    <ArticleListRender
      articles={articles}
      mustShowDescription
      mustShowMore={false}
    />
  );
}
