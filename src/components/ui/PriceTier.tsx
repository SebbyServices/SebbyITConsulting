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

export function PriceTier({
  name,
  priceRange,
  summary,
  features,
  bestFor,
  highlighted = false,
}: PriceTierProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-8 space-y-6 h-full flex flex-col",
        highlighted ? "border border-teal/50" : "border border-white/10"
      )}
    >
      {/* Tier Name */}
      <div>
        <p className="text-sm uppercase tracking-widest text-teal font-medium mb-2">
          {name}
        </p>
      </div>

      {/* Price */}
      <div>
        <p className="text-3xl font-bold text-text">{priceRange}</p>
      </div>

      {/* Summary */}
      <p className="text-base text-muted leading-relaxed">{summary}</p>

      {/* Features */}
      <div className="space-y-3 flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="flex-shrink-0 text-teal mt-0.5" size={18} />
            <p className="text-sm text-muted leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>

      {/* Best For */}
      <p className="text-xs text-muted/70 border-t border-white/10 pt-6">
        <span className="font-medium text-muted">Best for:</span> {bestFor}
      </p>
    </div>
  );
}
