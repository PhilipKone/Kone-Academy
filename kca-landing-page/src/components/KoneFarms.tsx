import React, { useState } from 'react';
import './KoneFarms.css';

export default function KoneFarms({ onBack }) {
  const [spiceLevel, setSpiceLevel] = useState('Hot');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [distributorName, setDistributorName] = useState('');
  const [distributorEmail, setDistributorEmail] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Constants
  const pricePerBox = 180; // GHS per box of 12 jars
  const shippingCost = 25;
  const totalCost = orderQuantity * pricePerBox + shippingCost;

  const handleSpiceSelect = (level) => {
    setSpiceLevel(level);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!distributorName || !distributorEmail) return;
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setDistributorName('');
      setDistributorEmail('');
      setOrderQuantity(1);
    }, 4000);
  };

  return (
    <div className="farms-page">
      {/* Back to main academy site */}
      <button className="back-btn-farms" onClick={onBack}>
        ⬅️ Back to Kone Academy
      </button>

      <div className="farms-container">
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="farms-title-badge">
            🌾 Kone Farms & Agritech
          </div>
          <h1 className="farms-headline">
            Pioneering <span className="text-gradient-green">Sustainable Agriculture</span> & <span className="text-gradient-gold">Food Security</span> Through Modern Agritech
          </h1>
          <p className="farms-subheadline">
            Applying the power of software engineering, IoT automation, and local community sourcing to cultivate a self-reliant future.
          </p>
        </div>

        {/* Section 1: Agritech R&D & Real-World Operations */}
        <div className="farms-grid-2">
          
          {/* Left Panel: smartFarm R&D Roadmap */}
          <div className="farms-card">
            <div className="smartfarm-header">
              <h3 className="smartfarm-title">
                🔬 smartFarm R&D Blueprint
              </h3>
              <span style={{ fontSize: '0.8rem', background: '#0284c7', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '8px', fontWeight: 800 }}>
                RESEARCH ROADMAP
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'left', margin: '0.5rem 0 1.5rem' }}>
              We are developing open-source hardware and software blueprints for African agriculture. While our operational focus is organic farming partnerships and artisanal foods, our engineering division researches off-grid solar telemetry and automated micro-drip irrigation.
            </p>

            {/* Cultivation Timeline */}
            <div className="pipeline-title">Kone Farms Phased Pipeline</div>
            <div className="pipeline-steps">
              <div className="pipeline-step active">
                <span className="pipeline-step-num">1</span>
                <div>
                  <strong style={{ display: 'block', color: 'white' }}>Organic Farmer Partnerships</strong>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>100% fair-trade sourcing with Volta and Ashanti growers (Active)</span>
                </div>
              </div>
              <div className="pipeline-step active">
                <span className="pipeline-step-num">2</span>
                <div>
                  <strong style={{ display: 'block', color: 'white' }}>Artisanal Food Production</strong>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Kone Shito & kettle-cooked snacks with batch traceability (Active)</span>
                </div>
              </div>
              <div className="pipeline-step pending">
                <span className="pipeline-step-num">3</span>
                <div>
                  <strong style={{ display: 'block', color: 'white' }}>smartFarm IoT Hardware</strong>
                  <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Solar telemetry & automated pulse-latching valves (Published Whitepapers)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Crops & Sourcing */}
          <div className="farms-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="smartfarm-header">
                <h3 className="smartfarm-title">
                  🌱 Crops & Sourcing
                </h3>
                <span style={{ fontSize: '0.8rem', background: '#059669', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '8px', fontWeight: 800 }}>
                  ACTIVE HARVEST
                </span>
              </div>
              
              <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 800 }}>Local Crops (Shito & Snack Ingredients)</h4>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span className="crop-badge">🌶️ Scotch Bonnet Pepper</span>
                  <span className="crop-badge">🧅 Shallots</span>
                  <span className="crop-badge">🧄 Organic Garlic</span>
                  <span className="crop-badge">🍌 Golden Plantain</span>
                  <span className="crop-badge">🥔 White Yam</span>
                  <span className="crop-badge">🐟 Smoked Herring</span>
                  <span className="crop-badge">🦐 Dried Shrimp</span>
                </div>

                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 800 }}>Exotic Crops</h4>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span className="crop-badge" style={{ color: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)', borderColor: 'rgba(96, 165, 250, 0.2)' }}>🌿 Aromatic Basil</span>
                  <span className="crop-badge" style={{ color: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)', borderColor: 'rgba(96, 165, 250, 0.2)' }}>🌿 Sweet Oregano</span>
                </div>
              </div>
            </div>

            <div className="gmo-policy-banner">
              <span style={{ fontSize: '2rem' }}>🛡️</span>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>100% Non-GMO & Organic Standard</strong>
                <span style={{ fontSize: '0.8rem', color: '#a7f3d0' }}>We enforce strict pesticide-free cultivation to protect local ecosystems and provide wholesome, healthy ingredients.</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Research Whitepapers Suite Showcase */}
        <div className="farms-card" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="farms-title-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa', marginBottom: '1rem' }}>
            📚 Open-Source Engineering Publications
          </div>
          <h3 className="smartfarm-title" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Agritech Research Series (6 Technical Whitepapers)
          </h3>
          <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Our hardware and software engineering blueprints are published as publication-grade research studies with full hardware BOMs, Arduino C++ firmware, and mathematical calibration models:
          </p>

          <div className="tools-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">📡</div>
              <h4 className="tool-title">smartFarm Telemetry Array</h4>
              <p className="tool-desc">Multi-depth capacitive soil moisture, digital ambient temperature, and pyranometer solar irradiance monitoring.</p>
            </div>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">💧</div>
              <h4 className="tool-title">IoT Water Valves</h4>
              <p className="tool-desc">Bi-stable pulse-latching solenoid valves drawing 0W holding power for closed-loop micro-drip irrigation.</p>
            </div>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">📻</div>
              <h4 className="tool-title">LoRa Mesh Networks</h4>
              <p className="tool-desc">Long-range 866MHz solar-powered soil sensor nodes operating over 3.2km without cellular connectivity.</p>
            </div>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">🧪</div>
              <h4 className="tool-title">Modbus RS485 NPK Probes</h4>
              <p className="tool-desc">Industrial 7-in-1 root zone nutrient (N-P-K), pH, and electrical conductivity profiling for precision fertigation.</p>
            </div>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">🧬</div>
              <h4 className="tool-title">ESP32-S3 Edge Firmware</h4>
              <p className="tool-desc">Microclimate Black Sigatoka fungal infection risk prediction executed locally on the microcontroller.</p>
            </div>
            <div className="tool-card" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <div className="tool-icon">❄️</div>
              <h4 className="tool-title">Solar Cold-Storage Pods</h4>
              <p className="tool-desc">NDIR ethylene gas sensing and evaporative cooling pods to curb tropical post-harvest spoilage by 62%.</p>
            </div>
          </div>

          <a 
            href="https://farms.koneacademy.io/#blog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="kids-button"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.85rem 2rem', background: '#3b82f6', boxShadow: '0 6px 0 #1d4ed8', textDecoration: 'none', color: '#fff', fontWeight: 800 }}
          >
            Read All 6 Agritech Whitepapers on Kone Farms Blog ➔
          </a>
        </div>

        {/* Section 2: Kone Food & Kone Shito */}
        <div className="farms-card" style={{ padding: '3.5rem 3rem', marginBottom: '4rem' }}>
          <div className="shito-container">
            
            {/* Left: Jar Visual and Slider */}
            <div className="shito-visual">
              <div className="jar-glow"></div>
              <div className="shito-jar-lid"></div>
              <div className="shito-jar-graphic">
                <div className="shito-label-inner">
                  <h4 className="shito-label-title">KONE</h4>
                  <div className="shito-label-sub">Premium Shito</div>
                  <div style={{ borderTop: '2px solid #b45309', margin: '0.5rem 0' }}></div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>AUTHENTIC RECIPE</div>
                </div>
              </div>

              {/* Spice Meter selector */}
              <div className="spice-meter">
                <span className="dist-label">Select Heat Intensity</span>
                <div className="spice-slider">
                  {['Mild 🌶️', 'Hot 🌶️🌶️', 'Extra Hot 🌶️🌶️🌶️'].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleSpiceSelect(level)}
                      className={`spice-btn ${spiceLevel === level ? 'active' : ''}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Product Story and Batch QR trace */}
            <div style={{ textAlign: 'left' }}>
              <div className="farms-title-badge" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#f87171', marginBottom: '1rem' }}>
                🥫 Kone Food Production
              </div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.5rem', color: 'white', margin: '0 0 1rem' }}>
                Kone Shito
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Our premium black pepper sauce is handcrafted using organic Scotch Bonnet peppers, smoked herring, dried shrimp, and rich spices sourced directly from local family farms. Every jar tells a story of local partnership and smart agricultural science.
              </p>

              {/* Interactive QR Code Trace Flow */}
              <div className="trace-card">
                <div className="qr-code-mock">
                  <div className="qr-dot corner" style={{ background: '#ef4444' }}></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot corner" style={{ background: '#ef4444' }}></div>
                  
                  <div className="qr-dot"></div>
                  <div className="qr-dot" style={{ background: '#ef4444' }}></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot"></div>
                  
                  <div className="qr-dot"></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot" style={{ background: '#ef4444' }}></div>
                  <div className="qr-dot"></div>
                  
                  <div className="qr-dot corner" style={{ background: '#ef4444' }}></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot"></div>
                  <div className="qr-dot corner" style={{ background: '#ef4444' }}></div>
                </div>

                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#f59e0b', fontSize: '1.05rem', fontWeight: 800 }}>Trace Your Shito Jar 🔍</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    Every jar has a batch QR code. Scan it on your phone to instantly see the harvest logs, packaging date, and meet the Volta region farmers who harvested your peppers!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: B2B Distributors Registration & Order Calculator */}
        <div className="farms-grid-2">
          
          {/* Left Panel: Store/Distributor Application */}
          <div className="farms-card">
            <h3 className="smartfarm-title" style={{ marginBottom: '1rem' }}>
              📦 Retailer & Distributor Registration
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.5 }}>
              Register your grocery store, hotel, or retail shop as an official Kone Food stockist. We offer direct wholesale rates, priority shipping, and marketing flyers!
            </p>

            {orderSubmitted ? (
              <div style={{ padding: '3rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '2px dashed #10b981', borderRadius: '20px', color: '#34d399', textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
                <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Application Submitted!</strong>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>Thank you for joining our network. Our logistics team will email your welcome package shortly!</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="dist-form-group">
                  <label className="dist-label">Store / Partner Name</label>
                  <input
                    type="text"
                    required
                    value={distributorName}
                    onChange={(e) => setDistributorName(e.target.value)}
                    placeholder="e.g. Westside Supermarket"
                    className="dist-input"
                  />
                </div>
                <div className="dist-form-group">
                  <label className="dist-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={distributorEmail}
                    onChange={(e) => setDistributorEmail(e.target.value)}
                    placeholder="partner@yourstore.com"
                    className="dist-input"
                  />
                </div>
                <div className="dist-form-group">
                  <label className="dist-label">Select Volume (Boxes of 12 jars)</label>
                  <select
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Number(e.target.value))}
                    className="dist-input"
                    style={{ background: '#0b1b16' }}
                  >
                    {[1, 2, 5, 10, 20, 50].map((num) => (
                      <option key={num} value={num}>
                        {num} Box{num > 1 ? 'es' : ''} ({num * 12} jars)
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="kids-button"
                  style={{ width: '100%', padding: '0.85rem', background: '#10b981', boxShadow: '0 8px 0 #047857', marginTop: '1rem' }}
                >
                  Apply to Distribute 🚀
                </button>
              </form>
            )}
          </div>

          {/* Right Panel: Simulated Calculator */}
          <div className="farms-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 className="smartfarm-title" style={{ marginBottom: '1.5rem' }}>
                🚚 Logistics & Price Calculator
              </h3>
              <div className="calc-card">
                <div className="calc-row">
                  <span>Distributor Price (Per Box)</span>
                  <strong style={{ color: 'white' }}>GHS {pricePerBox}.00</strong>
                </div>
                <div className="calc-row">
                  <span>Selected Boxes ({orderQuantity * 12} Jars)</span>
                  <strong style={{ color: 'white' }}>{orderQuantity} Box{orderQuantity > 1 ? 'es' : ''}</strong>
                </div>
                <div className="calc-row">
                  <span>Subtotal</span>
                  <strong style={{ color: 'white' }}>GHS {orderQuantity * pricePerBox}.00</strong>
                </div>
                <div className="calc-row">
                  <span>Flat-rate Priority Shipping</span>
                  <strong style={{ color: 'white' }}>GHS {shippingCost}.00</strong>
                </div>
                <div className="calc-row calc-total">
                  <span>ESTIMATED TOTAL</span>
                  <span>GHS {totalCost}.00</span>
                </div>
              </div>

              <div style={{ textAlign: 'left', fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                <strong style={{ display: 'block', color: 'white', marginBottom: '0.25rem' }}>💡 Bulk Discount Offer:</strong>
                Orders over **10 boxes** qualify for free shipping and a **10% wholesale discount** on invoices! Contact our wholesale desk directly at `phconsultgh@gmail.com` or `philipkone45@gmail.com` for custom arrangements.
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
              <span style={{ fontSize: '1.5rem' }}>🌍</span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>
                Logistics are managed via our dedicated central distribution hub, shipping locally within 48 hours to retail shelves across the country.
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
