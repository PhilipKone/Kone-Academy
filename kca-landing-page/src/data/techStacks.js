export const techStacks = [
  {
    slug: "fintech-app-tech-stack",
    title: "The Ultimate Software Architecture & Tech Stack for Fintech & Digital Banking Apps",
    target: "Fintech, Payment Gateways & Banking Platforms",
    difficulty: "Enterprise & High Security",
    summary: "Fintech applications require strict security (PCI-DSS compliance), transactional consistency (ACID database properties), and sub-millisecond ledgers for double-entry bookkeeping.",
    recommendation: "Frontend: Next.js (Web) + React Native (Mobile). Backend: Go (Golang) or Node.js (TypeScript). Database: PostgreSQL (with strict auditing) + Redis (caching). Infrastructure: AWS with PCI-DSS network isolation.",
    architecture: `1. Client Tier: React Native mobile application connecting securely via TLS 1.3 to a secure API Gateway.
2. Gateway Tier: Reverse proxy handling authentication, rate limiting, and request validation.
3. Microservices (Go/Rust): High-concurrency services handling double-entry ledgers, transactions, and notification triggers.
4. Database Tier: PostgreSQL with strict transactional locking (SELECT FOR UPDATE) to prevent race conditions during balance updates.`,
    checklist: [
      "Implement double-entry bookkeeping ledgers (never use simple UPDATE queries on balance columns).",
      "Run continuous threat modeling and OWASP Top 10 API audits.",
      "Achieve PCI-DSS Level 1 compliance using tokenization gateways (e.g. Stripe/Kone Pay)."
    ]
  },
  {
    slug: "saas-mvp-tech-stack",
    title: "The Lean Tech Stack for Launching a SaaS MVP Fast in 2026",
    target: "SaaS Startups, B2B Apps & MVPs",
    difficulty: "Fast Time-to-Market",
    summary: "For a SaaS MVP, your primary bottleneck is speed of iteration. You need a unified language, instant deployments, and managed services that handle user auth, payments, and mail.",
    recommendation: "Frontend & Backend: Next.js (TypeScript) deployed on Vercel. Database: Supabase (PostgreSQL-as-a-service) or Prisma + PostgreSQL. Authentication: Clerk or Supabase Auth. Payments: Stripe.",
    architecture: `1. Frontend & Serverless: Next.js App Router handling both visual layout and API route execution in Node.js serverless functions.
2. Auth Provider: Managed user authentication session keys verified client-side.
3. Database Tier: Managed PostgreSQL with Row-Level Security (RLS) enabled to ensure clients can only read/write their own records.
4. Payment Webhooks: Webhook endpoint validating stripe events to provision SaaS subscription tiers.`,
    checklist: [
      "Use Row-Level Security (RLS) to prevent cross-tenant data leaks.",
      "Leverage serverless middleware to cache pages and speed up mobile rendering.",
      "Set up Stripe Webhooks with signature validation to automate invoicing."
    ]
  },
  {
    slug: "iot-telemetry-tech-stack",
    title: "High-Scale Telemetry & IoT Data Ingestion Architecture",
    target: "Robotics, Agritech (Kone Farms) & IoT",
    difficulty: "High-Throughput Ingestion",
    summary: "IoT platforms (like Kone Farms telemetry systems) ingest millions of sensor updates per second. The architecture must support stateless ingestion nodes, time-series data storage, and low-latency dashboards.",
    recommendation: "Edge: ESP32 programmed in C++. Ingestion Gateways: Node.js (MQTT/WebSockets). Message Queue: Apache Kafka or RabbitMQ. Database: TimescaleDB (Time-series) or InfluxDB. Caching: Redis.",
    architecture: `1. Hardware Tier: ESP32 microcontrollers routing encrypted payload packets via MQTT protocol.
2. Broker Gateway: MQTT broker (e.g. EMQX) managing hardware connection pools.
3. Queue Tier: Kafka message stream buffer protecting the database from sudden sensory traffic spikes.
4. Storage Tier: TimescaleDB compiling time-series aggregations (average temp, soil moisture) on continuous intervals.`,
    checklist: [
      "Implement MQTT connection keep-alives and backoff intervals on edge microcontrollers.",
      "Store sensory telemetry in time-series hyper-tables for fast date-range queries.",
      "Compress historical data using automated database downsampling rules."
    ]
  }
];
