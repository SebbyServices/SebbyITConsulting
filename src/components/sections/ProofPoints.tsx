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
    <section className="py-24 md:py-32 bg-bg">
      <Container className="space-y-16">
        <SectionHeading eyebrow={eyebrow} h2={h2} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <div key={item.title} className="glass rounded-xl p-8 space-y-4 border border-white/10">
                <Icon size={28} className="text-teal" />
                <h3 className="text-xl font-bold text-text">{item.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
