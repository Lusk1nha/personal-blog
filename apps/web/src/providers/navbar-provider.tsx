"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  createNavbarStore,
  NavbarStoreState,
  NavbarStore,
} from "@/shared/stores/navbar.store";

export type NavbarStoreApi = ReturnType<typeof createNavbarStore>;

export const NavbarStoreContext = createContext<NavbarStoreApi | undefined>(
  undefined
);

export interface NavbarProviderProps {
  children: React.ReactNode;

  storageKey?: string;
  initialState?: NavbarStore;
}

export const NavbarStoreProvider = ({
  children,
  storageKey,
  initialState,
}: Readonly<NavbarProviderProps>) => {
  const storeRef = useRef<NavbarStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createNavbarStore(storageKey, initialState);
  }

  return (
    <NavbarStoreContext.Provider value={storeRef.current}>
      {children}
    </NavbarStoreContext.Provider>
  );
};

export const useNavbarStore = <T,>(
  selector: (store: NavbarStoreState) => T
): T => {
  const store = useContext(NavbarStoreContext);

  if (!store) {
    throw new Error("useNavbarStore must be used within a NavbarStoreProvider");
  }

  return useStore(store, selector);
};
