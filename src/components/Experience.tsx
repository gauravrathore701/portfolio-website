"use client";

import { useEffect, useRef, useState } from "react";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

const jobs: Job[] = [
  {
    company: "ZentrumHub",
    role: "Associate Software Developer",
    period: "Sep 2024 – Present",
    location: "Pune, Maharashtra · On-site",
    bullets: [
      "Building and maintaining full-stack features using Next.js and MongoDB.",
      "Working in a collaborative on-site team environment delivering product features.",
      "Contributing across the stack — frontend UI, backend APIs, and database design.",
    ],
    stack: ["Next.js", "MongoDB", "React", "Node.js", "TypeScript"],
  },
  {
    company: "ShareMarketStudies",
    role: "Freelance Web Developer",
    period: "Apr 2020 – Apr 2022",
    location: "Nashik, Maharashtra · Remote",
    bullets: [
      "Designed and managed the full ShareMarketStudies website from the ground up.",
      "Built custom WordPress themes and plugins using PHP for content management.",
      "Produced research articles and educational content for the platform.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "PHP", "WordPress"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".section-reveal").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const job = jobs[active];

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="section-reveal mb-16">
          <p className="font-mono text-[var(--accent)] text-sm mb-2 tracking-widest uppercase">
            03. Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="section-reveal flex flex-col sm:flex-row gap-8">
          {/* Company tabs */}
          <div className="sm:w-48 flex sm:flex-col flex-row overflow-x-auto sm:overflow-visible gap-0 shrink-0">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActive(i)}
                className={`relative px-4 py-3 text-sm font-medium text-left transition-all cursor-pointer whitespace-nowrap sm:whitespace-normal border-b-2 sm:border-b-0 sm:border-l-2 ${
                  active === i
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-card)]"
                }`}
              >
                {j.company}
              </button>
            ))}
          </div>

          {/* Job details */}
          <div className="flex-1 min-h-[280px]">
            <div key={active} className="animate-fade-in">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                {job.role}{" "}
                <span className="text-[var(--accent)]">@ {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-[var(--text-muted)] mb-6">
                {job.period} · {job.location}
              </p>
              <ul className="space-y-3 mb-6">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="text-[var(--accent)] mt-1 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
