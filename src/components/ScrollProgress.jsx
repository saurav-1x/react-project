import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[90] h-1 bg-gradient-to-r from-accent-1 via-accent-4 to-accent-3 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}
