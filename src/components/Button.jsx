import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils/cn";

export default function Button({
  as: Comp = "button",
  className,
  children,
  magnetic = true,
  ...props
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    if (!magnetic) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.12, y: y * 0.12 });
  };

  const onMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-flex"
    >
        <Comp
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-slate-300/60 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur-xl transition hover:border-cyan-300/60 hover:shadow-soft dark:border-slate-700/70 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-cyan-300/50",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-2xl" />
        </span>
        <span className="relative z-10">{children}</span>
      </Comp>
    </motion.div>
  );
}
