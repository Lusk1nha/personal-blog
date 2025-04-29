import { AboutMeData } from "@/shared/entities/about-me-entity";

export async function getAboutMeHome(endpoint: string): Promise<AboutMeData> {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
