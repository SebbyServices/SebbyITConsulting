// Site copy for sebbyservices.com.
// Positioning: tech support (async-first) is the headline. Cybersecurity
// credentials, bilingual access, and Miami/DR presence are proof points.
// Web design, AI phone agents, and consulting are secondary pages that stay
// reachable from nav/footer but are not part of the homepage message.
// Style rule: no em dashes in copy.

// Outbound link to madebysebby.com, tagged so referrals are visible in its analytics.
function mbs(path: string) {
  return `https://madebysebby.com${path}?utm_source=sebbyservices&utm_medium=referral&utm_campaign=web-design-page`;
}

export const content = {
  meta: {
    siteName: "Sebby IT",
    legalName: "Sebby IT Consulting, Corp.",
    tagline: "Tech support from a cybersecurity pro. Text first, call when it counts.",
    defaultDescription:
      "Remote tech support for small businesses, individuals, and families. Message Sebby IT by text, email, or WhatsApp and get it fixed by a cybersecurity-trained pro. English and Spanish. Based in Miami.",
    contact: {
      email: "contact@sebbyservices.com",
      phone: "+1 (786) 543-1417",
      phoneRaw: "17865431417",
      whatsappUrl: "https://wa.me/17865431417",
      // Shared Cal.com booking page with Made by Sebby (free 15-minute call).
      bookingUrl: "https://cal.com/madebysebby/chat",
      linkedinPersonal: "https://www.linkedin.com/in/sebastianpodgaetz/",
      linkedinCompany: "https://www.linkedin.com/company/sebby-it-consulting-corp/",
    },
    formspreeEndpoint: "https://formspree.io/f/mdayzeek",
    // Sister brand for web design. Cross-site referral mechanism is still an
    // open item in the Made by Sebby project; for now: nav/footer + a
    // referral page at /services/web-design.
    madeBySebbyUrl: "https://madebysebby.com",
  },

  nav: [
    { label: "For Business", href: "/business" },
    { label: "For Home & Family", href: "/home-and-family" },
    { label: "Other Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  headerCta: { label: "Get help", href: "/contact" },

  home: {
    hero: {
      eyebrow: "Remote tech support · Miami · English & Español",
      h1: "Tech help from someone who actually knows security.",
      sub: "Text, email, or WhatsApp me the problem. Most fixes happen right in the chat. When it needs more, we jump on a call or screen-share. For small businesses, individuals, and families.",
      primaryCta: { label: "Get help now", href: "/contact" },
      secondaryCta: { label: "See plans", href: "#plans" },
      trust: ["M.S. Cybersecurity, FIU", "English & Español", "Reply within 1 business day"],
      // Illustrative example of the async-first flow shown in the hero.
      chat: {
        name: "Sebastian · Sebby IT",
        status: "Usually replies within a few hours",
        messages: [
          { from: "client", text: "Hi! I got a text saying my bank account is locked and to click a link. Is this real?" },
          { from: "sebby", text: "Good call checking first. Don't click it. That's a common scam. Can you send me a screenshot?" },
          { from: "client", text: "Just sent it." },
          { from: "sebby", text: "Confirmed, it's fake. I'll walk you through blocking the number and reporting it. Takes two minutes." },
        ],
      },
    },
    paths: {
      eyebrow: "Plans",
      h2: "Pick the plan that fits who you are.",
      sub: "Monthly plans so help is one message away. Not ready for a plan? One-time fixes are available too.",
      cards: [
        {
          name: "Sebby IT Shield",
          audience: "For small businesses",
          price: "From $250/mo",
          description: "Unlimited chat and email support, fast response times, and regular security check-ins so your team keeps working and your data stays protected.",
          href: "/business",
          cta: "See business plans",
        },
        {
          name: "Sebby IT Care",
          audience: "For individuals and families",
          price: "From $39/mo",
          description: "Friendly, patient help with phones, computers, email, Wi-Fi, and scams. Family plans cover parents and grandparents too.",
          href: "/home-and-family",
          cta: "See home plans",
        },
      ],
      oneTime: {
        label: "Just need one thing fixed?",
        body: "One-time help, no plan required: $95 to $125 flat, depending on complexity.",
        cta: { label: "Request a one-time fix", href: "/contact?topic=one-time" },
      },
    },
    howItWorks: {
      eyebrow: "How it works",
      h2: "Message first. Call when it counts.",
      steps: [
        {
          n: "01",
          title: "Send me the problem",
          body: "Text, email, or WhatsApp. A screenshot or a short description is enough. No phone trees, no ticket numbers, no call center.",
        },
        {
          n: "02",
          title: "Most fixes happen in the chat",
          body: "I walk you through it step by step, in English or Spanish. Most issues are solved without ever needing a call.",
        },
        {
          n: "03",
          title: "Escalate when it needs more",
          body: "If it's bigger, we move to a phone call, video, or a secure screen-share where I can see your screen and fix it with you.",
        },
      ],
    },
    proof: {
      eyebrow: "Why Sebby IT",
      h2: "Not a generic IT guy.",
      items: [
        {
          icon: "shield",
          title: "Cybersecurity trained",
          body: "Master's in Cybersecurity from FIU, Summa Cum Laude, with an enterprise security background. Every fix is done with your safety in mind.",
        },
        {
          icon: "languages",
          title: "Bilingual, English & Español",
          body: "Get help in the language you're most comfortable in. Great for families where parents or grandparents prefer Spanish.",
        },
        {
          icon: "user",
          title: "You talk to me, every time",
          body: "I keep my client list small on purpose. No rotating technicians, no starting over. The person who fixed it last time already knows your setup.",
        },
        {
          icon: "map",
          title: "Miami based",
          body: "Rooted in Miami and serving the Dominican Republic too. Everything is handled remotely, so help is available wherever you are.",
        },
      ],
    },
    aboutTeaser: {
      eyebrow: "About",
      h2: "Hi, I'm Sebastian.",
      body: "I founded Sebby IT Consulting, Corp. to give small businesses and families the kind of careful, security-minded tech support usually reserved for big companies. When you message Sebby IT, you're messaging me.",
      cta: { label: "More about me", href: "/about" },
    },
    finalCta: {
      h2: "What's not working right now?",
      sub: "Send me a message. I'll reply with what's going on and how to fix it, or which plan makes sense if you want ongoing help.",
      primaryCta: { label: "Get help now", href: "/contact" },
    },
  },

  shield: {
    eyebrow: "Sebby IT Shield · For small businesses",
    h1: "Tech support and security for your business, one message away.",
    intro: "Your team messages me when something breaks. I fix it, usually in the chat, and keep an eye on your security so small problems don't become expensive ones.",
    tiers: [
      {
        name: "Starter",
        priceRange: "$250/mo",
        summary: "Reliable chat and email support with a monthly security check-in.",
        features: [
          "Unlimited chat and email support",
          "4-hour response time",
          "Monthly security check-in email",
          "Phone or screen-share billed at $100/hr when needed",
        ],
        bestFor: "Small teams that mostly need quick answers and fixes.",
      },
      {
        name: "Growth",
        priceRange: "$450/mo",
        summary: "Everything in Starter, plus included call time and a quarterly audit.",
        features: [
          "Everything in Starter",
          "Up to 3 hours of phone or screen-share included",
          "Same-day priority response",
          "Quarterly security audit",
        ],
        bestFor: "Businesses that rely on their tech every day.",
      },
      {
        name: "Priority",
        priceRange: "$750/mo",
        summary: "Everything in Growth, plus a dedicated line and same-day on-call.",
        features: [
          "Everything in Growth",
          "Up to 6 hours of phone or screen-share included",
          "Dedicated WhatsApp or Slack line",
          "Same-day on-call support",
        ],
        bestFor: "Teams where downtime costs real money.",
      },
    ],
    covers: {
      heading: "What I help with",
      items: [
        "Email, Microsoft 365, and Google Workspace",
        "Computers, printers, and Wi-Fi",
        "Account access, passwords, and two-factor setup",
        "Phishing, scams, and suspicious activity",
        "New employee setup and offboarding",
        "Software, apps, and everyday \"how do I\" questions",
      ],
    },
    faq: [
      {
        q: "How do I reach you?",
        a: "Chat, email, text, or WhatsApp. Priority clients also get a dedicated WhatsApp or Slack line. If a problem needs more than messages, we move to a phone call, video, or screen-share.",
      },
      {
        q: "Why is this priced above a typical IT helper?",
        a: "You're getting a Master's-level cybersecurity background on every fix. Security check-ins and audits are built into the plans, not sold as extras after something goes wrong.",
      },
      {
        q: "Do you support Spanish-speaking teams?",
        a: "Yes. Support is available in English and Spanish.",
      },
    ],
    cta: { label: "Talk about a business plan", href: "/contact?topic=business" },
  },

  care: {
    eyebrow: "Sebby IT Care · For individuals and families",
    h1: "Patient, friendly tech help for you and your family.",
    intro: "Stuck on your phone, computer, email, or Wi-Fi? Worried a message might be a scam? Send me a text. I'll walk you through it, in English or Spanish, without the jargon.",
    tiers: [
      {
        name: "Basic",
        priceRange: "$39/mo",
        summary: "Quick help whenever you need it, for one person.",
        features: [
          "Unlimited chat and email quick-fixes",
          "One 30-minute remote session included every month",
          "Help in English or Spanish",
        ],
        bestFor: "Anyone who wants a trusted person to ask.",
      },
      {
        name: "Family",
        priceRange: "$69/mo",
        summary: "Covers the whole family, including parents and grandparents.",
        features: [
          "Covers up to 4 family members or devices",
          "Two remote sessions included every month",
          "\"Keep your parents safe from scams\" check-in",
          "Help in English or Spanish",
        ],
        bestFor: "Families looking out for parents or grandparents.",
      },
      {
        name: "One-time fix",
        priceRange: "$95 to $125",
        summary: "No plan, no commitment. One problem, one flat price.",
        features: [
          "Flat price based on complexity",
          "Quoted before any work starts",
          "Remote help by chat, phone, or screen-share",
        ],
        bestFor: "Single problems that need solving today.",
      },
    ],
    covers: {
      heading: "What I help with",
      items: [
        "Phones, tablets, and computers",
        "Email, passwords, and locked accounts",
        "Wi-Fi, printers, and smart TVs",
        "Spotting scam calls, texts, and emails",
        "Photos, backups, and storage",
        "Video calls with family, WhatsApp, and social media",
      ],
    },
    faq: [
      {
        q: "I'm not good with technology. Is that okay?",
        a: "Absolutely. That's exactly who this is for. I go step by step, at your pace, and I never make you feel rushed.",
      },
      {
        q: "Can I sign up for my parents?",
        a: "Yes. The Family plan was built for that. You can cover your parents or grandparents, and I'll check in with them about scams and account safety.",
      },
      {
        q: "What is a remote session?",
        a: "A phone call, video call, or secure screen-share where I can see what you see and fix it with you. You stay in control the whole time.",
      },
      {
        q: "¿Hablas español?",
        a: "Sí. Todo el soporte está disponible en inglés y en español.",
      },
    ],
    cta: { label: "Get started with Sebby IT Care", href: "/contact?topic=home" },
  },

  services: {
    eyebrow: "Other services",
    h1: "Beyond everyday tech support.",
    intro: "Tech support is what I do day to day. For businesses that need more, these services are available by conversation.",
    cards: [
      {
        title: "Bilingual AI phone agents",
        description: "An AI receptionist that answers every call, books appointments, and captures leads 24/7.",
        href: "/services/ai-phone-agents",
      },
      {
        title: "Business consulting & retainers",
        description: "Ongoing, custom-scoped technology help for businesses that want a long-term partner.",
        href: "/services/consulting",
      },
      {
        title: "Web design",
        description: "Websites that build trust, designed, built, and cared for by my studio, Made by Sebby.",
        href: "/services/web-design",
      },
    ],
  },

  aiPhoneAgents: {
    eyebrow: "Service · AI phone agents",
    h1: "Never miss another call.",
    intro: "An AI phone agent that picks up 24/7, answers questions about your business, books appointments, and forwards urgent calls. Bilingual English and Spanish when your customers need it.",
    offer: {
      name: "AI Phone Agent",
      priceRange: "$5,000 setup + $500/mo",
      summary: "A fully custom phone agent, built around how your business actually runs.",
      features: [
        "Custom voice and persona for your brand",
        "English, Spanish, or both, based on your customer base",
        "Answers FAQs from your own business knowledge base",
        "Appointment booking and lead capture",
        "Urgent call forwarding and message notifications",
      ],
      bestFor: "Businesses losing leads to voicemail or after-hours calls.",
    },
    terms: "The monthly fee runs on a 6-month minimum contract.",
    cta: { label: "Ask about a phone agent", href: "/contact?topic=phone-agent" },
  },

  consulting: {
    eyebrow: "Service · Consulting & retainers",
    h1: "A technology partner, scoped to your business.",
    intro: "Some businesses need more than a support plan. Retainers are fully custom: we agree on the scope, the priorities, and the price together.",
    points: [
      {
        title: "Custom scope",
        body: "No fixed template. We start with what your business needs and build the retainer around it.",
      },
      {
        title: "Priority time",
        body: "Retainer clients always come first when schedules get tight.",
      },
      {
        title: "Security built in",
        body: "Every recommendation is made with a cybersecurity lens, so growth doesn't open new risks.",
      },
    ],
    cta: { label: "Start a conversation", href: "/contact?topic=consulting" },
  },

  webDesign: {
    // Referral page for Made by Sebby (madebysebby.com), my web design studio.
    // Facts and prices mirror madebysebby.com; keep them in sync when it changes.
    // Every outbound link goes through mbs() so referrals show up in its analytics.
    eyebrow: "Web design · Made by Sebby",
    h1: "Need a website? That's Made by Sebby.",
    intro: "Sebby IT keeps your tech running. For websites, I run a dedicated design studio called Made by Sebby. It designs, builds, and cares for websites that help your business look professional, earn trust, and grow.",
    cta: { label: "Visit madebysebby.com", href: mbs("/") },
    secondaryCta: { label: "Book a free 15-minute call", href: mbs("/book.html") },
    reassurance: "No agency runaround, no jargon. You talk to me, and I build it like it's my own.",

    services: {
      eyebrow: "What Made by Sebby does",
      h2: "Three ways to help your business online.",
      items: [
        {
          icon: "layout",
          tag: "Made to convert",
          title: "Web Design & Build",
          body: "A website you're proud to share, one that makes strangers trust you enough to call, book, or buy.",
          href: mbs("/services.html"),
        },
        {
          icon: "shield",
          tag: "Made to last",
          title: "Website Care",
          body: "Your site kept fast, secure, and updated month after month, so you never have to think about it.",
          href: mbs("/website-care.html"),
        },
        {
          icon: "search",
          tag: "Made to be found",
          title: "Get Found on Google",
          body: "Honest SEO that helps people actually find your business when they search, and compounds over time.",
          href: mbs("/services.html"),
        },
      ],
    },

    pricing: {
      eyebrow: "Clear starting prices",
      h2: "Know the range before you call.",
      sub: "Every project is scoped after a free conversation. You get an exact number up front, and it doesn't go up afterwards.",
      items: [
        { name: "Starter build", price: "From $2,500", detail: "Up to 5 pages, bilingual, live in 2 to 3 weeks" },
        { name: "Custom build", price: "From $5,000", detail: "Up to 10 pages, custom design, 4 to 6 weeks" },
        { name: "Premium build", price: "From $9,000", detail: "Unlimited pages, strategy, integrations, 6 to 10 weeks" },
        { name: "Website Care", price: "From $99/mo", detail: "Updates, backups, monitoring, and edits" },
      ],
      audit: {
        label: "Already have a site that isn't pulling its weight?",
        body: "Start with a Website Audit for $750, credited toward whatever comes next.",
        cta: { label: "About the audit", href: mbs("/website-audit.html") },
      },
      cta: { label: "See full pricing", href: mbs("/pricing.html") },
    },

    included: {
      heading: "Included in every build",
      items: [
        "Mobile-first design",
        "Fast load times, targeting under 2 seconds",
        "Bilingual English and Spanish, written by a native speaker",
        "SEO foundations: meta tags, schema, sitemap",
        "Google Analytics set up for you",
        "You own 100% of it: domain, hosting, content, and code",
      ],
    },

    process: {
      eyebrow: "How a project works",
      h2: "Simple from start to finish.",
      steps: [
        { n: "01", title: "We talk", body: "A free 15-minute call about your business and what your website needs to do. If it's not the right fit, you'll hear that honestly." },
        { n: "02", title: "I design and build", body: "You see the design before anything is built, and get updates in plain English while it comes together." },
        { n: "03", title: "You launch, I stay on", body: "Your site goes live, and it stays fast, secure, and current. When you need a change, you text me." },
      ],
    },

    work: {
      eyebrow: "Recent work",
      h2: "Real businesses, real results.",
      projects: [
        { name: "Riera Law Firm", detail: "Securities law · Full bilingual build, 70+ pages, ongoing care", href: mbs("/case-study-rieralaw.html") },
        { name: "Ortho Flow Recovery", detail: "Recovery equipment · Bilingual build, ongoing care", href: mbs("/case-study-orthoflow.html") },
        { name: "Elite Care Recovery", detail: "Medical equipment · Full site build", href: mbs("/case-study-elitecare.html") },
      ],
      testimonials: [
        {
          quote: "Sebby rebuilt my law firm's entire web presence. He works fast, explains everything in plain English, and treats my site like it's his own. I trust him with the online face of my practice.",
          initials: "JR",
          name: "Jorge L. Riera",
          role: "Founding Principal, Riera Law Firm",
        },
        {
          quote: "He took our vision for Elite Care Recovery and built a professional website that exceeded our expectations. His communication and turnaround time were exceptional throughout the entire process.",
          initials: "JP",
          name: "John Pierce",
          role: "Co-Founder, Elite Care Recovery",
        },
      ],
      cta: { label: "See all work", href: mbs("/work.html") },
    },

    together: {
      eyebrow: "Better together",
      h2: "Your website and your tech, handled by one person.",
      sub: "Made by Sebby takes care of your website. Sebby IT takes care of everything around it. One person who already knows your whole setup.",
      columns: [
        {
          brand: "Made by Sebby",
          role: "Your website",
          items: ["Design and build", "Website Care and updates", "Google visibility and SEO", "Bilingual English and Spanish sites"],
        },
        {
          brand: "Sebby IT",
          role: "Everything else",
          items: ["Email, Microsoft 365, Google Workspace", "Computers, phones, printers, Wi-Fi", "Passwords, accounts, two-factor", "Scams, phishing, and security check-ins"],
        },
      ],
      cta: { label: "See Sebby IT Shield for business", href: "/business" },
    },

    final: {
      h2: "Let's make your business look as good online as it is in person.",
      sub: "Tell Made by Sebby about your business, and you'll hear exactly what I'd build and what it costs.",
    },
  },

  about: {
    eyebrow: "About",
    h1: "I'm Sebastian. I fix tech problems the careful way.",
    body: [
      "I founded Sebby IT Consulting, Corp. after seeing the same thing over and over: small businesses and families getting rushed, confusing, or careless tech help. Fixes that didn't last. Advice that left accounts less secure than before. Nobody to call back when it broke again.",
      "My background is in cybersecurity and enterprise identity. I hold a Master's in Cybersecurity from Florida International University, where I graduated Summa Cum Laude, and I've worked on enterprise-grade security and identity systems where mistakes are not an option.",
      "That training shapes every fix. Whether it's a locked account, a suspicious email, or a new employee's laptop, I solve the problem and make sure it's done safely.",
      "Sebby IT is intentionally small. I work with fewer clients so each one gets real attention, and when you send a message, you're talking to me.",
    ],
    credentials: {
      heading: "Credentials",
      items: [
        "M.S. in Cybersecurity, Florida International University, Summa Cum Laude (2022)",
        "B.S. in Information Technology, Florida International University (2021)",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Enterprise identity and security experience",
        "Bilingual: English and Spanish",
      ],
    },
    location: {
      heading: "Based in",
      body: "Miami, Florida, and serving the Dominican Republic too. Support is remote, so help is available wherever you are. Sebby IT Consulting, Corp. is a Florida-registered corporation.",
    },
    cta: { label: "Get in touch", href: "/contact" },
  },

  contact: {
    eyebrow: "Get help",
    h1: "Tell me what's going on.",
    intro: "I reply within one business day, usually much sooner. For the fastest answer, message me on WhatsApp. English or Spanish, whichever you prefer.",
    form: {
      nameLabel: "Your name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      topicLabel: "What do you need?",
      topics: [
        { value: "home", label: "Help for me or my family (Sebby IT Care)" },
        { value: "business", label: "Help for my business (Sebby IT Shield)" },
        { value: "one-time", label: "A one-time fix" },
        { value: "phone-agent", label: "AI phone agent" },
        { value: "consulting", label: "Consulting or retainer" },
        { value: "other", label: "Something else" },
      ],
      companyLabel: "Business name (if applicable)",
      messageLabel: "What's going on?",
      messagePlaceholder: "A few sentences is plenty. What device or account, and what's happening?",
      submitLabel: "Send message",
      submittingLabel: "Sending…",
      successHeading: "Got it.",
      successBody: "Your message is in. I'll reply from contact@sebbyservices.com within one business day, usually sooner.",
      errorHeading: "Something went wrong.",
      errorBody: "The form didn't go through. Email me directly at contact@sebbyservices.com or message me on WhatsApp.",
    },
    alternatives: {
      heading: "Other ways to reach me",
      whatsapp: { label: "WhatsApp", value: "+1 (786) 543-1417", description: "Fastest. Send a message or a screenshot of the problem." },
      booking: { label: "Book a call", value: "Free 15-minute call", description: "Pick a time that works for you. Good for talking through a plan before signing up." },
      email: { label: "Email", value: "contact@sebbyservices.com", description: "Good for detailed questions or anything with attachments." },
    },
  },

  footer: {
    tagline: "Tech support from a cybersecurity pro. For small businesses, individuals, and families.",
    columns: [
      {
        heading: "Support plans",
        links: [
          { label: "Sebby IT Shield (business)", href: "/business" },
          { label: "Sebby IT Care (home & family)", href: "/home-and-family" },
          { label: "One-time fix", href: "/contact?topic=one-time" },
        ],
      },
      {
        heading: "More",
        links: [
          { label: "AI phone agents", href: "/services/ai-phone-agents" },
          { label: "Consulting & retainers", href: "/services/consulting" },
          { label: "Web design (Made by Sebby)", href: "/services/web-design" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    legal: "© 2026 Sebby IT Consulting, Corp. All rights reserved. Florida-registered corporation.",
    location: "Miami, FL · Remote support everywhere · English & Español",
  },
} as const;

export type Content = typeof content;
