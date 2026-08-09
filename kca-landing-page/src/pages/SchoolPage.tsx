import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft, FaBookOpen, FaPenNib, FaVolumeUp, FaCalculator, 
  FaLightbulb, FaWhatsapp, FaBrain, FaCogs, FaMicrochip, FaRobot, 
  FaNetworkWired, FaServer, FaBolt, FaTerminal, FaCode
} from 'react-icons/fa';
import './SchoolPage.css';

interface CoreApp {
  id: string;
  title: string;
  goal: string;
  icon: React.ElementType;
  description: string;
}

interface PathwayNode {
  id: string;
  title: string;
  level: string;
  icon: React.ElementType;
  definition: string;
  example: string;
}

const coreApps: CoreApp[] = [
  {
    id: "reading",
    title: "Reading",
    goal: "Build a Reading App",
    icon: FaBookOpen,
    description: "Build an interactive reader application supporting dyslexic line overlays, TTS phonetics tracking, and visual comprehension quizzes."
  },
  {
    id: "writing",
    title: "Writing",
    goal: "Build a Writing App",
    icon: FaPenNib,
    description: "Develop a structured markdown content canvas, live character counts, grammatical checks, and outline maps to boost written composition."
  },
  {
    id: "speaking",
    title: "Speaking",
    goal: "Build a Speaking App",
    icon: FaVolumeUp,
    description: "Create a voice recorder and pronunciation auditor utilizing speech-to-text API comparators and phonetic score meters."
  },
  {
    id: "numeracy",
    title: "Numeracy Skills",
    goal: "Build a Math App",
    icon: FaCalculator,
    description: "Program an interactive visual arithmetic solver demonstrating fraction slices, geometric grid overlays, and step-by-step logic."
  },
  {
    id: "logic",
    title: "Computational Thinking",
    goal: "Build a Logic App",
    icon: FaLightbulb,
    description: "Code a visual logic-gate builder demonstrating boolean arrays, conditional routing networks, and loop iterations."
  }
];

