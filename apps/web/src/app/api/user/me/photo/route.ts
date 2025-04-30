import { getApiRequest } from "@/shared/common/request.common";
import { APP_ENVIRONMENT } from "@/shared/constants";

export async function GET(): Promise<Response> {
  const endpoint = getApiRequest("/assets/images/image-avatar.jpg");

  if (APP_ENVIRONMENT === "production") {
    return new Response("/assets/images/image-avatar.jpg", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

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

  return new Response(imageUrl, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
