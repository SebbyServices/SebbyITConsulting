export const content = {
  meta: {
    siteName: "SebbyIT Consulting",
    legalName: "SebbyIT Consulting, Corp.",
    tagline: "Modern web, automation, and AI built for businesses that need it done right.",
    defaultDescription:
      "SebbyIT Consulting builds modern websites, deploys bilingual AI phone agents, and maintains digital infrastructure for small and mid-size businesses in Miami and beyond.",
    contact: {
      email: "contact@sebbyservices.com",
      phone: "+1 (786) 543-1417",
      phoneRaw: "17865431417",
      whatsappUrl: "https://wa.me/17865431417",
      calendlyUrl: "https://calendly.com/sebbyit-consulting/intro-call",
      // ↑ PLACEHOLDER. Sebastian to provide actual Calendly URL.
      // If missing at build time, the Calendly button on /contact should be
      // visually present but show a "Coming soon" tooltip.
      linkedinPersonal: "https://www.linkedin.com/in/sebastianpodgaetz/",
      linkedinCompany: "https://www.linkedin.com/company/sebby-it-consulting-corp/",
    },
    formspreeEndpoint: "https://formspree.io/f/mdayzeek",
  },

  nav: [
    { label: "Services", href: "/services/web-builds" },
    { label: "Retainers", href: "/retainers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    hero: {
      eyebrow: "SebbyIT Consulting",
      h1: "Modern web, automation, and AI — built right the first time.",
      sub: "Bilingual web builds, intelligent phone agents, and ongoing digital infrastructure for businesses that need to look serious online.",
      primaryCta: { label: "Get a quote", href: "/contact" },
      secondaryCta: { label: "See services", href: "/services/web-builds" },
    },
    servicesPreview: {
      eyebrow: "What I do",
      h2: "Three ways to work together.",
      cards: [
        {
          title: "Web builds",
          description: "Custom websites that load fast, look serious, and convert. WordPress, Elementor, or fully custom — built to fit the business, not the template.",
          href: "/services/web-builds",
        },
        {
          title: "AI phone agents",
          description: "Bilingual virtual receptionists that answer your phone, book appointments, and qualify leads 24/7 — in English and Spanish.",
          href: "/services/ai-phone-agents",
        },
        {
          title: "Retainers",
          description: "Ongoing website maintenance, updates, and digital strategy. Tier it monthly so your site stays current and you stay focused on your business.",
          href: "/retainers",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      h2: "From intro call to live site — straightforward.",
      steps: [
        {
          n: "01",
          title: "Discovery call",
          body: "Free 30-minute intro. We talk about what you do, who you serve, and what's missing. You leave with a clear sense of what's possible and a fixed-price proposal within 48 hours.",
        },
        {
          n: "02",
          title: "Build phase",
          body: "Milestone-based timeline with a 50/25/25 payment structure. You see progress in a real staging environment, not screenshots. Revisions are scoped, not endless.",
        },
        {
          n: "03",
          title: "Launch and support",
          body: "Go live with a launch checklist that covers DNS, SEO, analytics, and backups. From there, optional monthly retainer keeps the site healthy and current.",
        },
      ],
    },
    aboutTeaser: {
      eyebrow: "About",
      h2: "Engineer first. Consultant by choice.",
      body: "I'm Sebastian Podgaetz, founder of SebbyIT Consulting. Master's in Cybersecurity from FIU, Summa Cum Laude. Years of enterprise security background. I built SebbyIT because small businesses deserve the same standard of work that Fortune 500s get — without the Fortune 500 invoice.",
      cta: { label: "More about me", href: "/about" },
    },
    finalCta: {
      h2: "Ready to look serious online?",
      sub: "Tell me about your business. I'll respond within one business day with whether I'm the right fit and what it would cost.",
      primaryCta: { label: "Start a project", href: "/contact" },
    },
  },

  webBuilds: {
    eyebrow: "Service",
    h1: "Web builds that don't look like everyone else's.",
    intro: "Three tiers, fixed prices, no surprises. Each tier is a complete deliverable — design, build, launch, and a 30-day post-launch warranty included.",
    tiers: [
      {
        name: "Foundation",
        priceRange: "$1,500 – $2,500",
        summary: "A clean, fast, single-purpose site for a business that needs to exist online and convert.",
        features: [
          "Up to 5 pages (home, about, services, contact, one more)",
          "Mobile-first responsive design",
          "Custom design within established brand",
          "Contact form + Google Maps + business hours",
          "Basic on-page SEO (meta, schema, sitemap)",
          "30-day post-launch warranty",
          "Trained handoff so you can edit copy yourself",
        ],
        bestFor: "Solo practitioners, small service businesses, restaurants needing a digital storefront.",
      },
      {
        name: "Professional",
        priceRange: "$2,500 – $5,000",
        summary: "A full presence for an established business — more pages, more capability, more polish.",
        features: [
          "Up to 10 pages, bilingual capable",
          "Booking integration (Calendly, Square, Acuity, or similar)",
          "Blog or news section",
          "Advanced SEO (per-page schema, OG images, performance optimization)",
          "Email capture + newsletter integration",
          "Google Business Profile setup or cleanup",
          "Analytics setup (GA4 or Plausible)",
          "30-day post-launch warranty",
        ],
        bestFor: "Law firms, restaurants with locations, professional services, established small businesses.",
      },
      {
        name: "Premium",
        priceRange: "$5,000 – $10,000+",
        summary: "Custom builds, complex integrations, or sites that need to do real work — bookings, payments, multi-language, member areas.",
        features: [
          "Fully custom design and development",
          "Bilingual (English + Spanish) with proper i18n architecture",
          "E-commerce, member area, or booking system as needed",
          "Custom integrations (CRM, ERP, payment, scheduling, WhatsApp Business)",
          "Performance-tuned for Core Web Vitals",
          "Full SEO audit + content strategy starter",
          "30-day post-launch warranty",
          "Optional ongoing retainer at preferred rate",
        ],
        bestFor: "Multi-location businesses, e-commerce, professional services with complex workflows.",
      },
    ],
    cta: { label: "Start a project", href: "/contact" },
  },

  aiPhoneAgents: {
    eyebrow: "Service",
    h1: "Never miss another call. In English or Spanish.",
    intro: "AI-powered phone agents that pick up 24/7, answer questions about your business, book appointments, and forward urgent calls. Bilingual by default — same agent, both languages, no menu prompts.",
    tiers: [
      {
        name: "Receptionist",
        priceRange: "$1,500 setup + $250/mo",
        summary: "A virtual receptionist that handles inbound calls, answers FAQs, and takes messages.",
        features: [
          "Custom voice + persona for your brand",
          "Bilingual (auto-detects English or Spanish)",
          "Up to 200 calls/month",
          "Email or SMS notifications for new messages",
          "Business-hours and after-hours behavior",
          "Custom FAQ knowledge base",
          "Monthly call summary report",
        ],
        bestFor: "Solo practitioners, small offices, anyone losing leads to voicemail.",
      },
      {
        name: "Scheduler",
        priceRange: "$2,500 setup + $400/mo",
        summary: "Everything in Receptionist, plus the agent books appointments directly into your calendar.",
        features: [
          "All Receptionist features",
          "Calendar integration (Google, Outlook, Calendly, Acuity)",
          "Real-time availability checking",
          "Booking confirmations via SMS + email",
          "Reschedule and cancel handling",
          "Up to 500 calls/month",
          "Lead qualification scoring",
        ],
        bestFor: "Service businesses that book appointments — clinics, salons, contractors, consultants.",
      },
      {
        name: "Concierge",
        priceRange: "$5,000 setup + $750/mo",
        summary: "Full-stack voice presence: inbound, outbound, qualification, escalation, and CRM sync.",
        features: [
          "All Scheduler features",
          "Outbound call campaigns (lead follow-up, appointment reminders)",
          "CRM integration (HubSpot, Salesforce, Zoho, custom)",
          "Live transfer to you for qualified hot leads",
          "Unlimited calls",
          "Custom workflows and conditional logic",
          "Quarterly performance review and tuning",
        ],
        bestFor: "Established businesses with sales operations and a lead pipeline worth optimizing.",
      },
    ],
    cta: { label: "Get a quote", href: "/contact" },
  },

  retainers: {
    eyebrow: "Ongoing support",
    h1: "Website retainers, priced for clarity.",
    intro: "Once your site is live, it needs care — security updates, content changes, performance monitoring, the occasional emergency. Pick the tier that fits how active your site is.",
    tiers: [
      {
        name: "Care",
        priceRange: "$150 / month",
        summary: "Hands-off maintenance for sites that just need to stay healthy.",
        features: [
          "Monthly security updates (CMS, plugins, themes)",
          "Daily backups with off-site storage",
          "Uptime monitoring (1-minute checks)",
          "SSL certificate management",
          "Monthly performance report",
          "Up to 30 minutes of content edits per month",
          "Same-day response for downtime",
        ],
        bestFor: "Established sites that don't change often.",
      },
      {
        name: "Active",
        priceRange: "$400 / month",
        summary: "For sites that are part of how you run your business — and need to keep up.",
        features: [
          "Everything in Care",
          "Up to 2 hours of content edits or updates per month",
          "Quarterly SEO health check and on-page tuning",
          "Plugin and integration management",
          "Form submission monitoring",
          "Monthly strategy email with recommendations",
          "Priority response (same business day)",
        ],
        bestFor: "Active businesses with regular content updates or ongoing campaigns.",
      },
      {
        name: "Partner",
        priceRange: "$1,000 / month",
        summary: "Treat me like your fractional digital lead. We meet, we plan, we execute.",
        features: [
          "Everything in Active",
          "Up to 6 hours of work per month, rolling over within the quarter",
          "Monthly 60-minute strategy call",
          "Custom feature builds and integrations",
          "Quarterly performance and SEO deep-dive",
          "Direct text/WhatsApp access during business hours",
          "First right of refusal on new project work at preferred rate",
        ],
        bestFor: "Businesses where the website is genuinely a growth lever.",
      },
    ],
    note: "Need something different — social media management, content production, custom dev? Those run as separate retainers scoped to your situation. Let's talk.",
    cta: { label: "Start a retainer conversation", href: "/contact" },
  },

  about: {
    eyebrow: "About",
    h1: "I'm Sebastian. I build the things small businesses wish their last developer had.",
    body: [
      "I founded SebbyIT Consulting in 2023 to fix a pattern I kept seeing — small businesses paying real money for websites and digital infrastructure that don't actually work for them. Slow sites. Broken contact forms. Templates that look like every other business in the same industry. \"Maintenance\" plans that nobody maintained.",
      "My background is in cybersecurity and enterprise identity engineering. I hold a Master's degree in Cybersecurity from Florida International University, where I graduated Summa Cum Laude. I spent years working on enterprise-grade security and identity systems — the kind of environments where a five-minute outage is a real problem.",
      "That background shapes how I work on smaller projects. The same instincts that lock down a Fortune 500's identity system also tell me your contact form should actually deliver, your site should load in under two seconds, and your business shouldn't depend on a developer you can't reach. I build accordingly.",
      "SebbyIT is intentionally small. I take on select engagements where I can do real work and stay accountable. If you're looking for the cheapest option, I'm not it. If you're looking for someone who'll do it right and pick up the phone when you call, we should talk.",
    ],
    credentials: {
      heading: "Credentials",
      items: [
        "M.S. in Cybersecurity, Florida International University — Summa Cum Laude (2022)",
        "B.S. in Information Technology, Florida International University (2021)",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Years of enterprise identity and security experience",
        "Bilingual: English and Spanish (native proficiency)",
        "Ongoing professional development in IAM, cloud, and AI through LinkedIn Learning and self-directed study",
      ],
    },
    location: {
      heading: "Based in",
      body: "Miami, Florida. Working with clients across the US and Latin America. SebbyIT Consulting, Corp. is a Florida-registered corporation; all engagements run under US contract with arbitration in Miami.",
    },
    cta: { label: "Start a conversation", href: "/contact" },
  },

  contact: {
    eyebrow: "Get in touch",
    h1: "Tell me about your business.",
    intro: "I respond within one business day. If you're ready to move fast, the WhatsApp link is the quickest path. For a structured project conversation, use the form.",
    form: {
      nameLabel: "Your name",
      emailLabel: "Email",
      companyLabel: "Company or business name",
      phoneLabel: "Phone (optional)",
      messageLabel: "What are you trying to do?",
      messagePlaceholder: "A few sentences is enough. The more specific, the better the first reply will be.",
      submitLabel: "Send message",
      submittingLabel: "Sending…",
      successHeading: "Got it.",
      successBody: "Your message is in. I'll reply from contact@sebbyservices.com within one business day — usually faster.",
      errorHeading: "Something went wrong.",
      errorBody: "The form didn't go through. Email me directly at contact@sebbyservices.com and I'll get back to you fast.",
    },
    alternatives: {
      heading: "Other ways to reach me",
      whatsapp: { label: "WhatsApp", value: "+1 (786) 543-1417", description: "Fastest. Usually a reply within hours during business days." },
      calendly: { label: "Book a call", value: "30-minute intro call", description: "Free, no commitment. Good if you want to talk through options before writing anything down." },
      email: { label: "Email", value: "contact@sebbyservices.com", description: "Best for detailed proposals or anything with attachments." },
    },
  },

  footer: {
    tagline: "Modern web, automation, and AI for businesses that need it done right.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Web builds", href: "/services/web-builds" },
          { label: "AI phone agents", href: "/services/ai-phone-agents" },
          { label: "Retainers", href: "/retainers" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    legal: "© 2026 SebbyIT Consulting, Corp. All rights reserved. Florida-registered corporation.",
    location: "Miami, FL · Available across the US and Latin America",
  },
} as const;

export type Content = typeof content;
