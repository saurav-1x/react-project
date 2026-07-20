import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import useTypedText from "../hooks/useTypedText";
import profile from "../data/profile.json";
import { scrollToId } from "../utils/scrollToId";

function FloatingParticle({ index }) {
  return (
    <span
      aria-hidden="true"
      className="absolute rounded-full bg-white/20"
      style={{
        width: `${6 + (index % 5) * 4}px`,
        height: `${6 + (index % 5) * 4}px`,
        left: `${(index * 9) % 100}%`,
        top: `${(index * 13) % 100}%`,
        animation: `float ${4 + (index % 6)}s ease-in-out infinite`,
        animationDelay: `${index * 0.18}s`,
      }}
    />
  );
}

export default function HeroSection() {
  const typed = useTypedText(profile.roles);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-hero-grid bg-[size:34px_34px] opacity-20" />
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
      <div className="absolute right-[-10%] top-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl animate-blob [animation-delay:8s]" />
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, index) => (
          <FloatingParticle key={index} index={index} />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-display text-sm uppercase tracking-[0.4em] text-cyan-300">
            Crafting products with clarity and motion
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">{typed}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.headline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={() => scrollToId("projects")}>
              <span className="flex items-center gap-2">
                View Projects
                <FiArrowRight />
              </span>
            </Button>
            <Button as="a" href="/resume.pdf" download className="bg-transparent">
              <span className="flex items-center gap-2">
                <FiDownload />
                Download Resume
              </span>
            </Button>
            <Button onClick={() => scrollToId("contact")} className="bg-transparent">
              <span className="flex items-center gap-2">
                <FiMail />
                Contact Me
              </span>
            </Button>
          </div>

          <SocialLinks links={profile.socials} className="mt-10" />
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/10 to-emerald-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-4 shadow-glass backdrop-blur-2xl">
            <div className="rounded-[28px] border border-cyan-300/30 bg-slate-900/80 p-5">
              <img
                src="/assets/profile-avatar.svg"
                alt={`${profile.name} portrait illustration`}
                className="w-full rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 object-cover shadow-soft"
              />
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-white">UI Engineering</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
                  <p className="mt-2 text-sm font-semibold text-white">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.35em] text-slate-300"
      >
        Scroll
      </button>
    </section>
  );
}
