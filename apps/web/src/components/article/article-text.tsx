"use client";

import { Text } from "@personal-blog/ui/text.tsx";
import { FadeAnimate } from "../utilities/animation";

interface ArticleTextProps {
  children: React.ReactNode;
}

export function ArticleText(props: Readonly<ArticleTextProps>) {
  const { children } = props;
  return (
    <FadeAnimate>
      <Text size="lg">{children}</Text>
    </FadeAnimate>
  );
}
