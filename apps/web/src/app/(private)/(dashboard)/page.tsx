import { AboutMeHome } from "./_components/about-me-home/about-me-home";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { LatestArticles } from "./_components/latest-articles/latest-articles";
import { Suspense } from "react";
import { AboutMeHomeSkeleton } from "./_components/about-me-home/about-me-home-skeleton";
import { LatestArticlesSkeleton } from "./_components/latest-articles/latest-articles-skeleton";

export default function DashboardPage() {
  return (
    <div className="flex flex-col px-2.5 py-8 md:py-12 pb-4 gap-y-400">
      <Suspense fallback={<AboutMeHomeSkeleton />}>
        <AboutMeHome />
      </Suspense>

      <Separator />

      <Suspense fallback={<LatestArticlesSkeleton />}>
        <LatestArticles />
      </Suspense>
    </div>
  );
}
