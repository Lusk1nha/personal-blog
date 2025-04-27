import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center focus:outline-none focus:ring-2 cursor-pointer",
  {
    variants: {
      size: {
        default: "min-h-10 min-w-10 rounded-8",
      },
      variant: {
        default: "",
        ghost:
          "bg-transparent text-button-ghost-text hover:text-button-ghost-text-hover",
        secondary:
          "bg-button-secondary-base hover:bg-button-secondary-base-hover text-button-secondary-text hover:text-button-secondary-text-hover",
        outline:
          "border bg-button-outline-base hover:bg-button-outline-base-hover text-button-outline-text hover:text-button-outline-text-hover border-button-outline-border hover:border-button-outline-border-hover",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <button
      ref={ref}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
