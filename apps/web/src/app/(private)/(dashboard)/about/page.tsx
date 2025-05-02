import React from "react";
import { FollowMe } from "./_components/follow-me";
import { AboutPageContent } from "./_components/page-content";
import { AboutPageInfo } from "./_components/page-info";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-300 pb-400">
      <AboutPageInfo />
      <AboutPageContent />
      <FollowMe />
    </div>
  );
}
