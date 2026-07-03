"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orbit rings — cosmic fantasy layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orbit-ring orbit-spin-1 w-[420px] h-[420px]" />
        <div className="orbit-ring orbit-spin-2 w-[620px] h-[620px] absolute" />
        <div className="orbit-ring orbit-spin-3 w-[840px] h-[840px] absolute hidden sm:block" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(240,240,240,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating cosmic drifters */}
      <span className="absolute top-[18%] left-[12%] text-2xl opacity-30 animate-float-slow pointer-events-none select-none">🪐</span>
      <span className="absolute top-[28%] right-[14%] text-xl opacity-25 animate-float-slower pointer-events-none select-none">🌙</span>
      <span className="absolute bottom-[22%] left-[18%] text-lg opacity-20 animate-float-slower pointer-events-none select-none">☄️</span>
      <span className="absolute bottom-[30%] right-[10%] text-2xl opacity-25 animate-float-slow pointer-events-none select-none">🛸</span>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="animate-fade-up glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-none">
          Hi, I&apos;m{" "}
          <span className="shimmer-text">Gaurav</span>
        </h1>

        {/* Role */}
        <p className="animate-fade-up delay-200 font-mono text-[var(--accent)] text-lg sm:text-xl mb-6 tracking-wide">
          &lt; Full-Stack Developer &amp; Problem Solver /&gt;
        </p>

        {/* Bio */}
        <p className="animate-fade-up delay-300 text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          I build fast, accessible, and delightful web applications. Passionate
          about clean code, great UX, and turning complex ideas into simple,
          elegant interfaces.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg font-medium text-sm bg-[var(--accent)] text-[#0d0d0d] hover:bg-[var(--accent-hover)] transition-all hover:shadow-[0_0_24px_var(--accent-glow)] cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg font-medium text-sm border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Socials */}
        <div className="animate-fade-up delay-500 flex items-center justify-center gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] animate-pulse">
          scroll to warp
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent animate-bounce" />
      </div>
    </section>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gauravrathore701",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravrathore701",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:killingwiz@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];
