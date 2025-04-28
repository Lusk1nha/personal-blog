"use client";

import { useNavbarStore } from "@/providers/navbar-provider";
import { Button } from "@personal-blog/ui/button.tsx";
import { cn } from "@personal-blog/utils/cn";
import { Menu, X } from "lucide-react";

export function MenuAction() {
  const isOpen = useNavbarStore((state) => state.isOpen);
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);

  return (
    <Button
      type="button"
      variant={isOpen ? "secondary" : "ghost"}
      onClick={toggleMenu}
      title="Toggle navigation"
    >
      <Menu className={cn("block h-5 w-5", isOpen && "hidden")} />
      <X className={cn("hidden h-5 w-5", isOpen && "block")} />
      <span className="sr-only">Toggle navigation</span>
    </Button>
  );
}
