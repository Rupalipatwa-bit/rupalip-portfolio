export const site = {
  name: "Rupali Patwa",
  title: "Rupali Patwa — Talent Acquisition, AI/ML",
  description:
    "Talent acquisition partner who designs and builds workforce teams from 0 → 1, pairing recruiting depth with workforce analytics. Focused on AI/ML talent.",
  url: "https://rupalipatwa.com",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@rupalipatwa.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN ??
    "https://www.linkedin.com/in/rupalipatwa",
  availability: "Open to Talent & Recruiting roles",
  resumePath: "/resume.pdf",
} as const;

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#work", label: "experience" },
  { href: "#cases", label: "case_studies" },
  { href: "#writing", label: "writing" },
] as const;

export const metrics = [
  {
    value: 40,
    suffix: "",
    label: "person Gen AI team built from scratch in 7 months",
  },
  {
    value: 45,
    suffix: "%",
    label: "cut in time-to-hire via Workday rollout",
  },
  {
    value: 15,
    suffix: "+",
    label: "AI/ML hires at Meta in 6 months, 0 → 1 teams",
  },
  {
    value: 30,
    suffix: "%",
    label: "faster time-to-fill for senior & EM roles",
  },
] as const;

export const specialties = [
  "0 → 1 team building",
  "Workforce analytics",
  "Strategic workforce planning",
  "AI / ML recruiting",
  "Technical sourcing",
  "Full-cycle",
  "Startup & scale-up",
  "Stakeholder partnering",
  "Candidate experience",
  "Employer branding",
] as const;

export const journey = [
  {
    num: "01",
    place: "India",
    text: "Built recruiting operations, sourcing hard-to-find tech talent for US teams.",
  },
  {
    num: "02",
    place: "New York",
    text: "Master's in Human Capital Analytics & Technology at NYU (4.0 GPA).",
  },
  {
    num: "03",
    place: "Now",
    text: "Pairing that analytics depth with AI/ML hiring, the most competitive talent market there is.",
  },
] as const;

export const brings: { parts: (string | { bold: string })[] }[] = [
  {
    parts: [
      "Build TA & workforce functions from ",
      { bold: "scratch (0 → 1)" },
      ".",
    ],
  },
  {
    parts: [
      "Decisions backed by ",
      { bold: "workforce analytics" },
      ", not gut feel.",
    ],
  },
  {
    parts: [
      "Hires that ",
      { bold: "stick" },
      ", and partnership that gets me ",
      { bold: "in the room early" },
      ".",
    ],
  },
];

export const jobs = [
  {
    when: "2025 · Meta — Singapore",
    title: "Recruiter, AI",
    company: "Meta",
    bullets: [
      "Stood up ML (Llama 4) and full-stack engineering teams from the ground up across new enterprise units, closing 15+ AI/ML hires from lateral to principal and EM level in 6 months.",
      "Acted as strategic business partner to hiring managers, running interview loops and owning candidate relationships from pipeline to close.",
      "Wove internal mobility and succession planning into the core hiring strategy, cutting external hiring dependency ~20% and time-to-fill ~30% for senior and EM roles.",
    ],
  },
  {
    when: "2022 — 2024 · Walmart — Bangalore",
    title: "Senior Talent Acquisition Specialist · Generative AI",
    company: "Walmart",
    bullets: [
      "Built a specialized Gen AI team of 40 from scratch in 7 months, headhunting passive talent in LLMs, RAG, MLOps, and data engineering.",
      "Drove change management for the Workday ATS rollout across recruiting teams, cutting time-to-hire 45% and upskilling coordinators.",
      "Ran full-cycle recruiting for 120+ tech hires up to Director level while managing 4 coordinators, and lifted diversity mapping 30% through internal mobility and ERG partnerships.",
    ],
  },
  {
    when: "2020 — 2022 · ConnectWise — Pune",
    title: "Senior Technology Recruiter",
    company: "ConnectWise",
    bullets: [
      "Partnered with Platform and RMM engineering teams to close 120 tech hires across senior and manager levels, with seamless offer management.",
      "Strengthened employer brand through hackathons and code contests, raising candidate satisfaction 25% and application volume 22%.",
    ],
  },
  {
    when: "2016 — 2020 · Aptask — Pune",
    title: "Senior IT Recruiter",
    company: "Aptask",
    bullets: [
      "Recruited 30 engineering professionals across Java, Python, and cloud stacks, including ML and data scientists, beating annual placement targets in under a year.",
      "Managed Apple and Google accounts across the Bay Area and East Coast, revamping comp benchmarks 5–10% and reducing offer decline rates 30%.",
    ],
  },
] as const;

