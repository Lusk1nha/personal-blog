"use client";

import { UserAvatar } from "@/components/user-avatar/user-avatar";
import { UserAvatarSkeleton } from "@/components/user-avatar/user-avatar-skeleton";
import { ErrorComponent } from "../errors/error-component";
import { Requestor } from "../requestors/requestor";

const REQUEST_URL = "/api/user/me/photo";

async function getUserAvatar(endpoint: string): Promise<string> {
  const response = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Image not found");
  }

  const imageUrl = await response.text();

  return imageUrl as string;
}

export function GetUserAvatar() {
  return (
    <Requestor
      apiKey={REQUEST_URL}
      promise={getUserAvatar}
      component={(data) => <UserAvatar name="Paulina" imageUrl={data} />}
      errorComponent={() => (
        <ErrorComponent size="sm" title="Failed to load user photo" />
      )}
      loadingComponent={() => <UserAvatarSkeleton />}
    />
  );
}
