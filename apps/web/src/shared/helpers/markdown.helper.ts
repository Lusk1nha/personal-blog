import {
  markdownComponentMap,
  MarkdownComponentProps,
  MarkdownType,
} from "../common/markdown.common";

export function getArrayByBreakLines(content: string) {
  const lines = content.split("\n").filter((line) => line.trim() !== "");
  return lines.map((line) => line.trim());
}

export function getComponentByMarkdownType(
  type: MarkdownType,
  componentProps: MarkdownComponentProps
) {
  const component = markdownComponentMap[type];

  if (!component) {
    throw new Error(`Component for type "${type}" not found`);
  }

  return component(componentProps);
}
