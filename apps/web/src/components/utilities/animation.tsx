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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.span>
  );
}

interface SlideAnimateProps extends AnimateWrapperProps {
  direction?: "left" | "right" | "up" | "down";
}

export function SlideAnimate(props: Readonly<SlideAnimateProps>) {
  const { children, className, direction = "left", ...rest } = props;
  return (
    <motion.span
      data-animation="slide"
      initial={{
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        opacity: 0,
      }}
      animate={{ x: 0, y: 0, opacity: 1 }}
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
