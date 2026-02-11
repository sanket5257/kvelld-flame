"use client";

import { useRef, useState } from "react";

export default function HeroCTA() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 85, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setPos({ x: 85, y: 50 });
  };

  const flameX = hovering ? pos.x : 85;
  const flameY = hovering ? pos.y : 50;

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {/* Outer glow that spills outside the button */}
      <span
        className="absolute pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          width: "200px",
          height: "120px",
          left: `${flameX}%`,
          top: `${flameY}%`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse at 50% 70%, rgba(255,160,50,0.3) 0%, rgba(255,120,0,0.12) 50%, transparent 70%)`,
          filter: "blur(12px)",
        }}
      />
      <a
        href="#features"
        className="hero-cta-btn group relative inline-flex items-center gap-2.5 px-14 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase overflow-hidden"
      >
        {/* Core flame glow inside button */}
        <span
          className="absolute pointer-events-none blur-[5px] transition-all duration-300 ease-out"
          style={{
            width: "140px",
            height: "90px",
            left: `${flameX}%`,
            top: `${flameY}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(43.3% 44.23% at 50% 49.51%, #FFFFF7 29%, #FFFACD 48.5%, #F4D2BF 60.71%, rgba(214,211,210,0.00) 100%)`,
          }}
        />
        {/* Bright hot center */}
        <span
          className="absolute pointer-events-none blur-[2px] opacity-80 transition-all duration-300 ease-out"
          style={{
            width: "60px",
            height: "40px",
            left: `${flameX}%`,
            top: `${flameY}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(ellipse at 50% 60%, #FFFFF7 0%, #FFFACD 40%, rgba(244,210,191,0) 70%)`,
          }}
        />
        <span className="relative z-10">Explore Solutions</span>
        <svg
          className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
