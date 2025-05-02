import { Skeleton } from "@personal-blog/ui/skeleton.tsx";

export function SocialMediaRenderSkeleton() {
  return (
    <div className="flex gap-x-150 flex-wrap items-center">
      <Skeleton className="min-h-10 min-w-10 rounded-10" />
      <Skeleton className="min-h-10 min-w-10 rounded-10" />
      <Skeleton className="min-h-10 min-w-10 rounded-10" />
      <Skeleton className="min-h-10 min-w-10 rounded-10" />
    </div>
  );
}
