import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type NavbarStore = {
  isOpen: boolean;
};

export type NavbarStoreActions = {
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
};

export type NavbarStoreState = NavbarStore & NavbarStoreActions;

export const defaultNavbarStore: NavbarStore = {
  isOpen: false,
};

export const createNavbarStore = (
  storageKey: string = "navbar.config",
  initialState: NavbarStore = defaultNavbarStore
) => {
  return create<NavbarStoreState>()(
    persist(
      (set) => ({
        ...initialState,
        toggleMenu() {
          set((state) => ({ isOpen: !state.isOpen }));
        },
        closeMenu() {
          set({ isOpen: false });
        },
        openMenu() {
          set({ isOpen: true });
        },
      }),
      {
        name: storageKey,
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
