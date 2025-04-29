import { AboutMeData } from "@/shared/entities/about-me-entity";
import { SocialMediaData } from "@/shared/entities/social-media.entity";

export async function GET() {
  const socialMedias: SocialMediaData[] = [
    {
      name: "twitter",
      url: "https://twitter.com",
    },
    {
      name: "github",
      url: "https://github.com/lusk1nha",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/olucaspedro",
    },
    {
      name: "frontendmentor",
      url: "https://www.frontendmentor.io/profile/Lusk1nha",
    },
  ];

  const aboutMe: AboutMeData = {
    title: "Hi, I’m Paulina 👋",
    description: `I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls. \n\nI started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!`,
    socialMedias,
  };

  return new Response(JSON.stringify({ ...aboutMe, socialMedias }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
