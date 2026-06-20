"use client";

import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
}

const projects: Project[] = [
  {
    title: "EvergreenEstate",
    description:
      "Full-stack real estate web app built with Spring Boot, MySQL, and React. Implemented SOLID principles for clean, scalable architecture — featuring secure JWT authentication, dynamic property listings, and a fully responsive UI.",
    tags: ["React", "Spring Boot", "MySQL", "JavaScript", "REST API"],
    github: "https://github.com/gauravrathore701/EvergreenEstate",
    featured: true,
  },
  {
    title: "Mail-Service",
    description:
      "Production email microservice written in Rust using the Axum framework. Handles contact form submissions and transactional emails with minimal memory footprint. Deployed live on a Raspberry Pi behind Cloudflare Tunnels.",
    tags: ["Rust", "Axum", "REST API", "Raspberry Pi", "Cloudflare"],
    github: "https://github.com/gauravrathore701/Mail-Service",
    featured: true,
    status: "Live",
  },
  {
    title: "CSV DataReader",
    description:
      "Cross-platform desktop application built with ElectronJS for reading, parsing, and visualizing CSV files. Features a clean tabbed interface and handles large datasets without browser memory limitations.",
    tags: ["Electron", "JavaScript", "Node.js", "Desktop"],
    github: "https://github.com/gauravrathore701/CSV-DataReader-Electron",
    featured: true,
  },
  {
    title: "SpeechtoText",
    description:
      "Real-time speech-to-text converter using React and the Web Speech API. Supports English and Hindi with a responsive, mobile-friendly interface.",
    tags: ["React", "Vite", "Speech Recognition"],
    github: "https://github.com/gauravrathore701/SpeechtoText",
    demo: "https://gauravrathore701.github.io/SpeechtoText/",
  },
  {
    title: "TicTacToe-React",
    description:
      "Classic Tic-Tac-Toe game built as a deep dive into React hooks — useState and useEffect. Clean two-player gameplay with win detection and board reset.",
    tags: ["React", "JavaScript", "Hooks"],
    github: "https://github.com/gauravrathore701/TicTacToe-React",
    demo: "https://gauravrathore701.github.io/TicTacToe-React/",
  },
  {
    title: "User Auth System",
    description:
      "Full authentication flow with user registration, login, session management, and protected routes. Built with a Node.js backend and vanilla JavaScript frontend.",
    tags: ["JavaScript", "Node.js", "Auth", "Sessions"],
    github: "https://github.com/gauravrathore701/user-authentication-system",
  },
  {
    title: "VillaFormZH",
    description:
      "Interactive villa booking form with a polished HTML/CSS design. Deployed via GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gauravrathore701/VillaFormZH",
    demo: "https://gauravrathore701.github.io/VillaFormZH/",
  },
  {
    title: "Leetcode Problems",
    description:
      "Growing collection of LeetCode solutions in Python, covering arrays, graphs, dynamic programming, and more.",
    tags: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/gauravrathore701/Leetcode-Problems",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="section-reveal mb-16">
          <p className="font-mono text-[var(--accent)] text-sm mb-2 tracking-widest uppercase">
            02. Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Things I&apos;ve built
          </h2>
        </div>

        {/* Featured projects */}
        <div className="section-reveal space-y-8 mb-20">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* Other projects */}
        <div className="section-reveal">
          <p className="text-center text-[var(--text-muted)] text-sm font-mono mb-8">
            Other noteworthy projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((project) => (
              <SmallCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <div
      className={`group relative grid lg:grid-cols-2 gap-0 rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--border-hover)] transition-all duration-300 bg-[var(--bg-card)]`}
    >
      {/* Color accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      {/* Visual placeholder */}
      <div
        className={`relative min-h-[200px] lg:min-h-[260px] ${reverse ? "lg:order-2" : ""} overflow-hidden`}
      >
        <div
          className="absolute inset-0 grid-bg opacity-10"
          style={{ backgroundSize: "32px 32px" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-mono text-[var(--accent)] border border-[var(--accent)]"
            style={{ background: "var(--accent-dim)" }}
          >
            {project.title[0]}
          </div>
        </div>
        {project.status && (
          <span className="absolute top-3 left-3 px-2 py-0.5 text-xs rounded-full bg-[var(--green)]/10 text-[var(--green)] border border-[var(--green)]/20">
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 lg:p-8 flex flex-col justify-center ${reverse ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs text-[var(--accent)] mb-2 tracking-widest">
          Featured Project
        </p>
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-[var(--text-muted)] bg-[var(--bg)] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Live Demo"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <svg
          className="text-[var(--accent)] w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <GitHubIcon />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
        {project.title}
      </h3>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-xs text-[var(--text-muted)]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
