import { Navbar } from "@/components/navbar/navbar";
import { NextArtefactProps } from "@/shared/common/next.types";

export default function DashboardLayout(props: Readonly<NextArtefactProps>) {
  const { children } = props;

  return (
    <div
      data-testid="dashboard-layout"
      className="flex justify-center w-full h-screen px-8 lg:px-16 py-5"
    >
      <div className="w-full max-w-[640px] h-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
