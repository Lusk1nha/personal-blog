"use client";

import { ItemFadeInAnimate, ListFadeInAnimate } from "../utilities/animation";

import { SocialMediaData } from "@/shared/entities/social-media.entity";
import { SocialMediaItem } from "./social-media-item";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../errors/error-component";

interface SocialMediasRenderProps {
  medias: SocialMediaData[];
}

export function SocialMediasRender(props: Readonly<SocialMediasRenderProps>) {
  const { medias } = props;

  if (!medias || medias?.length === 0) {
    return null;
  }

  return (
    <ListFadeInAnimate className="flex gap-x-150 flex-wrap items-center">
      {medias.map((media) => {
        return (
          <ItemFadeInAnimate key={media.name}>
            <ErrorBoundary
              fallback={
                <ErrorComponent
                  title="Error to render social media"
                  size="icon"
                  className="min-h-10 min-w-10 rounded-10"
                />
              }
            >
              <SocialMediaItem media={media} />
            </ErrorBoundary>
          </ItemFadeInAnimate>
        );
      })}
    </ListFadeInAnimate>
  );
}
