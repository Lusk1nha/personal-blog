import { AboutMeHome } from "@/components/home/about-me";
import { Separator } from "@personal-blog/ui/separator.tsx";

export default function DashboardPage() {
  return (
    <div className="flex flex-col px-2.5 py-8 md:py-12 pb-4 gap-y-300">
      <AboutMeHome />
      <Separator />
    </div>
  );
}
