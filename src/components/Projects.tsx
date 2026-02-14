"use client";

import { useRef, useState, useCallback } from "react";

const projects = [
  { src: "/img/project1.avif", alt: "Project 1" },
  { src: "/img/project2.avif", alt: "Project 2" },
  { src: "/img/project3.avif", alt: "Project 3" },
  { src: "/img/project4.avif", alt: "Project 4" },
  { src: "/img/project5.avif", alt: "Project 5" },
  { src: "/img/project6.avif", alt: "Project 6" },
];

export default function Projects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (cursorRef.current && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      cursorRef.current.style.left = `${e.clientX - rect.left}px`;
      cursorRef.current.style.top = `${e.clientY - rect.top}px`;
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark-bg py-24 pb-40"
      style={{ cursor: "none" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Awwwards-style "View Project" cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute z-20"
        style={{
          opacity: isHovering ? 1 : 0,
          transition:
            "left 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease, transform 0.25s ease",
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.5})`,
          mixBlendMode: "difference",
        }}
      >
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
          <span className="text-center font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.2em] text-black">
            View
            <br />
            Project
          </span>
        </div>
      </div>

      <div className="px-4">
        {/* Header */}
        <div className="mb-16" style={{ paddingLeft: "40px" }}>
          <span className="font-mono text-sm tracking-widest text-white/40">
            [ PROJECTS ]
          </span>
          <h2 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl md:text-[64px]">
            Selected work
          </h2>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1 — 2 images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProjectCard project={projects[0]} height="h-[550px]" />
            <ProjectCard project={projects[1]} height="h-[550px]" />
          </div>

          {/* Row 2 — 1 image full width */}
          <ProjectCard project={projects[2]} height="h-[650px]" />

          {/* Row 3 — 3 images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ProjectCard project={projects[3]} height="h-[500px]" />
            <ProjectCard project={projects[4]} height="h-[500px]" />
            <ProjectCard project={projects[5]} height="h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  height,
}: {
  project: { src: string; alt: string };
  height: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={project.src}
        alt={project.alt}
        className={`${height} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
    </div>
  );
}
