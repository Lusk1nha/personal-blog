import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const titleVariants = cva("antialiased", {
  variants: {
    variant: {
      default: "text-system-title-default",
    },
    size: {
      default: "text-preset-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  className?: string;
  active?: boolean;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { size, className, variant, active, ...rest } = props;

  return (
    <h1
      ref={ref}
      className={cn(
        titleVariants({
          size,
          variant,
          className,
        })
      )}
      data-state={active ? "active" : undefined}
      {...rest}
    />
  );
});

Title.displayName = "Title";

export { Title, titleVariants };
