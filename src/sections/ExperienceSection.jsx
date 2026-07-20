import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiBriefcase, FiFlag, FiTrendingUp } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import experience from "../data/experience.json";

const typeIcons = {
  Education: FiBookOpen,
  Certification: FiAward,
  Internship: FiBriefcase,
  Career: FiTrendingUp,
  Milestone: FiFlag,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Timeline"
          title="Education, certifications, internships, and growth milestones"
          description="A concise career timeline helps recruiters scan your journey quickly while still feeling visually elevated."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-white/30 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <span className="absolute left-0 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-soft md:left-auto md:right-[-6px]" />
                <GlassCard>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                      {(() => {
                        const Icon = typeIcons[item.type] ?? FiFlag;
                        return <Icon size={18} />;
                      })()}
                    </span>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{item.type}</p>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.subtitle}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
