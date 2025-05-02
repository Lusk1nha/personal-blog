"use client";

import { ArticleContent } from "@/components/article/article-content";
import { AboutMeHomeContent } from "./about-me-home-content";

import { AboutMeHomeSkeleton } from "./about-me-home-skeleton";
import { ErrorComponent } from "@/components/errors/error-component";

import { GetAboutMe } from "@/components/data/get-about-me";

export function AboutMeHome() {
  return (
    <ArticleContent>
      <GetAboutMe
        component={(data) => <AboutMeHomeContent data={data} />}
        errorComponent={() => (
          <ErrorComponent
            title="Failed to load about me"
            description="Please try again later."
          />
        )}
        loadingComponent={() => <AboutMeHomeSkeleton />}
      />
    </ArticleContent>
  );
}
