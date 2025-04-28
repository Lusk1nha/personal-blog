interface ArticleContentProps {
  children: React.ReactNode;
}

export function ArticleContent(props: Readonly<ArticleContentProps>) {
  const { children } = props;
  return (
    <article className="w-full flex flex-col gap-y-300">{children}</article>
  );
}
