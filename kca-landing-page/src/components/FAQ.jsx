import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is Kone Academy?",
    answer: "Kone Academy is a futuristic tech education platform that bridges the gap between theory and practical execution. We provide hands-on experience through our dedicated remote labs."
  },
  {
    question: "How do I access Kone Lab?",
    answer: "Once enrolled in a lab-based module, you will receive secure access credentials to our physical and cloud-hosted infrastructure, enabling you to build, deploy, and hack in real-time."
  },
  {
    question: "Is the curriculum suitable for beginners?",
    answer: "Absolutely. We offer specialized learning paths that take you from foundational concepts in Linux and Networking, all the way to advanced DevOps, Cybersecurity, and Cloud Architectures."
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, you learn at your own pace. However, we complement your self-driven study with structured lab assignments and live mentoring sessions via Kone Consult to ensure continuous progress."
  },
  {
    question: "Do you offer enterprise training or team upskilling?",
    answer: "Yes, we partner with organizations globally to upskill their tech teams. Reach out to us to design a tailored curriculum that aligns with your company's technology stack and goals."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know to get started.</p>
        </div>
        
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div 
                className="faq-answer-wrapper"
                style={{
                  maxHeight: activeIndex === index ? '200px' : '0',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
