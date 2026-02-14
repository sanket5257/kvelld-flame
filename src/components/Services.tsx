"use client";

import { useRef, useCallback, useState } from "react";
import gsap from "gsap";

const services = [
  { name: "Automation", image: "/img/project1.avif" },
  { name: "Branding", image: "/img/project2.avif" },
  { name: "IT Security Services", image: "/img/project3.avif" },
  { name: "Lightning Fast Webdesign", image: "/img/project4.avif" },
  { name: "Photography", image: "/img/project5.avif" },
  { name: "SEO", image: "/img/project6.avif" },
];

const marqueeStyle: React.CSSProperties = {
  animation: "marquee-fade 1.2s ease-in-out infinite",
};

const marqueeDelayStyle: React.CSSProperties = {
  animation: "marquee-fade 1.2s ease-in-out infinite",
  animationDelay: "0.3s",
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);

    if (imageWrapRef.current) {
      gsap.killTweensOf(imageWrapRef.current);
      gsap.fromTo(
        imageWrapRef.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 1 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.6,
          ease: "power4.inOut",
        }
      );
    }

    if (imageInnerRef.current) {
      gsap.killTweensOf(imageInnerRef.current);
      gsap.fromTo(
        imageInnerRef.current,
        { scale: 1.4 },
        { scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (imageWrapRef.current) {
      gsap.killTweensOf(imageWrapRef.current);
      gsap.to(imageWrapRef.current, {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setActiveIndex(null),
      });
    }

    if (imageInnerRef.current) {
      gsap.killTweensOf(imageInnerRef.current);
      gsap.to(imageInnerRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current || !imageWrapRef.current || activeIndex === null)
        return;
      const rect = containerRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const imgH = imageWrapRef.current.offsetHeight;
      const clampedY = Math.min(Math.max(y - imgH / 2, 0), rect.height - imgH);

      gsap.to(imageWrapRef.current, {
        y: clampedY,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
    [activeIndex]
  );

  return (
    <>
      <style>{`
        @keyframes marquee-fade {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>

      <section className="bg-dark-bg py-28 lg:py-20 md:py-16 sm:py-12">
        <div className="mx-auto max-w-[1344px] px-10 lg:px-10 md:px-6">
          <h2 className="mb-16 font-display text-[64px] font-semibold tracking-tight text-white lg:mb-12 lg:text-[52px] md:mb-10 md:text-[40px] max-sm:mb-8 max-sm:text-[28px]">
            Services
          </h2>

          <div
            ref={containerRef}
            className="relative"
            onMouseMove={handleMouseMove}
          >
            {/* Floating image — awwwards-style clip-path reveal */}
            <div
              ref={imageWrapRef}
              className="pointer-events-none absolute right-12 z-30 h-[420px] w-[320px] overflow-hidden rounded-2xl lg:right-8 lg:h-[350px] lg:w-[260px] max-sm:hidden"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                willChange: "clip-path, transform",
              }}
            >
              <div ref={imageInnerRef} className="h-full w-full">
                {activeIndex !== null && (
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].name}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Service rows */}
            {services.map((service, i) => (
              <div
                key={service.name}
                className="relative cursor-pointer border-t border-white/10 last:border-b"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-5 py-8 lg:py-7 md:py-6 max-sm:py-5">
                  {/* Arrows on the left — marquee fade in/out */}
                  <div className="flex w-32 items-center gap-2 overflow-hidden max-sm:w-20">
                    {activeIndex === i && (
                      <>
                        <img
                          src="/img/arrow.png"
                          alt=""
                          style={marqueeStyle}
                          className="h-14 w-14 shrink-0 max-sm:h-10 max-sm:w-10"
                        />
                        <img
                          src="/img/arrow.png"
                          alt=""
                          style={marqueeDelayStyle}
                          className="h-14 w-14 shrink-0 max-sm:h-10 max-sm:w-10"
                        />
                      </>
                    )}
                  </div>

                  <h3
                    className={`flex-1 font-display text-[40px] font-light tracking-tight transition-colors duration-300 lg:text-[34px] md:text-[28px] max-sm:text-[22px] ${
                      activeIndex === i ? "text-white" : "text-white/40"
                    }`}
                  >
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
