import { cn } from "@personal-blog/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheck, Info, LucideIcon, LucideProps } from "lucide-react";
import { forwardRef } from "react";

const badgeVariants = cva("flex items-center gap-x-100", {
  variants: {
    size: {
      default: "system-preset-8",
    },
    type: {
      error: "text-badge-error",
      success: "text-success-error",
    },
  },
  defaultVariants: {
    type: "error",
    size: "default",
  },
});

export type BadgeTypes = "error" | "success";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  type: BadgeTypes;
  className?: string;
  children: string;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { children, className, type, size, ...rest } = props;

  return (
    <span
      ref={ref}
      className={cn(
        badgeVariants({
          type,
          size,
          className,
        })
      )}
      {...rest}
    >
      <BadgeIcon type={type} className="mr-1" />
      <p>{children}</p>
    </span>
  );
});

Badge.displayName = "Badge";

interface BadgeIconProps extends LucideProps {
  type: BadgeTypes;
}

const badgeIconMap: Record<BadgeTypes, LucideIcon> = {
  error: Info,
  success: CircleCheck,
};

const BadgeIcon = (props: BadgeIconProps) => {
  const Icon = badgeIconMap[props.type];
  return <Icon {...props} className="h-4 w-4" />;
};

export { Badge, badgeVariants };
