import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNetlify, SiTailwindcss } from "react-icons/si";
import { TbServer } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import FilterChips from "../components/FilterChips";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import skills from "../data/skills.json";

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  javascript: FaJs,
  react: FaReact,
  java: FaJava,
  node: FaNodeJs,
  server: TbServer,
  database: FaDatabase,
  mongodb: SiMongodb,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscVscode,
  cloud: SiNetlify,
};

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

function CircularProgress({ value }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg viewBox="0 0 88 88" className="h-24 w-24">
      <circle cx="44" cy="44" r={radius} className="fill-none stroke-white/10" strokeWidth="8" />
      <circle
        cx="44"
        cy="44"
        r={radius}
        className="fill-none stroke-cyan-300"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 44 44)"
      />
      <text x="44" y="50" textAnchor="middle" className="fill-white text-sm font-semibold">
        {value}%
      </text>
    </svg>
  );
}

export default function SkillsSection() {
  const [filter, setFilter] = useState("All");
  const filteredSkills = useMemo(
    () => skills.filter((skill) => filter === "All" || skill.category === filter),
    [filter]
  );

  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Modern frontend craftsmanship backed by full-stack fundamentals"
          description="Every skill card is driven by JSON, so you can update strengths, tools, and categories without touching the UI components."
        />

        <FilterChips options={categories} active={filter} onChange={setFilter} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] ?? FaReact;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <GlassCard className="group h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:scale-110 group-hover:text-white">
                        <Icon size={28} />
                      </span>
                      <p className="mt-5 font-display text-xl font-semibold text-white">{skill.name}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-400">{skill.category}</p>
                    </div>
                    <CircularProgress value={skill.level} />
                  </div>
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
