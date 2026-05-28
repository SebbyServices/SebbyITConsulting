import { PageShell } from "../components/layout/PageShell";
import { Hero } from "../components/sections/Hero";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { HowItWorks } from "../components/sections/HowItWorks";
import { AboutTeaser } from "../components/sections/AboutTeaser";
import { FinalCTA } from "../components/sections/FinalCTA";
import { content } from "../content/en";

export function Home() {
  return (
    <PageShell>
      <Hero
        eyebrow={content.home.hero.eyebrow}
        h1={content.home.hero.h1}
        sub={content.home.hero.sub}
        primaryCta={content.home.hero.primaryCta}
        secondaryCta={content.home.hero.secondaryCta}
      />

      <ServicesPreview
        eyebrow={content.home.servicesPreview.eyebrow}
        h2={content.home.servicesPreview.h2}
        cards={content.home.servicesPreview.cards}
      />

      <HowItWorks
        eyebrow={content.home.howItWorks.eyebrow}
        h2={content.home.howItWorks.h2}
        steps={content.home.howItWorks.steps}
      />

      <AboutTeaser
        eyebrow={content.home.aboutTeaser.eyebrow}
        h2={content.home.aboutTeaser.h2}
        body={content.home.aboutTeaser.body}
        cta={content.home.aboutTeaser.cta}
      />

      <FinalCTA
        h2={content.home.finalCta.h2}
        sub={content.home.finalCta.sub}
        primaryCta={content.home.finalCta.primaryCta}
      />
    </PageShell>
  );
}
