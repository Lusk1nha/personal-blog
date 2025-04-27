"use client";

import { Avatar } from "@personal-blog/ui/avatar.tsx";
import { DesktopRoutes } from "./desktop-routes";
import { SYSTEM_ROUTES } from "@/shared/constants";
import { MenuAction } from "../actions/menu-action";
import { ThemeAction } from "../actions/theme-action";
import { FadeAnimate } from "../utilities/animation";
import { UserAvatar } from "../user-avatar";

export function NavbarContent() {
  return (
    <div className="flex items-center justify-between h-full gap-x-075">
      <FadeAnimate>
        <UserAvatar name="Paulina" imageUrl="/assets/images/image-avatar.jpg" />
      </FadeAnimate>

      <section className="flex items-center gap-x-250">
        <DesktopRoutes routes={SYSTEM_ROUTES} />

        <div className="flex items-center gap-x-075">
          {/* Mobile Menu */}
          <div className="block md:hidden">
            <MenuAction />
          </div>

          <ThemeAction />
        </div>
      </section>
    </div>
  );
}
