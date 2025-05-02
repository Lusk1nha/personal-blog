import { getComponentByMarkdownType } from "@/shared/helpers/markdown.helper";
import { ItemFadeInAnimate } from "../utilities/animation";
import { MarkdownType } from "@/shared/common/markdown.common";

interface MarkdownLineProps {
  index: number;
  content: string;
}

export function MarkdownLine(props: Readonly<MarkdownLineProps>) {
  const { index, content } = props;

  const component = getComponentByMarkdownType(MarkdownType.Text, {
    content,
  });

  return (
    <ItemFadeInAnimate key={index} className="flex-1">
      {component}
    </ItemFadeInAnimate>
  );
}