export const caseStudies = [
  {
    kicker: "// hard-to-fill search",
    title: "Closing a principal ML role nobody else could fill",
    description:
      "A priority Llama 4 machine-learning hire had been open for months with a thin pipeline. I rebuilt the search from the role definition up — rewrote the scorecard, expanded sourcing into research communities, and re-engaged passive candidates with a tighter narrative.",
    result: "Offer accepted in 8 weeks after re-scoping; candidate cited clarity on impact as the deciding factor.",
  },
  {
    kicker: "// process improvement",
    title: "Cutting time-to-fill with structured intake",
    description:
      "At Walmart, hiring managers and recruiters were misaligned on expectations during the Workday rollout. I introduced structured intake sessions and scorecards so every search started with shared criteria and calibrated bar-raising.",
    result: "Time-to-hire down 45% post-rollout; fewer late-stage rejections on senior Gen AI roles.",
  },
  {
    kicker: "// scaling a team",
    title: "Standing up a Gen AI function from zero",
    description:
      "Walmart needed a specialized Gen AI team fast without sacrificing quality. I built the sourcing engine, pipeline architecture, and candidate experience from scratch — headhunting passive talent in LLMs, RAG, and MLOps.",
    result: "40 hires in 7 months at a 92% offer acceptance rate across the core team.",
  },
  {
    kicker: "// ai in the workflow",
    title: "Bringing AI tooling into sourcing",
    description:
      "Manual sourcing was the bottleneck on high-volume technical searches. I piloted AI tools for outreach drafting and candidate research, measured response rates, and kept human judgment in every send.",
    result: "~6 hours saved per week per recruiter, with more time on real conversations and closing.",
  },
] as const;

export const toolkit = [
  {
    icon: "◈",
    title: "Sourcing & ATS",
    items: [
      "Workday · Greenhouse · iCIMS",
      "LinkedIn Recruiter",
      "Boolean & X-ray search",
      "GitHub · Stack Overflow · Kaggle",
    ],
  },
  {
    icon: "✦",
    title: "AI & automation",
    items: [
      "Eightfold AI · Findem · HireEZ",
      "Seismic · Notion AI",
      "Make.com · Power Automate",
      "Human always in the loop",
    ],
  },
  {
    icon: "❖",
    title: "Analytics & partnership",
    items: [
      "Tableau · Jamovi",
      "Workforce & pipeline analytics",
      "Structured intake + scorecards",
      "Internal mobility & succession",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Rupali doesn't just fill reqs — she reframes them. She rebuilt our bar for a principal ML hire, found candidates we couldn't reach, and got us to yes when we'd been stuck for months.",
    initials: "E",
    name: "Engineering Director",
    role: "Meta · AI Infrastructure",
  },
  {
    quote:
      "From first outreach to offer, the process felt intentional. She explained the team, the problem space, and what success looked like — not just the job description.",
    initials: "S",
    name: "Senior ML Engineer",
    role: "Hired via Meta search",
  },
] as const;

export const writingPosts = [
  {
    date: "coming soon",
    title: "Why structured intake beats a perfect job description",
    status: "draft" as const,
  },
  {
    date: "coming soon",
    title: "What AI can and can't do in technical sourcing",
    status: "draft" as const,
  },
  {
    date: "coming soon",
    title: "The recruiter's case for candidate experience as strategy",
    status: "draft" as const,
  },
] as const;
