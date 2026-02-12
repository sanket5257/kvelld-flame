"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), { ssr: false });
const TechStack3D = dynamic(() => import("./TechStack3D"), { ssr: false });

const stats = [
  { value: "13+", label: "Years of Experience" },
  { value: "15+", label: "Awards & Recognition" },
  { value: "350+", label: "Satisfied Clients" },
];

export default function About() {
  return (
    <section className="bg-dark-bg py-28 lg:py-20 md:py-16 sm:py-12">
      <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
        {/* Section label */}
        <p className="mb-10 font-mono text-sm tracking-wider text-white/40 lg:mb-8 md:mb-6">
          {"[ ABOUT US ]"} <span className="text-white/60">↓</span>
        </p>

        {/* Top row - 3 column bento */}
        <div className="grid grid-cols-12 gap-5 md:grid-cols-6 sm:grid-cols-1 sm:gap-4">
          {/* Stats column */}
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col justify-center rounded-xl border-l-2 border-white/20 bg-dark-card pl-5 pr-4 py-4"
              >
                <p className="font-display text-3xl font-semibold text-white lg:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] tracking-wide text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Logo / Brand card */}
          <div className="col-span-3 flex flex-col justify-between rounded-2xl border border-dark-border bg-dark-card p-6 md:col-span-2 sm:rounded-xl">
            <div className="flex flex-1 items-center justify-center py-8">
              <div className="text-6xl font-display font-bold text-white/10 lg:text-5xl">
                KD
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/60">
                AI Solutions Expert & Partner
              </p>
              <p className="mt-1 text-xs text-white/40">
                Learn More <span className="ml-1">→</span>
              </p>
            </div>
          </div>

          {/* Globe card */}
          <div className="col-span-7 overflow-hidden rounded-2xl border border-dark-border bg-dark-card md:col-span-3 sm:rounded-xl">
            <div className="relative h-full min-h-[640px] lg:min-h-[520px] md:min-h-[420px] sm:min-h-[320px]">
              {/* Location label */}
              <div className="absolute left-6 top-6 z-10 lg:left-5 lg:top-5">
                <p className="font-display text-xl font-semibold text-white lg:text-lg md:text-base">
                  Based in South Africa
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs tracking-wider text-white/50">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                  AVAILABLE WORLDWIDE
                </p>
              </div>

              {/* Cobe Globe */}
              <div className="absolute -bottom-[20%] left-0 right-0 top-[20%]">
                <Globe />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - Founder section */}
        <div className="mt-5 grid grid-cols-12 gap-5 md:grid-cols-6 sm:grid-cols-1 sm:gap-4">
          {/* Founder image */}
          <div className="col-span-5 overflow-hidden rounded-2xl border border-dark-border md:col-span-3 sm:rounded-xl">
            <div className="relative flex h-full min-h-[560px] items-end p-6 lg:min-h-[460px] lg:p-5">
              <img
                src="/img/founder.avif"
                alt="Founder"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />
              <div className="relative z-10">
                <p className="font-display text-lg font-semibold text-white">
                  Founder Name
                </p>
                <p className="font-mono text-[10px] tracking-wider text-white/40">
                  FOUNDER & CEO OF KVELL DYNAMICS
                </p>
              </div>
            </div>
          </div>

          {/* Founder bio */}
          <div className="col-span-7 flex flex-col justify-center rounded-2xl border border-dark-border p-8 md:col-span-3 lg:p-6 sm:rounded-xl">
            <h3 className="font-display text-2xl font-semibold text-white lg:text-xl">
              The Founder
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Founded Kvell Dynamics with a vision to bring AI-driven solutions
              to businesses worldwide. With deep expertise in data management and
              machine learning, the focus has always been on building technology
              that makes a real impact.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              From small startups to enterprise clients, Kvell Dynamics partners
              closely with brands seeking meaningful growth, remaining deeply
              involved to ensure every decision is intentional and built to last.
            </p>

            <p className="mt-6 text-sm text-white/40">
              Work with us <span className="ml-1">→</span>
            </p>
          </div>
        </div>

        {/* Tech Stack 3D row */}
        <div className="mt-5 grid grid-cols-12 gap-5 md:grid-cols-6 sm:grid-cols-1 sm:gap-4">
          <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl border border-dark-border bg-dark-card">
            <div className="relative h-[620px] lg:h-[520px] md:h-[420px] sm:h-[360px]">
              {/* Label overlay */}
              <div className="absolute left-6 top-6 z-10 lg:left-5 lg:top-5">
                <p className="font-display text-xl font-semibold text-white lg:text-lg md:text-base">
                  Tech Stack
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs tracking-wider text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  DRAG TO EXPLORE
                </p>
              </div>

              {/* 3D Canvas */}
              <TechStack3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
