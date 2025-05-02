"use client";

import { BlockQuote } from "@personal-blog/ui/blockquote.tsx";
import { Callout } from "@personal-blog/ui/callout.tsx";
import React from "react";

interface HandleBlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

type ValidCalloutType = "information" | "warning" | "tip";
type CalloutVariant = "tip" | "warning" | "info";

const calloutTypeMap: Record<ValidCalloutType, CalloutVariant> = {
  information: "info",
  warning: "warning",
  tip: "tip",
};

interface NodeElementProps {
  node?: { tagName?: string };
  children?: React.ReactNode;
}

const isNodeElement = (
  element: unknown
): element is React.ReactElement<NodeElementProps> => {
  return (
    React.isValidElement(element) &&
    typeof element.props === "object" &&
    element.props !== null &&
    "node" in element.props
  );
};

const getFirstParagraph = (
  children: React.ReactNode
): React.ReactElement<NodeElementProps> | null => {
  const firstParagraph = React.Children.toArray(children).find(
    (child): child is React.ReactElement<NodeElementProps> =>
      isNodeElement(child) && child.props.node?.tagName === "p"
  );

  return firstParagraph || null;
};

const getFirstStrongElement = (
  paragraph: React.ReactElement<NodeElementProps>
): React.ReactElement<NodeElementProps> | null => {
  const [firstChild] = React.Children.toArray(paragraph.props.children);

  if (!isNodeElement(firstChild)) return null;
  if (firstChild.props.node?.tagName !== "strong") return null;

  return firstChild;
};

const getStrongElementContent = (
  strongElement: React.ReactElement<NodeElementProps>
): string | null => {
  const [firstContent] = React.Children.toArray(strongElement.props.children);
  return typeof firstContent === "string" ? firstContent : null;
};

const getCalloutVariant = (content: string): CalloutVariant | null => {
  const [typePart] = content.split(":");
  const rawCalloutType = typePart?.toLowerCase().trim() as ValidCalloutType;

  if (!rawCalloutType || !calloutTypeMap[rawCalloutType]) return null;

  return calloutTypeMap[rawCalloutType];
};

export function HandleBlockquote({
  children,
  className,
}: HandleBlockquoteProps) {
  const firstParagraph = getFirstParagraph(children);
  if (!firstParagraph) {
    return <BlockQuote className={className}>{children}</BlockQuote>;
  }

  const firstStrongElement = getFirstStrongElement(firstParagraph);
  if (!firstStrongElement) {
    return <BlockQuote className={className}>{children}</BlockQuote>;
  }

  const strongContent = getStrongElementContent(firstStrongElement);
  if (!strongContent) {
    return <BlockQuote className={className}>{children}</BlockQuote>;
  }

  const variant = getCalloutVariant(strongContent);
  if (!variant) {
    return <BlockQuote className={className}>{children}</BlockQuote>;
  }

  return (
    <Callout variant={variant} className={className}>
      {children}
    </Callout>
  );
}
