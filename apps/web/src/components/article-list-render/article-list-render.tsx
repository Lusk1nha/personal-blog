"use client";

import { ArticleData } from "@/shared/entities/article.entity";

import { ArticleListItem } from "./article-list-item";

import { ListFadeInAnimate, ItemFadeInAnimate } from "../utilities/animation";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../errors/error-component";

interface ArticleListRenderProps {
  articles: ArticleData[];
  mustShowDescription?: boolean;
}

export function ArticleListRender(props: Readonly<ArticleListRenderProps>) {
  const { articles, mustShowDescription } = props;

  return (
    <ListFadeInAnimate className="flex flex-col gap-y-300">
      {articles.map((article) => {
        return (
          <ErrorBoundary
            fallback={<ErrorComponent title="Error loading article" />}
            key={article.slug}
          >
            <ItemFadeInAnimate key={article.slug}>
              <ArticleListItem
                data={article}
                mustShowDescription={mustShowDescription}
              />
            </ItemFadeInAnimate>
          </ErrorBoundary>
        );
      })}
    </ListFadeInAnimate>
  );
}
