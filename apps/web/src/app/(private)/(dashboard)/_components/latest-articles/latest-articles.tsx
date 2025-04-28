import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { ArticleListRender } from "@/components/article-list-render/article-list-render";
import { getLatestArticles } from "./latest-articles.fetch";

export async function LatestArticles() {
  const articles = await getLatestArticles();

  return (
    <div className="flex flex-col gap-y-300">
      <ArticleHeaderTitle variant="right">Latest Articles</ArticleHeaderTitle>
      <ArticleListRender articles={articles} />
    </div>
  );
}
