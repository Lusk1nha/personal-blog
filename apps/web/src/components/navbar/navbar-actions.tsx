"use client";

import { MenuAction } from "../actions/menu-action";
import { ThemeAction } from "../actions/theme-action";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-x-075">
      {/* Mobile Menu */}
      <div className="block md:hidden">
        <MenuAction />
      </div>

      <ThemeAction />
    </div>
  );
}
