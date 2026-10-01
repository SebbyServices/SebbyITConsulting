import { ExternalLink } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function WebDesign() {
  const page = content.webDesign;
  return (
    <PageShell title="Web Design by Made by Sebby" description={page.intro}>
      <PageHeader eyebrow={page.eyebrow} h1={page.h1} sub={page.intro}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button as="a" href={page.cta.href} target="_blank" rel="noopener noreferrer" size="lg">
            {page.cta.label} <ExternalLink size={18} />
          </Button>
          <Button as="a" href={page.secondaryCta.href} variant="secondary" size="lg">
            {page.secondaryCta.label}
          </Button>
        </div>
      </PageHeader>

      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-3xl">
          <p className="card p-8 text-lg text-body leading-relaxed">{page.supportNote}</p>
        </Container>
      </section>
    </PageShell>
  );
}
