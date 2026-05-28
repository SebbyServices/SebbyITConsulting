import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { PriceTiers } from "../components/ui/PriceTiers";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function Retainers() {
  return (
    <PageShell>
      <section className="py-24 md:py-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow={content.retainers.eyebrow}
            h1={content.retainers.h1}
            sub={content.retainers.intro}
          />

          <PriceTiers
            tiers={content.retainers.tiers}
            highlightedIndex={1}
          />

          <div className="space-y-8">
            <p className="text-base text-muted text-center max-w-2xl mx-auto leading-relaxed">
              {content.retainers.note}
            </p>

            <div className="flex justify-center pt-4">
              <Button as="a" href={content.retainers.cta.href} size="lg">
                {content.retainers.cta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
