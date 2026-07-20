import { cn } from "../utils/cn";

export default function FilterChips({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition",
            active === option
              ? "border-cyan-300/70 bg-cyan-400/15 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200"
              : "border-slate-300/50 bg-white/80 text-slate-700 hover:border-slate-400/60 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800/75"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
