import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function Consulting() {
  const page = content.consulting;
  return (
    <PageShell title="Business Consulting & Retainers" description={page.intro}>
      <PageHeader eyebrow={page.eyebrow} h1={page.h1} sub={page.intro} />

      <section className="py-20 md:py-24 bg-white">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {page.points.map((point, idx) => (
              <div key={point.title} className="card p-8 space-y-3">
                <span className="font-display text-sm font-bold text-brand">0{idx + 1}</span>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-base text-body leading-relaxed">{point.body}</p>
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
