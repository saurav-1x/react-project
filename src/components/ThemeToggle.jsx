import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/60 bg-white/85 text-slate-900 backdrop-blur-xl transition hover:scale-105 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:bg-slate-800/85"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
