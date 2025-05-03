import { BackgroundPatterns } from "@/components/background-patterns";
import { FontProvider } from "@/providers/font-provider";
import { NextArtefactProps } from "@/shared/common/next.types";

export default function RootTemplate(props: Readonly<NextArtefactProps>) {
  const { children } = props;

  return (
    <div
      id="root-template-container"
      className="bg-background w-full overflow-hidden relative"
    >
      <FontProvider>{children}</FontProvider>
      <BackgroundPatterns />
    </div>
  );
}
