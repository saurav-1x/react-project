import { motion } from "framer-motion";

export default function LoadingScreen({ stage = "Preparing experience..." }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8fafc] text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-slate-100">
      <div className="space-y-4 text-center">
        <motion.div
          className="mx-auto h-16 w-16 rounded-2xl border border-slate-300/50 bg-white/80 dark:border-slate-700/70 dark:bg-slate-900/75"
          animate={{ rotate: 360, borderRadius: ["18%", "30%", "18%"] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
        <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-600 dark:text-slate-300">{stage}</p>
      </div>
    </div>
  );
}
