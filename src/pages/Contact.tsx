import { Mail, Phone, MessageCircle } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Container } from "../components/layout/Container";
import { ContactForm } from "../components/contact/ContactForm";
import { Button } from "../components/ui/Button";
import { content } from "../content/en";

export function Contact() {
  return (
    <PageShell>
      <section className="py-24 md:py-32 bg-bg">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            h1={content.contact.h1}
            sub={content.contact.intro}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Alternative Contact Methods */}
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-2xl font-bold text-text">
                {content.contact.alternatives.heading}
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="glass rounded-lg p-6 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} className="text-teal" />
                    <h4 className="font-bold text-text">
                      {content.contact.alternatives.whatsapp.label}
                    </h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {content.contact.alternatives.whatsapp.description}
                  </p>
                  <Button
                    as="a"
                    href={content.meta.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                  >
                    {content.contact.alternatives.whatsapp.value}
                  </Button>
                </div>

                {/* Calendly */}
                <div className="glass rounded-lg p-6 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-teal" />
                    <h4 className="font-bold text-text">
                      {content.contact.alternatives.calendly.label}
                    </h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {content.contact.alternatives.calendly.description}
                  </p>
                  <Button
                    as="a"
                    href={content.meta.contact.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                  >
                    {content.contact.alternatives.calendly.value}
                  </Button>
                </div>

                {/* Email */}
                <div className="glass rounded-lg p-6 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-teal" />
                    <h4 className="font-bold text-text">
                      {content.contact.alternatives.email.label}
                    </h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {content.contact.alternatives.email.description}
                  </p>
                  <Button
                    as="a"
                    href={`mailto:${content.meta.contact.email}`}
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                  >
                    {content.contact.alternatives.email.value}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
