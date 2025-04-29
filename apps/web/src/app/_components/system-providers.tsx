"use client";

import { NavbarStoreProvider } from "@/providers/navbar-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { SWRConfig } from "swr";

interface SystemProvidersProps {
  children: React.ReactNode;
}

export function SystemProviders(props: Readonly<SystemProvidersProps>) {
  const { children } = props;
  return (
    <ThemeProvider storageKey="web.theme">
      <NavbarStoreProvider storageKey="web.navbar">
        <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>
      </NavbarStoreProvider>
    </ThemeProvider>
  );
}
