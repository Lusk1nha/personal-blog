"use client";

import useSWR from "swr";

import { ArticleContent } from "@/components/article/article-content";
import { getAboutMeHome } from "./about-me-home.fetch";
import { AboutMeHomeContent } from "./about-me-home-content";

import { AboutMeHomeSkeleton } from "./about-me-home-skeleton";
import { ErrorComponent } from "@/components/errors/error-component";

const REQUEST_URL = "/api/user/me/info";

export function AboutMeHome() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    REQUEST_URL,
    () => getAboutMeHome(REQUEST_URL)
  );

  if (error)
    return (
      <ErrorComponent
        title="Failed to load about me"
        description={error?.message}
      />
    );

  if (isLoading || isValidating || !data) return <AboutMeHomeSkeleton />;

  return (
    <ArticleContent>
      <AboutMeHomeContent data={data} />
    </ArticleContent>
  );
}
