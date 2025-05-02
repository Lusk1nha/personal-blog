import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { Text } from "@personal-blog/ui/text.tsx";

export function BlogPageInfo() {
  return (
    <div className="flex flex-col gap-y-075">
      <ArticleHeaderTitle direction="up">My Articles</ArticleHeaderTitle>
      <Text size="lg">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </Text>
    </div>
  );
}
