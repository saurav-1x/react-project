import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "rounded-[28px] border border-slate-300/45 bg-white/80 p-6 shadow-glass backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/65",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
