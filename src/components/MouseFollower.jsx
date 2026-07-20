import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

export default function MouseFollower() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[70] hidden h-5 w-5 rounded-full border border-cyan-300/50 bg-cyan-400/10 md:block"
        animate={{ x: x - 10, y: y - 10 }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] hidden h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl md:block"
        animate={{ x: x - 80, y: y - 80 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.4 }}
      />
    </>
  );
}
