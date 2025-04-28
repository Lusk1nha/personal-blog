"use client";

import { Underline } from "@/components/utilities/underline";
import { Title } from "@personal-blog/ui/title.tsx";
import { SlideAnimate } from "../utilities/animation";

interface ArticleHeaderTitleProps {
  children: string;
}

export function ArticleHeaderTitle(props: Readonly<ArticleHeaderTitleProps>) {
  const { children } = props;
  return (
    <SlideAnimate className="w-fit relative">
      <Title className="z-20">{children}</Title>
      <Underline className="h-2 absolute left-0 bottom-1 z-0" />
    </SlideAnimate>
  );
}
