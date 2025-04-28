"use client";

import { SystemRouteType } from "@/shared/common/routes.common";
import { cn } from "@personal-blog/utils/cn";
import Link from "next/link";

import { Text } from "@personal-blog/ui/text.tsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FadeAnimate } from "../utilities/animation";
import { Underline } from "../utilities/underline";

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
        const [isOver, setIsOver] = useState(false);
        const isActive = currentPathname.endsWith(route.path);

        return (
          <FadeAnimate key={route.path}>
            <li
              className="relative group"
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              <RouteLink route={route} active={isActive} />
              {(isActive || isOver) && <ActiveBorder />}
            </li>
          </FadeAnimate>
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
    <Underline
      className="w-[105%] absolute -bottom-[0.75px]"
      layoutId="navbar"
      aria-hidden="true"
      data-animation="slide"
      style={{
        width: "100%",
      }}
      transition={{
        type: "spring",
        bounce: 0.25,
        stiffness: 60,
        damping: 10,
        duration: 0.2,
      }}
    />
  );
}
