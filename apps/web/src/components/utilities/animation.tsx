import { HTMLMotionProps, motion } from "motion/react";

interface AnimateWrapperProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  className?: string;
}

export function FadeAnimate(props: Readonly<AnimateWrapperProps>) {
  const { children, className, ...rest } = props;
  return (
    <motion.span
      data-animation="fade"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.span>
  );
}

export function SpinAnimate(props: Readonly<AnimateWrapperProps>) {
  const { children, className, ...rest } = props;
  return (
    <motion.span
      data-animation="spin"
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: 1 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.span>
  );
}