const pathwayNodes: PathwayNode[] = [
  {
    id: "chatbots",
    title: "ChatBots",
    level: "Conversational UI",
    icon: FaRobot,
    definition: "User-facing conversational automation interfaces that interact with humans. They sit at the very top of the AI consumer pyramid and utilize GenAI engines.",
    example: "AI customer assistants, customer support interfaces, and personalized study guides."
  },
  {
    id: "genai",
    title: "GenAI",
    level: "Generative Logic",
    icon: FaBrain,
    definition: "Systems capable of generating novel text, imagery, or code. GenAI operates under the hood of chatbots and runs on massive Large Language Models.",
    example: "ChatGPT portal, Gemini assistants, Claude workspaces."
  },
  {
    id: "llms",
    title: "LLMs",
    level: "Model Engine",
    icon: FaNetworkWired,
    definition: "Large Language Models. Neural networks with billions of parameters. They digest massive amounts of data, mathematical weights, and super-powerful computation to predict subsequent tokens.",
    example: "GPT-4.6 Sol, Gemini 3.6 Flash, Claude Opus 5."
  },
  {
    id: "data",
    title: "Data",
    level: "Model Inputs",
    icon: FaServer,
    definition: "The files, websites, texts, and datasets used to train models. Large Language Models require both massive online scraped datasets and offline knowledge files to learn structures.",
    example: "The internet, offline corpus files, vector indexes, document files."
  },
  {
    id: "math-logic",
    title: "Math & Logic",
    level: "Algorithms",
    icon: FaCalculator,
    definition: "The algorithmic framework of computing. It provides structured parameters and logical instructions that tell computers exactly how to digest data and compile operations.",
    example: "Loss calculation equations, weights updates, matrix multiplications."
  },
  {
    id: "algorithm",
    title: "Algorithm",
    level: "Algorithmic Rules",
    icon: FaTerminal,
    definition: "A set of step-by-step instructions designed to tell a computer how to execute a specific task or solve a particular calculation.",
    example: "Sorting algorithms, gradient descent formulas, search loops."
  },
  {
    id: "programs",
    title: "Programs",
    level: "Applications",
    icon: FaCode,
    definition: "Combinations of multiple algorithms structured in meaningful configurations. These are compiled, packaged, and shipped to end-users as functional apps.",
    example: "VS Code editor, text processors, mobile applications, web tools."
  },
  {
    id: "coding",
    title: "Coding",
    level: "Software Art",
    icon: FaCode,
    definition: "The art of planning, writing, and arranging logical algorithms to instruct a computer using human-readable programming languages.",
    example: "Arranging variable bindings, writing conditional tests, structured control loops."
  },
  {
    id: "languages",
    title: "Languages",
    level: "Programming Code",
    icon: FaTerminal,
    definition: "Human-readable syntax written in text editors. These programming languages are converted, compiled, or translated into raw binary machine code by compilers so processors can run them.",
    example: "Python, JavaScript, C, C++, Rust."
  },
  {
    id: "compute",
    title: "Compute",
    level: "Hardware Layer",
    icon: FaMicrochip,
    definition: "The physical silicon hardware that machine language runs on. Performs millions of cycles to execute 0s and 1s representing data calculations.",
    example: "RAM, SSD, CPU (processor), GPU (graphics card), TPU (tensor chip), NPU (neural chip)."
  },
  {
    id: "power",
    title: "Power",
    level: "Electricity & Physics",
    icon: FaBolt,
    definition: "Electrical energy that fuels compute silicon. Operates on physical laws, powering the transitors to switch state and enabling computational intelligence.",
    example: "Direct electrical currents, battery arrays, cooling infrastructure grids."
  },
  {
    id: "mcps",
    title: "MCPs",
    level: "Model Context Protocol",
    icon: FaNetworkWired,
    definition: "Model Context Protocol. The logical link that allows LLMs to feed on secure, localized data sources and execute file transactions via APIs.",
    example: "Database connectors, file system MCP servers, secure local resource readers."
  },
  {
    id: "apis",
    title: "APIs",
    level: "Integration Logic",
    icon: FaCogs,
    definition: "Application Programming Interfaces. Communication protocols that allow apps to exchange raw data securely in structured JSON packets without human intervention.",
    example: "Stripe API, Google Map services, weather telemetry feeds, secure auth handshakes."
  },
  {
    id: "apps",
    title: "Apps",
    level: "Packaged Software",
    icon: FaCode,
    definition: "Logic packages that bind multiple APIs and layout components together. Apps are delivered across web browsers, smartphones, or desktop operating systems.",
    example: "Web applications, iOS apps, Android widgets, desktop tools."
  }
];

interface SchoolPageProps {
  onBack: () => void;
}

