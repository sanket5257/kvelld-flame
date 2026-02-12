"use client";

import { useRef, useEffect } from "react";
import Matter from "matter-js";
import {
  siReact,
  siNextdotjs,
  siThreedotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siDocker,
  siPython,
  siMongodb,
  siFigma,
  siGit,
  siGraphql,
} from "simple-icons";

/* ─── Types + data ──────────────────────────────────────────── */
interface SIcon {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

const icons: SIcon[] = [
  siReact,
  siNextdotjs,
  siTypescript,
  siThreedotjs,
  siTailwindcss,
  siNodedotjs,
  siPython,
  siGraphql,
  siDocker,
  siMongodb,
  siGit,
  siFigma,
].map((i) => i as SIcon);

/* ─── Pre-render a 3D-looking ball texture ──────────────────── */
function createBallImage(icon: SIcon, size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d")!;
  const color = "#" + icon.hex;
  const r = size / 2;

  // ── Base 3D gradient (offset highlight = fake depth) ──
  const base = ctx.createRadialGradient(
    r * 0.72, r * 0.62, r * 0.04,
    r, r, r
  );
  base.addColorStop(0, "#ffffff");
  base.addColorStop(0.45, "#e0e0e8");
  base.addColorStop(1, "#b0b0be");
  ctx.beginPath();
  ctx.arc(r, r, r - 1, 0, Math.PI * 2);
  ctx.fillStyle = base;
  ctx.fill();

  // ── Specular highlight ──
  const spec = ctx.createRadialGradient(
    r * 0.62, r * 0.52, 0,
    r * 0.62, r * 0.52, r * 0.45
  );
  spec.addColorStop(0, "rgba(255,255,255,0.6)");
  spec.addColorStop(0.5, "rgba(255,255,255,0.15)");
  spec.addColorStop(1, "transparent");
  ctx.beginPath();
  ctx.arc(r, r, r - 1, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();

  // ── Brand color inner glow ──
  const glow = ctx.createRadialGradient(r, r * 0.95, 0, r, r, r * 0.6);
  glow.addColorStop(0, color);
  glow.addColorStop(1, "transparent");
  ctx.globalAlpha = 0.14;
  ctx.beginPath();
  ctx.arc(r, r, r - 1, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();
  ctx.globalAlpha = 1;

  // ── Icon (simple-icons 24×24 viewBox) ──
  const iconScale = (size * 0.42) / 24;
  ctx.save();
  ctx.translate(r, r * 0.82);
  ctx.scale(iconScale, iconScale);
  ctx.translate(-12, -12);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.92;
  ctx.fill(new Path2D(icon.path));
  ctx.restore();
  ctx.globalAlpha = 1;

  // ── Name ──
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.font = `700 ${size * 0.12}px Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(icon.title, r, size * 0.8);

  // ── Colored rim ──
  ctx.beginPath();
  ctx.arc(r, r, r - 2, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.18;
  ctx.lineWidth = 1.8;
  ctx.stroke();
  ctx.globalAlpha = 1;

  // ── Bottom shadow crescent ──
  const shadow = ctx.createRadialGradient(r, r * 1.3, r * 0.1, r, r, r);
  shadow.addColorStop(0, "rgba(0,0,0,0.15)");
  shadow.addColorStop(1, "transparent");
  ctx.beginPath();
  ctx.arc(r, r, r - 1, 0, Math.PI * 2);
  ctx.fillStyle = shadow;
  ctx.fill();

  return c;
}

/* ─── Component ─────────────────────────────────────────────── */
export default function TechStack3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let W = container.clientWidth;
    let H = container.clientHeight;
    canvas.width = W;
    canvas.height = H;

    const RADIUS = Math.max(44, Math.min(W, H) * 0.1);
    const TEX = 512;

    // Pre-render all ball images
    const ballImgs = icons.map((ic) => createBallImage(ic, TEX));

    // ── Physics engine ──
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 0.65 } });

    // Ball bodies – drop from staggered positions above viewport
    const cols = Math.ceil(Math.sqrt(icons.length));
    const spacing = RADIUS * 2.6;
    const offsetX = W / 2 - ((cols - 1) * spacing) / 2;

    const balls = icons.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return Matter.Bodies.circle(
        offsetX + col * spacing + (Math.random() - 0.5) * 10,
        -RADIUS * 2 - row * spacing * 1.3 - Math.random() * RADIUS * 2,
        RADIUS,
        {
          restitution: 0.55,
          friction: 0.12,
          frictionAir: 0.008,
          density: 0.0018,
        }
      );
    });

    // Walls (invisible)
    const wOpts: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      friction: 0.2,
      restitution: 0.35,
    };
    const floor = Matter.Bodies.rectangle(W / 2, H + 15, W + 80, 30, wOpts);
    const wallL = Matter.Bodies.rectangle(-15, H / 2, 30, H * 3, wOpts);
    const wallR = Matter.Bodies.rectangle(W + 15, H / 2, 30, H * 3, wOpts);

    Matter.Composite.add(engine.world, [...balls, floor, wallL, wallR]);

    // ── Mouse interaction ──
    const mouse = Matter.Mouse.create(canvas);
    const mc = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.15, damping: 0.08, render: { visible: false } },
    });
    Matter.Composite.add(engine.world, mc);

    // Cursor
    Matter.Events.on(mc, "startdrag", () => {
      canvas.style.cursor = "grabbing";
    });
    Matter.Events.on(mc, "enddrag", () => {
      canvas.style.cursor = "grab";
    });
    canvas.style.cursor = "grab";

    // ── Render loop ──
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#0a0a12";
      ctx.fillRect(0, 0, W, H);

      // Draw each ball
      balls.forEach((body, i) => {
        const { x, y } = body.position;
        const a = body.angle;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a);

        // Clip to circle for clean edges
        ctx.beginPath();
        ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(ballImgs[i], -RADIUS, -RADIUS, RADIUS * 2, RADIUS * 2);
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    // ── Resize ──
    const onResize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W;
      canvas.height = H;
      Matter.Body.setPosition(floor, { x: W / 2, y: H + 15 });
      Matter.Body.setVertices(
        floor,
        Matter.Bodies.rectangle(W / 2, H + 15, W + 80, 30).vertices
      );
      Matter.Body.setPosition(wallR, { x: W + 15, y: H / 2 });
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(raf);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#0a0a12",
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
