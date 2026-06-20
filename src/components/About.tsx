"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Frontend",
    color: "var(--accent)",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    label: "Backend",
    color: "var(--cyan)",
    skills: ["Spring Boot", "Rust (Axum)", "Node.js", "MySQL", "PHP", "REST APIs"],
  },
  {
    label: "Tools & Infrastructure",
    color: "var(--green)",
    skills: ["Git", "Electron", "Linux / systemd", "Cloudflare", "Raspberry Pi"],
  },
];

const education = [
  {
    institution: "SunBeam Institute of Information Technology",
    location: "Pune-Karad",
    degree: "PG Diploma in Advance Computing (PG DAC)",
    field: "Computer Science",
    period: "Mar 2024 – Aug 2024",
    grade: "",
    skills: ["Spring Security", "Spring MVC", "Java", "Hibernate", "Linux"],
  },
  {
    institution: "Indian Institute of Technology, Madras",
    location: "Chennai",
    degree: "Bachelor of Science (BS)",
    field: "Data Processing & Data Processing Technology/Technician",
    period: "2021 – 2023",
    grade: "",
    skills: ["Data Science", "Python (Programming Language)"],
  },
  {
    institution: "Guru Ghasidas University",
    location: "Bilaspur, Chhattisgarh",
    degree: "Bachelor of Technology (BTech)",
    field: "Engineering / Industrial Management",
    period: "2019 – 2023",
    grade: "7.8 CGPA",
    skills: ["Time Management", "Supply Chain Management"],
  },
];

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".section-reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="section-reveal mb-16">
          <p className="font-mono text-[var(--accent)] text-sm mb-2 tracking-widest uppercase">
            01. About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            A bit about myself
          </h2>
        </div>

        {/* Bio + Skills */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="section-reveal space-y-5">
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              I&apos;m a full-stack developer with a passion for building things
              that live on the internet. I enjoy creating elegant solutions to
              complex problems, with a focus on performance and user experience.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              When I&apos;m not coding, I&apos;m usually exploring new
              technologies, contributing to open source, or tinkering with
              hardware projects on my Raspberry Pi. I believe great software is
              built at the intersection of technical excellence and empathy for
              the user.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              I&apos;m currently focused on building accessible, human-centered
              products at the intersection of design and engineering.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]"
                >
                  <div className="text-2xl font-bold text-[var(--accent)] font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="section-reveal space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: group.color }}
                  />
                  <span className="text-sm font-medium text-[var(--text-secondary)] font-mono">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="section-reveal mt-20">
          <h3 className="font-mono text-[var(--accent)] text-sm mb-8 tracking-widest uppercase">
            Education
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] space-y-3"
              >
                <div>
                  <p className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{edu.location}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">{edu.degree}</p>
                  <p className="text-xs text-[var(--text-muted)]">{edu.field}</p>
                </div>
                <p className="font-mono text-xs text-[var(--accent)]">{edu.period}</p>
                {edu.grade && (
                  <p className="text-xs text-[var(--text-muted)]">Grade: {edu.grade}</p>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                  {edu.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-xs rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
