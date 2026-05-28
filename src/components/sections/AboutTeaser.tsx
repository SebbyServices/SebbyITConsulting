import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

type AboutTeaserProps = {
  eyebrow: string;
  h2: string;
  body: string;
  cta: { label: string; href: string };
};

export function AboutTeaser({ eyebrow, h2, body, cta }: AboutTeaserProps) {
  return (
    <section className="py-24 md:py-32 bg-bg">
      <Container className="space-y-12 max-w-2xl">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <p className="text-base md:text-lg text-muted leading-relaxed text-center">
          {body}
        </p>

        <div className="flex justify-center pt-4">
          <Button as="a" href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
