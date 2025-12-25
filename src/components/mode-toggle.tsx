"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] dark:opacity-50 text-foreground" />
      <Switch
        id="theme-mode"
        checked={theme === "dark"}
        onCheckedChange={handleThemeToggle}
      />
      <Moon className="h-[1.2rem] w-[1.2rem] opacity-50 dark:opacity-100 text-foreground" />
      <Label htmlFor="theme-mode" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}
