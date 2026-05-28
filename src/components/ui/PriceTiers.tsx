import { cn } from "../../lib/utils";
import { PriceTier, type TierType } from "./PriceTier";

type PriceTiersProps = {
  tiers: readonly TierType[];
  highlightedIndex?: number;
  className?: string;
};

export function PriceTiers({
  tiers,
  highlightedIndex = 1,
  className = "",
}: PriceTiersProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8",
        className
      )}
    >
      {tiers.map((tier, idx) => (
        <PriceTier
          key={idx}
          {...tier}
          highlighted={idx === highlightedIndex}
        />
      ))}
    </div>
  );
}
