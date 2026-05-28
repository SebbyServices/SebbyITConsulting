import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

type MovingBorderProps = {
  borderRadius?: string;
  duration?: number;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
};

export function MovingBorder({
  borderRadius = "0.75rem",
  duration = 2500,
  children,
  containerClassName = "",
  borderClassName = "",
  className = "",
  as: Component = "button",
  ...props
}: MovingBorderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathLengthRef = useRef(1000);
  const pathLengthValue = useMotionValue(0);
  const pathLength = useTransform(pathLengthValue, (value) => value % pathLengthRef.current);

  useAnimationFrame((time) => {
    const totalTime = (time % duration) / duration;
    pathLengthValue.set(totalTime * pathLengthRef.current);
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Component
      className={cn("relative inline-block", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none",
          containerClassName
        )}
        style={{ borderRadius }}
      >
        <svg
          className="absolute w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="moving-border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="1" />
              <stop offset="50%" stopColor="#0D9488" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="none"
            stroke="url(#moving-border-gradient)"
            strokeWidth="2"
            style={{
              strokeDasharray: pathLengthRef.current,
              strokeDashoffset: pathLength as any,
            } as any}
            rx="2"
          />
        </svg>
      </div>

      <div
        className={cn("relative rounded-[inherit]", borderClassName)}
        style={{ borderRadius }}
      >
        {children}
      </div>
    </Component>
  );
}
