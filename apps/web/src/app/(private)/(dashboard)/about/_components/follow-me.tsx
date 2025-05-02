"use client";

import { SocialMediasRender } from "@/components/social-medias/social-medias-render";
import { GetAboutMe } from "@/components/data/get-about-me";
import { ErrorComponent } from "@/components/errors/error-component";

import { Title } from "@personal-blog/ui/title.tsx";
import { SocialMediaRenderSkeleton } from "@/components/social-medias/social-medias-render-skeleton";

export function FollowMe() {
  return (
    <div className="flex flex-col gap-y-200">
      <Title size="lg">Follow me</Title>
      <GetAboutMe
        component={(data) => <SocialMediasRender medias={data.socialMedias} />}
        errorComponent={() => (
          <ErrorComponent title="Failed to load social media" size="sm" />
        )}
        loadingComponent={() => <SocialMediaRenderSkeleton />}
      />
    </div>
  );
}
