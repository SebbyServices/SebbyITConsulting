import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { Container } from "../components/layout/Container";
import { content } from "../content/en";

export function Services() {
  return (
    <PageShell title="Other Services" description={content.services.intro}>
      <section className="pt-32 md:pt-40 bg-bg">
        <Container>
          <SectionHeading
            eyebrow={content.services.eyebrow}
            h1={content.services.h1}
            sub={content.services.intro}
          />
        </Container>
      </section>
      <ServicesPreview cards={content.services.cards} />
    </PageShell>
  );
}
