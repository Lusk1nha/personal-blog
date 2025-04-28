import { getApiRequest } from "@/shared/common/request.common";

export async function getUserAvatar(endpoint: string): Promise<string> {
  const requestUrl = getApiRequest(endpoint);

  const response = await fetch(requestUrl, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Image not found");
  }

  const imageUrl = await response.text();

  return imageUrl as string;
}
