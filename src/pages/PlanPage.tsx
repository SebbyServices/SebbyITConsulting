import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { PriceTiers } from "../components/ui/PriceTiers";
import { PlanDetails } from "../components/sections/PlanDetails";
import { Button } from "../components/ui/Button";
import type { TierType } from "../components/ui/PriceTier";

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
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading eyebrow={plan.eyebrow} h1={plan.h1} sub={plan.intro} />

          <PriceTiers tiers={plan.tiers} highlightedIndex={1} />

          <div className="flex justify-center">
            <Button as="a" href={plan.cta.href} size="lg">
              {plan.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <PlanDetails covers={plan.covers} faq={plan.faq} />
    </PageShell>
  );
}
