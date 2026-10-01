import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";

type Step = {
  n: string;
  title: string;
  body: string;
};

type HowItWorksProps = {
  eyebrow: string;
  h2: string;
  steps: readonly Step[];
};

export function HowItWorks({ eyebrow, h2, steps }: HowItWorksProps) {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-line">
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="card p-8 space-y-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand text-white font-display font-bold">
                {Number(step.n)}
              </span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-base md:text-[17px] text-body leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
