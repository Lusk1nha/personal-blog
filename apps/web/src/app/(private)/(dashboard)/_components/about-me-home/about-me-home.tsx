import { ArticleContent } from "@/components/article/article-content";
import { getAboutMeHome } from "./about-me-home.fetch";
import { AboutMeHomeContent } from "./about-me-home-content";

export async function AboutMeHome() {
  const aboutMeData = await getAboutMeHome();

  return (
    <ArticleContent>
      <AboutMeHomeContent data={aboutMeData} />
    </ArticleContent>
  );
}
