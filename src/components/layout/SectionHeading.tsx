type SectionHeadingProps = {
  eyebrow?: string;
  h2?: string;
  h1?: string;
  sub?: string;
};

export function SectionHeading({ eyebrow, h2, h1, sub }: SectionHeadingProps) {
  return (
    <div className="space-y-2 md:space-y-4 text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-teal font-medium">
          {eyebrow}
        </p>
      )}
      {h1 && (
        <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
          {h1}
        </h1>
      )}
      {h2 && (
        <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
          {h2}
        </h2>
      )}
      {sub && (
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
