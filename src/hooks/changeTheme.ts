"use client";

import { useEffect, useState } from "react";

const useChangeTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
      : "light",
  );

  const changeThemeHandler = () =>
    setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return { changeThemeHandler, theme: theme };
};

export default useChangeTheme;
