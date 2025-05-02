import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const strongVariants = cva("antialiased", {
  variants: {
    variant: {
      default: "text-system-text-default",
    },
    size: {
      default: "system-preset-7-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface StrongProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof strongVariants> {
  className?: string;
}

const Strong = forwardRef<HTMLSpanElement, StrongProps>((props, ref) => {
  const { size, className, variant, children, ...rest } = props;

  return (
    <strong
      ref={ref}
      className={strongVariants({
        variant,
        size,
        className,
      })}
      {...rest}
    >
      {children}
    </strong>
  );
});

Strong.displayName = "Strong";

export { Strong, strongVariants };
