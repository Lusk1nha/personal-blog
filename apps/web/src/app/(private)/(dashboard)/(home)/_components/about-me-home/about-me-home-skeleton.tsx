"use client";

import { ArticleContent } from "@/components/article/article-content";
import { generateArrayByLength } from "@/shared/helpers/array.helper";
import { Skeleton } from "@personal-blog/ui/skeleton.tsx";

export function AboutMeHomeSkeleton() {
  return (
    <ArticleContent>
      <Skeleton className="w-1/2 h-10" />

      <Skeleton className="h-[140px] w-full" />
      <Skeleton className="h-[80px] w-full" />

      <div className="flex gap-x-150 flex-wrap items-center">
        {generateArrayByLength(4, () => "skeleton").map((value, index) => (
          <Skeleton
            key={`${AboutMeHomeSkeleton.name}.${index}`}
            className="min-h-10 min-w-10 rounded-10"
          />
        ))}
      </div>
    </ArticleContent>
  );
}
