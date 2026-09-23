export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

function readSystem(): Theme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function readStorage(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function resolveTheme(): Theme {
  return readStorage() ?? readSystem();
}

function currentFromDom(): Theme {
  if (typeof document === "undefined") return resolveTheme();
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

let current: Theme = currentFromDom();

export function getTheme(): Theme {
  return current;
}

export function getServerTheme(): Theme {
  return "light";
}

export function setTheme(theme: Theme) {
  current = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage puede no estar disponible (modo privado / SSR).
  }
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      current = resolveTheme();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}