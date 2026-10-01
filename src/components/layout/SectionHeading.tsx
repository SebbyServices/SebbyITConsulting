import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  h2?: string;
  h1?: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, h2, h1, sub, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {h1 && (
        <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
          {h1}
        </h1>
      )}
      {h2 && (
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {h2}
        </h2>
      )}
      {sub && (
        <p className={cn("text-lg md:text-xl text-muted leading-relaxed", align === "center" && "max-w-2xl mx-auto")}>
          {sub}
        </p>
      )}
    </div>
  );
}
