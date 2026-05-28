import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function About() {
  return (
    <PageShell>
      <section className="py-24 md:py-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow={content.about.eyebrow}
            h1={content.about.h1}
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {content.about.body.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-bg-2">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Credentials */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text">
                {content.about.credentials.heading}
              </h3>
              <ul className="space-y-3">
                {content.about.credentials.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base text-muted leading-relaxed flex gap-3"
                  >
                    <span className="text-teal flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text">
                {content.about.location.heading}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {content.about.location.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-bg">
        <Container className="flex justify-center">
          <Button as="a" href={content.about.cta.href} size="lg">
            {content.about.cta.label}
          </Button>
        </Container>
      </section>
    </PageShell>
  );
}
