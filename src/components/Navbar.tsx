"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[var(--accent)] font-bold text-lg tracking-tight hover:text-[var(--accent-hover)] transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          gaurav.dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                    activeSection === id
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                  {activeSection === id && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--accent)] rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-medium border border-[var(--accent)] text-[var(--accent)] rounded-md hover:bg-[var(--accent-dim)] transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] font-medium py-1"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
