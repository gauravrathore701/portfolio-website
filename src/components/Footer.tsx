export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-muted)] font-mono">
          © {new Date().getFullYear()} Gaurav. Designed &amp; built with Next.js + Tailwind.
        </p>
        <p className="text-xs text-[var(--text-muted)]">
          Made with{" "}
          <span className="text-red-500">♥</span>
          {" "}from India
        </p>
      </div>
    </footer>
  );
}
