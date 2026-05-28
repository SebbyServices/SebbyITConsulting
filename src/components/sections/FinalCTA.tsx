import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

type FinalCTAProps = {
  h2: string;
  sub: string;
  primaryCta: { label: string; href: string };
};

export function FinalCTA({ h2, sub, primaryCta }: FinalCTAProps) {
  return (
    <section className="py-24 md:py-32 bg-bg-2">
      <Container className="space-y-12 max-w-2xl">
        <SectionHeading h2={h2} sub={sub} />

        <div className="flex justify-center pt-4">
          <Button as="a" href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
