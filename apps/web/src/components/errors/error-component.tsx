"use client";

import { SlideAnimate } from "../utilities/animation";

import {
  ErrorWrapper,
  ErrorWrapperProps,
} from "@personal-blog/ui/error-wrapper.tsx";

export function ErrorComponent(props: Readonly<ErrorWrapperProps>) {
  const { type = "error", ...rest } = props;

  return (
    <SlideAnimate>
      <ErrorWrapper {...rest} type={type} />
    </SlideAnimate>
  );
}
