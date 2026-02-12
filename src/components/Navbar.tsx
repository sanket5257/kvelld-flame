"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

function FlipLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-[20px] overflow-hidden text-sm text-white/70"
    >
      <span
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
      >
        {label}
      </span>
      <span
        className="absolute left-0 top-full inline-block text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
      >
        {label}
      </span>
    </a>
  );
}

function FlipButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex overflow-hidden text-xs font-semibold tracking-wider text-white border border-white/30 hover:border-white/60 px-5 py-2 rounded-full transition-colors uppercase"
      style={{ perspective: "600px" }}
    >
      <span
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0"
        style={{ transformOrigin: "top center" }}
      >
        {label}
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
        style={{ transformOrigin: "bottom center" }}
      >
        {label}
      </span>
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 80 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-[1400px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"}`}
    >
      <nav className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/img/Kvell Logo.avif"
            alt="Kvell Dynamics"
            className="h-14 w-auto brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <FlipLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Right side: CTA */}
        <div className="hidden md:flex items-center gap-3">
          <FlipButton href="#contact" label="Get in Touch" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <a
                href="#contact"
                className="text-sm border border-white/30 text-white px-5 py-2 rounded-full"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
