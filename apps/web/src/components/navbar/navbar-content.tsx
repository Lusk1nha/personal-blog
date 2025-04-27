import { Avatar } from "@personal-blog/ui/avatar.tsx";
import { DesktopRoutes } from "./desktop-routes";
import { SYSTEM_ROUTES } from "@/shared/constants";
import { MenuAction } from "../actions/menu-action";
import { ThemeAction } from "../actions/theme-action";

export function NavbarContent() {
  return (
    <div className="flex items-center justify-between h-full gap-x-075">
      <Avatar
        className="h-10 w-10"
        variant="default"
        size="default"
        src={"https://picsum.photos/200"}
        alt="Teste"
      />

      <section className="flex items-center gap-x-250">
        <DesktopRoutes routes={SYSTEM_ROUTES} />

        <div className="flex items-center gap-x-075">
          <div className="block md:hidden">
            <MenuAction />
          </div>
          <ThemeAction />
        </div>
      </section>
    </div>
  );
}
