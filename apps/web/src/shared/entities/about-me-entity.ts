import { SocialMediaData, SocialMediaEntity } from "./social-media.entity";

export interface AboutMeData {
  title: string;
  description: string;
  socialMedias: SocialMediaData[];
}

export class AboutMeEntity {
  private _title: string;
  private _description: string | null;
  private _socialMedias: SocialMediaEntity[];

  constructor(data: AboutMeData) {
    this._validateTitle(data.title);

    this._title = data.title;
    this._description = data.description;
    this._socialMedias = data.socialMedias.map(
      (socialMedia) => new SocialMediaEntity(socialMedia)
    );
  }

  private _validateTitle(title: string) {
    if (!title) throw new Error("Title is required");
    if (title.length < 3)
      throw new Error("Title must be at least 3 characters long");
    if (title.length > 100)
      throw new Error("Title must be at most 100 characters long");
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get socialMedias() {
    return this._socialMedias;
  }
}
