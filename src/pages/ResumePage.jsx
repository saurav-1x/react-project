import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function ResumePage() {
  return (
    <section className="min-h-screen px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
          <FiArrowLeft />
          Back to home
        </Link>
        <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-2xl">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="font-display text-4xl font-bold text-white">Resume</p>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                This dedicated page is ready for expanded resume content, embedded previews, or a detailed printable layout.
              </p>
            </div>
            <Button as="a" href="/resume.pdf" download>
              <span className="flex items-center gap-2">
                <FiDownload />
                Download PDF
              </span>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {["Summary", "Skills", "Experience", "Education", "Projects", "Achievements"].map((section) => (
              <div key={section} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <h2 className="font-display text-2xl font-semibold text-white">{section}</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Replace this placeholder block with your real {section.toLowerCase()} information or embed a richer resume preview component here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
