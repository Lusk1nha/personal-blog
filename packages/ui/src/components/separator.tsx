import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const separatorVariants = cva("w-full", {
  variants: {
    variant: {
      default: "border-system-separator-default",
    },
    size: {
      default: "h-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof separatorVariants> {
  className?: string;
}

const Separator = forwardRef<HTMLHRElement, SeparatorProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  return (
    <hr
      ref={ref}
      className={cn(
        separatorVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    />
  );
});

Separator.displayName = "Separator";

export { Separator, separatorVariants };
