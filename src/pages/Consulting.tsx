import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function Consulting() {
  const page = content.consulting;
  return (
    <PageShell title="Business Consulting & Retainers" description={page.intro}>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading eyebrow={page.eyebrow} h1={page.h1} sub={page.intro} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.points.map((point) => (
              <div key={point.title} className="glass rounded-xl p-8 space-y-3 border border-white/10">
                <h3 className="text-xl font-bold text-text">{point.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>

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
