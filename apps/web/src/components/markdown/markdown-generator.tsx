"use client";

import { getArrayByBreakLines } from "@/shared/helpers/markdown.helper";
import { ListFadeInAnimate } from "../utilities/animation";
import { MarkdownLine } from "./markdown-line";

interface MarkdownGeneratorProps {
  content: string;
}

export function MarkdownGenerator(props: Readonly<MarkdownGeneratorProps>) {
  const { content = "" } = props;

  const separatedByBreakLines = getArrayByBreakLines(content);

  return (
    <ListFadeInAnimate className="flex flex-col gap-y-400">
      {separatedByBreakLines.map((line, index) => {
        return <MarkdownLine index={index} content={line} />;
      })}
    </ListFadeInAnimate>
  );
}
