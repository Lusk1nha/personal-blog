"use client";

import { Underline } from "@/components/utilities/underline";
import { Title } from "@personal-blog/ui/title.tsx";
import { SlideAnimate } from "../utilities/animation";
import { cn } from "@personal-blog/utils/cn";

interface ArticleHeaderTitleProps {
  children: string;
  variant?: "default" | "right";
}

export function ArticleHeaderTitle(props: Readonly<ArticleHeaderTitleProps>) {
  const { children, variant = "default" } = props;
  return (
    <SlideAnimate className="w-fit flex relative">
      <Title className="z-20">{children}</Title>
      <Underline
        className={cn(
          " z-0 absolute",
          variant === "default"
            ? "w-full h-2 left-0 bottom-1 "
            : "w-2/12 h-1 left-[105%] bottom-2.5 z-0"
        )}
      />
    </SlideAnimate>
  );
}
