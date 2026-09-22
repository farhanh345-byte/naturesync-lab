export const company = {
  name: "NatureSync Lab",
  shortName: "NatureSync",
  tagline: "Building software that grows with people and purpose.",
  eyebrow: "Information technology · Product engineering",
  email: "hello@naturesynclab.com",
  web: "www.naturesynclab.com",
  location: "Islamabad, Pakistan",
  hours: "Monday–Friday, 10:00–19:00 PKT",
  hoursNote: "Overlap available for US / EU clients",
  quote:
    "We do not ship features for the sake of a roadmap. We ship systems that stay in sync with how a business actually works.",
} as const;

export const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export const nameMeaning = [
  {
    word: "Nature",
    body: "How we think about products. They should grow, adapt, and stay useful — not fight the organisation that runs them.",
  },
  {
    word: "Sync",
    body: "How we work. People, process, and technology staying in step, from the first brief through to live operations.",
  },
  {
    word: "Lab",
    body: "How we build. Research first, ship next, measure always. A working product beats a decorated prototype.",
  },
] as const;

export const glance = [
  { label: "Focus", value: "Custom software, SaaS, apps, and web platforms" },
  { label: "Model", value: "Project delivery, product partnership, retained engineering" },
  { label: "Approach", value: "Discover → design → build → launch → iterate" },
  { label: "Base", value: "Islamabad, Pakistan · local and international clients" },
] as const;

export const values = [
  {
    title: "Clarity",
    body: "Scope, cost, and timeline said plainly. No hidden workstreams.",
  },
  {
    title: "Craft",
    body: "Interfaces, architecture, and code treated as long-term assets.",
  },
  {
    title: "Ownership",
    body: "We stay with the product after launch — support, iteration, and ops.",
  },
  {
    title: "Restraint",
    body: "Build what the problem needs. Extra features are a cost, not a gift.",
  },
] as const;

export const vision =
  "To be the technology partner businesses trust when they need digital products that are useful on day one and still strong years later — software that grows with the organisation, not against it.";

export const mission =
  "Help clients move from idea to working product with disciplined engineering: discovery that reduces risk, design that users understand, code that teams can own, and launches that operations can run.";

export const whoWeServe = [
  "Startups that need an MVP with a path to scale.",
  "Growing companies that need a SaaS product, customer portal, or internal platform.",
  "Established organisations modernising websites, operations tools, and customer-facing applications.",
] as const;

export const industries = [
  "Commerce",
  "Health & wellness",
  "Real estate",
  "Services",
  "Education",
  "Operations",
] as const;

export const services = [
  {
    slug: "saas",
    title: "SaaS product development",
    summary:
      "Multi-tenant platforms, subscription billing, role-based access, admin consoles, usage metering, APIs, and the operational tooling a SaaS business needs after launch.",
  },
  {
    slug: "mobile",
    title: "Mobile app development",
    summary:
      "Native and cross-platform iOS and Android applications. Consumer apps, field-ops tools, and companion apps for SaaS products, with store-ready delivery and release discipline.",
  },
  {
    slug: "web",
    title: "Web development",
    summary:
      "Marketing sites, web applications, customer portals, and content platforms. Fast, responsive, SEO-aware front ends on solid backends — not templates dressed as products.",
  },
  {
    slug: "design",
    title: "UI / UX design",
    summary:
      "Research, information architecture, wireframes, high-fidelity interfaces, and design systems. We design so engineering can implement without guesswork.",
  },
  {
    slug: "cloud",
    title: "Cloud, DevOps & architecture",
    summary:
      "AWS / GCP / Azure foundations, CI/CD, environments, monitoring, security baselines, and cost-aware architecture so products stay up and stay affordable.",
  },
  {
    slug: "ai",
    title: "AI-enabled features",
    summary:
      "Practical AI inside real products: assistants, document intelligence, recommendations, and automation — added where they reduce work, not where they add theatre.",
  },
  {
    slug: "discovery",
    title: "Product discovery & MVP",
    summary:
      "Workshops, scope definition, technical spikes, and first-release planning. A short, honest path from idea to a product users can touch.",
  },
  {
    slug: "growth",
    title: "Support & growth engineering",
    summary:
      "Retained teams for maintenance, performance, new modules, and the unglamorous work that keeps a live product healthy.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Understand the business, users, constraints, and success measure. Map current systems. Write a scope that can be estimated.",
  },
  {
    n: "02",
    title: "Design",
    body: "Information architecture, user flows, interface, and technical design. Agree what “done” looks like before code starts.",
  },
  {
    n: "03",
    title: "Build",
    body: "Iterative sprints with visible progress. Code review, testing, and staging environments. No surprise big-bang drops.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Deployment, monitoring, handover documentation, training where needed. A live product with an owner, not a zip file.",
  },
  {
    n: "05",
    title: "Grow",
    body: "Measure usage, fix what users hit, add the next module. A retained rhythm so the product does not freeze after go-live.",
  },
] as const;

export const reasons = [
  {
    title: "Product sense, not only tickets",
    body: "We ask what the software is for, then build toward that outcome.",
  },
  {
    title: "One team across design and code",
    body: "Fewer handoffs. Design decisions survive implementation.",
  },
  {
    title: "Architecture that can be owned",
    body: "Clear repos, documentation, and no lock-in theatrics.",
  },
  {
    title: "Commercial honesty",
    body: "Estimates with assumptions. Change requests named as change requests.",
  },
  {
    title: "Pakistan delivery, global standard",
    body: "Islamabad-based team with communication and quality fit for international clients.",
  },
  {
    title: "Aftercare is part of the offer",
    body: "Support windows, SLAs on retainers, and a path from MVP to scale.",
  },
] as const;

export const engagements = [
  {
    id: "fixed",
    title: "Fixed-scope project",
    body: "A defined product, module, or website with a quoted timeline and commercial. Best when requirements can be written down.",
  },
  {
    id: "mvp",
    title: "MVP sprint",
    body: "A time-boxed first release — typically 6–12 weeks — to put a working product in users’ hands and learn from reality.",
  },
  {
    id: "squad",
    title: "Dedicated squad",
    body: "A standing design + engineering team on a monthly retainer. Best for live products that need continuous delivery.",
  },
  {
    id: "advisory",
    title: "Advisory & rescue",
    body: "Architecture review, codebase assessment, or a stalled product brought back to a shippable state.",
  },
] as const;

export const stack = [
  { label: "Front end", items: "React, Next.js, Vue, TypeScript" },
  { label: "Mobile", items: "React Native, Flutter, native iOS and Android" },
  { label: "Back end", items: "Node.js, Python, .NET, Java" },
  { label: "Data", items: "PostgreSQL, MySQL, MongoDB, Redis" },
  { label: "Cloud", items: "AWS, Google Cloud, Azure" },
  { label: "Delivery", items: "Docker, Kubernetes, GitHub Actions, CI/CD" },
  { label: "Product", items: "Figma, design systems, analytics, auth, billing, email, storage" },
] as const;

export const chips = [
  "SaaS platforms",
  "Mobile applications",
  "Web products",
  "Cloud architecture",
  "UI / UX",
  "Digital transformation",
] as const;
