import { cn } from "@personal-blog/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const inputVariants = cva("system-preset-7 focus:outline-none focus:ring-2 ring-offset-2", {
  variants: {
    variant: {
      default: `
        bg-input-default-base hover:bg-input-default-base-hover text-input-default
        hover:input-default-text-hover border border-input-default-border hover:border-input-default-border-hover 
        ring-input-default-ring ring-offset-input-default-base
      `,
    },
    size: {
      default: "w-full h-12.5 rounded-10 px-200 py-150",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size, className, variant, ...rest } = props;

  return (
    <input
      ref={ref}
      className={cn(
        inputVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input, inputVariants };
