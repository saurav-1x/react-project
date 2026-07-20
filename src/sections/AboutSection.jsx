import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiBriefcase, FiLayers, FiTrendingUp } from "react-icons/fi";
import Counter from "../components/Counter";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import profile from "../data/profile.json";

const statIcons = {
  "Projects Completed": FiLayers,
  "Technologies Learned": FiTrendingUp,
  Certifications: FiAward,
};

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A product-minded developer focused on polish, performance, and trust"
          description="I care about how software feels in the hands of real users, not just whether it works."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="space-y-6">
            <p className="text-lg leading-8 text-slate-200">{profile.about.intro}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-cyan-200">
                    <FiBriefcase size={18} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">Career Objective</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{profile.about.objective}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-fuchsia-400/10 text-fuchsia-200">
                    <FiTrendingUp size={18} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">My Journey</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{profile.about.journey}</p>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-emerald-400/10 text-emerald-200">
                  <FiBookOpen size={18} />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="mt-5 space-y-4">
                {profile.education.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
                        <FiBookOpen size={16} />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-2 text-slate-300">{item.institution}</p>
                        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid gap-5 sm:grid-cols-3">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <GlassCard className="text-center">
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                      {(() => {
                        const Icon = statIcons[stat.label] ?? FiAward;
                        return <Icon size={20} />;
                      })()}
                    </span>
                    <p className="font-display text-3xl font-bold text-white">
                      <Counter value={stat.value} />
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
