import { Languages, MapPin, ShieldCheck, UserRound } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Container } from "../layout/Container";

type ProofItem = {
  icon: string;
  title: string;
  body: string;
};

type ProofPointsProps = {
  eyebrow: string;
  h2: string;
  items: readonly ProofItem[];
};

const iconMap = {
  shield: ShieldCheck,
  languages: Languages,
  user: UserRound,
  map: MapPin,
} as const;

export function ProofPoints({ eyebrow, h2, items }: ProofPointsProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <div key={item.title} className="space-y-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-brand">
                  <Icon size={24} />
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-base text-body leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
