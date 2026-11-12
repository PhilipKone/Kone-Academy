export interface ProtocolDetails {
  methodology: string;
  dataProcessing: string;
  compliance: string;
  timeline: string;
}

export interface Protocol {
  id: string;
  title: string;
  description: string;
  tools: string;
  category: 'Tuition' | 'Communication' | 'Academic' | 'Software' | 'Business';
  division: string;
  institution: string;
  imageUrl: string;
  liveUrl: string;
  status: string;
  details: ProtocolDetails;
}

export const protocols: Protocol[] = [
  // --- TUITION PROGRAM PROTOCOLS ---
  {
    id: "proto-tuition-online",
    title: "Online Tuition Telemetry & Interactive Compiler Protocol",
    description: "Standardized virtual classroom architecture incorporating live screen telemetry, real-time WebSockets code execution, and cloud IDE workspace isolation.",
    tools: "WebSockets, React, WebAssembly Compilers, Zoom SDK, Firebase",
    category: "Tuition",
    division: "Kone Academy",
    institution: "Kone Academy Education Division",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Synchronous and asynchronous digital classroom streaming, real-time code sandbox execution, interactive screen telemetry, and cloud IDE workspace isolation.",
      dataProcessing: "WebSockets-driven live code sync, automated syntax evaluation, student engagement metrics, and latency-optimized video encoding.",
      compliance: "ISO/IEC 23988 guidelines for IT-assisted educational assessments.",
      timeline: "Continuous Virtual Learning Standard"
    }
  },
  {
    id: "proto-tuition-facetoface",
    title: "Face-to-Face Physical Lab & Hardware Mentorship Protocol",
    description: "In-person laboratory workshop standards governing physical microcontroller breadboarding, oscilloscope diagnostics, and small-group engineering pair programming.",
    tools: "Microcontrollers, ESP32, Oscilloscopes, Multimeters, Soldering Stations",
    category: "Tuition",
    division: "Kone School",
    institution: "Kone School & Lab Division",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "In-person laboratory workshops, physical microcontroller breadboarding, direct oscilloscope/multimeter diagnostics, and small-group pair programming.",
      dataProcessing: "Lab assignment submission tracking, hardware safety verification, hands-on circuit test logs, and physical project rubrics.",
      compliance: "IEEE Educational Activities Board laboratory safety & pedagogical guidelines.",
      timeline: "On-Site Intensive Workshop Standard"
    }
  },
  {
    id: "proto-tuition-hybrid",
    title: "Hybrid Blended Learning & Hardware Telemetry Protocol",
    description: "Blended learning architecture bridging physical IoT hardware prototyping with cloud-hosted virtual lab telemetry and remote compiler pipelines.",
    tools: "IoT Telemetry, MQTT, Cloud IDE, GitHub Classroom, React",
    category: "Tuition",
    division: "Kone Academy",
    institution: "Kone Academy & Kone Lab",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Dual-layer instruction combining physical hardware prototyping with cloud-hosted virtual lab telemetry and remote compiler pipelines.",
      dataProcessing: "Remote IoT device state logging, hybrid assignment submission syncing, and dual-mode attendance tracking.",
      compliance: "Quality Matters (QM) Blended Course Rubric standards.",
      timeline: "Blended Semester Architecture"
    }
  },
  {
    id: "proto-tuition-instructorled",
    title: "Instructor-Led Guided Architecture & Code Review Protocol",
    description: "Expert senior engineer-directed live coding standards, architectural teardowns, production pull request (PR) reviews, and pair debugging workflows.",
    tools: "Git, GitHub PRs, VS Code Live Share, Docker, CI/CD",
    category: "Tuition",
    division: "Kone Code",
    institution: "Kone Code & Academy Mentorship",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Direct senior engineer-led live coding sessions, architectural teardowns, production pull request (PR) reviews, and pair debugging.",
      dataProcessing: "Real-time code diff inspection, automated linter feedback, live Q&A transcript indexing, and milestone tracking.",
      compliance: "Software Engineering Institute (SEI) peer code review standards.",
      timeline: "Senior Engineer-Guided Mentorship"
    }
  },
  {
    id: "proto-tuition-selfdirected",
    title: "Self-Directed Autonomous Project & Telemetry Protocol",
    description: "Self-paced mastery-based curriculum modules featuring automated unit test grading, progressive project checkpoints, and self-assessment telemetry.",
    tools: "Jest, PyTest, Automated Graders, WebAssembly, Markdown",
    category: "Tuition",
    division: "Kone Academy",
    institution: "Kone Academy Autonomous Learning",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Self-paced mastery-based curriculum modules, automated unit test grading, progressive project checkpoints, and self-assessment telemetry.",
      dataProcessing: "Continuous progress scoring, automated test suite execution via GitHub Actions / WebAssembly, and mastery threshold validation.",
      compliance: "Competency-Based Education (CBE) Framework compliance.",
      timeline: "Flexible Self-Paced Learning Path"
    }
  },

  // --- COMMUNICATION PROGRAM PROTOCOLS ---
  {
    id: "proto-comm-videos",
    title: "Featured Tutorial Videos & Screencast Production Protocol",
    description: "High-definition 4K video curriculum production standards, animated system architecture overlays, and step-by-step code walkthroughs.",
    tools: "OBS Studio, DaVinci Resolve, HLS Streaming, WebVTT, 4K Screencasting",
    category: "Communication",
    division: "Kone Digital",
    institution: "Kone Media & Communications",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "High-definition 4K screencasting, animated system architecture overlays, step-by-step code walkthroughs, and clear audio narration.",
      dataProcessing: "Multi-track audio noise suppression, automated subtitle indexing (VTT/SRT), chapter bookmarking, and HLS multi-bitrate streaming.",
      compliance: "W3C WCAG 2.1 Level AA video accessibility & closed-captioning standards.",
      timeline: "Weekly Technical Media Dispatch"
    }
  },
  {
    id: "proto-comm-podcasts",
    title: "Engineering Dispatches & Audio Podcast Protocol",
    description: "Deep-tech engineering audio dispatches, founder interviews, software architecture debates, and research paper audio summaries.",
    tools: "Audacity, RSS 2.0 / Atom, ID3v2, Podcast Index, HLS Audio",
    category: "Communication",
    division: "Kone Tech",
    institution: "Kone Media Division",
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Deep-tech engineering discussions, founder interviews, software architecture debates, and research paper audio summaries.",
      dataProcessing: "High-fidelity 24-bit audio mastering, automated transcript generation, ID3 tag indexing, and RSS/Atom feed distribution.",
      compliance: "Podcast Standards Project (PSP) metadata & audio loudness compliance (-16 LUFS).",
      timeline: "Bi-Weekly Audio Engineering Podcast"
    }
  },

  // --- ACADEMIC PROTOCOLS ---
  {
    id: "proto-1",
    title: "Accra Maternal Health Telemetry Protocol",
    description: "A localized clinical survey and telemetry instrumentation protocol designed to monitor maternal vitals across rural health clinics in Ghana.",
    tools: "Epidemiology, SurveyJS, SPSS, R-Markdown",
    category: "Academic",
    division: "Kone Consult",
    institution: "University of Health & Allied Sciences (UHAS) & Kone Consult",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Randomized clustering of 12 community health clinics in the Volta and Greater Accra regions. Instrumentation includes custom GSM-enabled digital telemetry nodes transmitting blood pressure and heart rate vitals daily.",
      dataProcessing: "Telemetry feeds are sanitized and logged to a private PostgreSQL instance. Statistical regression modeling is compiled in SPSS and R-Markdown to identify prenatal risk factors and predict regional anomalies.",
      compliance: "Fully compliant with the Ghana Health Service (GHS) Ethical Review Board directives and national Data Protection Commission (DPC) guidelines.",
      timeline: "12-Month Longitudinal Cohort Study"
    }
  },
  {
    id: "proto-5",
    title: "Kone Academy Qualitative Interview Protocol",
    description: "A detailed semi-structured qualitative research protocol designed to evaluate teacher professional development experiences, pedagogical adaptations, and classroom outcomes.",
    tools: "Qualitative Methods, Semi-structured Interviews, NVivo, Thematic Analysis",
    category: "Academic",
    division: "Kone Consult",
    institution: "Kone Academy Research Division",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Conduct 45-minute semi-structured audio interviews with certified educators. Audio recordings are transcribed using AI speech-to-text models and validated manually.",
      dataProcessing: "Qualitative thematic analysis using NVivo software. Coding matrix categorizes quotes into pedagogical themes, technology adoption barriers, and student engagement spikes.",
      compliance: "IRB Human Subjects Protocol Approval (#2026-KCA-004). Anonymized transcripts compliant with GDPR and DPC directives.",
      timeline: "Qualitative Research Blueprint"
    }
  },

  // --- SOFTWARE PROTOCOLS ---
  {
    id: "proto-2",
    title: "Fintech Double-Entry Ledger & ACID Lock Protocol",
    description: "A financial ledger protocol enforcing double-entry bookkeeping, transactional balance locks, and cryptographically signed audit logs.",
    tools: "Go, PostgreSQL, ACID Transactions, WebCrypto",
    category: "Software",
    division: "Kone Pay",
    institution: "Kone Pay Engineering",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Implementation of double-entry ledger rules where balance columns are never updated directly. Every transaction generates debit and credit records within PostgreSQL isolation locks.",
      dataProcessing: "Handshake authentication uses HMAC-SHA256 tokens validated in under 5ms. In-memory Redis clusters enforce rate-limiting across merchant gateways.",
      compliance: "PCI-DSS Level 1 compliance ready. Evaluated under OWASP Top 10 API Security controls.",
      timeline: "Enterprise Financial Infrastructure"
    }
  },
  {
    id: "proto-3",
    title: "Distributed Multi-Sig API Handshake Protocol",
    description: "A cryptographically secure API handshake design utilizing threshold multi-signatures for distributed financial & hardware telemetry hubs.",
    tools: "TypeScript, WebCrypto API, Node.js, RSA, WebSockets",
    category: "Software",
    division: "Kone Tech",
    institution: "Kone Tech Security Division",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Implementation of threshold multi-signature cryptography. Auth requests generate client-side challenges signed by private keys, compiled at gateway nodes, and verified against threshold configurations.",
      dataProcessing: "Real-time state verification using high-performance Node.js workers and in-memory Redis cluster. Handshake state data is kept stateless via encrypted JWT tokens.",
      compliance: "NIST-SP-800-56A compliant key-establishment scheme. Evaluated under OWASP Top 10 API Security controls.",
      timeline: "System Architecture Blueprint"
    }
  },

  // --- BUSINESS PROTOCOLS ---
  {
    id: "proto-4",
    title: "SaaS Quantitative Risk Assessment Protocol",
    description: "A comprehensive mathematical framework using Monte Carlo simulations to assess operational downtime risks and optimize cloud budgets for enterprise platforms.",
    tools: "Python, NumPy, Pandas, Monte Carlo, AWS Cost Explorer",
    category: "Business",
    division: "Kone Consult",
    institution: "Kone Consult Corporate",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Establish continuous telemetry logs from AWS CloudWatch. Run 10,000 Monte Carlo simulation runs daily to predict infrastructural constraints, resource starvation, and database locks under sudden traffic spikes.",
      dataProcessing: "Data aggregation using Python (Pandas/NumPy). Statistical distribution fitting via SciPy, outputting predictive cost-minimization curves for autoscaling rules.",
      compliance: "SOC2 Type II data governance compliant. Built to align with ISO/IEC 27001:2022 security controls.",
      timeline: "Continuous Optimization Model"
    }
  }
];
