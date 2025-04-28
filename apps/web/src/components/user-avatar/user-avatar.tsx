"use client";

import { Avatar } from "@personal-blog/ui/avatar.tsx";
import { FadeAnimate } from "../utilities/animation";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
}

export function UserAvatar(props: Readonly<UserAvatarProps>) {
  const { name, imageUrl } = props;

  return (
    <FadeAnimate>
      <Avatar
        className="h-10 w-10"
        variant="default"
        size="default"
        src={imageUrl}
        alt={name}
      />
    </FadeAnimate>
  );
}
