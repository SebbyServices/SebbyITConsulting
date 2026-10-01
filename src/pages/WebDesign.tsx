import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function WebDesign() {
  const page = content.webDesign;
  return (
    <PageShell title="Web Design by Made by Sebby" description={page.intro}>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-bg">
        <Container className="space-y-12 max-w-3xl">
          <SectionHeading eyebrow={page.eyebrow} h1={page.h1} sub={page.intro} />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href={page.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              {page.cta.label}
            </Button>
            <Button as="a" href={page.secondaryCta.href} variant="secondary" size="lg">
              {page.secondaryCta.label}
            </Button>
          </div>

          <p className="text-base md:text-lg text-muted text-center leading-relaxed">
            {page.supportNote}
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
