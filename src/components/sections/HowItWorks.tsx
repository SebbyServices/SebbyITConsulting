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
    <section className="py-24 md:py-32 bg-bg-2">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-bold text-teal/30">
                  {step.n}
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-xl font-bold text-text">{step.title}</h3>
                <p className="text-base text-muted leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
