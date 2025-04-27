import { Avatar } from "@personal-blog/ui/avatar.tsx";
import Image from "next/image";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
}

export function UserAvatar(props: Readonly<UserAvatarProps>) {
  const { name, imageUrl } = props;

  return (
    <Avatar
      className="h-10 w-10"
      variant="default"
      size="default"
      src={imageUrl}
      alt={name}
    />
  );
}
