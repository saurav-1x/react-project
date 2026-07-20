import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-glass backdrop-blur-2xl">
        <p className="font-display text-7xl font-extrabold text-white">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 max-w-md text-slate-300">
          The route you requested does not exist yet. Head back to the portfolio homepage.
        </p>
        <div className="mt-8">
          <Button as={Link} to="/">
            Return Home
          </Button>
        </div>
      </div>
    </section>
  );
}
