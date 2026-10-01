import { MessageCircle } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { content } from "../../content/en";

type FinalCTAProps = {
  h2: string;
  sub: string;
  primaryCta: { label: string; href: string };
};

export function FinalCTA({ h2, sub, primaryCta }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-16 md:py-20 text-center">
          <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand/25 blur-3xl" />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{h2}</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button as="a" href={primaryCta.href} variant="inverse" size="lg">
                {primaryCta.label}
              </Button>
              <Button
                as="a"
                href={content.meta.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outlineInverse"
              >
                <MessageCircle size={20} /> WhatsApp me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
