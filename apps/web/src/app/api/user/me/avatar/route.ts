import { delayMs } from "@/shared/common/mock.common";
import { getApiRequest } from "@/shared/common/request.common";

export async function GET(): Promise<Response> {
  const endpoint = getApiRequest("/assets/images/image-avatar.jpg");

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "image/jpeg",
    },
  });

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const base64String = btoa(
    new Uint8Array(arrayBuffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  const imageUrl = `data:image/jpeg;base64,${base64String}`;

  await delayMs(1000); // Simulate a delay of 1 second

  return new Response(imageUrl, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
