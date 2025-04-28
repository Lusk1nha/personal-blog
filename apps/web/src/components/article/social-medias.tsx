"use client";

import { Button } from "@personal-blog/ui/button.tsx";
import { FadeAnimate } from "../utilities/animation";
import Link from "next/link";
import Image from "next/image";

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
}

interface SocialMediasProps {
  medias: SocialMedia[];
}

export function SocialMedias(props: Readonly<SocialMediasProps>) {
  const { medias = [] } = props;

  if (!medias || medias?.length === 0) {
    return null;
  }

  return (
    <FadeAnimate className="flex gap-x-150 flex-wrap items-center">
      {medias.map((socialMedia) => (
        <Link key={socialMedia.name} href={socialMedia.url} target="_blank">
          <Button size="lg">
            <Image
              src={socialMedia.icon}
              alt={socialMedia.name}
              width={16}
              height={16}
            />
          </Button>
        </Link>
      ))}
    </FadeAnimate>
  );
}
