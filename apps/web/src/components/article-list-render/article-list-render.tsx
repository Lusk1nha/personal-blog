"use client";

import { ArticleData, ArticleEntity } from "@/shared/entities/article.entity";

import { useCallback, useMemo, useState } from "react";
import { ArticleListItem } from "./article-list-item";
import { APP_ARTICLES_TO_SHOW } from "@/shared/constants";
import { Button } from "@personal-blog/ui/button.tsx";
import { Title } from "@personal-blog/ui/title.tsx";

import { ListFadeInAnimate, ItemFadeInAnimate } from "../utilities/animation";

interface ArticleListRenderProps {
  articles: ArticleData[];
}

export function ArticleListRender(props: Readonly<ArticleListRenderProps>) {
  const { articles } = props;

  const [mustShowMore, setMustShowMore] = useState(false);

  const articlesToShow = useMemo(() => {
    if (articles.length <= APP_ARTICLES_TO_SHOW) {
      return articles;
    }

    if (mustShowMore) {
      return articles;
    }

    return articles.slice(0, APP_ARTICLES_TO_SHOW);
  }, [articles, mustShowMore]);

  const handleShowMore = useCallback(() => {
    setMustShowMore((prev) => !prev);
  }, [setMustShowMore]);

  return (
    <ListFadeInAnimate className="flex flex-col gap-y-300">
      {articlesToShow.map((article) => {
        return (
          <ItemFadeInAnimate key={article.slug}>
            <ArticleListItem article={new ArticleEntity(article)} />
          </ItemFadeInAnimate>
        );
      })}

      {articles.length >= APP_ARTICLES_TO_SHOW &&
        articlesToShow.length < articles.length && (
          <li>
            <Button
              type="button"
              variant="outline"
              className="w-fit border-2 px-1 border-system-blue-800 dark:border-0 dark:border-b-2 dark:!rounded-0 dark:!min-h-6"
              onClick={handleShowMore}
              title="Show more articles"
            >
              <Title size="xs">View All Articles</Title>
            </Button>
          </li>
        )}
    </ListFadeInAnimate>
  );
}
