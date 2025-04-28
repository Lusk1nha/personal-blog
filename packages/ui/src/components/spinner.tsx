import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { forwardRef } from "react";

const spinnerVariants = cva("animate-spin", {
  variants: {
    variant: {
      default: "text-primary",
    },
    size: {
      default: "size-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  children?: React.ReactNode;
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>((props, ref) => {
  const { children, variant, size, className, ...rest } = props;

  return (
    <span className="flex" {...rest} ref={ref}>
      <Loader2
        className={cn(
          spinnerVariants({
            variant,
            size,
            className,
          })
        )}
      />
      {children}
    </span>
  );
});

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
