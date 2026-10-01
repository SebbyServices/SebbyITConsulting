import { Check } from "lucide-react";
import { Container } from "../layout/Container";

type PlanDetailsProps = {
  covers: { heading: string; items: readonly string[] };
  faq: readonly { q: string; a: string }[];
};

// "What I help with" list + FAQ, shared by the Shield and Care pages.
export function PlanDetails({ covers, faq }: PlanDetailsProps) {
  return (
    <section className="py-24 md:py-32 bg-bg-2">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text">{covers.heading}</h2>
            <ul className="space-y-4">
              {covers.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg text-muted">
                  <Check className="flex-shrink-0 text-teal mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text">Common questions</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="glass rounded-lg border border-white/10 p-6 group"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-text list-none flex justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-teal group-open:rotate-45 transition-transform" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pt-4 text-base md:text-lg text-muted leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
