"use client";

import { ComponentRequestorProps } from "@/shared/common/requestors.common";
import { APP_ENVIRONMENT } from "@/shared/constants";

import useSWR from "swr";

export function Requestor<T>(props: Readonly<ComponentRequestorProps<T>>) {
  const {
    apiKey,
    promise,
    settings,
    component,
    errorComponent,
    loadingComponent,
  } = props;

  const { data, error, isLoading } = useSWR(
    apiKey,
    () => {
      if (APP_ENVIRONMENT === "development")
        console.debug("Requestor: ", apiKey);

      return promise(apiKey);
    },
    settings
  );

  if (error) {
    const safeError = error instanceof Error ? error : new Error(String(error));
    return errorComponent(safeError);
  }

  if (isLoading || !data) return loadingComponent();

  return component(data);
}
