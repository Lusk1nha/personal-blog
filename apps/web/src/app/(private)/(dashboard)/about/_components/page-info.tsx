import { ArticleHeaderTitle } from "@/components/article/article-header-title";

export function AboutPageInfo() {
  return (
    <div className="flex flex-col gap-y-075">
      <ArticleHeaderTitle direction="up" mustAddUnderline>
        About
      </ArticleHeaderTitle>
    </div>
  );
}
