import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";
import { cn } from "../../lib/utils";

type Card = {
  title: string;
  description: string;
  href: string;
};

type ServicesPreviewProps = {
  eyebrow: string;
  h2: string;
  cards: readonly Card[];
};

export function ServicesPreview({ eyebrow, h2, cards }: ServicesPreviewProps) {
  return (
    <section className="py-24 md:py-32 bg-bg">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className={cn(
                "glass rounded-xl p-8 space-y-4 group transition-all duration-300",
                "border border-white/10 hover:border-teal/50 hover:shadow-lg hover:shadow-teal/10"
              )}
            >
              <h3 className="text-xl font-bold text-text group-hover:text-teal transition-colors">
                {card.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {card.description}
              </p>
              <div className="flex items-center gap-2 text-teal text-sm font-medium pt-2">
                <span>Learn more</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
