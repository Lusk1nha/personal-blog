import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textVariants = cva("antialiased", {
  variants: {
    variant: {
      default: "text-system-text-default",
      link: "cursor-pointer text-system-text-link hover:text-system-text-link-hover data-[state=active]:text-system-text-link-active",
      biglink:
        "cursor-pointer text-system-text-biglink hover:text-system-text-biglink-hover active:text-system-text-biglink-active data-[state=active]:text-system-text-biglink-active",
    },
    size: {
      italic: "system-preset-8-italic",
      default: "system-preset-8",
      lg: "system-preset-7",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  className?: string;
  active?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, className, variant, active, title, children, ...rest } = props;

  return (
    <p
      data-component="Text"
      ref={ref}
      className={cn(
        textVariants({
          size,
          variant,
          className,
        })
      )}
      data-state={active ? "active" : undefined}
      title={title ? title : children ? children.toString() : undefined}
      {...(title ? { "aria-label": title } : {})}
      {...rest}
    >
      {children}
    </p>
  );
});

Text.displayName = "Text";

export { Text, textVariants };
