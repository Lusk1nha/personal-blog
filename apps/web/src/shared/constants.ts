import { SystemRoutesEnum, SystemRouteType } from "./common/routes.common";

export const APP_NAME = "Personal Blog" as const satisfies string;
export const APP_DESCRIPTION = "A personal blog";

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
