export interface EcosystemGuide {
  slug: string;
  title: string;
  badge: string;
  framework: string;
  difficulty: string;
  cause: string;
  solution: string;
  oldModelTitle: string;
  oldModelItems: string[];
  newModelTitle: string;
  newModelItems: string[];
  errorText?: string;
}

export const ecosystemGuides: EcosystemGuide[] = [
  {
    slug: "getting-started",
    title: "Welcome to Kone Academy: Ecosystem & Student Onboarding",
    badge: "Official Onboarding Guide",
    framework: "Student Onboarding",
    difficulty: "Beginner",
    cause: "Kone Academy is a state-of-the-art technical education ecosystem designed to bridge theoretical learning with practical execution across our subdomains.",
    solution: "1. Create Your Student Profile: Register your account to access course modules and project tracking.\n2. Explore the Subdomains: Navigate between Kone Code for interactive courses and Kone Lab for physical hardware telemetry.\n3. Join Your Learning Cohort: Connect with mentors and peers for collaborative group projects and live feedback.",
    oldModelTitle: "Traditional Learning Model",
    oldModelItems: [
      "Passive video lectures without interactive environments",
      "Multiple-choice exams with zero practical application",
      "No direct mentor feedback or peer collaboration",
      "Isolated self-study without verified progress tracking"
    ],
    newModelTitle: "Kone Academy Learning Model",
    newModelItems: [
      "Interactive browser-based coding and hardware labs",
      "Real-world project builds with personalized feedback",
      "Live physical lab hardware telemetry access",
      "Structured cohort learning with global student networks"
    ]
  },
  {
    slug: "kone-code-setup",
    title: "Kone Code: Interactive Learning & IDE Workspace Setup",
    badge: "IDE & Learning Environment",
    framework: "Developer Setup",
    difficulty: "Intermediate",
    cause: "Kone Code provides interactive programming environments for Web Development, Python Data Science, and Systems Engineering.",
    solution: "1. Launch Your Browser IDE: Access pre-configured coding environments directly from your student portal without installing heavy software.\n2. Track Learning Milestones: Complete interactive challenges with instant automated test feedback.\n3. Submit Assignments: Save your progress to your portfolio and submit projects for mentor review with one click.",
    oldModelTitle: "Outdated Setup Workflow",
    oldModelItems: [
      "Complex local software installations and dependencies",
      "Manual file uploads and email assignment submissions",
      "Delayed grading with no immediate error feedback",
      "Inconsistent local environments causing setup bugs"
    ],
    newModelTitle: "Kone Code Modern Workflow",
    newModelItems: [
      "Zero-install cloud IDE accessible from any web browser",
      "Instant automated test feedback as you write code",
      "Seamless submission directly to your student portfolio",
      "Pre-configured development stacks for web, AI, and IoT"
    ]
  },
  {
    slug: "remote-labs",
    title: "Kone Lab: Remote IoT Telemetry & Hardware Access",
    badge: "Hardware & Remote Telemetry",
    framework: "Hardware & IoT",
    difficulty: "Advanced",
    cause: "Kone Lab bridges theoretical hardware training with live physical microcontrollers, IoT sensor arrays, and remote laboratory video feeds.",
    solution: "1. Reserve a Lab Station: Book a time slot on physical hardware rigs (ESP32, Raspberry Pi, environmental sensors).\n2. Monitor Live Sensor Feeds: Observe real-time telemetry graphs streaming temperature, humidity, and pressure data.\n3. Deploy Remote Firmware: Write C++ or MicroPython scripts in your dashboard to flash physical devices remotely.",
    oldModelTitle: "Traditional Hardware Training",
    oldModelItems: [
      "Requires buying expensive physical hardware kits",
      "Limited to physical classroom presence and office hours",
      "Difficult troubleshooting without diagnostic telemetry",
      "High barrier to entry for international remote students"
    ],
    newModelTitle: "Kone Lab Remote Access",
    newModelItems: [
      "24/7 access to physical lab hardware over web browsers",
      "Live HD video streams of physical hardware boards",
      "Real-time streaming telemetry charts and diagnostics",
      "Equal access for students worldwide from any device"
    ]
  },
  {
    slug: "git-workflows",
    title: "Kone Academy: Student Collaboration & Quality Standards",
    badge: "Collaboration Standards",
    framework: "Team Standards",
    difficulty: "Best Practices",
    cause: "Collaborative teamwork and clear project organization are fundamental to professional engineering success across the Kone Academy ecosystem.",
    solution: "1. Structured Project Roles: Divide responsibilities within cohort teams to build comprehensive capstone projects.\n2. Continuous Peer Review: Review cohort peer submissions and receive constructive mentor feedback.\n3. Version Control Best Practices: Learn industry-standard revision management and clean code documentation.",
    oldModelTitle: "Unstructured Teamwork",
    oldModelItems: [
      "Uncoordinated file sharing over email or chat apps",
      "Overwriting team work without version tracking",
      "No structured code reviews or quality guidelines",
      "Disorganized project portfolios upon graduation"
    ],
    newModelTitle: "Kone Academy Collaboration",
    newModelItems: [
      "Industry-standard collaborative project management",
      "Structured peer and mentor code reviews",
      "Clear version control and revision tracking",
      "Professional capstone portfolio ready for employers"
    ]
  },
  {
    slug: "certificate-verification",
    title: "Kone Academy: Cryptographic Certificate Verification",
    badge: "Credential Verification",
    framework: "Verification System",
    difficulty: "Security",
    cause: "Every graduate from Kone Academy receives a tamper-proof digital credential that employers and academic institutions can independently verify.",
    solution: "1. Unique Credential ID: Each certificate contains a unique alphanumeric identifier and verification QR code.\n2. Instant Portal Validation: Enter the credential ID on www.koneacademy.io/verify to view verified course accomplishments.\n3. Shareable LinkedIn Credentials: Easily add your verified achievements to professional social networks.",
    oldModelTitle: "Traditional Paper / PDF Certificates",
    oldModelItems: [
      "Easy to forge or manipulate static image files",
      "No instant digital verification for hiring managers",
      "Requires manual institution email verification",
      "Vulnerable to loss or damage over time"
    ],
    newModelTitle: "Kone Verified Credentials",
    newModelItems: [
      "Tamper-proof digital verification system",
      "Instant 1-click verification for global employers",
      "Direct link to verified student project portfolios",
      "Permanently stored on secure academic servers"
    ]
  }
];
