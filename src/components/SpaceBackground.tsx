"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number; // previous z, for streaks
  twinkle: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT = 420;
const BASE_SPEED = 1.4;
const MAX_WARP = 26;

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let cx = w / 2;
    let cy = h / 2.4; // vanishing point slightly above center — highway horizon feel

    // Mouse steers the vanishing point
    let targetX = cx;
    let targetY = cy;

    // Scroll velocity → warp boost
    let lastScrollY = window.scrollY;
    let warp = 0;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => spawnStar());
    const shooters: ShootingStar[] = [];

    function spawnStar(): Star {
      const z = Math.random() * w;
      return {
        x: (Math.random() - 0.5) * w * 2,
        y: (Math.random() - 0.5) * h * 2,
        z,
        pz: z,
        twinkle: Math.random() * Math.PI * 2,
      };
    }

    function maybeSpawnShooter() {
      if (Math.random() < 0.006 && shooters.length < 3) {
        const fromLeft = Math.random() < 0.5;
        shooters.push({
          x: fromLeft ? -50 : w + 50,
          y: Math.random() * h * 0.5,
          vx: (fromLeft ? 1 : -1) * (8 + Math.random() * 8),
          vy: 2 + Math.random() * 3,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
      }
    }

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2.4;
    };

    const onMouse = (e: MouseEvent) => {
      targetX = w / 2 + (e.clientX - w / 2) * 0.12;
      targetY = h / 2.4 + (e.clientY - h / 2) * 0.12;
    };

    let raf = 0;
    let t = 0;

    const frame = () => {
      t += 0.016;

      // Scroll → warp acceleration
      const sy = window.scrollY;
      const scrollDelta = Math.abs(sy - lastScrollY);
      lastScrollY = sy;
      warp = Math.min(MAX_WARP, warp * 0.92 + scrollDelta * 0.35);

      // Ease vanishing point toward mouse
      cx += (targetX - cx) * 0.04;
      cy += (targetY - cy) * 0.04;

      const speed = reduced ? 0.15 : BASE_SPEED + warp;

      // Motion-blur fade — longer trails during warp
      ctx.fillStyle = warp > 4 ? "rgba(13,13,13,0.28)" : "rgba(13,13,13,0.45)";
      ctx.fillRect(0, 0, w, h);

      // Nebula glow drifting slowly
      const nx = cx + Math.sin(t * 0.05) * 120;
      const ny = cy + Math.cos(t * 0.04) * 80;
      const nebula = ctx.createRadialGradient(nx, ny, 0, nx, ny, w * 0.55);
      nebula.addColorStop(0, "rgba(120,125,130,0.045)");
      nebula.addColorStop(0.5, "rgba(80,85,90,0.02)");
      nebula.addColorStop(1, "transparent");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, w, h);

      // Stars — fly toward viewer
      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) {
          Object.assign(s, spawnStar(), { z: w, pz: w });
          continue;
        }

        const sx = (s.x / s.z) * w * 0.5 + cx;
        const sy2 = (s.y / s.z) * h * 0.5 + cy;
        const px = (s.x / s.pz) * w * 0.5 + cx;
        const py = (s.y / s.pz) * h * 0.5 + cy;

        if (sx < -60 || sx > w + 60 || sy2 < -60 || sy2 > h + 60) {
          Object.assign(s, spawnStar(), { z: w, pz: w });
          continue;
        }

        const depth = 1 - s.z / w; // 0 far → 1 near
        const flicker = reduced ? 1 : 0.75 + 0.25 * Math.sin(t * 3 + s.twinkle);
        const alpha = Math.min(1, depth * 1.3) * flicker;
        const size = Math.max(0.3, depth * 2.4);

        // Streak line (highway light-trail)
        ctx.strokeStyle = `rgba(240,240,240,${alpha * 0.85})`;
        ctx.lineWidth = size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy2);
        ctx.stroke();

        // Bright head on close stars
        if (depth > 0.65) {
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(sx, sy2, size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Shooting stars
      if (!reduced) maybeSpawnShooter();
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.life++;
        sh.x += sh.vx;
        sh.y += sh.vy;
        const fade = 1 - sh.life / sh.maxLife;
        if (fade <= 0 || sh.x < -100 || sh.x > w + 100) {
          shooters.splice(i, 1);
          continue;
        }
        const grad = ctx.createLinearGradient(
          sh.x, sh.y,
          sh.x - sh.vx * 6, sh.y - sh.vy * 6
        );
        grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 6, sh.y - sh.vy * 6);
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    };

    // Solid first fill so there's no white flash
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, w, h);
    raf = requestAnimationFrame(frame);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-canvas" aria-hidden="true" />;
}
