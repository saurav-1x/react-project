import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import ScrollProgress from "../components/ScrollProgress";
import MouseFollower from "../components/MouseFollower";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-slate-100">
      <ScrollProgress />
      <MouseFollower />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
