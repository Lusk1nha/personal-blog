import { getApiRequest } from "@/shared/common/request.common";
import { ArticleData } from "@/shared/entities/article.entity";

export async function getLatestArticles(): Promise<ArticleData[]> {
  const endpoint = getApiRequest("/api/articles/latest");

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}
