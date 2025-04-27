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

export function DesktopRoutes(props: Readonly<DesktopRoutesProps>) {
  const { routes, className } = props;
  const currentPathname = usePathname();

  return (
    <ul className={cn("items-center gap-x-300 hidden md:flex", className)}>
      {routes.map((route) => {
        const isActive = currentPathname.endsWith(route.path);

        return (
          <li key={route.path} className="relative group">
            <RouteLink route={route} active={isActive} />
            {isActive && <ActiveBorder />}
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
    <Link href={route.path} about={route.description}>
      <Text variant="link" active={active}>
        {route.name}
      </Text>
    </Link>
  );
}

function ActiveBorder() {
  return (
    <div className="absolute -bottom-[0.75px] w-[105%] h-[3px] bg-navbar-link-active-bottom" />
  );
}
