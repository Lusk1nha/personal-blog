import { Text } from "@personal-blog/ui/text.tsx";
import { Title } from "@personal-blog/ui/title.tsx";
import { JSX } from "react";

export enum MarkdownInlineType {
  Text = "text",
  Heading = "heading",
  Heading2 = "heading2",
  Heading3 = "heading3",
  Heading4 = "heading4",
  Heading5 = "heading5",
  Heading6 = "heading6",
}

export enum MarkdownBlockType {
  Text = "text",
  Heading = "heading",
  Blockquote = "blockquote",
  CodeBlock = "codeblock",
  List = "list",
  ListItem = "listitem",
  Image = "image",
}

export enum MarkdownType {
  Text = "text",
  Heading = "heading",
}

export interface MarkdownComponentProps {
  content: string;
}

export const markdownComponentMap: Record<
  MarkdownType,
  (props: Readonly<MarkdownComponentProps>) => JSX.Element
> = {
  text: (props) => {
    const { content } = props;
    return <Text size="lg">{content}</Text>;
  },
  heading: (props) => {
    const { content } = props;
    return <Title>{content}</Title>;
  },
};
