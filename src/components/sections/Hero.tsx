import { CheckCheck, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { cn } from "../../lib/utils";

type HeroProps = {
  eyebrow: string;
  h1: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trust: readonly string[];
  chat: {
    name: string;
    status: string;
    messages: readonly { from: string; text: string }[];
  };
};

export function Hero({ eyebrow, h1, sub, primaryCta, secondaryCta, trust, chat }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/70 via-white to-white pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#C9D6F2_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
        {/* Copy */}
        <div className="space-y-7">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem] font-extrabold">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">{sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button as="a" href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button as="a" href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-body">
                <ShieldCheck size={18} className="text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation mock */}
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-2xl" />
          <div className="relative card shadow-lift overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-line bg-white">
              <img
                src="/assets/headshot.jpg"
                alt="Sebastian Podgaetz"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow"
              />
              <div className="min-w-0">
                <p className="font-semibold text-ink leading-tight">{chat.name}</p>
                <p className="text-sm text-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {chat.status}
                </p>
              </div>
            </div>

            <div className="space-y-3 px-5 py-6 bg-surface">
              {chat.messages.map((m, idx) => {
                const mine = m.from === "sebby";
                return (
                  <div key={idx} className={cn("flex", mine ? "justify-start" : "justify-end")}>
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-snug shadow-sm",
                        mine
                          ? "bg-white text-ink border border-line rounded-bl-md"
                          : "bg-brand text-white rounded-br-md"
                      )}
                    >
                      {m.text}
                      {!mine && (
                        <CheckCheck size={14} className="inline-block ml-1.5 -mb-0.5 opacity-80" aria-hidden />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
