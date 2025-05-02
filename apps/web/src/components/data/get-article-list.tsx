"use client";

import { ErrorComponent } from "../errors/error-component";

import { ArticlesListSkeleton } from "../article-list-render/article-list-skeleton";
import { ArticleListRender } from "../article-list-render/article-list-render";
import { ArticleData } from "@/shared/entities/article.entity";

import { Requestor } from "../requestors/requestor";
import { ComponentRequestorOnlyPromiseProps } from "@/shared/common/requestors.common";

interface GetArticleListProps
  extends ComponentRequestorOnlyPromiseProps<ArticleData[]> {
  mustShowDescription?: boolean;
}

export function GetArticleList(props: Readonly<GetArticleListProps>) {
  const { apiKey, promise, mustShowDescription } = props;

  return (
    <Requestor<ArticleData[]>
      apiKey={apiKey}
      promise={promise}
      component={(data) => (
        <ArticleListRender
          articles={data}
          mustShowDescription={mustShowDescription}
        />
      )}
      errorComponent={(error) => (
        <ErrorComponent
          title="Failed to load latest articles"
          description={error?.message}
        />
      )}
      loadingComponent={() => <ArticlesListSkeleton />}
    />
  );
}
