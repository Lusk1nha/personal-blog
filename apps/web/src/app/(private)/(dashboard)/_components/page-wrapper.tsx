import { cn } from "@personal-blog/utils/cn";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper(props: Readonly<PageWrapperProps>) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "h-full flex flex-col justify-between px-2.5 py-8 md:pt-12 pb-4 gap-y-300",
        className
      )}
    >
      {children}
    </div>
  );
}
