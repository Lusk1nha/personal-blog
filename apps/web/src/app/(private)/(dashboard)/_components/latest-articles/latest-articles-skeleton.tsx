"use client";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { generateArrayByLength } from "@/shared/helpers/array.helper";
import { Skeleton } from "@personal-blog/ui/skeleton.tsx";

export function LatestArticlesSkeleton() {
  return (
    <div className="flex flex-col gap-y-300">
      <ArticleHeaderTitle variant="right">Latest Articles</ArticleHeaderTitle>

      <ul className="flex flex-col gap-y-300">
        {generateArrayByLength(6, () => "skeleton").map((_, index) => (
          <li
            key={`${LatestArticlesSkeleton.name}.${index}`}
            className="flex flex-col gap-y-100"
          >
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-1/3" />
          </li>
        ))}
      </ul>
    </div>
  );
}
