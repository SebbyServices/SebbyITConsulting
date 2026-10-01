import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";

type Card = {
  title: string;
  description: string;
  href: string;
};

type ServicesPreviewProps = {
  eyebrow?: string;
  h2?: string;
  cards: readonly Card[];
};

export function ServicesPreview({ eyebrow, h2, cards }: ServicesPreviewProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="space-y-14">
        {(eyebrow || h2) && <SectionHeading eyebrow={eyebrow} h2={h2} />}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="card group p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:border-brand/30"
            >
              <h3 className="text-xl font-bold group-hover:text-brand transition-colors">{card.title}</h3>
              <p className="text-base text-body leading-relaxed flex-grow">{card.description}</p>
              <span className="inline-flex items-center gap-2 text-brand font-semibold">
                Learn more
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
