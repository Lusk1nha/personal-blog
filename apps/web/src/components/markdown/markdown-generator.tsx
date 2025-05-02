"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import Image from "next/image";

import { Text } from "@personal-blog/ui/text.tsx";

import { Title } from "@personal-blog/ui/title.tsx";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { Strong } from "@personal-blog/ui/strong.tsx";
import { Table, TableCell } from "@personal-blog/ui/table.tsx";

import { cn } from "@personal-blog/utils/cn";
import { HandleBlockquote } from "./handle-blockquote";

interface MarkdownGeneratorProps {
  children: string;
}

export function MarkdownGenerator(props: Readonly<MarkdownGeneratorProps>) {
  const { children = "" } = props;

  return (
    <div className="flex flex-col gap-y-300">
      <ReactMarkdown
        components={{
          ol: ({ node, ...props }) => {
            return (
              <ol className="flex flex-col gap-y-150 !list-decimal pl-8">
                {props.children}
              </ol>
            );
          },
          ul: ({ node, ...props }) => {
            return (
              <ul className="flex flex-col gap-y-150 !list-disc pl-5">
                {props.children}
              </ul>
            );
          },
          li: ({ node, ...props }) => {
            return (
              <li>
                <Text size="lg">{props.children}</Text>
              </li>
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
            const { children, className } = props;
            return (
              <HandleBlockquote className={className}>
                {children}
              </HandleBlockquote>
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
                style={{ width: "100%", height: "auto" }}
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
              <code {...rest} className={cn(className, "system-preset-9")}>
                {children}
              </code>
            );
          },
          table: ({ node, ...props }) => {
            return <Table className="w-full">{props.children}</Table>;
          },
          th: ({ node, ...props }) => {
            return (
              <TableCell className="border text-left text-table-head-text p-2">
                <Title size="xs">{props.children}</Title>
              </TableCell>
            );
          },
          td: ({ node, ...props }) => {
            return (
              <TableCell className="border text-left text-table-head-text p-2">
                <Text>{props.children}</Text>
              </TableCell>
            );
          },
          hr: () => {
            return <Separator />;
          },
          br: () => {
            return <br />;
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
