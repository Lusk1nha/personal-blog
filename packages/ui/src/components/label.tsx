import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const labelVariants = cva("antialiased", {
  variants: {
    variant: {
      default: "text-label-default",
    },
    size: {
      default: "system-preset-7",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LabelProps
  extends React.HTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  className?: string;
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    size,
    className,
    variant,
    title,
    children,
    required = false,
    ...rest
  } = props;

  return (
    <span className="flex items-center gap-x-1">
      <label
        ref={ref}
        className={cn(
          labelVariants({
            variant,
            size,
            className,
          })
        )}
        title={title ? title : children ? children.toString() : undefined}
        {...(title ? { "aria-label": title } : {})}
        {...rest}
      >
        {children}
      </label>

      {required && <span className="system-preset-7 text-xs text-label-required">*</span>}
    </span>
  );
});

Label.displayName = "Label";

export { Label, labelVariants };
