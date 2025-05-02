"use client";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { ArticleText } from "@/components/article/article-text";
import { SocialMediasRender } from "@/components/social-medias/social-medias-render";
import { AboutMeData, AboutMeEntity } from "@/shared/entities/about-me-entity";
import React from "react";

interface AboutMeHomeContentProps {
  data: AboutMeData;
}

export function AboutMeHomeContent(props: Readonly<AboutMeHomeContentProps>) {
  const { data } = props;

  const aboutMe = new AboutMeEntity(data);

  return (
    <React.Fragment>
      <ArticleHeaderTitle className="w-44 sm:w-fit" direction="up">
        {aboutMe.title}
      </ArticleHeaderTitle>
      <ArticleText>{aboutMe.description}</ArticleText>
      <SocialMediasRender medias={aboutMe.socialMedias} />
    </React.Fragment>
  );
}
