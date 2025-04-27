import { forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@personal-blog/utils/cn";

type HTMLImageAttributes = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const avatarVariants = cva("flex p-0 overflow-hidden", {
  variants: {
    size: {
      default: "min-h-10 min-w-10 rounded-10",
    },
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AvatarProps
  extends HTMLImageAttributes,
    VariantProps<typeof avatarVariants> {
  className?: string;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  return (
    <div className={cn(avatarVariants({ variant, size, className }))}>
      <img className="w-full h-full object-cover" ref={ref} {...rest} />
    </div>
  );
});

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
