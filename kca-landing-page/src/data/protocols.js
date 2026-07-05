export const protocols = [
  {
    id: "proto-1",
    title: "Accra Maternal Health Telemetry Protocol",
    description: "A localized clinical survey and telemetry instrumentation protocol designed to monitor maternal vitals across rural health clinics in Ghana.",
    tools: "Epidemiology, SurveyJS, SPSS, R-Markdown",
    category: "Academic",
    institution: "University of Health & Allied Sciences (UHAS)",
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
    id: "proto-2",
    title: "SaaS Quantitative Risk Assessment Protocol",
    description: "A comprehensive mathematical framework using Monte Carlo simulations to assess operational downtime risks and optimize cloud budgets for enterprise SaaS platforms.",
    tools: "Python, NumPy, Pandas, Monte Carlo, AWS Cost Explorer",
    category: "Business",
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
  },
  {
    id: "proto-3",
    title: "Distributed Multi-Sig API Handshake Protocol",
    description: "A cryptographically secure API handshake design utilizing threshold multi-signatures for distributed financial telemetry hubs.",
    tools: "TypeScript, WebCrypto API, Node.js, RSA, WebSockets",
    category: "Software",
    institution: "Kone Academy Labs",
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
  {
    id: "proto-4",
    title: "Kone Academy Qualitative Interview Protocol",
    description: "A detailed semi-structured qualitative research protocol designed to evaluate teacher professional development experiences, pedagogical adaptations, and classroom management outcomes.",
    tools: "Qualitative Methods, Semi-structured Interviews, NVivo, Thematic Analysis",
    category: "Academic",
    institution: "Kone Academy Research",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    liveUrl: "",
    status: "published",
    details: {
      methodology: "Establish semi-structured face-to-face or remote teacher interviews (45-60 minutes) post-implementation. Questions target ZPD scaffolding, device sharing strategies, and gender-based student interactions.",
      dataProcessing: "Audio recordings are transcribed using automated speech-to-text models, manually verified, and imported into NVivo for open, axial, and selective thematic coding.",
      compliance: "Adheres to institutional IRB guidelines. Consent forms must be signed before recording; transcripts are fully anonymized with alphanumeric identifiers.",
      timeline: "Post-Implementation Qualitative Evaluation"
    }
  }
];
