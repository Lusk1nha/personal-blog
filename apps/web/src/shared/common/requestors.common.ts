import { SWRConfiguration } from "swr";

export interface ComponentRequestorProps<T> {
  apiKey: string;
  promise: (apiKey: string) => Promise<T>;
  settings?: SWRConfiguration;

  component: (data: T) => React.ReactNode;
  errorComponent: (error: Error) => React.ReactNode;
  loadingComponent: () => React.ReactNode;
}

export interface ComponentRequestorOnlyVisualsProps<T>
  extends Omit<ComponentRequestorProps<T>, "promise" | "apiKey"> {}

export interface ComponentRequestorOnlyPromiseProps<T>
  extends Omit<
    ComponentRequestorProps<T>,
    "component" | "errorComponent" | "loadingComponent"
  > {}
