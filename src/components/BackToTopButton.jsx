import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTopButton() {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100 shadow-glass backdrop-blur-xl"
    >
      <FiArrowUp size={18} />
    </motion.button>
  );
}
