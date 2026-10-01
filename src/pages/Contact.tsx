import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { PageShell } from "../components/layout/PageShell";
import { PageHeader } from "../components/layout/PageHeader";
import { Container } from "../components/layout/Container";
import { ContactForm } from "../components/contact/ContactForm";
import { content } from "../content/en";

type AltProps = {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
  href: string;
  external?: boolean;
};

function AltMethod({ icon, label, value, description, href, external }: AltProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card group flex gap-4 p-6 transition-all hover:border-brand/30 hover:shadow-lift"
    >
      <span className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-light text-brand">
        {icon}
      </span>
      <div className="space-y-1 min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">{label}</p>
        <p className="text-lg font-semibold text-ink group-hover:text-brand transition-colors break-words">{value}</p>
        <p className="text-[15px] text-body leading-relaxed">{description}</p>
      </div>
    </a>
  );
}

export function Contact() {
  const { alternatives } = content.contact;
  const { contact } = content.meta;
  return (
    <PageShell title="Contact" description={content.contact.intro}>
      <PageHeader eyebrow={content.contact.eyebrow} h1={content.contact.h1} sub={content.contact.intro} />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="card p-7 md:p-10">
              <ContactForm />
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold">{alternatives.heading}</h2>
              <AltMethod
                icon={<MessageCircle size={22} />}
                label={alternatives.whatsapp.label}
                value={alternatives.whatsapp.value}
                description={alternatives.whatsapp.description}
                href={contact.whatsappUrl}
                external
              />
              <AltMethod
                icon={<Mail size={22} />}
                label={alternatives.email.label}
                value={alternatives.email.value}
                description={alternatives.email.description}
                href={`mailto:${contact.email}`}
              />
              <AltMethod
                icon={<CalendarDays size={22} />}
                label={alternatives.calendly.label}
                value={alternatives.calendly.value}
                description={alternatives.calendly.description}
                href={contact.calendlyUrl}
                external
              />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
