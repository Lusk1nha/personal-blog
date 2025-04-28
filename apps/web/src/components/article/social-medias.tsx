"use client";

import { buttonVariants } from "@personal-blog/ui/button.tsx";
import { ItemFadeInAnimate, ListFadeInAnimate } from "../utilities/animation";
import Link from "next/link";
import { SocialMediaEntity } from "@/shared/entities/social-media.entity";

interface SocialMediasProps {
  medias: SocialMediaEntity[];
}

export function SocialMedias(props: Readonly<SocialMediasProps>) {
  const { medias } = props;

  if (!medias || medias?.length === 0) {
    return null;
  }

  return (
    <ListFadeInAnimate className="flex gap-x-150 flex-wrap items-center">
      {medias.map((socialMedia) => (
        <ItemFadeInAnimate key={socialMedia.name}>
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
        </ItemFadeInAnimate>
      ))}
    </ListFadeInAnimate>
  );
}
