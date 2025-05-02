import { SYSTEM_ARTICLES } from "@/shared/mocks";

import { NextRequest, NextResponse } from "next/server";

interface GetArticleListParams {
  slug: string;
}

interface GetArticleRequest {
  params: Promise<GetArticleListParams>;
}

export async function GET(request: NextRequest, { params }: GetArticleRequest) {
  const { slug } = await params;

  console.log(request);

  if (!slug) {
    return new NextResponse(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const article = SYSTEM_ARTICLES.find((article) => article.slug === slug);

  if (!article) {
    return new NextResponse(JSON.stringify({ error: "Article not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new NextResponse(JSON.stringify(article), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
