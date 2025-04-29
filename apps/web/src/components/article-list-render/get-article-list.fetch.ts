import { ArticleData } from "@/shared/entities/article.entity";

export async function getUserArticles(
  endpoint: string,
  getAllArticles: boolean = false
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
