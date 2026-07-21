import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const iconMap = {
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  instagram: FiInstagram,
};

export default function SocialLinks({ links, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((social) => {
        const Icon = iconMap[social.icon] ?? FiLinkedin;
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/50 bg-white/80 text-slate-700 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:text-cyan-600 dark:border-slate-700/70 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-cyan-300"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
