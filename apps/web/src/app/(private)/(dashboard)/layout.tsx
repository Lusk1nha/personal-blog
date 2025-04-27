import { Navbar } from "@/components/navbar/navbar";
import { NextArtefactProps } from "@/shared/common/next.types";

export default function DashboardLayout(props: Readonly<NextArtefactProps>) {
  const { children } = props;

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-full max-w-[1000px] h-full flex flex-col px-8 lg:px-16 py-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
