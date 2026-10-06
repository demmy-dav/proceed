// Project content. Add a new build by adding an entry; layout needs no changes.
//
// id        PRD reference shown on the card
// title     project name
// sector    filter key: see `sectors` below
// tag       optional display label when it differs from the filter label
// kind      optional note after the ID ("Proceed product", "Reference build")
// summary   one or two sentences
// features  short bullets
// stack     tech tags (empty when not published)
// status    "live" | null
// url       public URL, or null
// metrics   optional [{ value, label }]; evaluation results only, never estimates
// image     optional { src, width, height, alt } (WebP)
// featured  renders as the full-width navy card

export const sectors = [
  { key: 'all', label: 'All' },
  { key: 'education', label: 'Education' },
  { key: 'business', label: 'Business & finance' },
  { key: 'community', label: 'Faith & community' },
  { key: 'productivity', label: 'Productivity' },
]

export const sectorLabel = (key) => sectors.find((s) => s.key === key)?.label ?? key

export const cases = [
  {
    id: 'PRD-03',
    kind: 'Proceed product',
    featured: true,
    title: 'FinSmart AI',
    sector: 'business',
    summary:
      'A conversational financial assistant for Nigerian small businesses and enterprises. Owners ask questions about their money in plain English, by text or by voice, on the web or on WhatsApp, and get answers drawn from their own live business data.',
    features: [
      'Chat with your finances on WhatsApp or the web dashboard',
      'Voice input for owners who would rather talk than type',
      'Answers grounded in your real sales and expense records',
      'Secure, signed WhatsApp Business integration',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'LLM + RAG', 'WhatsApp Cloud API'],
    status: 'live',
    url: 'https://finsmartai.online',
    metrics: [
      { value: '95.0%', label: 'Intent classification accuracy' },
      { value: '96.2%', label: 'Entity extraction precision' },
      { value: '90.9%', label: 'Functional tests passed' },
      { value: '4.2/5', label: 'User acceptance score' },
    ],
    metricsNote: "Results from the system's formal evaluation and user acceptance testing.",
    image: null,
  },
  {
    id: 'PRD-01',
    kind: 'Reference build',
    title: 'Lead-Way Victory School Management Platform',
    sector: 'education',
    summary:
      'A full digital administration platform for a school, and the foundation Proceed is now generalising for other institutions.',
    features: [
      'Student enrolment and records in one place',
      "Parent accounts that follow the school's fee policy",
      'One parent login for families with several children',
    ],
    stack: ['React', 'Node.js', 'MongoDB'],
    status: null,
    url: null, // add this project's link here, e.g. 'https://example.com'
    image: null,
  },
  {
    id: 'PRD-02',
    title: 'Chapel of Peace and Joy Secretary Companion',
    sector: 'community',
    summary:
      'A reporting companion for a chapel secretariat. Every service is recorded as it happens, and term reports come together without rebuilding them by hand.',
    features: [
      'Attendance tracking for each service',
      'Sermon highlights captured in rich text',
      'Drafts saved, exported and picked up later',
    ],
    stack: ['React', 'Browser storage'],
    status: null,
    url: null, // add this project's link here, e.g. 'https://example.com'
    image: null,
  },
  {
    id: 'PRD-04',
    kind: 'Proceed product',
    title: 'Life-OS',
    sector: 'productivity',
    summary:
      'Your own personal assistant. A system that keeps individuals, CEOs and executives at maximum productivity by holding their priorities, schedule and follow-ups in one place.',
    features: [
      'Built for founders and executives with too many threads',
      'One place for priorities, commitments and follow-ups',
    ],
    stack: [],
    status: null,
    url: null, // add this project's link here, e.g. 'https://example.com'
    image: null,
  },
  {
    id: 'PRD-05',
    title: 'Beyond 4 Walls Website',
    sector: 'community',
    summary:
      "The organisation's public home on the web: who they are, what they run and how to reach them, deployed on its own domain with a direct WhatsApp line for enquiries.",
    features: ['Custom domain and fast global hosting', 'One-tap WhatsApp contact for visitors'],
    stack: ['Vercel', 'GitHub'],
    status: null,
    url: null, // add this project's link here, e.g. 'https://example.com'
    image: null,
  },
  {
    id: 'PRD-06',
    title: 'PRAKTIS CRM',
    sector: 'community',
    tag: 'Creative community',
    summary:
      'Member and relationship management for Praktis, a creative community built on the idea that creativity is a discipline. It keeps track of every member, their progress and every conversation.',
    features: ["Every member's journey in one record", "Follow-ups that don't depend on anyone's memory"],
    stack: [],
    status: null,
    url: null, // add this project's link here, e.g. 'https://example.com'
    image: null,
  },
]
