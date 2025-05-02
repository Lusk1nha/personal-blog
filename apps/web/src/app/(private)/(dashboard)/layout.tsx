import { Navbar } from "@/components/navbar/navbar";
import { NextArtefactProps } from "@/shared/common/next.types";
import { PageWrapper } from "./_components/page-wrapper";
import { Separator } from "@personal-blog/ui/separator.tsx";
import { MadeWith } from "./_components/made-with/made-with";

export default function DashboardLayout(props: Readonly<NextArtefactProps>) {
  const { children } = props;

  return (
    <div
      data-testid="dashboard-layout"
      className="flex justify-center w-full h-screen px-8 lg:px-16 pt-5"
    >
      <div className="w-full max-w-[640px] h-full flex flex-col">
        <Navbar />
        <PageWrapper className="h-full border-x border-border mx-1 sm:mx-2 overflow-x-hidden -mt-0.5">
          <div className="flex flex-col gap-y-300">{children}</div>

          <div className="flex flex-col gap-y-300">
            <Separator />
            <MadeWith />
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
