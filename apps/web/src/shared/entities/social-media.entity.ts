import {
  FrontendMentorIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@personal-blog/design-system/icons";

type AvailableSocials = "linkedin" | "github" | "twitter" | "frontendmentor";

export type SocialMediaData = {
  name: AvailableSocials;
  url: string;
};

export class SocialMediaEntity {
  private _name: AvailableSocials;
  private _url: string;

  constructor(data: SocialMediaData) {
    this._validateSocialMedia(data);

    this._name = data.name;
    this._url = data.url;
  }

  private _validateSocialMedia(data: SocialMediaData) {
    this._validateName(data.name);
  }

  private _validateName(name: string) {
    const availableNames: AvailableSocials[] = [
      "linkedin",
      "github",
      "twitter",
      "frontendmentor",
    ];

    if (!availableNames.includes(name as AvailableSocials)) {
      throw new Error(`Invalid social media name: ${name}`);
    }
  }

  get name() {
    return this._name;
  }

  get url() {
    return this._url;
  }

  get icon() {
    switch (this._name) {
      case "linkedin":
        return LinkedInIcon;
      case "github":
        return GitHubIcon;
      case "twitter":
        return TwitterIcon;
      case "frontendmentor":
        return FrontendMentorIcon;
      default:
        throw new Error(`Icon not found for social media: ${this._name}`);
    }
  }
}
