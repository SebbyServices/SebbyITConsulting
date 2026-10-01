import { Award, MapPin } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { Container } from "../components/layout/Container";
import { FinalCTA } from "../components/sections/FinalCTA";
import { content } from "../content/en";

export function About() {
  const page = content.about;
  return (
    <PageShell title="About" description={page.body[0]}>
      <section className="bg-surface border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <div className="space-y-4 max-w-3xl">
              <p className="eyebrow">{page.eyebrow}</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">{page.h1}</h1>
            </div>
            <img
              src="/assets/headshot.jpg"
              alt="Sebastian Podgaetz, founder of Sebby IT Consulting"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lift"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-start">
            <div className="space-y-6">
              {page.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "text-xl text-ink leading-relaxed" : "text-lg text-body leading-relaxed"}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="card p-7 space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <Award size={20} className="text-brand" /> {page.credentials.heading}
                </h2>
                <ul className="space-y-3">
                  {page.credentials.items.map((item) => (
                    <li key={item} className="text-[15px] text-body leading-relaxed pl-4 border-l-2 border-brand/30">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-7 space-y-3">
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <MapPin size={20} className="text-brand" /> {page.location.heading}
                </h2>
                <p className="text-[15px] text-body leading-relaxed">{page.location.body}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FinalCTA h2={content.home.finalCta.h2} sub={content.home.finalCta.sub} primaryCta={page.cta} />
    </PageShell>
  );
}
