import { Check, Plus } from "lucide-react";
import { Container } from "../layout/Container";

type PlanDetailsProps = {
  covers: { heading: string; items: readonly string[] };
  faq: readonly { q: string; a: string }[];
};

// "What I help with" list + FAQ, shared by the Shield and Care pages.
export function PlanDetails({ covers, faq }: PlanDetailsProps) {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{covers.heading}</h2>
            <ul className="grid grid-cols-1 gap-3">
              {covers.items.map((item) => (
                <li key={item} className="card shadow-none flex items-start gap-3 px-5 py-4 text-base md:text-[17px] text-body">
                  <Check className="flex-shrink-0 text-accent mt-0.5" size={20} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Common questions</h2>
            <div className="card divide-y divide-line">
              {faq.map((item) => (
                <details key={item.q} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <Plus size={20} className="flex-shrink-0 text-brand transition-transform group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="pt-3 text-base md:text-[17px] text-body leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
