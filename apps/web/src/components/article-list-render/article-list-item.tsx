"use client";

import { SystemRoutesEnum } from "@/shared/common/routes.common";
import { ArticleData, ArticleEntity } from "@/shared/entities/article.entity";
import { Text } from "@personal-blog/ui/text.tsx";
import { Title } from "@personal-blog/ui/title.tsx";
import Link from "next/link";

interface ArticleListItemProps {
  data: ArticleData;
  mustShowDescription?: boolean;
}

export function ArticleListItem(props: Readonly<ArticleListItemProps>) {
  const { data, mustShowDescription } = props;

  const article = new ArticleEntity(data);

  const path = SystemRoutesEnum.ARTICLE.replace(":slug", article.slug);

  return (
    <div className="flex flex-col gap-y-100">
      <Link
        className="hover:opacity-70 focus:outline-none focus:ring-2 ring-system-blue-800 cursor-pointer rounded-8"
        href={path}
      >
        <Title size="sm">{article.title}</Title>
      </Link>

      <Text size="italic">{article.formattedPublishedAt}</Text>

      {mustShowDescription && article?.description && (
        <Text size="lg">{article.description}</Text>
      )}
    </div>
  );
}
