export async function getUserAvatar(endpoint: string): Promise<string> {
  const response = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Image not found");
  }

  const imageUrl = await response.text();

  return imageUrl as string;
}
