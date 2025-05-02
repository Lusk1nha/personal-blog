import { cn } from "@personal-blog/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { forwardRef } from "react";
import { Button, buttonVariants } from "./button";
import { Text } from "./text";
import { Title } from "./title";

const errorWrapperVariants = cva("transition-all", {
  variants: {
    size: {
      default: "p-150 rounded-8",
      sm: "px-4 py-2 rounded-8",
      icon: "p-2 rounded-8",
    },
    type: {
      error:
        "bg-error-wrapper-default/20 text-error-wrapper-text border border-error-wrapper-border",
    },
  },
  defaultVariants: {
    type: "error",
    size: "default",
  },
});

export type ErrorTypes = "error" | "warning" | "info";

export interface ErrorWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof errorWrapperVariants> {
  title: string;
  description?: string;

  icon?: React.ReactNode;
  className?: string;
  onRetry?: () => Promise<void> | void;
}

const ErrorWrapper = forwardRef<HTMLDivElement, ErrorWrapperProps>(
  (props, ref) => {
    const {
      className,
      size,
      title,
      description,
      onRetry,
      icon,
      type,
      ...rest
    } = props;

    if (size === "icon") {
      return <ErrorSmallWrapper {...props} ref={ref} />;
    }

    return <ErrorDefaultWrapper {...props} ref={ref} />;
  }
);

const ErrorDefaultWrapper = forwardRef<HTMLDivElement, ErrorWrapperProps>(
  (props, ref) => {
    const {
      className,
      size,
      title,
      description,
      onRetry,
      icon,
      type,
      ...rest
    } = props;

    return (
      <div
        data-component="ErrorDefaultWrapper"
        role="alert"
        className={cn(
          errorWrapperVariants({
            type,
            size,
            className,
          })
        )}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "fit",
              }),
              "cursor-default"
            )}
          >
            {icon || <AlertTriangle className="w-5 h-5" />}
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-col">
              <Title className="text-sm font-medium">{title}</Title>
              {description && (
                <Text className="mt-1 text-sm opacity-90">{description}</Text>
              )}
            </div>

            {onRetry && (
              <div className="mt-4">
                <Button
                  className="w-fit px-2"
                  size="sm"
                  variant="secondary"
                  onClick={onRetry}
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Retry
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const ErrorSmallWrapper = forwardRef<HTMLDivElement, ErrorWrapperProps>(
  (props, ref) => {
    const {
      className,
      size,
      title,
      description,
      onRetry,
      icon,
      type,
      ...rest
    } = props;

    return (
      <div
        data-component="ErrorSmallWrapper"
        role="alert"
        className={cn(
          errorWrapperVariants({
            type,
            size,
            className,
          }),
          "flex items-center gap-2"
        )}
        ref={ref}
        {...rest}
      >
        <span
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "fit",
            }),
            "cursor-default"
          )}
        >
          {icon || <AlertTriangle className="w-5 h-5" />}
        </span>
      </div>
    );
  }
);

ErrorWrapper.displayName = "ErrorWrapper";

export { ErrorWrapper, errorWrapperVariants };
