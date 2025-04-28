"use client";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { ArticleText } from "@/components/article/article-text";
import { SocialMedias } from "@/components/article/social-medias";
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
      <ArticleHeaderTitle>{aboutMe.title}</ArticleHeaderTitle>

      <ArticleText>{aboutMe.description}</ArticleText>

      <SocialMedias medias={aboutMe.socialMedias} />
    </React.Fragment>
  );
}
