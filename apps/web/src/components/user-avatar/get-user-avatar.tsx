"use client";

import useSWR from "swr";

import { UserAvatar } from "./user-avatar";
import { getUserAvatar } from "./get-user-avatar.fetch";
import { UserAvatarSkeleton } from "./user-avatar-skeleton";
import { ErrorComponent } from "../errors/error-component";

const REQUEST_URL = "/api/user/me/photo";

export function GetUserAvatar() {
  const {
    data: userphoto,
    error,
    isLoading,
  } = useSWR(REQUEST_URL, () => getUserAvatar(REQUEST_URL));

  if (error)
    return <ErrorComponent size="sm" title="Failed to load user photo" />;
  if (isLoading || !userphoto) return <UserAvatarSkeleton />;

  return <UserAvatar name="Paulina" imageUrl={userphoto} />;
}
