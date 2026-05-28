import { WavyBackground } from "../motion/WavyBackground";
import { Spotlight } from "../motion/Spotlight";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";

type HeroProps = {
  eyebrow: string;
  h1: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, h1, sub, primaryCta, secondaryCta }: HeroProps) {
  const heroContent = (
    <Container className="py-24 md:py-32 relative z-10">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-xs uppercase tracking-widest text-teal font-medium animate-fade-in drop-shadow-lg">
          {eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight animate-fade-in drop-shadow-xl">
          {h1}
        </h1>

        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in drop-shadow-lg">
          {sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
          <Button as="a" href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button as="a" href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );

  return (
    <>
      {/* Desktop: animated logo video + wavy overlay */}
      <section className="relative hidden md:flex min-h-screen items-center justify-center overflow-hidden bg-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: "blur(12px)" }}
        >
          <source src="/assets/logo-animation.webm" type="video/webm" />
          <source src="/assets/logo-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 opacity-50">
          <WavyBackground className="w-full h-full" blur={80} />
        </div>
        <div className="absolute inset-0 bg-bg/65" />
        <Spotlight className="absolute top-20 left-1/2 -translate-x-1/2" />
        {heroContent}
      </section>

      {/* Mobile: WavyBackground fallback */}
      <WavyBackground className="min-h-screen flex items-center justify-center relative overflow-hidden md:hidden">
        <Spotlight className="absolute top-20 left-1/2 -translate-x-1/2" />
        {heroContent}
      </WavyBackground>
    </>
  );
}
