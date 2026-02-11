"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const movementX = useRef(0);
  const movementY = useRef(0);

  useEffect(() => {
    let phi = 0;
    let theta = 0.3;
    let width = 0;

    const onResize = () => {
      if (containerRef.current) {
        width = containerRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current || width === 0) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 12,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.2, 0.2],
      glowColor: [0.15, 0.15, 0.15],
      markers: [
        // South Africa
        { location: [-30.5595, 22.9375], size: 0.1 },
      ],
      onRender: (state) => {
        if (pointerStart.current === null) {
          phi += 0.003;
        }
        state.phi = phi + movementX.current;
        state.theta = theta + movementY.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).style.cursor = "grabbing";
  };

  const onPointerUp = () => {
    pointerStart.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
  };

  const onPointerOut = () => {
    pointerStart.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (pointerStart.current !== null) {
      const deltaX = e.clientX - pointerStart.current.x;
      const deltaY = e.clientY - pointerStart.current.y;
      movementX.current = deltaX / 100;
      movementY.current = deltaY / 100;
    }
  };

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ opacity: 1, cursor: "grab" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerOut}
        onPointerMove={onPointerMove}
      />
    </div>
  );
}
