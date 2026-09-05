import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeManager = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return null;
};

export default ThemeManager;