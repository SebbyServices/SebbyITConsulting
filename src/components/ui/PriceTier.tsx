import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export type TierType = {
  name: string;
  priceRange: string;
  summary: string;
  features: readonly string[];
  bestFor: string;
  highlighted?: boolean;
};

type PriceTierProps = TierType;

// Splits "$250/mo" into "$250" + "/mo" so the amount can be emphasized.
function splitPrice(price: string) {
  const match = price.match(/^(.*?)(\s*\/\s*mo)$/);
  return match ? [match[1], "/mo"] : [price, ""];
}

export function PriceTier({
  name,
  priceRange,
  summary,
  features,
  bestFor,
  highlighted = false,
}: PriceTierProps) {
  const [amount, unit] = splitPrice(priceRange);
  return (
    <div
      className={cn(
        "relative bg-white rounded-2xl p-8 h-full flex flex-col gap-6",
        highlighted
          ? "border-2 border-brand shadow-lift"
          : "border border-line shadow-card"
      )}
    >
      {highlighted && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Most popular
        </span>
      )}

      <div className="space-y-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="font-display text-ink">
          <span className="text-4xl font-extrabold tracking-tight">{amount}</span>
          {unit && <span className="text-lg font-semibold text-muted">{unit}</span>}
        </p>
        <p className="text-base text-body leading-relaxed">{summary}</p>
      </div>

      <ul className="space-y-3 flex-grow border-t border-line pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="flex-shrink-0 text-accent mt-0.5" size={20} strokeWidth={2.5} />
            <span className="text-base text-body leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted bg-surface rounded-lg px-4 py-3">
        <span className="font-semibold text-ink">Best for:</span> {bestFor}
      </p>
    </div>
  );
}
