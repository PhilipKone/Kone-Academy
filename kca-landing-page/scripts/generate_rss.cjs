// scripts/generate_rss.cjs - RSS 2.0 & Atom Feed Generator for Kone Academy
const fs = require('fs');
const path = require('path');

const domain = "https://www.koneacademy.io";

const blogs = [
  {
    title: "Computational Thinking: The Art of Structured Logic",
    slug: "computational-thinking-structured-logic",
    category: "Code",
    excerpt: "Mastering loop patterns, conditional branches, and modular algorithms before writing syntax. Learn how to think like a compiler.",
    imageUrl: "/assets/blog/ka_blog_logic.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  },
  {
    title: "Physical AI: Connecting Code to Microcontrollers",
    slug: "physical-ai-microcontrollers-robotics",
    category: "Lab",
    excerpt: "Moving from the browser sandbox to real-world electrical grids. A deep dive into wiring protocols, sensors, and actuators.",
    imageUrl: "/assets/blog/ka_blog_robotics.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  },
  {
    title: "Digital AI: Decoupling Large Language Models and Compute",
    slug: "digital-ai-llms-compute",
    category: "Lab",
    excerpt: "How neural networks digest data, mathematical weights, and massive compute to generate predictions. Demystifying the LLM pipeline.",
    imageUrl: "/assets/blog/ka_blog_digital.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  },
{
  "title": "Deconstructing the Event Loop: Microtasks, Macrotasks, and High-Throughput I/O",
  "slug": "event-loop-microtasks-macrotasks-io",
  "category": "Code",
  "excerpt": "A deep dive into the V8 call stack, libuv thread pool, microtask queues, and macrotask starvation in high-concurrency Node.js systems.",
  "imageUrl": "/assets/blog/architecture_diagram.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-12T00:00:00Z"
},
{
  "title": "Building Resilient Double-Entry Ledgers: ACID Guarantees and Idempotency in Fintech",
  "slug": "resilient-double-entry-ledgers-idempotency",
  "category": "Code",
  "excerpt": "How to architect financial bookkeeping systems that guarantee zero balance drift under high network concurrency, network partitions, and duplicate webhooks.",
  "imageUrl": "/assets/blog/ka_blog_logic.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-15T00:00:00Z"
},
{
  "title": "Demystifying UART, SPI, and I2C: The High-Speed Communication Protocols of Hardware",
  "slug": "uart-spi-i2c-hardware-communication-protocols",
  "category": "Lab",
  "excerpt": "Comparing bus speeds, clock synchronizations, pull-up resistors, and signal integrity across embedded microcontroller communication channels.",
  "imageUrl": "/assets/blog/arduino_sensors.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-18T00:00:00Z"
},
{
  "title": "From Math to Canvas: Introduction to GLSL Shaders and 3D WebGL Coordinates",
  "slug": "glsl-shaders-webgl-coordinates-graphics",
  "category": "Code",
  "excerpt": "Bridging linear algebra, vertex coordinates, and fragment rasterization. Write your first GPU-accelerated canvas shaders in Three.js.",
  "imageUrl": "/assets/blog/ai_futures.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-22T00:00:00Z"
},
{
  "title": "Vector Embeddings and Semantic Search: Building RAG Pipelines from Scratch",
  "slug": "vector-embeddings-semantic-search-rag-pipelines",
  "category": "Lab",
  "excerpt": "How high-dimensional cosine similarity, HNSW indexing, and chunking strategies transform raw document databases into intelligent AI search engines.",
  "imageUrl": "/assets/blog/ka_blog_digital.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-25T00:00:00Z"
},
{
  "title": "Automated Soil Telemetry: Designing Low-Power IoT Mesh Networks in Agritech",
  "slug": "automated-soil-telemetry-iot-mesh-networks",
  "category": "Ecosystem",
  "excerpt": "Deploying battery-efficient sensor arrays across remote agricultural fields. ESP-NOW, deep sleep modes, and solar power management.",
  "imageUrl": "/assets/blog/arduino_anatomy.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-08-28T00:00:00Z"
},
{
  "title": "Geospatial Indexing at Scale: H3 Hexagons and Real-Time WebSocket Dispatch",
  "slug": "geospatial-indexing-h3-hexagons-websocket-dispatch",
  "category": "Code",
  "excerpt": "Partitioning planetary maps into discrete hexagonal hierarchies. How high-concurrency transit apps match millions of vehicles in milliseconds.",
  "imageUrl": "/assets/blog/data_strategy.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-09-01T00:00:00Z"
},
{
  "title": "Containerization to Orchestration: What Every Developer Must Know About Docker & Kubernetes",
  "slug": "docker-kubernetes-containerization-orchestration",
  "category": "Ecosystem",
  "excerpt": "From Linux kernel cgroups and namespaces to multi-pod deployment manifests, ingress controllers, and zero-downtime rolling updates.",
  "imageUrl": "/assets/blog/structural_integrity.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-09-04T00:00:00Z"
},
{
  "title": "Defending Against the OWASP Top 10: Enterprise Security and Threat Modeling in 2026",
  "slug": "owasp-top-10-enterprise-security-threat-modeling",
  "category": "Code",
  "excerpt": "Securing modern API endpoints against BOLA, SSRF, injection attacks, and token tampering with cryptographically secure session boundaries.",
  "imageUrl": "/assets/blog/hero_agentic.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-09-08T00:00:00Z"
},
{
  "title": "Bridging the Logic Gap: Why Early STEM and Physical Prototyping Shape Master Engineers",
  "slug": "bridging-logic-gap-early-stem-prototyping",
  "category": "Ecosystem",
  "excerpt": "Transitioning younger minds from visual block programming to real typed code and interactive robotics. Cultivating genuine computational intuition.",
  "imageUrl": "/assets/blog/ka_blog_robotics.webp",
  "author": "Philip Hotor",
  "publishedAt": "2026-09-11T00:00:00Z"
},
  {
    title: "Cache Locality and Memory Layout: Squeezing Peak Flops in C and Rust",
    slug: "cache-locality-memory-layout-c-rust",
    description: "Understand CPU caches (L1/L2/L3), memory bus alignment, false sharing, and cache-friendly data structures to squeeze maximum throughput from modern silicon.",
    date: "2026-08-25",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Zero-Knowledge Proofs in Payment Channels: Verifiable Settlement with zk-SNARKs",
    slug: "zero-knowledge-proofs-payment-channels-zksnarks",
    description: "How arithmetic circuits, quadratic arithmetic programs (QAP), and polynomial commitments allow verifiable financial settlements without disclosing transaction values or account identities.",
    date: "2026-08-28",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Fine-Tuning SLMs on Consumer GPUs: A Deep Dive into LoRA and QLoRA",
    slug: "fine-tuning-slms-lora-qlora-consumer-gpus",
    description: "Demystifying parameter-efficient fine-tuning (PEFT): rank decomposition matrices, 4-bit NormalFloat quantization, and training task-specific models on single GPUs.",
    date: "2026-09-02",
    author: "Philip Hotor",
    category: "Lab"
  },
  {
    title: "Mastering Embedded Concurrency: FreeRTOS Task Scheduling and Semaphore Design",
    slug: "rtos-freertos-task-scheduling-inter-task-synchronization",
    description: "Transitioning beyond super-loops: preemptive priority-based scheduling, mutexes, counting semaphores, and avoiding priority inversion in mission-critical embedded systems.",
    date: "2026-09-06",
    author: "Philip Hotor",
    category: "Lab"
  },
  {
    title: "Ray Marching and Signed Distance Functions: Procedural 3D Worlds in Shaders",
    slug: "ray-marching-signed-distance-functions-procedural-3d",
    description: "Step into sphere tracing algorithms, CSG operations (union, intersection, smooth subtraction), and fragment shader physics to render complex mathematics in real time.",
    date: "2026-09-10",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Edge Computer Vision in Agritech: Real-Time Plant Pathology with Lightweight YOLO",
    slug: "edge-computer-vision-yolo-crop-disease-diagnostics",
    description: "Optimizing convolutional neural network backbones for ONNX and Coral TPU runtimes, performing bounding-box inferences on leaf pathogens with zero cloud dependency.",
    date: "2026-09-15",
    author: "Philip Hotor",
    category: "Ecosystem"
  },
  {
    title: "Autonomous Motion Planning: Comparing A* Grid Search with Continuous RRT",
    slug: "autonomous-path-planning-astar-vs-rrt-robotics",
    description: "Comparing grid-based heuristic graph search with sampling-based motion planning in continuous high-dimensional configuration spaces for mobile logistics robots.",
    date: "2026-09-20",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Demystifying Distributed Consensus: How Raft and Paxos Prevent Split-Brain",
    slug: "distributed-consensus-paxos-raft-replicated-state-machines",
    description: "Understanding leader elections, log compaction, split-brain mitigation, and quorum safety when building fault-tolerant cluster backbones.",
    date: "2026-09-25",
    author: "Philip Hotor",
    category: "Ecosystem"
  },
  {
    title: "Applied Modern Cryptography: Elliptic Curves, Ed25519, and Authenticated Encryption",
    slug: "cryptographic-primitives-elliptic-curves-ed25519",
    description: "From Galois field arithmetic to Twisted Edwards curves: implementing tamper-proof digital signatures and forward-secret Diffie-Hellman key exchange.",
    date: "2026-09-28",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Quantifying Technical Debt: Architectural Audits and Coupling Metrics for Tech Leads",
    slug: "architectural-audits-measuring-technical-debt-enterprise",
    description: "A rigorous mathematical and operational framework for tracking dependency churn, cyclomatic complexity, coupling metrics, and calculating ROI on refactoring.",
    date: "2026-10-02",
    author: "Philip Hotor",
    category: "Ecosystem"
  },
  {
    title: "Cache Locality and Memory Layout: Squeezing Peak Flops in C and Rust",
    slug: "cache-locality-memory-layout-c-rust",
    description: "Understand CPU caches (L1/L2/L3), memory bus alignment, false sharing, and cache-friendly data structures to squeeze maximum throughput from modern silicon.",
    date: "2026-08-25",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Zero-Knowledge Proofs in Payment Channels: Verifiable Settlement with zk-SNARKs",
    slug: "zero-knowledge-proofs-payment-channels-zksnarks",
    description: "How arithmetic circuits, quadratic arithmetic programs (QAP), and polynomial commitments allow verifiable financial settlements without disclosing transaction values or account identities.",
    date: "2026-08-28",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Fine-Tuning SLMs on Consumer GPUs: A Deep Dive into LoRA and QLoRA",
    slug: "fine-tuning-slms-lora-qlora-consumer-gpus",
    description: "Demystifying parameter-efficient fine-tuning (PEFT): rank decomposition matrices, 4-bit NormalFloat quantization, and training task-specific models on single GPUs.",
    date: "2026-09-02",
    author: "Philip Hotor",
    category: "Lab"
  },
  {
    title: "Mastering Embedded Concurrency: FreeRTOS Task Scheduling and Semaphore Design",
    slug: "rtos-freertos-task-scheduling-inter-task-synchronization",
    description: "Transitioning beyond super-loops: preemptive priority-based scheduling, mutexes, counting semaphores, and avoiding priority inversion in mission-critical embedded systems.",
    date: "2026-09-06",
    author: "Philip Hotor",
    category: "Lab"
  },
  {
    title: "Ray Marching and Signed Distance Functions: Procedural 3D Worlds in Shaders",
    slug: "ray-marching-signed-distance-functions-procedural-3d",
    description: "Step into sphere tracing algorithms, CSG operations (union, intersection, smooth subtraction), and fragment shader physics to render complex mathematics in real time.",
    date: "2026-09-10",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Edge Computer Vision in Agritech: Real-Time Plant Pathology with Lightweight YOLO",
    slug: "edge-computer-vision-yolo-crop-disease-diagnostics",
    description: "Optimizing convolutional neural network backbones for ONNX and Coral TPU runtimes, performing bounding-box inferences on leaf pathogens with zero cloud dependency.",
    date: "2026-09-15",
    author: "Philip Hotor",
    category: "Ecosystem"
  },
  {
    title: "Autonomous Motion Planning: Comparing A* Grid Search with Continuous RRT",
    slug: "autonomous-path-planning-astar-vs-rrt-robotics",
    description: "Comparing grid-based heuristic graph search with sampling-based motion planning in continuous high-dimensional configuration spaces for mobile logistics robots.",
    date: "2026-09-20",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Demystifying Distributed Consensus: How Raft and Paxos Prevent Split-Brain",
    slug: "distributed-consensus-paxos-raft-replicated-state-machines",
    description: "Understanding leader elections, log compaction, split-brain mitigation, and quorum safety when building fault-tolerant cluster backbones.",
    date: "2026-09-25",
    author: "Philip Hotor",
    category: "Ecosystem"
  },
  {
    title: "Applied Modern Cryptography: Elliptic Curves, Ed25519, and Authenticated Encryption",
    slug: "cryptographic-primitives-elliptic-curves-ed25519",
    description: "From Galois field arithmetic to Twisted Edwards curves: implementing tamper-proof digital signatures and forward-secret Diffie-Hellman key exchange.",
    date: "2026-09-28",
    author: "Philip Hotor",
    category: "Code"
  },
  {
    title: "Quantifying Technical Debt: Architectural Audits and Coupling Metrics for Tech Leads",
    slug: "architectural-audits-measuring-technical-debt-enterprise",
    description: "A rigorous mathematical and operational framework for tracking dependency churn, cyclomatic complexity, coupling metrics, and calculating ROI on refactoring.",
    date: "2026-10-02",
    author: "Philip Hotor",
    category: "Ecosystem"
  }
];


function buildRssXml() {
  const itemsXml = blogs.map(blog => {
    const postUrl = `${domain}/blog/${blog.slug}`;
    const imageUrl = `${domain}${blog.imageUrl}`;
    const pubDate = new Date(blog.publishedAt).toUTCString();

    return `    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${blog.author}]]></dc:creator>
      <category><![CDATA[${blog.category}]]></category>
      <description><![CDATA[${blog.excerpt}]]></description>
      <media:content url="${imageUrl}" medium="image" />
      <enclosure url="${imageUrl}" type="image/webp" length="102400" />
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:dc="http://purl.org/dc/elements/1.1/" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Kone Academy | Insights &amp; Research</title>
    <link>${domain}/blog</link>
    <atom:link href="${domain}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Pioneering research notes, system engineering breakthroughs, and curriculum announcements from the Kone Code, Lab, and School team.</description>
    <language>en-us</language>
    <managingEditor>philipkone45@gmail.com (Philip Hotor)</managingEditor>
    <webMaster>philipkone45@gmail.com (Philip Hotor)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${domain}/assets/blog/author_philip.webp</url>
      <title>Kone Academy</title>
      <link>${domain}/blog</link>
    </image>
${itemsXml}
  </channel>
</rss>`;
}

function buildAtomXml() {
  const entriesXml = blogs.map(blog => {
    const postUrl = `${domain}/blog/${blog.slug}`;
    const imageUrl = `${domain}${blog.imageUrl}`;

    return `  <entry>
    <title><![CDATA[${blog.title}]]></title>
    <link href="${postUrl}" />
    <id>${postUrl}</id>
    <updated>${blog.publishedAt}</updated>
    <summary><![CDATA[${blog.excerpt}]]></summary>
    <author>
      <name>${blog.author}</name>
      <uri>${domain}/author/philip-hotor</uri>
    </author>
    <category term="${blog.category}" />
    <link rel="enclosure" type="image/webp" href="${imageUrl}" />
  </entry>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Kone Academy Research &amp; Insights</title>
  <subtitle>Pioneering research notes, system engineering breakthroughs, and curriculum announcements.</subtitle>
  <link href="${domain}/atom.xml" rel="self" />
  <link href="${domain}/blog" />
  <updated>${new Date().toISOString()}</updated>
  <id>${domain}/blog</id>
  <author>
    <name>Philip Hotor</name>
    <email>philipkone45@gmail.com</email>
    <uri>${domain}/author/philip-hotor</uri>
  </author>
${entriesXml}
</feed>`;
}

function generateFeeds() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const rssXml = buildRssXml();
  const atomXml = buildAtomXml();

  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssXml);
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml);
  fs.writeFileSync(path.join(publicDir, 'atom.xml'), atomXml);

  console.log('✅ Generated public/feed.xml');
  console.log('✅ Generated public/rss.xml');
  console.log('✅ Generated public/atom.xml');
}

generateFeeds();
