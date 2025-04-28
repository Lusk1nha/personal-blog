"use client";

import useSWR from "swr";

import { ArticleContent } from "@/components/article/article-content";
import { getAboutMeHome } from "./about-me-home.fetch";
import { AboutMeHomeContent } from "./about-me-home-content";

import { AboutMeHomeSkeleton } from "./about-me-home-skeleton";

const REQUEST_URL = "/api/user/me/info";

export function AboutMeHome() {
  const { data, error, isLoading } = useSWR(REQUEST_URL, () =>
    getAboutMeHome(REQUEST_URL)
  );

  if (error) return <div>Failed to user info</div>;
  if (isLoading || !data) return <AboutMeHomeSkeleton />;

  return (
    <ArticleContent>
      <AboutMeHomeContent data={data} />
    </ArticleContent>
  );
}
