import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import profile from "../data/profile.json";

const githubStats = [
  { label: "Repositories", value: "32+" },
  { label: "Followers", value: "180+" },
  { label: "Languages", value: "12" },
];

export default function GithubSection() {
  const username = profile.githubUsername;

  return (
    <section id="github" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source presence and contribution highlights"
          description="Swap the username in profile data to instantly personalize the GitHub graph, language summary, and profile CTA."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="space-y-6">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt={`${username} contribution chart`}
              className="w-full rounded-[24px] border border-white/10 bg-slate-950 p-4"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`}
              alt={`${username} top programming languages`}
              className="w-full rounded-[24px] border border-white/10 bg-slate-950 p-4"
            />
          </GlassCard>
          <div className="space-y-6">
            <GlassCard>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {githubStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                  <FiGithub size={26} />
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">Explore my GitHub profile</h3>
                <p className="leading-7 text-slate-300">
                  Projects, experiments, and polished UI work live here. Replace the sample username with your real profile to make this section production-ready.
                </p>
                <Button as="a" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2">
                    Visit Profile
                    <FiExternalLink />
                  </span>
                </Button>
              </motion.div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
