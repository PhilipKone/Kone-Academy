import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptop, FaServer, FaDatabase, FaExchangeAlt, FaMicrochip, 
  FaCloud, FaChevronRight, FaTerminal, FaCube, FaShieldAlt, 
  FaFileCode, FaPlayCircle, FaInfoCircle
} from 'react-icons/fa';
import './ArchitectureVisualizer.css';

// Node data map for all 12 Kone Stacks
const visualizerData = {
  "fintech-app-tech-stack": {
    themeClass: "fintech-visual",
    nodes: [
      { id: "client", label: "Client Apps", subtitle: "React Native & Web", icon: FaLaptop, desc: "Framer Motion animated interfaces connecting via TLS 1.3 encryption to lock out middleman intercepts." },
      { id: "gateway", label: "API Gateway", subtitle: "Go / Reverse Proxy", icon: FaExchangeAlt, desc: "Verifies RSA signatures, decrypts payloads, and triggers tokenized session validations." },
      { id: "ledger", label: "Ledger Engine", subtitle: "Go Microservices", icon: FaServer, desc: "High-concurrency microservices that enforce strict double-entry ledger bookings." },
      { id: "database", label: "ACID Database", subtitle: "PostgreSQL", icon: FaDatabase, desc: "Executes 'SELECT FOR UPDATE' locking to guarantee balance isolation during concurrent spend requests." }
    ],
    flows: [
      { from: "client", to: "gateway", label: "TLS 1.3 Requests" },
      { from: "gateway", to: "ledger", label: "Verified Claims" },
      { from: "ledger", to: "database", label: "Row Transaction Locks" }
    ]
  },
  "iot-telemetry-tech-stack": {
    themeClass: "iot-visual",
    nodes: [
      { id: "sensors", label: "Edge Hardware", subtitle: "ESP32 + C++ Firmware", icon: FaMicrochip, desc: "Collects high-frequency soil moisture and solar radiation sensor telemetry." },
      { id: "broker", label: "Ingestion Broker", subtitle: "EMQX MQTT Gateway", icon: FaExchangeAlt, desc: "Stateless broker managing persistent TCP connection pools from thousands of ESP32 nodes." },
      { id: "queue", label: "Stream Buffer", subtitle: "Apache Kafka Queue", icon: FaServer, desc: "Buffers data spikes and distributes telemetry feeds to down-stream database writers." },
      { id: "storage", label: "Time-Series Store", subtitle: "TimescaleDB", icon: FaDatabase, desc: "Aggregates sensor metrics on automated intervals and executes database compression rules." }
    ],
    flows: [
      { from: "sensors", to: "broker", label: "MQTT TLS Stream" },
      { from: "broker", to: "queue", label: "In-flight Buffer" },
      { from: "queue", to: "storage", label: "Hyper-table Insert" }
    ]
  },
  "geospatial-logistics-tech-stack": {
    themeClass: "geospatial-visual",
    nodes: [
      { id: "gps", label: "Mobile Client", subtitle: "React Native + Mapbox", icon: FaLaptop, desc: "Streams rider/driver coordinates every 2 seconds using Mapbox interpolation to prevent visual jumping." },
      { id: "ws", label: "Socket Server", subtitle: "Node.js WebSockets", icon: FaExchangeAlt, desc: "Maintains active stateful TCP connection pools for instant dispatching alerts." },
      { id: "spatial", label: "Geo Indexing", subtitle: "Redis GEO", icon: FaCube, desc: "In-memory spatial index query calculating driver proximity in sub-10ms intervals." },
      { id: "db", label: "Spatial Database", subtitle: "PostGIS Extension", icon: FaDatabase, desc: "Compiles historical spatial routing boundaries and ride coordinate history logs." }
    ],
    flows: [
      { from: "gps", to: "ws", label: "WebSockets GPS" },
      { from: "ws", to: "spatial", label: "Radius Query" },
      { from: "spatial", to: "db", label: "Trip Log Commit" }
    ]
  },
  "3d-webgl-graphics-tech-stack": {
    themeClass: "graphics-visual",
    nodes: [
      { id: "assets", label: "3D Asset Draco", subtitle: "Blender Compression", icon: FaCube, desc: "Pushes compressed GLTF assets to the client browser to keep page load times under 1.5 seconds." },
      { id: "canvas", label: "Rendering Engine", subtitle: "React Three Fiber", icon: FaLaptop, desc: "Coordinates camera angles, render scenes, shadow mapping, and lighting canvas parameters." },
      { id: "shader", label: "GPU Shader Program", subtitle: "GLSL Material", icon: FaFileCode, desc: "Runs lightning-fast custom vertex shaders on the client GPU for premium particle effects." },
      { id: "engine", label: "WebGL Canvas", subtitle: "Three.js Scene", icon: FaPlayCircle, desc: "Enforces frustum culling and texture garbage collection to maintain stable 60 FPS renders." }
    ],
    flows: [
      { from: "assets", to: "canvas", label: "GLTF Parsing" },
      { from: "canvas", to: "shader", label: "GPU Upload" },
      { from: "shader", to: "engine", label: "Stable 60FPS Loop" }
    ]
  },
  "neural-rag-ai-tech-stack": {
    themeClass: "ai-visual",
    nodes: [
      { id: "parser", label: "Document Cleaners", subtitle: "Python Scraping", icon: FaTerminal, desc: "Extracts metadata, cleans HTML wrappers, and parses documents into 512-token chunks." },
      { id: "vector", label: "Vector DB", subtitle: "Qdrant Indexing", icon: FaDatabase, desc: "Stores 1536-dimensional vector embeddings generated by high-accuracy ML models." },
      { id: "retriever", label: "Similarity Search", subtitle: "FastAPI Engine", icon: FaServer, desc: "Performs cosine similarity lookups matching user queries with indexed document contexts." },
      { id: "streamer", label: "Streaming Server", subtitle: "FastAPI Server-Sent", icon: FaExchangeAlt, desc: "Streams responses line-by-line via Server-Sent Events (SSE) directly to the user viewport." }
    ],
    flows: [
      { from: "parser", to: "vector", label: "Embeddings Upload" },
      { from: "vector", to: "retriever", label: "Cosine Match" },
      { from: "retriever", to: "streamer", label: "SSE Context Streams" }
    ]
  },
  "academic-research-analytics-tech-stack": {
    themeClass: "analytics-visual",
    nodes: [
      { id: "etl", label: "ETL Cleaning", subtitle: "Python Pandas", icon: FaTerminal, desc: "Aggregates raw surveys, sanitizes user identities, and structures mathematical matrices." },
      { id: "stats", label: "Stats Engine", subtitle: "R & SciPy Analysis", icon: FaServer, desc: "Executes ANOVA, multilinear regression models, and distribution validations." },
      { id: "monte", label: "Risk Simulator", subtitle: "NumPy Probability", icon: FaCube, desc: "Runs 10,000 Monte Carlo simulations to compile portfolio risk projections." },
      { id: "compiler", label: "Publication", subtitle: "LaTeX Compilation", icon: FaFileCode, desc: "Outputs production-grade PDF and vector SVG charts formatting to IEEE guidelines." }
    ],
    flows: [
      { from: "etl", to: "stats", label: "Normalized Array" },
      { from: "stats", to: "monte", label: "Distribution Model" },
      { from: "monte", to: "compiler", label: "SVG Graph Output" }
    ]
  },
  "embedded-systems-pcb-tech-stack": {
    themeClass: "hardware-visual",
    nodes: [
      { id: "schematic", label: "PCB Design", subtitle: "KiCad Editor", icon: FaCube, desc: "Enforces 4-layer trace separation, ground planes, and clean decoupling caps routing." },
      { id: "firmware", label: "Micro Code", subtitle: "Embedded C++", icon: FaTerminal, desc: "Coordinates CPU power cycles, registers configuration, and peripheral telemetry loops." },
      { id: "prototype", label: "Robotic Dev", subtitle: "Arduino Prototypes", icon: FaMicrochip, desc: "Combines sensors, controllers, and wireless transceivers on physical test boards." },
      { id: "gateway", label: "Remote Flashing", subtitle: "SSH Lab Gateway", icon: FaExchangeAlt, desc: "Allows flashing compiled binary files securely to physical lab boards remotely." }
    ],
    flows: [
      { from: "schematic", to: "firmware", label: "Pin Mappings" },
      { from: "firmware", to: "prototype", label: "C++ Compilation" },
      { from: "prototype", to: "gateway", label: "Secure Remote Flash" }
    ]
  },
  "saas-mvp-tech-stack": {
    themeClass: "saas-visual",
    nodes: [
      { id: "spa", label: "Client Interface", subtitle: "Next.js Pages", icon: FaLaptop, desc: "Premium, responsive single page application layouts managing client route rendering." },
      { id: "auth", label: "Auth Server", subtitle: "Node JWT & Express", icon: FaServer, desc: "Validates JSON Web Tokens, secures API routes, and maps backend endpoint controllers." },
      { id: "orm", label: "DB Connector", subtitle: "Prisma Schema", icon: FaFileCode, desc: "ORM wrapper connecting backend requests to SQL databases safely with migrations tracking." },
      { id: "db", label: "SaaS Storage", subtitle: "PostgreSQL Database", icon: FaDatabase, desc: "Maintains records for user profiles, SaaS subscriptions, and tenant data isolation." }
    ],
    flows: [
      { from: "spa", to: "auth", label: "JWT Requests" },
      { from: "auth", to: "orm", label: "Safe SQL Queries" },
      { from: "orm", to: "db", label: "ACID Ledger Updates" }
    ]
  },
  "ecommerce-storefront-tech-stack": {
    themeClass: "ecommerce-visual",
    nodes: [
      { id: "ui", label: "Storefront UI", subtitle: "React + Tailwind", icon: FaLaptop, desc: "Highly-animated, high-conversion visual design layouts optimizing shopping workflows." },
      { id: "cart", label: "Cart Redux", subtitle: "Redux State", icon: FaCube, desc: "Maintains client session cart inventory sync and calculations locally." },
      { id: "stripe", label: "Stripe API", subtitle: "Stripe Webhooks", icon: FaExchangeAlt, desc: "Enforces secure PCI-compliant credit card tokens, refunds, and instant hooks verification." },
      { id: "hosting", label: "Static Deploy", subtitle: "Netlify CDN", icon: FaCloud, desc: "Global edge CDN delivering compiled client builds at sub-100ms response times." }
    ],
    flows: [
      { from: "ui", to: "cart", label: "State Actions" },
      { from: "cart", to: "stripe", label: "Encrypted Token" },
      { from: "stripe", to: "hosting", label: "Order Hook Success" }
    ]
  },
  "gamified-stem-robotics-tech-stack": {
    themeClass: "kids-visual",
    nodes: [
      { id: "workspace", label: "Block Editor", subtitle: "Blockly Workspace", icon: FaLaptop, desc: "Visual drag-and-drop block interface converting loops and variables into raw code scripts." },
      { id: "compiler", label: "Python Basics", subtitle: "Abstract Tree", icon: FaFileCode, desc: "Translates block sequences into clean, valid Python scripts." },
      { id: "edge", label: "STEM Edge Board", subtitle: "Micro:bit Controller", icon: FaMicrochip, desc: "Programs edge controller chips, mapping input sensors and button clicks." },
      { id: "output", label: "Motor Driver", subtitle: "LED / Servo Drivers", icon: FaCube, desc: "Applies electricity pulses to control physical robot motors and color displays." }
    ],
    flows: [
      { from: "workspace", to: "compiler", label: "Block Generation" },
      { from: "compiler", to: "edge", label: "Binary Flash" },
      { from: "edge", to: "output", label: "Output Signal Loop" }
    ]
  },
  "cloud-devops-k8s-tech-stack": {
    themeClass: "devops-visual",
    nodes: [
      { id: "iac", label: "Infra-As-Code", subtitle: "Terraform Scripts", icon: FaFileCode, desc: "Provisions networks, firewalls, and cloud nodes declaratively to prevent configuration drift." },
      { id: "docker", label: "App Packing", subtitle: "Docker Container", icon: FaTerminal, desc: "Wraps code runtimes, variables, and dependencies into isolated container images." },
      { id: "k8s", label: "Orchestration", subtitle: "Kubernetes Cluster", icon: FaServer, desc: "Coordinates microservice scaling, load balancer configurations, and auto-healing hooks." },
      { id: "cloud", label: "Cloud Provider", subtitle: "AWS VPC Cluster", icon: FaCloud, desc: "High-availability servers with multi-zone clustering hosting production apps." }
    ],
    flows: [
      { from: "iac", to: "docker", label: "Environment Build" },
      { from: "docker", to: "k8s", label: "Image Pull Deploy" },
      { from: "k8s", to: "cloud", label: "Multi-Zone Scale" }
    ]
  },
  "enterprise-architecture-security-tech-stack": {
    themeClass: "security-visual",
    nodes: [
      { id: "owasp", label: "Attack Scanner", subtitle: "OWASP Threat Scan", icon: FaShieldAlt, desc: "Scans microservice payloads dynamically, identifying injection points and vulnerabilities." },
      { id: "subnets", label: "VPC Isolation", subtitle: "AWS Private VPC", icon: FaCloud, desc: "Enforces isolated networks routing API database instances outside public IP ranges." },
      { id: "ledger", label: "Audit Registry", subtitle: "Immutable Ledger", icon: FaDatabase, desc: "Logs critical administrative actions, verifying database integrity continuously." },
      { id: "soc2", label: "Compliance Core", subtitle: "SOC2 Audit Audit", icon: FaShieldAlt, desc: "Enforces policies for encryption, MFA verification, and log auditing protocols." }
    ],
    flows: [
      { from: "owasp", to: "subnets", label: "Vulnerability Scan" },
      { from: "subnets", to: "ledger", label: "Isolated Session" },
      { from: "ledger", to: "soc2", label: "Compliant Action Log" }
    ]
  }
};

