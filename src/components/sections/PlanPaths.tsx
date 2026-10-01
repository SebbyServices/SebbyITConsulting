import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Home } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

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
    <section id="plans" className="py-24 md:py-32 bg-bg scroll-mt-20">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} h2={h2} sub={sub} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Link
                key={card.href}
                to={card.href}
                className={cn(
                  "glass rounded-xl p-8 md:p-10 space-y-5 group transition-all duration-300 flex flex-col",
                  "border border-white/10 hover:border-teal/50 hover:shadow-lg hover:shadow-teal/10"
                )}
              >
                <div className="flex items-center gap-3 text-teal">
                  <Icon size={24} />
                  <span className="text-sm uppercase tracking-widest font-medium">
                    {card.audience}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text group-hover:text-teal transition-colors">
                  {card.name}
                </h3>
                <p className="text-xl font-semibold text-text">{card.price}</p>
                <p className="text-base md:text-lg text-muted leading-relaxed flex-grow">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 text-teal text-base font-medium pt-2">
                  <span>{card.cta}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="rounded-xl border border-amber/40 bg-amber/5 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-text">{oneTime.label}</h3>
            <p className="text-base md:text-lg text-muted">{oneTime.body}</p>
          </div>
          <Button as="a" href={oneTime.cta.href} variant="secondary" className="flex-shrink-0">
            {oneTime.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
