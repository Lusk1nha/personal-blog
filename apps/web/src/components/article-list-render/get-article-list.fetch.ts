import { ArticleData } from "@/shared/entities/article.entity";

export async function getLatestArticles(
  endpoint: string
): Promise<ArticleData[]> {
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
