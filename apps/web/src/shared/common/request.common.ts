export function getApiRequest(endpoint: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const url = new URL(endpoint, baseUrl).toString();

  return url;
}
