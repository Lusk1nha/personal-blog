"use client";

import { generateArrayByLength } from "@/shared/helpers/array.helper";
import { Skeleton } from "@personal-blog/ui/skeleton.tsx";

export function ArticlesListSkeleton() {
  return (
    <ul className="flex flex-col gap-y-300">
      {generateArrayByLength(6, () => "skeleton").map((_, index) => (
        <li
          key={`${ArticlesListSkeleton.name}.${index}`}
          className="flex flex-col gap-y-100"
        >
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-1/3" />
        </li>
      ))}
    </ul>
  );
}
