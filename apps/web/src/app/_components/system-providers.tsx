"use client";

import { NavbarStoreProvider } from "@/providers/navbar-provider";
import { ThemeProvider } from "@/providers/theme-provider";

interface SystemProvidersProps {
  children: React.ReactNode;
}

export function SystemProviders(props: Readonly<SystemProvidersProps>) {
  const { children } = props;
  return (
    <ThemeProvider storageKey="web.theme">
      <NavbarStoreProvider storageKey="web.navbar">
        {children}
      </NavbarStoreProvider>
    </ThemeProvider>
  );
}
