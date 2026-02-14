"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Generate bar heights for the charts
function generateBars(count: number, direction: "down" | "up"): number[] {
  const bars: number[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const base = direction === "down" ? 1 - t * 0.85 : 0.15 + t * 0.85;
    // Add slight randomness for organic feel
    const jitter = (Math.random() - 0.5) * 0.12;
    bars.push(Math.max(0.08, Math.min(1, base + jitter)));
  }
  return bars;
}

const costBars = generateBars(40, "down");
const impressionBars = generateBars(36, "up");
const salesBars = generateBars(36, "up");

const stats = [
  {
    label: "Marketing costs",
    value: -87,
    suffix: "%",
    bars: costBars,
  },
  {
    label: "Impressions",
    value: 360,
    suffix: "%",
    prefix: "+",
    bars: impressionBars,
  },
  {
    label: "NET sales value",
    value: 256,
    suffix: "%",
    prefix: "+",
    bars: salesBars,
  },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barGroupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Cards stagger in
      const validCards = cardRefs.current.filter(Boolean);
      if (validCards.length) {
        gsap.fromTo(
          validCards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: validCards[0]!,
              start: "top 85%",
            },
          }
        );
      }

      // Animate bars for each chart
      barGroupRefs.current.forEach((group) => {
        if (!group) return;
        const bars = group.querySelectorAll<HTMLElement>("[data-bar]");
        gsap.fromTo(
          bars,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.6,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          }
        );
      });

      // Counter animation
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            const prefix = stats[i].prefix || "";
            el.textContent = `${prefix}${Math.round(obj.val)}${stats[i].suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="rounded-b-[80px] bg-dark-bg py-28 lg:py-20 md:py-16 sm:py-12">
      <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-14 font-display text-[64px] font-light leading-[1.1] tracking-tight text-white lg:mb-12 lg:text-[52px] md:mb-10 md:text-[40px] max-sm:mb-8 max-sm:text-[28px]"
        >
          <span className="block">Impact we made</span>
          <em className="block text-white/40">in numbers.</em>
        </h2>

        {/* Stat cards — 2-column flex layout */}
        <div className="flex gap-px overflow-hidden rounded-2xl border border-dark-border max-sm:flex-col">
          {/* Left — Marketing costs (full height) */}
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="relative flex flex-[1.2] flex-col justify-between bg-dark-card p-8 lg:p-6 max-sm:p-6"
            style={{ minHeight: 420 }}
          >
            <div>
              <p className="text-[15px] font-semibold text-white max-sm:text-sm">
                {stats[0].label}
              </p>
              <span
                ref={(el) => {
                  numberRefs.current[0] = el;
                }}
                className="mt-1 block font-display text-[36px] font-semibold tracking-tight text-primary lg:text-[30px] max-sm:text-[26px]"
              >
                0{stats[0].suffix}
              </span>
            </div>

            <div
              ref={(el) => {
                barGroupRefs.current[0] = el;
              }}
              className="mt-auto flex items-end gap-[2px] pt-8"
              style={{ height: 200 }}
            >
              {stats[0].bars!.map((h, j) => (
                <div
                  key={j}
                  data-bar
                  className="origin-bottom rounded-t-sm bg-white"
                  style={{ width: 2, height: `${h * 100}%` }}
                />
              ))}
            </div>
          </div>

          {/* Right column — Impressions + NET sales value */}
          <div className="flex flex-1 flex-col gap-px">
            {/* Impressions */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className="relative flex flex-[1.4] flex-col justify-between bg-dark-card p-8 lg:p-6 max-sm:p-6"
              style={{ minHeight: 280 }}
            >
              <div>
                <p className="text-[15px] font-semibold text-white max-sm:text-sm">
                  {stats[1].label}
                </p>
                <span
                  ref={(el) => {
                    numberRefs.current[1] = el;
                  }}
                  className="mt-1 block font-display text-[36px] font-semibold tracking-tight text-primary lg:text-[30px] max-sm:text-[26px]"
                >
                  {stats[1].prefix}0{stats[1].suffix}
                </span>
              </div>

              <div
                ref={(el) => {
                  barGroupRefs.current[1] = el;
                }}
                className="mt-auto flex items-end gap-[2px] pt-8"
                style={{ height: 160 }}
              >
                {stats[1].bars!.map((h, j) => (
                  <div
                    key={j}
                    data-bar
                    className="origin-bottom rounded-t-sm bg-white"
                    style={{ width: 2, height: `${h * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* NET sales value */}
            <div
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              className="flex flex-1 flex-col justify-between bg-dark-card p-8 lg:p-6 max-sm:p-6"
              style={{ minHeight: 220 }}
            >
              <div>
                <p className="text-[15px] font-semibold text-white max-sm:text-sm">
                  {stats[2].label}
                </p>
                <span
                  ref={(el) => {
                    numberRefs.current[2] = el;
                  }}
                  className="mt-1 block font-display text-[36px] font-semibold tracking-tight text-primary lg:text-[30px] max-sm:text-[26px]"
                >
                  {stats[2].prefix}0{stats[2].suffix}
                </span>
              </div>

              <div
                ref={(el) => {
                  barGroupRefs.current[2] = el;
                }}
                className="mt-auto flex items-end gap-[2px] pt-8"
                style={{ height: 120 }}
              >
                {stats[2].bars!.map((h, j) => (
                  <div
                    key={j}
                    data-bar
                    className="origin-bottom rounded-t-sm bg-white"
                    style={{ width: 2, height: `${h * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
