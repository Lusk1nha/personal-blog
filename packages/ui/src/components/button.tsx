import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "system-preset-6 inline-flex items-center justify-center focus:outline-none focus:ring-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      size: {
        fit: "h-fit w-fit",
        sm: "h-8 w-8 rounded-8",
        default: "min-h-10 min-w-10 rounded-8",
        lg: "min-h-10 min-w-10 rounded-10",
      },
      variant: {
        default:
          "bg-button-default-base hover:bg-button-default-base-hover text-button-default-text hover:text-button-default-text-hover border border-button-default-border hover:border-button-default-border-hover",
        primary: `
          bg-button-primary-base hover:bg-button-primary-base-hover text-button-primary-text
          hover:text-button-primary-text-hover ring-button-primary-ring ring-offset-2 ring-offset-background
        `,
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
