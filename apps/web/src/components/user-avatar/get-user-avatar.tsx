"use client";

import useSWR from "swr";

import { UserAvatar } from "./user-avatar";
import { getUserAvatar } from "./get-user-avatar.fetch";
import { UserAvatarSkeleton } from "./user-avatar-skeleton";

const REQUEST_URL = "/api/user/me/photo";

export function GetUserAvatar() {
  const {
    data: userphoto,
    error,
    isLoading,
  } = useSWR(REQUEST_URL, () => getUserAvatar(REQUEST_URL));

  if (error) return <div>Failed to load user photo</div>;
  if (isLoading || !userphoto) return <UserAvatarSkeleton />;

  return <UserAvatar name="Paulina" imageUrl={userphoto} />;
}
