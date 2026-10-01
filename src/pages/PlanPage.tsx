import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { PriceTiers } from "../components/ui/PriceTiers";
import { PlanDetails } from "../components/sections/PlanDetails";
import { FinalCTA } from "../components/sections/FinalCTA";
import type { TierType } from "../components/ui/PriceTier";
import { content } from "../content/en";

type PlanPageProps = {
  title: string;
  plan: {
    eyebrow: string;
    h1: string;
    intro: string;
    tiers: readonly TierType[];
    covers: { heading: string; items: readonly string[] };
    faq: readonly { q: string; a: string }[];
    cta: { label: string; href: string };
  };
};

// Shared layout for the two headline support plans (Shield and Care).
export function PlanPage({ title, plan }: PlanPageProps) {
  return (
    <PageShell title={title} description={plan.intro}>
      <PageHeader eyebrow={plan.eyebrow} h1={plan.h1} sub={plan.intro} />

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <PriceTiers tiers={plan.tiers} highlightedIndex={1} />
        </Container>
      </section>

      <PlanDetails covers={plan.covers} faq={plan.faq} />

      <FinalCTA h2={content.home.finalCta.h2} sub={content.home.finalCta.sub} primaryCta={plan.cta} />
    </PageShell>
  );
}
