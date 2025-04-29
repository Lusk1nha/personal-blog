import { AboutMeHome } from "./_components/about-me-home/about-me-home";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { LatestArticles } from "./_components/latest-articles";

import { MadeWith } from "../_components/made-with/made-with";
import { PageWrapper } from "../_components/page-wrapper";

export default function DashboardPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-y-300">
        <AboutMeHome />
        <Separator />
        <LatestArticles />
      </div>

      <div className="flex flex-col gap-y-300">
        <Separator />
        <MadeWith />
      </div>
    </PageWrapper>
  );
}
