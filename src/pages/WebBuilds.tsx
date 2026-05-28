import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { PriceTiers } from "../components/ui/PriceTiers";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function WebBuilds() {
  return (
    <PageShell>
      <section className="py-24 md:py-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow={content.webBuilds.eyebrow}
            h1={content.webBuilds.h1}
            sub={content.webBuilds.intro}
          />

          <PriceTiers
            tiers={content.webBuilds.tiers}
            highlightedIndex={1}
          />

          <div className="flex justify-center pt-8">
            <Button as="a" href={content.webBuilds.cta.href} size="lg">
              {content.webBuilds.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
