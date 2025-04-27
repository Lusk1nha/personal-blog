"use client";

import { Button } from "@personal-blog/ui/button.tsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ThemeAction() {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
      return;
    }

    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  }, [theme, setTheme]);

  return (
    <Button variant="outline" type="button" onClick={handleThemeChange}>
      <Sun className="hidden h-5 w-5 dark:block" />
      <Moon className="block h-5 w-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
