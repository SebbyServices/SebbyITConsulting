import { PageShell } from "../components/layout/PageShell";
import { Hero } from "../components/sections/Hero";
import { PlanPaths } from "../components/sections/PlanPaths";
import { HowItWorks } from "../components/sections/HowItWorks";
import { ProofPoints } from "../components/sections/ProofPoints";
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
        trust={content.home.hero.trust}
        chat={content.home.hero.chat}
      />

      <PlanPaths
        eyebrow={content.home.paths.eyebrow}
        h2={content.home.paths.h2}
        sub={content.home.paths.sub}
        cards={content.home.paths.cards}
        oneTime={content.home.paths.oneTime}
      />

      <HowItWorks
        eyebrow={content.home.howItWorks.eyebrow}
        h2={content.home.howItWorks.h2}
        steps={content.home.howItWorks.steps}
      />

      <ProofPoints
        eyebrow={content.home.proof.eyebrow}
        h2={content.home.proof.h2}
        items={content.home.proof.items}
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
