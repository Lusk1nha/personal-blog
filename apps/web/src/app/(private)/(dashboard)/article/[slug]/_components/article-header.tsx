"use client";

import { FadeAnimate, SlideAnimate } from "@/components/utilities/animation";
import { ArticleData, ArticleEntity } from "@/shared/entities/article.entity";
import { Text } from "@personal-blog/ui/text.tsx";
import { Title } from "@personal-blog/ui/title.tsx";

interface ArticleHeaderProps {
  data: ArticleData;
}

export function ArticleHeader(props: Readonly<ArticleHeaderProps>) {
  const { data } = props;

  const article = new ArticleEntity(data);

  return (
    <div className="flex flex-col gap-y-150">
      <SlideAnimate direction="up">
        <Title size="3xl">{article.title}</Title>
      </SlideAnimate>
      <FadeAnimate>
        <Text size="italic">Published {article.formattedPublishedAt}</Text>
      </FadeAnimate>
    </div>
  );
}
