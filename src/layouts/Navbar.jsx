import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import profile from "../data/profile.json";
import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/Button";
import { scrollToId } from "../utils/scrollToId";

const navItems = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[85]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-xl"
        >
          {profile.name.split(" ").map((part) => part[0]).join("")}
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 p-2 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToId(item)}
              className="rounded-full px-4 py-2 text-sm capitalize text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            as="a"
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex"
          >
            <span className="flex items-center gap-2">
              <FiDownload />
              Resume
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
