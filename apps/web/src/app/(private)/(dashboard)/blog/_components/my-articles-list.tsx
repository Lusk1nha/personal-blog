import { GetArticleList } from "@/components/article-list-render/get-article-list";

export function MyArticleList() {
  return (
    <GetArticleList mustGetAllArticles={true} mustShowDescription={true} />
  );
}
