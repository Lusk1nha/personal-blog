import { Navbar } from "@/components/navbar/navbar";
import { NextArtefactProps } from "@/shared/common/next.types";

export default function DashboardLayout(props: Readonly<NextArtefactProps>) {
  const { children } = props;

  return (
    <div
      data-testid="dashboard-layout"
      className="flex justify-center w-full h-screen px-8 lg:px-16 pt-5"
    >
      <div className="w-full max-w-[640px] h-full flex flex-col">
        <Navbar />
        <main className="h-full border-x border-border mx-1 sm:mx-2 overflow-x-hidden -mt-0.5">
          {children}
        </main>
      </div>
    </div>
  );
}
