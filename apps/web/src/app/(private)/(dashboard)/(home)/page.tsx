import React from "react";

import { AboutMeHome } from "./_components/about-me-home/about-me-home";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { LatestArticles } from "./_components/latest-articles";

export default async function DashboardPage() {
  return (
    <React.Fragment>
      <AboutMeHome />
      <Separator />
      <LatestArticles />
    </React.Fragment>
  );
}
