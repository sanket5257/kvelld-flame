"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".approach-card");

      // Scroll reveal
      gsap.set(cards, { opacity: 0, y: 60 });

      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      });

      // Awwwards-style hover: magnetic tilt + image parallax zoom + border glow
      cards.forEach((card) => {
        const img = card.querySelector("img");
        const content = card.querySelector<HTMLElement>(".relative.z-10");

        const handleEnter = () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "0 0 30px rgba(255,255,255,0.06), 0 0 60px rgba(99,102,241,0.08)",
            borderColor: "rgba(255,255,255,0.15)",
          });
          if (img) {
            gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power2.out" });
          }
        };

        const handleLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power3.out",
            boxShadow: "0 0 0px rgba(255,255,255,0)",
            borderColor: "",
          });
          if (img) {
            gsap.to(img, {
              scale: 1,
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          }
          if (content) {
            gsap.to(content, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
          }
        };

        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 800,
          });

          // Parallax shift on image
          if (img) {
            gsap.to(img, {
              x: ((x - centerX) / centerX) * -8,
              y: ((y - centerY) / centerY) * -8,
              duration: 0.3,
              ease: "power2.out",
            });
          }

          // Subtle content float
          if (content) {
            gsap.to(content, {
              x: ((x - centerX) / centerX) * 4,
              y: ((y - centerY) / centerY) * 4,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        card.style.transformStyle = "preserve-3d";

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
        card.addEventListener("mousemove", handleMove);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark-bg py-28 lg:py-20 md:py-16 sm:py-12">
      <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
          <h2 className="mb-16 font-display text-[64px] font-semibold tracking-tight text-white lg:mb-12 lg:text-[52px] md:mb-10 md:text-[40px] max-sm:mb-8 max-sm:text-[28px]">
            Our Approach
          </h2>
        {/* Bento Layout — 2 columns on desktop, stacked on mobile */}
        <div className="flex gap-5 max-sm:flex-col max-sm:gap-4">
          {/* Left — Card 01 */}
          <div className="approach-card relative min-h-[780px] flex-[1.1] overflow-hidden rounded-2xl border border-dark-border bg-dark-card lg:min-h-[660px] max-sm:min-h-[400px]">
            <img
              src="/img/brands/group-40165_1.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-10 lg:p-8 max-sm:p-6">
              <span className="mb-6 text-sm font-semibold text-primary">01</span>
              <h3 className="font-display text-[42px] font-light leading-[1.1] tracking-tight text-white lg:text-[36px] md:text-[30px] max-sm:text-[26px]">
                One team.
                <br />
                <em className="font-semibold">Built for speed.</em>
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                No juggling freelancers.
                <br />
                No bloated agencies.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                We cover strategy, content, tech and automation in one go.
              </p>
            </div>
          </div>

          {/* Right — Cards 02, 03, 04 */}
          <div className="flex flex-1 flex-col gap-5 max-sm:gap-4">
            {/* Card 02 — top right */}
            <div className="approach-card relative flex-[1.6] overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[320px]">
              <img
                src="/img/brands/frame-40166.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                <span className="mb-4 text-sm font-semibold text-primary">02</span>
                <h3 className="font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-white lg:text-2xl">
                  <em>Strategy</em> before screens
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/50 max-sm:text-sm">
                  We start with what your audience&apos;s needs and build a site that moves them to action.
                </p>
              </div>
            </div>

            {/* Bottom row — Cards 03 & 04 */}
            <div className="flex flex-1 gap-5 max-sm:flex-col max-sm:gap-4">
              {/* Card 03 */}
              <div className="approach-card relative flex-1 overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[300px]">
                <img
                  src="/img/brands/frame-40164.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                  <span className="mb-4 text-sm font-semibold text-primary">03</span>
                  <h3 className="font-display text-[24px] font-semibold leading-[1.15] tracking-tight text-white lg:text-xl">
                    Built to <em>think</em>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/50 max-sm:text-sm">
                    Smart and integrated systems that scale <em className="text-white/60">with</em> you.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="approach-card relative flex-1 overflow-hidden rounded-2xl border border-dark-border bg-dark-card max-sm:min-h-[300px]">
                <img
                  src="/img/brands/image-619.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-6">
                  <span className="mb-4 text-sm font-semibold text-primary">04</span>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-[20px] font-semibold tracking-tight text-white lg:text-lg">
                      Our formula
                    </h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M1.5 7h11m0 0L8 2.5M12.5 7 8 11.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
