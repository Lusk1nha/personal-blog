import { cn } from "@personal-blog/utils/cn";
import { HTMLMotionProps, motion } from "motion/react";

interface UnderlineProps extends HTMLMotionProps<"span"> {}

export function Underline(props: Readonly<UnderlineProps>) {
  const { className, ...rest } = props;

  return (
    <motion.span
      className={cn("w-full h-[3px] bg-underline-bottom/80", className)}
      {...rest}
    />
  );
}
