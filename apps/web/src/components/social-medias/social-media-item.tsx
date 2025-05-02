import {
  SocialMediaData,
  SocialMediaEntity,
} from "@/shared/entities/social-media.entity";
import { buttonVariants } from "@personal-blog/ui/button.tsx";
import Link from "next/link";

interface SocialMediaItemProps {
  media: SocialMediaData;
}

export function SocialMediaItem(props: Readonly<SocialMediaItemProps>) {
  const { media } = props;
  const socialMedia = new SocialMediaEntity(media);

  return (
    <Link
      className={buttonVariants({
        size: "lg",
      })}
      href={socialMedia.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <socialMedia.icon className="w-4 h-4" />
    </Link>
  );
}
