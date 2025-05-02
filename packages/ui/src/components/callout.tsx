import { cn } from "@personal-blog/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { AlertTriangle, Info, Lightbulb, LucideIcon } from "lucide-react";
import { forwardRef } from "react";

export enum CalloutType {
  Tip = "tip",
  Warning = "warning",
  Info = "information",
}

export const calloutMap: Record<CalloutType, string> = {
  tip: "tip",
  warning: "warning",
  information: "info",
};

const calloutIconMap: Record<CalloutType, LucideIcon> = {
  tip: Lightbulb,
  warning: AlertTriangle,
  information: Info,
};

const calloutVariants = cva("flex border", {
  variants: {
    variant: {
      tip: "bg-callout-background-tip text-callout-text-tip border-callout-border-tip",
      warning:
        "bg-callout-background-warning text-callout-text-warning border-callout-border-warning",
      info: "bg-callout-background-info text-callout-text-info border-callout-border-info",
    },
    size: {
      default: "p-150 rounded-12 gap-x-100",
    },
  },
  defaultVariants: {
    variant: "info",
    size: "default",
  },
});

export interface CalloutProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof calloutVariants> {
  className?: string;
}

const Callout = forwardRef<HTMLQuoteElement, CalloutProps>((props, ref) => {
  const { className, variant, size, children, ...rest } = props;

  const Icon = calloutIconMap[variant as CalloutType] || Info;

  return (
    <blockquote
      data-component="Callout"
      ref={ref}
      className={cn(
        calloutVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    >
      <Icon strokeWidth={2} className="min-h-5 min-w-5" />
      <div className="flex">{children}</div>
    </blockquote>
  );
});

Callout.displayName = "Callout";

export { Callout, calloutVariants };
