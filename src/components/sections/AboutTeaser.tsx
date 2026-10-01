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
    <section className="py-20 md:py-28 bg-surface border-y border-line">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <img
            src="/assets/headshot.jpg"
            alt="Sebastian Podgaetz, founder of Sebby IT Consulting"
            className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover shadow-lift mx-auto"
            loading="lazy"
          />
          <div className="space-y-5 text-center md:text-left">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold">{h2}</h2>
            <p className="text-lg text-body leading-relaxed">{body}</p>
            <Button as="a" href={cta.href} variant="secondary">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
