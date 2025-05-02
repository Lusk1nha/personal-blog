"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Text } from "@personal-blog/ui/text.tsx";
import {
  ItemFadeInAnimate,
  ListFadeInAnimate,
  NumberedListFadeInAnimate,
} from "../utilities/animation";

import { Title } from "@personal-blog/ui/title.tsx";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { Strong } from "@personal-blog/ui/strong.tsx";
import { BlockQuote } from "@personal-blog/ui/blockquote.tsx";
import Image from "next/image";
import { cn } from "@personal-blog/utils/cn";

interface MarkdownGeneratorProps {
  children: string;
}

export function MarkdownGenerator(props: Readonly<MarkdownGeneratorProps>) {
  const { children = "" } = props;

  return (
    <ListFadeInAnimate className="flex flex-col gap-y-300">
      <ReactMarkdown
        components={{
          ol: ({ node, ...props }) => {
            return (
              <NumberedListFadeInAnimate className="flex flex-col gap-y-150 !list-decimal pl-8">
                {props.children}
              </NumberedListFadeInAnimate>
            );
          },
          ul: ({ node, ...props }) => {
            return (
              <ListFadeInAnimate className="flex flex-col gap-y-150 !list-disc pl-5">
                {props.children}
              </ListFadeInAnimate>
            );
          },
          li: ({ node, ...props }) => {
            return (
              <ItemFadeInAnimate>
                <Text size="lg">{props.children}</Text>
              </ItemFadeInAnimate>
            );
          },
          p: ({ node, ...props }) => {
            return <Text size="lg">{props.children}</Text>;
          },
          b: ({ node, ...props }) => {
            return <Strong>{props.children}</Strong>;
          },
          strong: ({ node, ...props }) => {
            return <Strong>{props.children}</Strong>;
          },
          h1: ({ node, ...props }) => {
            return <Title size="3xl">{props.children}</Title>;
          },
          h2: ({ node, ...props }) => {
            return <Title size="2xl">{props.children}</Title>;
          },
          h3: ({ node, ...props }) => {
            return <Title size="xl">{props.children}</Title>;
          },
          h4: ({ node, ...props }) => {
            return <Title size="lg">{props.children}</Title>;
          },
          h5: ({ node, ...props }) => {
            return <Title size="sm">{props.children}</Title>;
          },
          h6: ({ node, ...props }) => {
            return <Title size="xs">{props.children}</Title>;
          },
          blockquote: ({ node, ...props }) => {
            return (
              <ItemFadeInAnimate className="flex flex-col gap-y-150">
                <BlockQuote>{props.children}</BlockQuote>
              </ItemFadeInAnimate>
            );
          },
          img: ({ node, ...props }) => {
            return (
              <Image
                className="rounded-12"
                src={props.src?.toString() || ""}
                alt={props.alt || ""}
                title={props.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            );
          },
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                customStyle={{
                  background: "",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <code
                {...rest}
                className={cn(
                  className,
                  "system-preset-9 bg-[#EFEDEB] rounded-12 px-1"
                )}
              >
                {children}
              </code>
            );
          },
          hr: () => {
            return <Separator />;
          },
          br: () => {
            return (
              <React.Fragment>
                <br />
                <br />
              </React.Fragment>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </ListFadeInAnimate>
  );
}
