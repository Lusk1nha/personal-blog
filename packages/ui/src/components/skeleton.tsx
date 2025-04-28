import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const skeletonVariants = cva("animate-pulse", {
  variants: {
    variant: {
      default: "bg-skeleton-default/10 hover:bg-skeleton-default-hover/10",
    },
    size: {
      default: "rounded-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  className?: string;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(
        skeletonVariants({
          variant,
          size,
          className,
        }),
        className
      )}
      {...rest}
    />
  );
});

Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants };
