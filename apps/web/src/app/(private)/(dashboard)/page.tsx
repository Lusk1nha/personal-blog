import { AboutMeHome } from "./_components/about-me-home/about-me-home";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { LatestArticles } from "./_components/latest-articles/latest-articles";

import { MadeWith } from "./_components/made-with/made-with";

export default function DashboardPage() {
  return (
    <div className="flex flex-col px-2.5 py-8 md:pt-12 pb-4 gap-y-400">
      <AboutMeHome />
      <Separator />
      <LatestArticles />
      <Separator />
      <MadeWith />
    </div>
  );
}
