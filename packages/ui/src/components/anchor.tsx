import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const anchorVariants = cva("", {
  variants: {
    size: {
      default: "",
    },
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof anchorVariants> {
  className?: string;
}

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <a
      ref={ref}
      className={cn(anchorVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Anchor.displayName = "Anchor";

export { Anchor, anchorVariants };
