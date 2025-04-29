import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { GetArticleList } from "@/components/article-list-render/get-article-list";

export function LatestArticles() {
  return (
    <div className="flex flex-col gap-y-300">
      <ArticleHeaderTitle variant="right">Latest Articles</ArticleHeaderTitle>
      <GetArticleList />
    </div>
  );
}
