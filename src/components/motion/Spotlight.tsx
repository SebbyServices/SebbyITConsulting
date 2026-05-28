import { cn } from "../../lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute", className)}
      width="640"
      height="640"
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="spotlight-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
      </defs>
      <ellipse
        cx="320"
        cy="320"
        rx="200"
        ry="200"
        fill={fill}
        opacity="0.5"
        filter="url(#spotlight-blur)"
        className="animate-spotlight"
      />
    </svg>
  );
}
