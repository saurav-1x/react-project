import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";
import Button from "./Button";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-glass"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-slate-300 transition hover:text-white"
            >
              <FiX size={18} />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full rounded-[24px] object-cover"
            />
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{project.category}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Key Features
                </h4>
                <ul className="space-y-2 text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2">
                    <FiExternalLink />
                    Live Demo
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
