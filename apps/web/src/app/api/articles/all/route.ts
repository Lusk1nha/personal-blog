import { SYSTEM_ARTICLES } from "@/shared/constants";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = SYSTEM_ARTICLES;

  return new NextResponse(JSON.stringify(articles), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
