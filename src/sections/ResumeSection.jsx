import { FiDownload, FiEye, FiFileText, FiLayers, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";

const previewItems = [
  { label: "Professional Summary", icon: FiUser },
  { label: "Technical Skills", icon: FiLayers },
  { label: "Experience", icon: FiFileText },
  { label: "Education", icon: FiFileText },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="A recruiter-friendly snapshot with direct download access"
          description="The homepage includes a visual resume preview, while the dedicated route gives you space to add richer detail later."
        />
        <GlassCard className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                    <FiFileText size={20} />
                  </span>
                  <div>
                  <p className="font-display text-2xl font-bold text-white">Resume Preview</p>
                  <p className="mt-2 text-slate-400">Summary, experience, skills, and achievements</p>
                  </div>
                </div>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
                  PDF Ready
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {previewItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-cyan-200">
                      <item.icon size={16} />
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="font-display text-3xl font-semibold text-white">Share your profile in one click</h3>
            <p className="leading-7 text-slate-300">
              This section is designed to help recruiters view or download your resume without breaking the experience. Replace the placeholder PDF with your real document when you are ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="/resume.pdf" download>
                <span className="flex items-center gap-2">
                  <FiDownload />
                  Download Resume
                </span>
              </Button>
              <Button as={Link} to="/resume" className="bg-transparent">
                <span className="flex items-center gap-2">
                  <FiEye />
                  View Resume Page
                </span>
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
