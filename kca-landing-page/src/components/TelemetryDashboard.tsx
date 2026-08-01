import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWifi, FaServer, FaCheckCircle, FaBolt, FaMicrochip, 
  FaChartLine, FaShieldAlt, FaSyncAlt, FaBroadcastTower, FaSignal
} from 'react-icons/fa';
import './TelemetryDashboard.css';

const initialTelemetry = {
  pay: {
    title: "Kone Pay: Double-Entry Ledger Telemetry",
    status: "HEALTHY",
    tps: 1420,
    latency: "0.8ms",
    successRate: "99.998%",
    acidLocks: "Active (SELECT FOR UPDATE)",
    metrics: [
      { name: "Transactions / Sec", val: "1,420 TPS", trend: "+12%" },
      { name: "Signature Verification", val: "RSA 4096-bit", trend: "Valid" },
      { name: "Ledger Isolation", val: "Zero Race Conditions", trend: "Pass" }
    ]
  },
  farms: {
    title: "Kone Farms: IoT Sensory Telemetry Array",
    status: "STREAMING",
    tps: 4800,
    latency: "2.4ms",
    activeNodes: "1,280 ESP32 Nodes",
    moistureAvg: "42.5%",
    metrics: [
      { name: "Ingestion Throughput", val: "4,800 Pkts/sec", trend: "+5%" },
      { name: "TimescaleDB Hyper-table", val: "Continuous Aggs", trend: "Live" },
      { name: "Soil Moisture (Volta)", val: "42.5% VWC", trend: "Optimal" }
    ]
  },
  warp: {
    title: "Kone Warp: Geospatial Dispatch Telemetry",
    status: "ACTIVE",
    tps: 840,
    latency: "0.12ms",
    driversCount: "312 Vehicles",
    metrics: [
      { name: "Redis GEO Radius Match", val: "0.12ms Latency", trend: "-2%" },
      { name: "WebSocket Channels", val: "840 Active Streams", trend: "Connected" },
      { name: "Mapbox Interpolation", val: "60 FPS Pin Smooth", trend: "Active" }
    ]
  },
  ai: {
    title: "Kone AI: Neural RAG Vector Search Pipeline",
    status: "OPERATIONAL",
    tps: 120,
    latency: "14ms",
    vectorDim: "1536d Qdrant",
    metrics: [
      { name: "Vector Cosine Search", val: "14ms Match", trend: "+3%" },
      { name: "SSE Token Stream Rate", val: "120 Tokens/sec", trend: "Fast" },
      { name: "RAG Document Index", val: "42,000 Embeddings", trend: "Indexed" }
    ]
  },
  tech: {
    title: "Kone Tech: Enterprise Security Audit Log",
    status: "SECURE",
    tps: 990,
    latency: "0.4ms",
    threatStatus: "0 Vulnerabilities",
    metrics: [
      { name: "OWASP Vulnerability Scan", val: "0 Active Flags", trend: "Passed" },
      { name: "SOC2 Audit Registry", val: "100% Immutable", trend: "Verified" },
      { name: "AWS VPC Private Subnet", val: "Enforced Isolation", trend: "Active" }
    ]
  }
};

const TelemetryDashboard = () => {
  const [activeTab, setActiveTab] = useState('pay');
  const [telemetry, setTelemetry] = useState(initialTelemetry);
  const [pulseTrigger, setPulseTrigger] = useState(0);

  // Simulate real-time live data ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTrigger(prev => prev + 1);
      setTelemetry(prev => {
        const jitterTPS = Math.floor(Math.random() * 30) - 15;
        return {
          ...prev,
          pay: { ...prev.pay, tps: 1420 + jitterTPS },
          farms: { ...prev.farms, tps: 4800 + jitterTPS * 3 },
          warp: { ...prev.warp, tps: 840 + jitterTPS }
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = telemetry[activeTab];

  return (
    <div className="telemetry-dashboard-card my-5">
      <div className="telemetry-header-bar">
        <div className="d-flex align-items-center gap-2">
          <div className="pulse-indicator">
            <span className="pulse-dot"></span>
          </div>
          <div>
            <h3 className="h6 text-white fw-bold mb-0 d-flex align-items-center gap-2">
              <FaBroadcastTower className="text-cyan" /> Kone Technologies Live Operational Telemetry
            </h3>
            <span className="extra-small text-secondary">Real-Time Microservice Infrastructure Metrics</span>
          </div>
        </div>

        {/* Division Selector Pills */}
        <div className="telemetry-tabs-group">
          <button 
            className={`telemetry-tab-btn ${activeTab === 'pay' ? 'active' : ''}`}
            onClick={() => setActiveTab('pay')}
          >
            Kone Pay
          </button>
          <button 
            className={`telemetry-tab-btn ${activeTab === 'farms' ? 'active' : ''}`}
            onClick={() => setActiveTab('farms')}
          >
            Kone Farms
          </button>
          <button 
            className={`telemetry-tab-btn ${activeTab === 'warp' ? 'active' : ''}`}
            onClick={() => setActiveTab('warp')}
          >
            Kone Warp
          </button>
          <button 
            className={`telemetry-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            Kone AI
          </button>
          <button 
            className={`telemetry-tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Kone Tech
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="telemetry-content-body p-4"
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
            <div>
              <span className="telemetry-status-badge">
                <FaSignal className="me-1" /> STATUS: {current.status}
              </span>
              <h4 className="h5 text-white fw-bold mt-2 mb-0">{current.title}</h4>
            </div>
            <div className="text-end">
              <span className="small text-secondary d-block">Query Response Latency</span>
              <strong className="text-cyan h5 mb-0 fw-bold">{current.latency}</strong>
            </div>
          </div>

          {/* Metrics 3-Card Grid */}
          <div className="telemetry-metrics-grid mb-4">
            {current.metrics.map((metric, idx) => (
              <div key={idx} className="telemetry-metric-card">
                <span className="metric-label">{metric.name}</span>
                <div className="d-flex align-items-baseline justify-content-between mt-1">
                  <strong className="metric-val text-white">{metric.val}</strong>
                  <span className="metric-trend text-success">{metric.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sparkline Graphic Simulator */}
          <div className="sparkline-wrapper p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="extra-small text-secondary">Real-Time Ingestion Stream (Live Sparkline)</span>
              <span className="extra-small text-cyan fw-bold">
                <FaSyncAlt className={`me-1 ${pulseTrigger ? 'spin-icon' : ''}`} /> Live Feed
              </span>
            </div>
            <div className="sparkline-bars-container">
              {[40, 65, 50, 85, 70, 95, 60, 80, 90, 75, 100, 85, 65, 90, 80, 95].map((height, i) => (
                <motion.div 
                  key={i} 
                  className="sparkline-bar"
                  animate={{ height: `${Math.max(20, Math.min(100, height + (i % 2 === 0 ? (pulseTrigger % 15) : -(pulseTrigger % 15))))}%` }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TelemetryDashboard;
