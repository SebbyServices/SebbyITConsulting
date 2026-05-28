// @ts-nocheck
import { useEffect, useRef, useMemo } from "react";
import { cn } from "../../lib/utils";

type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
};

export function WavyBackground({
  children,
  className = "",
  containerClassName = "",
  colors = ["#1E40AF", "#0D9488", "#3B82F6", "#14B8A6"],
  waveWidth = 50,
  backgroundFill = "#0F172A",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef((x: number, y: number, z: number) => {
    return Math.sin(x * 0.1) * Math.cos(y * 0.1) * Math.sin(z * 0.1) * 0.5 + 0.5;
  });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  const prefersReducedMotion = useMemo(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const noise = noiseRef.current;
    const w = rect.width;
    const h = rect.height;
    const speedFactor = speed === "fast" ? 0.002 : 0.001;

    const drawWave = (time: number) => {
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = colors[0];
      ctx.globalAlpha = waveOpacity;

      for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.globalAlpha = waveOpacity / (i + 1);

        ctx.beginPath();
        let isFirstPoint = true;

        for (let x = 0; x < w; x += waveWidth) {
          const noiseVal = noise(x * 0.005, time * speedFactor, i * 0.3);
          const y = h * 0.5 + noiseVal * (h * 0.4);

          if (isFirstPoint) {
            ctx.moveTo(x, y);
            isFirstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      if (!prefersReducedMotion) {
        timeRef.current += 1;
        drawWave(timeRef.current);
      } else {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, w, h);
        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[colors.length - 1]);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = waveOpacity;
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, backgroundFill, blur, waveWidth, waveOpacity, speed, prefersReducedMotion]);

  return (
    <div
      className={cn("relative w-full overflow-hidden", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: `blur(${blur}px)` }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
