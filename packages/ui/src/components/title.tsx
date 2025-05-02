import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const titleVariants = cva("antialiased", {
  variants: {
    variant: {
      default: "text-system-title-default",
    },
    size: {
      xs: "system-preset-6",
      sm: "system-preset-5",
      default: "system-preset-2",
      lg: "system-preset-4",
      xl: "system-preset-1",
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
  const { size, className, variant, active, children, title, ...rest } = props;

  return (
    <h1
      ref={ref}
      className={cn(
        titleVariants({
          variant,
          size,
          className,
        })
      )}
      data-state={active ? "active" : undefined}
      title={title ? title : children ? children.toString() : undefined}
      {...(title ? { "aria-label": title } : {})}
      {...rest}
    >
      {children}
    </h1>
  );
});

Title.displayName = "Title";

export { Title, titleVariants };
