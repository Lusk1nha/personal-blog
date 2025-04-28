import { DesktopRoutes } from "./desktop-routes";
import { SYSTEM_ROUTES } from "@/shared/constants";

import { NavbarActions } from "./navbar-actions";
import { GetUserAvatar } from "../user-avatar/get-user-avatar";
import { Suspense } from "react";
import { Skeleton } from "@personal-blog/ui/skeleton.tsx";

export function NavbarContent() {
  return (
    <div className="flex items-center justify-between h-full gap-x-075">
      <Suspense fallback={<Skeleton className="h-10 w-10 rounded-10" />}>
        <GetUserAvatar />
      </Suspense>

      <section className="flex items-center gap-x-250">
        <DesktopRoutes routes={SYSTEM_ROUTES} />
        <NavbarActions />
      </section>
    </div>
  );
}
