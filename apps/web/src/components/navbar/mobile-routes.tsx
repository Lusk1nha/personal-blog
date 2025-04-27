"use client";

import { SystemRouteType } from "@/shared/common/routes.common";
import { cn } from "@personal-blog/utils/cn";
import Link from "next/link";

import { Text } from "@personal-blog/ui/text.tsx";
import { usePathname } from "next/navigation";

interface DesktopRoutesProps {
  routes: SystemRouteType[];
  className?: string;
}

export function MobileRoutes(props: Readonly<DesktopRoutesProps>) {
  const { routes, className } = props;
  const currentPathname = usePathname();

  return (
    <ul className={cn("flex flex-col items-start gap-y-075", className)}>
      {routes.map((route) => {
        const isActive = currentPathname.endsWith(route.path);

        return (
          <li
            key={route.path}
            className="w-full h-7 relative group pb-075 last-of-type:pb-0 border-b border-navbar-link-active-mobile-border last-of-type:border-0"
          >
            <RouteLink route={route} active={isActive} />
          </li>
        );
      })}
    </ul>
  );
}

interface RouteLinkProps {
  route: SystemRouteType;
  active: boolean;
}

function RouteLink({ route, active }: Readonly<RouteLinkProps>) {
  return (
    <Link className="h-full" href={route.path} about={route.description}>
      <Text className="h-full" size="lg" variant="biglink" active={active}>
        {route.name}
      </Text>
    </Link>
  );
}
