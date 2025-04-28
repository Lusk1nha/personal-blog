"use client";

import {
  FadeAnimate,
  ItemFadeInAnimate,
  ListFadeInAnimate,
} from "@/components/utilities/animation";

import { SYSTEM_NETWORKS } from "@/shared/constants";
import { SocialMediaEntity } from "@/shared/entities/social-media.entity";
import { buttonVariants } from "@personal-blog/ui/button.tsx";
import { Text } from "@personal-blog/ui/text.tsx";
import Link from "next/link";

export function MadeWith() {
  const socialMedias = SYSTEM_NETWORKS.map(
    (network) => new SocialMediaEntity(network)
  );

  return (
    <div className="flex items-center justify-between flex-wrap gap-200">
      <FadeAnimate>
        <Text>Made with ❤️ and ☕️</Text>
      </FadeAnimate>

      <ListFadeInAnimate className="flex gap-x-200">
        {socialMedias.map((network) => (
          <MadeWithNetwork key={network.name} network={network} />
        ))}
      </ListFadeInAnimate>
    </div>
  );
}

interface MadeWithNetworkProps {
  network: SocialMediaEntity;
}

function MadeWithNetwork(props: Readonly<MadeWithNetworkProps>) {
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
