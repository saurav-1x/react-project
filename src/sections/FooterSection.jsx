import { FiArrowUpRight } from "react-icons/fi";
import profile from "../data/profile.json";
import SocialLinks from "../components/SocialLinks";
import { scrollToId } from "../utils/scrollToId";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function FooterSection() {
  return (
    <footer className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start">
          <div>
            <p className="font-display text-2xl font-bold text-white">{profile.name}</p>
            <p className="mt-3 max-w-md leading-7 text-slate-300">
              Premium frontend experiences, modern React products, and maintainable UI systems built with care.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className="flex items-center gap-2 text-left text-slate-200 transition hover:text-white"
                >
                  {link.label}
                  <FiArrowUpRight />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Social</p>
            <SocialLinks links={profile.socials} className="mt-4" />
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 {profile.name}. Crafted with React, Tailwind CSS, and Framer Motion.
        </div>
      </div>
    </footer>
  );
}
