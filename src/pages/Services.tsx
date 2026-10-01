import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { content } from "../content/en";

export function Services() {
  return (
    <PageShell title="Other Services" description={content.services.intro}>
      <PageHeader eyebrow={content.services.eyebrow} h1={content.services.h1} sub={content.services.intro} />
      <ServicesPreview cards={content.services.cards} />
    </PageShell>
  );
}
