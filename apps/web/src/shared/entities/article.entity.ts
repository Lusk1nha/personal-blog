export interface ArticleData {
  title: string;
  slug: string;
  publishedAt: string;
  description?: string;
  content: string;
}

export class ArticleEntity {
  private _title: string;
  private _slug: string;
  private _publishedAt: Date;
  private _description: string | null;
  private _content: string;

  constructor(article: ArticleData) {
    this._validatePublishedAt(article.publishedAt);

    this._title = article.title;
    this._slug = article.slug;
    this._publishedAt = new Date(article.publishedAt);
    this._description = article.description || null;
    this._content = article.content;
  }

  private _validatePublishedAt(publishedAt: string) {
    if (!publishedAt) {
      throw new Error("Published date is required");
    }

    const date = new Date(publishedAt);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid published date format");
    }

    if (date > new Date()) {
      throw new Error("Published date cannot be in the future");
    }
  }

  get title(): string {
    return this._title;
  }

  get slug(): string {
    return this._slug;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  get description(): string | null {
    return this._description;
  }

  get content(): string {
    return this._content;
  }
}
