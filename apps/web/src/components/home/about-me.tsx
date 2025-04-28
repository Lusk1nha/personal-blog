"use client";

import { ArticleContent } from "../article/article-content";
import { ArticleHeaderTitle } from "../article/article-header-title";
import { ArticleText } from "../article/article-text";
import { SocialMedia, SocialMedias } from "../article/social-medias";

const socialMedias: SocialMedia[] = [
  {
    name: "X",
    icon: "/assets/images/logo-x.svg",
    url: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: "/assets/images/logo-github.svg",
    url: "https://github.com/lusk1nha",
  },
  {
    name: "LinkedIn",
    icon: "/assets/images/logo-linkedin.svg",
    url: "https://www.linkedin.com/in/olucaspedro",
  },
  {
    name: "Frontend Mentor",
    icon: "/assets/images/logo-frontend-mentor.svg",
    url: "https://www.frontendmentor.io/profile/Lusk1nha",
  },
];

export function AboutMeHome() {
  return (
    <div>
      <ArticleContent>
        <ArticleHeaderTitle>Hi, I’m Paulina 👋</ArticleHeaderTitle>

        <ArticleText>
          I’m on a journey to become a front-end web developer. I love building
          little projects, trying out new coding techniques, and sharing what I
          learn along the way. When I’m not at my desk, you’ll find me reading,
          hiking through the mountains, or challenging myself on rock-climbing
          walls.
          <br />
          <br />I started this blog to document my progress, keep myself
          accountable, and hopefully inspire anyone else who’s learning to code.
          Welcome to my corner of the internet, and thanks for stopping by!
        </ArticleText>

        <SocialMedias medias={socialMedias} />
      </ArticleContent>
    </div>
  );
}
