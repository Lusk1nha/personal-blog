import React from "react";

import { Separator } from "@personal-blog/ui/separator.tsx";
import { BlogPageInfo } from "./_components/page-info";
import { MyArticleList } from "./_components/my-articles-list";

export default function BlogPage() {
  return (
    <React.Fragment>
      <BlogPageInfo />
      <Separator />
      <MyArticleList />
    </React.Fragment>
  );
}
