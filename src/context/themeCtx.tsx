import { createContext, useContext, useEffect, useState } from "react";

const ThemeCtx = createContext<CtxProps | null>(null);

function ThemeProvider({ children }: AppProps) {
  const getStorageTheme = () => {
    let theme: string | null = "light-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme") ?? "";
    }
    return theme;
  };

  const [theme, setTheme] = useState(getStorageTheme?.());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useThemeCtx = () => {
  return useContext(ThemeCtx);
};

export { ThemeCtx, ThemeProvider };
