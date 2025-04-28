"use client";

import { Button } from "@personal-blog/ui/button.tsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { SpinAnimate } from "../utilities/animation";

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
    <Button
      type="button"
      variant="outline"
      onClick={handleThemeChange}
      title="Toggle theme"
    >
      <SpinAnimate transition={{ duration: 0.6 }} className="block dark:hidden">
        <Sun className="h-5 w-5" />
      </SpinAnimate>

      <SpinAnimate transition={{ duration: 0.6 }} className="hidden dark:block">
        <Moon className="h-5 w-5" />
      </SpinAnimate>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
