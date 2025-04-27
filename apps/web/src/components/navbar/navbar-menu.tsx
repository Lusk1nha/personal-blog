"use client";

import { useNavbarStore } from "@/providers/navbar-provider";
import { MobileRoutes } from "./mobile-routes";
import { SYSTEM_ROUTES } from "@/shared/constants";

export function NavbarMenu() {
  const isOpen = useNavbarStore((state) => state.isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-full absolute top-18 z-10 left-0 md:hidden">
      <section className="bg-navbar-base border border-navbar-border shadow-navbar w-full min-h-10 rounded-10 p-150">
        <MobileRoutes routes={SYSTEM_ROUTES} />
      </section>
    </div>
  );
}
