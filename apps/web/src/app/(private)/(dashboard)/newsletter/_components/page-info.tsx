"use client";

import { ArticleHeaderTitle } from "@/components/article/article-header-title";
import { ErrorComponent } from "@/components/errors/error-component";
import { FadeAnimate } from "@/components/utilities/animation";
import { Text } from "@personal-blog/ui/text.tsx";
import { Title } from "@personal-blog/ui/title.tsx";
import { ErrorBoundary } from "react-error-boundary";

export function NewsletterPageInfo() {
  return (
    <ErrorBoundary
      fallback={<ErrorComponent title="Error to render page info" />}
    >
      <div className="flex flex-col gap-y-200">
        <ArticleHeaderTitle mustAddUnderline={false} direction="up">
          Newsletter
        </ArticleHeaderTitle>

        <FadeAnimate>
          <Text size="lg">
            Want to stay updated on my latest articles, coding tutorials, and
            personal adventures? Sign up for my newsletter! It’s a simple way to
            keep track of new posts and occasional coding tips I discover. Just
            drop your email in the sign-up box, and I’ll send you updates
            whenever there’s something new to share.
          </Text>
        </FadeAnimate>

        <FadeAnimate>
          <Title size="sm">
            I’d love to have you along for the ride and also hear about your own
            journey!
          </Title>
        </FadeAnimate>
      </div>
    </ErrorBoundary>
  );
}
