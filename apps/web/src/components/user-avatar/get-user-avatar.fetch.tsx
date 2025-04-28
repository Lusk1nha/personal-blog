import { getApiRequest } from "@/shared/common/request.common";

export async function getUserAvatar(): Promise<string> {
  const endpoint = getApiRequest("/api/user/me/avatar");

  const response = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Image not found");
  }

  const imageUrl = await response.text();

  return imageUrl as string;
}
