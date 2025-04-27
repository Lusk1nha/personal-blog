export enum SystemRoutesEnum {
  HOME = "/",
  ABOUT = "/about",
  BLOG = "/blog",
  NEWSLETTER = "/newsletter",
}

export type SystemRouteType = {
  name: string;
  description: string;
  path: SystemRoutesEnum;
};
