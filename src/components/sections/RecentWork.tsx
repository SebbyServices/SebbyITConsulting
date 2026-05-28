// Component placeholder: RecentWork
// Intended for social proof with client logos / testimonials
// Currently commented out (no signed client work to feature yet)
// Uncomment and populate when real signed-client social proof exists

import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";

type RecentWorkProps = {
  eyebrow: string;
  h2: string;
  clients?: Array<{ name: string; logo: string }>;
};

export function RecentWork({ eyebrow, h2 }: RecentWorkProps) {
  return (
    <section className="py-24 md:py-32 bg-bg">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} h2={h2} />
        {/* Client logos/testimonials go here when available */}
      </Container>
    </section>
  );
}