const ArchitectureVisualizer = ({ slug }) => {
  const data = visualizerData[slug];
  const [selectedNode, setSelectedNode] = useState(null);

  if (!data) return null;

  return (
    <div className={`arch-visualizer-container ${data.themeClass}`}>
      <h4 className="h6 text-gradient-green fw-bold mb-3 d-flex align-items-center gap-2">
        <FaInfoCircle /> Interactive Architecture Blueprint (Click Nodes to Explore)
      </h4>

      {/* Interactive Visual Graph Canvas */}
      <div className="visualizer-grid-canvas">
        <div className="flow-lines-wrapper">
          <svg className="flow-connections-svg">
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#bd00ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Renders animated connection lines between nodes */}
            {data.nodes.map((node, i) => {
              if (i === data.nodes.length - 1) return null;
              const nextNode = data.nodes[i + 1];
              return (
                <g key={i}>
                  <path
                    className="connection-path-base"
                    d="M 10 20 H 100" 
                  />
                  <path
                    className="connection-path-glow"
                    d="M 10 20 H 100" 
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Cards Layout */}
        <div className="visualizer-nodes-row">
          {data.nodes.map((node, index) => {
            const NodeIcon = node.icon;
            const isSelected = selectedNode?.id === node.id;
            return (
              <div 
                key={node.id} 
                className="node-card-column"
                onClick={() => setSelectedNode(node)}
              >
                <motion.div
                  className={`visualizer-node-item ${isSelected ? 'active-node' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="node-icon-circle">
                    <NodeIcon size={18} />
                  </div>
                  <div className="node-info-text">
                    <span className="node-badge-label">{node.label}</span>
                    <span className="node-subtitle-label">{node.subtitle}</span>
                  </div>
                  {index < data.nodes.length - 1 && (
                    <div className="node-chevron-link">
                      <FaChevronRight />
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Description Panel */}
      <AnimatePresence mode="wait">
        {selectedNode ? (
          <motion.div 
            key={selectedNode.id}
            className="node-details-glass-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="details-badge-glow">
                <selectedNode.icon size={14} />
              </div>
              <strong className="text-white">{selectedNode.label} ({selectedNode.subtitle})</strong>
            </div>
            <p className="text-secondary small mb-0">{selectedNode.desc}</p>
          </motion.div>
        ) : (
          <div className="node-details-placeholder-panel">
            <span className="small text-secondary italic d-flex align-items-center gap-2">
              <FaInfoCircle /> Click any architectural node above to view technical details, stack decisions, and compliance policies.
            </span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureVisualizer;