const SchoolPage: React.FC<SchoolPageProps> = ({ onBack }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("chatbots");

  const activeNode = pathwayNodes.find(node => node.id === selectedNodeId) || pathwayNodes[0];
  const ActiveNodeIcon = activeNode.icon;

  const handleWhatsappCTA = () => {
    const message = encodeURIComponent("Hello Kone Academy, I am willing to learn, build, and grow! I would like to register early for the Kone School program.");
    window.open(`https://wa.me/233551993820?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      className="school-container"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* Back to Home Button */}
      <button className="school-back-btn" onClick={onBack}>
        <FaChevronLeft size={14} />
        <span>Back to Home</span>
      </button>

      {/* Hero Section */}
      <div className="school-hero animate-fade-in">
        <span className="school-badge">Kone School</span>
        <h1 className="school-title">Unlimited Growth</h1>
        <p className="school-subtitle">
          A project-driven curriculum designed to build absolute mastery in core digital logic, computer science fundamentals, and artificial intelligence pathways.
        </p>
      </div>

      {/* Section 1: Core Foundations Checklist */}
      <h2 className="school-section-title">Core Foundations</h2>
      <div className="core-grid">
        {coreApps.map((app) => {
          const AppIcon = app.icon;
          return (
            <div key={app.id} className="core-card">
              <div className="core-icon-wrapper">
                <AppIcon />
              </div>
              <h3 className="core-card-title">{app.title}</h3>
              <div className="core-card-goal">{app.goal}</div>
              <p className="core-card-desc">{app.description}</p>
            </div>
          );
        })}
      </div>

      {/* Section 2: AI Pathway Tree */}
      <h2 className="school-section-title">AI Pathway</h2>
      
      <div className="visualizer-layout">
        {/* Interactive Tree Map */}
        <div className="tree-panel">
          
          {/* Level 1 */}
          <div className="tree-level">
            <span className="level-title">Interface Layer</span>
            <div className="level-nodes">
              {pathwayNodes.filter(n => ["chatbots"].includes(n.id)).map(node => (
                <button 
                  key={node.id} 
                  className={`pathway-node ${selectedNodeId === node.id ? 'active' : ''}`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  <node.icon size={13} />
                  <span>{node.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level 2 */}
          <div className="tree-level">
            <span className="level-title">Cognitive Engines</span>
            <div className="level-nodes">
              {pathwayNodes.filter(n => ["genai", "llms"].includes(n.id)).map(node => (
                <button 
                  key={node.id} 
                  className={`pathway-node ${selectedNodeId === node.id ? 'active' : ''}`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  <node.icon size={13} />
                  <span>{node.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level 3 */}
          <div className="tree-level">
            <span className="level-title">Data, Logic & Compilers</span>
            <div className="level-nodes">
              {pathwayNodes.filter(n => ["data", "math-logic", "algorithm", "programs", "coding", "languages"].includes(n.id)).map(node => (
                <button 
                  key={node.id} 
                  className={`pathway-node ${selectedNodeId === node.id ? 'active' : ''}`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  <node.icon size={13} />
                  <span>{node.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level 4 */}
          <div className="tree-level">
            <span className="level-title">Hardware & Integration</span>
            <div className="level-nodes">
              {pathwayNodes.filter(n => ["compute", "power", "mcps", "apis", "apps"].includes(n.id)).map(node => (
                <button 
                  key={node.id} 
                  className={`pathway-node ${selectedNodeId === node.id ? 'active' : ''}`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  <node.icon size={13} />
                  <span>{node.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Detail Explanation Panel */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedNodeId}
            className="detail-panel"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="d-flex align-items-center gap-3">
              <div className="glass-icon text-cyan" style={{ width: '48px', height: '48px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ActiveNodeIcon />
              </div>
              <div>
                <span className="detail-badge">{activeNode.level}</span>
                <h4 className="detail-title">{activeNode.title}</h4>
              </div>
            </div>

            <p className="detail-description">{activeNode.definition}</p>

            <div className="example-box">
              <div className="example-title">Examples & Components</div>
              <p className="example-content">{activeNode.example}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section 3: Physical AI & Robotics Teaser */}
      <div className="teaser-container">
        <div className="teaser-content">
          <span className="teaser-badge">Next Stage</span>
          <h2 className="teaser-title">Physical AI & Robotics</h2>
          <p className="teaser-desc">
            Connect Large Language Models directly into physical actuators, microcontroller sensor grids, and mechanical joints. Move from digital reasoning to real-world physical feedback loops.
          </p>
        </div>
        <div className="teaser-grid">
          <div className="teaser-item">
            <FaMicrochip className="teaser-icon" />
            <div className="teaser-item-title">Microcontrollers</div>
          </div>
          <div className="teaser-item">
            <FaRobot className="teaser-icon" />
            <div className="teaser-item-title">Robotics Controls</div>
          </div>
        </div>
      </div>

      {/* CTA Registration Banner */}
      <div className="school-cta-banner">
        <div className="school-cta-glow" />
        <h2 className="cta-title">Unlimited Growth Awaits</h2>
        <p className="cta-subtitle">
          Early registration is now open. Join the next cohort to start building from core logic to advanced AI pathways.
        </p>
        <button className="cta-whatsapp-btn" onClick={handleWhatsappCTA}>
          <FaWhatsapp size={20} />
          <span>Register on WhatsApp</span>
        </button>
        <p className="cta-footer-text">
          DM: +233 55 199 3820 for inquiries and cohort placement.
        </p>
      </div>

    </motion.div>
  );
};

export default SchoolPage;
