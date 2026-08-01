export interface TechStack {
  slug: string;
  title: string;
  target: string;
  difficulty: string;
  summary: string;
  recommendation: string;
  architecture: string;
  checklist: string[];
}

export const techStacks: TechStack[] = [
  {
    slug: "kone-code-architecture",
    title: "Kone Code: Interactive Code Execution & Student IDE Stack",
    target: "Coding Education, Cloud IDEs & Real-Time Linting (Kone Code)",
    difficulty: "Interactive Learning Platform",
    summary: "Kone Code powers interactive browser-based code editing, sandbox execution containers, and instant test-suite feedback for students across web dev, Python, and systems engineering.",
    recommendation: "Frontend: React + Monaco Editor + TypeScript. Backend: Node.js (Vite) + Docker Container Isolation. Cloud Execution: AWS ECS / WebAssembly (Wasm).",
    architecture: `1. Frontend Tier: Monaco Code Editor with custom language server protocols (LSP) for live syntax highlighting and linting.
2. API Gateway: WebSocket server managing student session persistence and real-time code execution streams.
3. Sandbox Container Tier: Isolated Docker / WebAssembly runtime environments executing code with memory and execution timeouts.
4. Feedback Engine: Automated unit test parser comparing output against grading rubrics in real-time.`,
    checklist: [
      "Isolate untrusted student code execution inside memory-capped container runtimes.",
      "Stream stdout and stderr output over WebSockets for zero-latency terminal feedback.",
      "Cache static language syntax definitions to ensure snappy offline editor performance."
    ]
  },
  {
    slug: "kone-lab-telemetry-stack",
    title: "Kone Lab: Remote Hardware & IoT Telemetry Architecture",
    target: "Robotics, Embedded Systems & Remote Hardware Labs (Kone Lab)",
    difficulty: "Hardware & Real-Time Streams",
    summary: "Kone Lab bridges theoretical hardware training with live physical microcontrollers, IoT sensor arrays, and remote laboratory video/telemetry feeds.",
    recommendation: "Hardware: ESP32 / Raspberry Pi in C++ & MicroPython. Telemetry Protocol: MQTT / WebSockets. Broker: EMQX. Visualization: Recharts / Chart.js + WebRTC.",
    architecture: `1. Edge Hardware Tier: Microcontrollers transmitting sensory telemetry (temperature, humidity, pressure) over MQTT.
2. Telemetry Broker: EMQX MQTT cluster handling incoming device telemetry feeds.
3. Streaming Server: WebRTC stream manager streaming live physical lab video cameras alongside telemetry graphs.
4. Student Interface: Interactive web dashboard displaying live sensor charts and remote flash controls.`,
    checklist: [
      "Implement MQTT keep-alives and automatic reconnection handlers on microcontrollers.",
      "Use WebRTC for low-latency live camera feeds of physical laboratory setups.",
      "Buffer high-frequency telemetry in time-series databases for student analysis assignments."
    ]
  },
  {
    slug: "kone-ai-learning-stack",
    title: "Kone AI: Intelligent Tutor & Curriculum RAG Architecture",
    target: "AI Mentorship, Automated Grading & RAG Knowledge Engine (Kone AI)",
    difficulty: "Artificial Intelligence & RAG",
    summary: "Kone AI provides students with 24/7 intelligent tutoring, retrieving context from course materials, documentation, and cohort assignment rubrics to deliver targeted hints without giving away final answers.",
    recommendation: "Language: Python. Framework: FastAPI. Vector DB: Qdrant. LLM Integration: OpenAI / Gemini API + Custom Prompt Guardrails. Frontend: React + SSE.",
    architecture: `1. Knowledge Ingestion: Curriculum docs, code examples, and grading guides tokenized into Qdrant vector database.
2. Student Query Processor: FastAPI server intercepting student questions and fetching relevant lesson context via semantic vector search.
3. Guardrail Engine: Socratic prompt system instructing the LLM to guide students through problem-solving steps rather than outputting raw solution code.
4. Streaming Interface: Server-Sent Events (SSE) delivering real-time streaming tutor responses in the student UI.`,
    checklist: [
      "Enforce Socratic tutoring guardrails to encourage active problem solving.",
      "Index all documentation and assignment specifications into vector search for accurate context.",
      "Sanitize student inputs to prevent prompt injection and keep conversations focused on learning."
    ]
  },
  {
    slug: "kone-digital-platform-stack",
    title: "Kone Digital: E-Learning Hub & Student Portal Architecture",
    target: "Student Portals, Cohort Management & E-Learning (Kone Digital)",
    difficulty: "Scalable E-Learning System",
    summary: "Kone Digital manages student enrollments, cohort schedules, progress tracking, assignment submissions, and instructor live-stream classrooms.",
    recommendation: "Frontend: React + Vite + CSS Tokens. Authentication & DB: Firebase (Auth, Firestore, Cloud Functions). Storage: Google Cloud Storage.",
    architecture: `1. Client Application: Responsive SPA with offline PWA support for mobile and desktop learners.
2. Identity Management: Firebase Authentication with role-based access control (Student, Instructor, Admin).
3. Data Layer: Real-time Firestore document collections tracking assignment progress, test scores, and cohort attendance.
4. Asset Storage: Secure Cloud Storage hosting video lectures, downloadable course resources, and submission archives.`,
    checklist: [
      "Implement strict Firestore Security Rules to protect student personal data and grades.",
      "Enable PWA offline caching so students can review documentation without active internet connections.",
      "Use atomic database transactions for enrollment count updates and reservation slots."
    ]
  }
];
