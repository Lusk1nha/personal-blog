import { DesktopRoutes } from "./desktop-routes";
import { SYSTEM_ROUTES } from "@/shared/constants";

import { NavbarActions } from "./navbar-actions";
import { GetUserAvatar } from "@/components/data/get-user-avatar";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../errors/error-component";

export function NavbarContent() {
  return (
    <ErrorBoundary
      fallback={<ErrorComponent size="sm" title="Error to render navbar" />}
    >
      <div className="flex items-center justify-between h-full gap-x-075">
        <GetUserAvatar />

        <section className="flex items-center gap-x-250">
          <DesktopRoutes routes={SYSTEM_ROUTES} />
          <NavbarActions />
        </section>
      </div>
    </ErrorBoundary>
  );
}
