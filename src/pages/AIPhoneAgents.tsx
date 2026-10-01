import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { PriceTier } from "../components/ui/PriceTier";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function AIPhoneAgents() {
  const page = content.aiPhoneAgents;
  return (
    <PageShell title="Bilingual AI Phone Agents" description={page.intro}>
      <PageHeader eyebrow={page.eyebrow} h1={page.h1} sub={page.intro} />

      <section className="py-20 md:py-24 bg-white">
        <Container className="max-w-xl space-y-8">
          <PriceTier {...page.offer} />
          <p className="text-base text-muted text-center">{page.terms}</p>
          <div className="flex justify-center">
            <Button as="a" href={page.cta.href} size="lg">
              {page.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
