import { Separator } from "@personal-blog/ui/separator.tsx";
import { BlogPageInfo } from "./_components/page-info";
import { MyArticleList } from "./_components/my-articles-list";

export default function BlogPage() {
  return (
    <div className="flex flex-col px-2.5 py-8 md:pt-12 pb-4 gap-y-300">
      <BlogPageInfo />
      <Separator />
      <MyArticleList />
    </div>
  );
}
