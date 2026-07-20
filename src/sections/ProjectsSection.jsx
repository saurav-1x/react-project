import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiSearch } from "react-icons/fi";
import Button from "../components/Button";
import FilterChips from "../components/FilterChips";
import GlassCard from "../components/GlassCard";
import ProjectModal from "../components/ProjectModal";
import SectionHeading from "../components/SectionHeading";
import useTiltEffect from "../hooks/useTiltEffect";
import projects from "../data/projects.json";

const filters = ["All", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JavaScript"];

function ProjectCard({ project, onOpen }) {
  const tilt = useTiltEffect();

  return (
    <GlassCard className="group h-full">
      <div
        className="h-full transition duration-300"
        style={{ transform: tilt.transform }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <div className="overflow-hidden rounded-[22px] border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">{project.category}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
            </div>
          </div>
          <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer" magnetic={false}>
              <span className="flex items-center gap-2">
                <FiExternalLink />
                Live Demo
              </span>
            </Button>
            <Button
              as="a"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              magnetic={false}
              className="bg-transparent"
            >
              <span className="flex items-center gap-2">
                <FiGithub />
                GitHub
              </span>
            </Button>
            <Button onClick={() => onOpen(project)} magnetic={false} className="bg-transparent">
              Details
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.technologies.includes(filter) || project.category === filter;
      const value = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();
      return matchesFilter && value.includes(search.toLowerCase());
    });
  }, [filter, search]);

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work designed to impress both recruiters and real users"
          description="These six placeholder projects demonstrate how to present product thinking, engineering depth, and polished visual storytelling."
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips options={filters} active={filter} onChange={setFilter} />
          <label className="relative w-full max-w-md">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
            />
          </label>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <ProjectCard project={project} onOpen={setActiveProject} />
            </motion.div>
          ))}
        </div>

        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </section>
  );
}
