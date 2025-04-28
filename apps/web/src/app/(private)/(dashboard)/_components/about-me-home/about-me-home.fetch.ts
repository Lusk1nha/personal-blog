import { getApiRequest } from "@/shared/common/request.common";
import { AboutMeData } from "@/shared/entities/about-me-entity";

export async function getAboutMeHome(endpoint: string): Promise<AboutMeData> {
  const requestUrl = getApiRequest(endpoint);

  const response = await fetch(requestUrl, {
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
