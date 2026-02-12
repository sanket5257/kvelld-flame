"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Jay is a beast!! High quality work in a short timeframe. His motion and graphic work is truly gamechanging. Can't recommend him enough!",
    name: "Rishi Choudhary",
    title: "CEO & CO-FOUNDER",
    company: "KASTLE AI",
    avatar: "/img/team.png",
  },
  {
    quote:
      "Jay's the real deal. Not only a Framer pro, but he truly cares—bringing ideas, polish, and extra miles we didn't even ask for. On Lorikeet, he turned loose homepage hero concepts into a live staging link in just a day, completely reshaping what we thought was possible. Creative, proactive, and lightning-fast with QA, he delivers unique animations, smart solutions, and clear comms. Funny, honest, and a joy to work with—we can't wait for the next project.",
    name: "Dinesh Dave",
    title: "CO-FOUNDER & CREATIVE DIRECTOR",
    company: "WORK IS PLAY",
    avatar: "/img/team.png",
  },
  {
    quote:
      "Jay is a one-of-a-kind creative mind (in the best way possible!). He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him on various projects over the years. Jay consistently delivers exceptional results and never underperforms. I would highly recommend him for your next project—he's essentially a Swiss Army knife of content creation.",
    name: "Max Trudel",
    title: "DIRECTOR / DOP",
    company: "SIDE HIT FILMS",
    avatar: "/img/team.png",
  },
  {
    quote:
      "The man's a chameleon, minus the cliché. While many designers get stuck in a \"house style\" (which can be as polarizing as pineapple on pizza), Jay's versatility is his superpower. Over the years working with Boombox, he's proven time and time again that no creative challenge is too big, too niche, or too wild. From 2D animations to 3D renders and even web design, Jay's range is nothing short of extraordinary.",
    name: "Tj Walker",
    title: "HEAD OF PRODUCTION",
    company: "BOOMBOX",
    avatar: "/img/team.png",
  },
  {
    quote:
      "Everyone at this level has technical competence, but Jay's actual superpowers are the care he takes to understand the goal, collaborate on solutions, communicate, and bring the vision to life. He was worth every penny and then some.",
    name: "LZ Granderson",
    title: "CREATIVE PRODUCER",
    company: "",
    avatar: "/img/team.png",
  },
];

export default function Testimonials() {
  const allCards = [...testimonials, ...testimonials];
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dragStart = useRef({ x: 0, scrollOffset: 0 });
  const currentOffset = useRef(0);
  const animationPaused = useRef(false);

  // Move custom cursor to follow mouse
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (cursorRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        cursorRef.current.style.left = `${e.clientX - rect.left}px`;
        cursorRef.current.style.top = `${e.clientY - rect.top}px`;
      }

      if (isDragging && trackRef.current) {
        const dx = e.clientX - dragStart.current.x;
        const newOffset = dragStart.current.scrollOffset + dx;
        currentOffset.current = newOffset;
        trackRef.current.style.transform = `translateX(${newOffset}px)`;
      }
    },
    [isDragging]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current.x = e.clientX;

    // Grab current computed translateX
    if (trackRef.current) {
      const style = window.getComputedStyle(trackRef.current);
      const matrix = new DOMMatrix(style.transform);
      currentOffset.current = matrix.m41;
      dragStart.current.scrollOffset = matrix.m41;

      // Pause animation, keep current position
      trackRef.current.style.animation = "none";
      trackRef.current.style.transform = `translateX(${matrix.m41}px)`;
      animationPaused.current = true;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    // Resume auto-scroll from current position
    if (trackRef.current) {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;
      // Normalize offset so it loops
      let offset = currentOffset.current % totalWidth;
      if (offset > 0) offset -= totalWidth;

      track.style.transform = "";
      track.style.animation = "none";
      // Force reflow
      void track.offsetHeight;

      // Calculate how far through the animation we are
      const progress = Math.abs(offset) / totalWidth;
      const duration = 40;
      const delay = -(progress * duration);

      track.style.animation = `scroll-left ${duration}s linear infinite`;
      track.style.animationDelay = `${delay}s`;
      animationPaused.current = false;
    }
  }, []);

  // Handle mouse leaving the section
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Cleanup on unmount
  useEffect(() => {
    const handleGlobalUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };
    window.addEventListener("mouseup", handleGlobalUp);
    return () => window.removeEventListener("mouseup", handleGlobalUp);
  }, [isDragging, handleMouseUp]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `,
        }}
      />

      <section className="flex h-screen flex-col justify-center overflow-hidden bg-[#f8f9fb]">
        {/* Header */}
        <div className="mx-auto max-w-[1344px] px-10 text-center md:px-6">
          <span className="font-mono text-sm tracking-widest text-black/40">
            [ TESTIMONIALS ]
          </span>
          <h2 className="mt-4 font-display text-5xl font-semibold text-black sm:text-6xl md:text-[64px]">
            Dont&apos; take our word for it
            <span className="text-[#e85d2a]">*</span>
          </h2>
          <p className="mt-2 font-mono text-sm tracking-widest text-[#e85d2a]">
            *TAKE THEIRS
          </p>
        </div>

        {/* Scrolling testimonial cards - draggable */}
        <div
          className="relative mt-16 select-none"
          style={{ cursor: "none" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Awwwards-style drag cursor */}
          <div
            ref={cursorRef}
            className="pointer-events-none absolute z-20"
            style={{
              opacity: isHovering ? 1 : 0,
              transition: "left 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease, transform 0.2s ease",
              transform: `translate(-50%, -50%) scale(${isDragging ? 0.8 : 1})`,
              mixBlendMode: "difference",
            }}
          >
            <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/20 bg-white">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Drag
              </span>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex w-max items-start gap-6"
            style={{ animation: "scroll-left 40s linear infinite" }}
          >
            {allCards.map((t, i) => (
              <div
                key={i}
                style={{
                  transform:
                    i % 2 === 1 ? "translateY(80px)" : "translateY(0)",
                }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="w-[420px] shrink-0 rounded-2xl bg-[#1a1a1a] p-8">
      <p className="text-[15px] leading-relaxed text-white/90">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="font-mono text-[10px] tracking-wider text-white/40">
              {testimonial.title}
              {testimonial.company && (
                <>
                  <br />
                  {testimonial.company}
                </>
              )}
            </p>
          </div>
        </div>

        <span className="font-display text-4xl leading-none text-[#e85d2a]/30">
          &ldquo;&rdquo;
        </span>
      </div>
    </div>
  );
}
