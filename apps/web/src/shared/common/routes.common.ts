export enum SystemRoutesEnum {
  HOME = "/",
  ABOUT = "/about",
  BLOG = "/blog",
  NEWSLETTER = "/newsletter",

  ARTICLE = "/article/:slug",
}

export type SystemRouteType = {
  name: string;
  description: string;
  path: SystemRoutesEnum;
};
