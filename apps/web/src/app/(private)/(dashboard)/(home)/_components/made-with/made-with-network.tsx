"use client";

import { ItemFadeInAnimate } from "@/components/utilities/animation";
import { SocialMediaEntity } from "@/shared/entities/social-media.entity";
import { buttonVariants } from "@personal-blog/ui/button.tsx";
import Link from "next/link";

interface MadeWithNetworkProps {
  network: SocialMediaEntity;
}

export function MadeWithNetwork(props: Readonly<MadeWithNetworkProps>) {
  const { network } = props;

  return (
    <>
      <ItemFadeInAnimate key={network.name}>
        <Link
          className={buttonVariants({
            size: "fit",
            variant: "ghost",
          })}
          href={network.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <network.icon className="h-4 w-4" />
        </Link>
      </ItemFadeInAnimate>
    </>
  );
}
