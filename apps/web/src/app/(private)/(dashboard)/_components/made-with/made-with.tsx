"use client";

import {
  FadeAnimate,
  ListFadeInAnimate,
} from "@/components/utilities/animation";

import { SYSTEM_NETWORKS } from "@/shared/constants";
import { SocialMediaEntity } from "@/shared/entities/social-media.entity";

import { Text } from "@personal-blog/ui/text.tsx";

import { MadeWithNetwork } from "./made-with-network";
import Link from "next/link";

export function MadeWith() {
  const socialMedias = SYSTEM_NETWORKS.map(
    (network) => new SocialMediaEntity(network)
  );

  return (
    <div className="flex items-center justify-between flex-wrap gap-200">
      <FadeAnimate>
        <Text>
          Made with ❤️ and ☕️ by{" "}
          <Link className="underline text-system-red-400 dark:text-system-blue-700" href="https://github.com/lusk1nha" target="_blank">
            Lucas Pedro
          </Link>
        </Text>
      </FadeAnimate>

      <ListFadeInAnimate className="flex gap-x-200">
        {socialMedias.map((network) => (
          <MadeWithNetwork key={network.name} network={network} />
        ))}
      </ListFadeInAnimate>
    </div>
  );
}
