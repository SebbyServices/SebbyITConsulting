import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Home } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

type PathCard = {
  name: string;
  audience: string;
  price: string;
  description: string;
  href: string;
  cta: string;
};

type PlanPathsProps = {
  eyebrow: string;
  h2: string;
  sub: string;
  cards: readonly PathCard[];
  oneTime: { label: string; body: string; cta: { label: string; href: string } };
};

const icons = [Briefcase, Home];

export function PlanPaths({ eyebrow, h2, sub, cards, oneTime }: PlanPathsProps) {
  return (
    <section id="plans" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} h2={h2} sub={sub} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Link
                key={card.href}
                to={card.href}
                className="card group p-8 md:p-10 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:border-brand/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-brand">
                    <Icon size={24} />
                  </span>
                  <span className="text-sm font-semibold text-muted">{card.audience}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-[1.7rem] font-bold">{card.name}</h3>
                  <p className="text-lg font-semibold text-brand">{card.price}</p>
                </div>
                <p className="text-base md:text-lg text-body leading-relaxed flex-grow">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand font-semibold">
                  {card.cta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-2xl border border-line bg-surface p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold">{oneTime.label}</h3>
            <p className="text-base md:text-lg text-body">{oneTime.body}</p>
          </div>
          <Button as="a" href={oneTime.cta.href} variant="secondary" className="flex-shrink-0">
            {oneTime.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
