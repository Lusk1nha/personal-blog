import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const blockquoteVariants = cva("", {
  variants: {
    variant: {
      default: "border-blockquote-border-default",
    },
    size: {
      default: "border-l-4 px-150",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BlockQuoteProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof blockquoteVariants> {
  className?: string;
}

const BlockQuote = forwardRef<HTMLQuoteElement, BlockQuoteProps>(
  (props, ref) => {
    const { className, variant, size, children, ...rest } = props;

    return (
      <blockquote
        ref={ref}
        className={blockquoteVariants({
          variant,
          size,
          className,
        })}
        {...rest}
      >
        {children}
      </blockquote>
    );
  }
);

BlockQuote.displayName = "BlockQuote";

export { BlockQuote, blockquoteVariants };
