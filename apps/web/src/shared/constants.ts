import { SystemRoutesEnum, SystemRouteType } from "./common/routes.common";
import { SocialMediaData } from "./entities/social-media.entity";

export const APP_NAME = "Personal Blog" as const satisfies string;
export const APP_DESCRIPTION = "A personal blog";
export const APP_ARTICLES_TO_SHOW = 5 as const satisfies number;
export const APP_ENVIRONMENT = process.env.NEXT_PUBLIC_APP_ENVIRONMENT as
  | "development"
  | "production"
  | "staging";
export const APP_API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const SYSTEM_ROUTES: SystemRouteType[] = [
  {
    name: "Home",
    description: "The home page of the blog.",
    path: SystemRoutesEnum.HOME,
  },
  {
    name: "Blog",
    description: "The blog page of the blog.",
    path: SystemRoutesEnum.BLOG,
  },
  {
    name: "About",
    description: "The about page of the blog.",
    path: SystemRoutesEnum.ABOUT,
  },
  {
    name: "Newsletter",
    description: "The newsletter page of the blog.",
    path: SystemRoutesEnum.NEWSLETTER,
  },
];

export const SYSTEM_NETWORKS: SocialMediaData[] = [
  {
    name: "twitter",
    url: "https://twitter.com",
  },
  {
    name: "github",
    url: "https://github.com/lusk1nha",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/olucaspedro",
  },
  {
    name: "frontendmentor",
    url: "https://www.frontendmentor.io/profile/Lusk1nha",
  },
];
