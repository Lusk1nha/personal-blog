"use client";

import { SystemRoutesEnum } from "@/shared/common/routes.common";
import { Button } from "@personal-blog/ui/button.tsx";
import { Title } from "@personal-blog/ui/title.tsx";
import Link from "next/link";

export function GoToAllArticlesAction() {
  return (
    <Link href={SystemRoutesEnum.BLOG}>
      <Button
        type="button"
        variant="outline"
        className="w-fit border-2 px-1 border-system-blue-800 dark:border-0 dark:border-b-2 dark:!rounded-0 dark:!min-h-6"
        title="Show more articles"
      >
        <Title size="xs">View All Articles</Title>
      </Button>
    </Link>
  );
}
