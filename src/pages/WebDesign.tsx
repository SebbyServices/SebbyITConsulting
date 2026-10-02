import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Globe,
  LayoutTemplate,
  Quote,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/layout/SectionHeading";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

const serviceIcons = {
  layout: LayoutTemplate,
  shield: ShieldCheck,
  search: Search,
} as const;

// Opens Made by Sebby in a new tab, keeping the referrer (no "noreferrer").
const external = { target: "_blank", rel: "noopener" } as const;

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} {...external} className="inline-flex items-center gap-1.5 text-brand font-semibold hover:text-brand-dark">
      {children}
      <ArrowUpRight size={18} aria-hidden />
    </a>
  );
}

export function WebDesign() {
  const page = content.webDesign;

  return (
    <PageShell title="Web Design by Made by Sebby" description={page.intro}>
      <PageHeader eyebrow={page.eyebrow} h1={page.h1} sub={page.intro}>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button as="a" href={page.cta.href} {...external} size="lg">
              {page.cta.label} <ArrowUpRight size={20} aria-hidden />
            </Button>
            <Button as="a" href={page.secondaryCta.href} {...external} variant="secondary" size="lg">
              {page.secondaryCta.label}
            </Button>
          </div>
          <p className="text-base text-muted">{page.reassurance}</p>
        </div>
      </PageHeader>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="space-y-14">
          <SectionHeading eyebrow={page.services.eyebrow} h2={page.services.h2} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {page.services.items.map((item) => {
              const Icon = serviceIcons[item.icon as keyof typeof serviceIcons] ?? Globe;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  {...external}
                  className="card group p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:border-brand/30"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-brand">
                    <Icon size={24} />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">{item.tag}</p>
                  <h3 className="text-xl font-bold group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-base text-body leading-relaxed flex-grow">{item.body}</p>
                  <span className="inline-flex items-center gap-2 text-brand font-semibold">
                    Learn more
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pricing + included */}
      <section className="py-20 md:py-28 bg-surface border-y border-line">
        <Container className="space-y-14">
          <SectionHeading eyebrow={page.pricing.eyebrow} h2={page.pricing.h2} sub={page.pricing.sub} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.pricing.items.map((item) => (
              <div key={item.name} className="card p-7 space-y-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="font-display text-3xl lg:text-[1.65rem] xl:text-3xl font-extrabold text-ink tracking-tight whitespace-nowrap">{item.price}</p>
                <p className="text-[15px] text-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8">
            <div className="card p-8 space-y-5">
              <h3 className="text-xl font-bold">{page.included.heading}</h3>
              <ul className="space-y-3">
                {page.included.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-body">
                    <Check className="flex-shrink-0 text-accent mt-0.5" size={20} strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand/20 bg-brand-light p-8 flex flex-col gap-5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-brand">
                <ClipboardCheck size={24} />
              </span>
              <h3 className="text-xl font-bold">{page.pricing.audit.label}</h3>
              <p className="text-lg text-body leading-relaxed flex-grow">{page.pricing.audit.body}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <ExternalLink href={page.pricing.audit.cta.href}>{page.pricing.audit.cta.label}</ExternalLink>
                <ExternalLink href={page.pricing.cta.href}>{page.pricing.cta.label}</ExternalLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process (reuses the homepage step layout on white) */}
      <div className="[&>section]:bg-white [&>section]:border-y-0">
        <HowItWorks eyebrow={page.process.eyebrow} h2={page.process.h2} steps={page.process.steps} />
      </div>

      {/* Work + testimonials */}
      <section className="py-20 md:py-28 bg-surface border-y border-line">
        <Container className="space-y-14">
          <SectionHeading eyebrow={page.work.eyebrow} h2={page.work.h2} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.work.projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                {...external}
                className="card group p-7 flex flex-col gap-3 transition-all hover:border-brand/30 hover:shadow-lift"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-light text-brand">
                  <Globe size={22} />
                </span>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">{project.name}</h3>
                <p className="text-[15px] text-body leading-relaxed flex-grow">{project.detail}</p>
                <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-[15px]">
                  Read the case study <ArrowUpRight size={16} aria-hidden />
                </span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {page.work.testimonials.map((t) => (
              <figure key={t.name} className="card p-8 flex flex-col gap-6">
                <Quote size={28} className="text-brand/40" aria-hidden />
                <blockquote className="text-lg text-ink leading-relaxed flex-grow">"{t.quote}"</blockquote>
                <figcaption className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand text-white font-display font-bold text-sm">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex justify-center">
            <ExternalLink href={page.work.cta.href}>{page.work.cta.label}</ExternalLink>
          </div>
        </Container>
      </section>

      {/* Better together */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="space-y-14">
          <SectionHeading eyebrow={page.together.eyebrow} h2={page.together.h2} sub={page.together.sub} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {page.together.columns.map((col, idx) => {
              const Icon = idx === 0 ? LayoutTemplate : Wrench;
              return (
                <div key={col.brand} className="card p-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand text-white">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{col.brand}</h3>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted">{col.role}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 border-t border-line pt-5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-body">
                        <Check className="flex-shrink-0 text-accent mt-0.5" size={20} strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button as="a" href={page.together.cta.href} variant="secondary">
              {page.together.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-16 md:pb-24 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-16 md:py-20 text-center">
            <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand/40 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand/25 blur-3xl" />
            <div className="relative max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{page.final.h2}</h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{page.final.sub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button as="a" href={page.cta.href} {...external} variant="inverse" size="lg">
                  {page.cta.label} <ArrowUpRight size={20} aria-hidden />
                </Button>
                <Button as="a" href={page.secondaryCta.href} {...external} variant="outlineInverse" size="lg">
                  {page.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
