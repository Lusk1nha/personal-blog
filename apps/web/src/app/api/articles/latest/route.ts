import { SYSTEM_ARTICLES } from "@/shared/mocks";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const quantity = request.nextUrl.searchParams.get("quantity") ?? 5;

  const articles = SYSTEM_ARTICLES;

  const slicedArticles = articles.slice(0, Number(quantity));

  return new NextResponse(JSON.stringify(slicedArticles), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
