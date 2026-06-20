"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText("killingwiz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoUrl = `mailto:killingwiz@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
    window.open(mailtoUrl);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="section-reveal text-center mb-16">
          <p className="font-mono text-[var(--accent)] text-sm mb-2 tracking-widest uppercase">
            04. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Get In Touch
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind, a question, or just want to say hi — my inbox is
            always open.
          </p>
        </div>

        <div className="section-reveal grid lg:grid-cols-2 gap-10">
          {/* Left: direct contact */}
          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
              <p className="text-xs font-mono text-[var(--text-muted)] mb-1">Email</p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:killingwiz@gmail.com"
                  className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors text-sm font-medium"
                >
                  killingwiz@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                Elsewhere
              </p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] group transition-all"
                >
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                    {s.icon}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {s.label}
                  </span>
                  <svg
                    className="ml-auto w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-3 rounded-lg bg-[var(--green)]/10 border border-[var(--green)]/20 text-[var(--green)] text-sm text-center">
                Message opened in your mail client. Thanks for reaching out!
              </div>
            )}
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:bg-[var(--accent-hover)] transition-all hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/gauravrathore701",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravrathore701",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];
