"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import {
  getServerTheme,
  getTheme,
  setTheme,
  subscribeTheme,
} from "@/lib/theme";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const dark = theme === "dark";

  const toggle = () => setTheme(dark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="inline-flex size-10 items-center justify-center rounded-full border border-forest-950/10 bg-forest-100/80 text-forest-900 transition-colors hover:bg-forest-100 dark:border-forest-950/10 dark:bg-forest-950/10 dark:text-forest-400 dark:hover:bg-forest-950/20"
    >
      {dark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}