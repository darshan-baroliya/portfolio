/**
 * PORTFOLIO DATA CONFIGURATION
 * Real profile information for Darshan Baroliya
 */

export const personalData = {
  name: "Darshan Baroliya",
  role: "QA Executive",
  tagline: "Quality Assurance professional dedicated to ensuring software reliability, usability, and seamless user experiences across web and mobile platforms.",
  bio: "QA professional focused on ensuring the quality, reliability, and usability of web and mobile applications. Experienced in understanding business requirements, validating application workflows, identifying defects, and supporting the delivery of reliable software products. Interested in modern quality engineering practices, particularly AI-assisted testing, intelligent test automation, and AI application evaluation. Continuously expanding technical capabilities in Playwright, JavaScript, API testing, SQL, and AI-driven testing workflows to contribute to evolving software quality engineering teams.",

  phone: "(+91) 8905491657",
  phoneTel: "tel:+918905491657",
  email: "darshan.baroliya@gmail.com",
  location: "Rajkot, Gujarat, India",
  linkedin: "https://linkedin.com/in/darshan-baroliya-189b59179",
  github: "https://github.com",
  statusBadge: "Open to QA Opportunities",

  // Quick metrics
  stats: [
    { label: "Testing Domains", value: "Web, Mobile & API" },
    { label: "Methodologies", value: "Agile, Functional & Regression" },
    { label: "Core Focus", value: "Requirement-Driven Quality" }
  ]
};

export const skillsCategories = [
  {
    title: "Testing Methodologies",
    skills: ["Manual Testing", "Functional Testing", "Regression Testing", "Exploratory Testing", "Smoke & Sanity Testing", "User Acceptance Testing (UAT)"]
  },
  {
    title: "Web & Mobile Quality",
    skills: ["Web Application Testing", "Mobile Application Testing", "UI/UX Testing", "Cross-Browser Testing", "Responsive Viewport Testing"]
  },
  {
    title: "API & Defect Management",
    skills: ["Postman (API Testing)", "HTTP Status Validation", "Jira (Bug Tracking)", "Test Scenarios & Test Cases", "Chrome DevTools"]
  },
  {
    title: "Learning & Upskilling",
    skills: ["Playwright (Automation)", "Basic SQL & Database Checks", "JavaScript Fundamentals", "AI-Assisted Testing & Evals"]
  }
];

export const experienceData = [
  {
    role: "QA Executive",
    company: "IT Services Company",
    location: "India",
    duration: "Nov 2025 – Present",
    description: "Independently manage QA activities across multiple projects, taking greater responsibility for project quality and release readiness.",
    achievements: [
      "Analyze business requirements and plan end-to-end testing activities based on project needs.",
      "Create and execute detailed test scenarios, test cases, and test documentation for web and mobile applications.",
      "Perform comprehensive functional, regression, exploratory, and end-to-end validation across releases.",
      "Track defects in Jira, communicate issues clearly with developers, and coordinate swift bug resolution.",
      "Validate new features, enhancements, and hotfixes while maintaining overall application stability.",
      "Monitor project progress and communicate testing status, risks, and observations to cross-functional team members."
    ]
  },
  {
    role: "Junior QA",
    company: "IT Services Company",
    location: "India",
    duration: "Jul 2024 – Oct 2025",
    description: "Prepared test documentation, executed manual tests for web and mobile products, and collaborated closely with developers.",
    achievements: [
      "Analyzed project requirements and prepared structured test scenarios, test cases, and test documentation.",
      "Performed manual testing of web and mobile applications to validate functionality, UI consistency, and usability.",
      "Conducted functional, regression, and user acceptance testing across sprint cycles.",
      "Identified, documented, and reported defects with clear, reproducible steps and environment logs.",
      "Collaborated with developers to verify bug fixes and validate newly deployed features."
    ]
  }
];

export const projectsData = [
  {
    id: "project-ecommerce",
    title: "E-Commerce Web & Mobile Platforms",
    domain: "Retail & Digital Commerce",
    summary: "Tested end-to-end product discovery, catalog filters, shopping cart, and checkout workflows across desktop and mobile devices.",
    testingScope: [
      "Product listings, faceted search, category filtering, and product detail accuracy.",
      "Shopping cart recalculations, quantity updates, and multi-step checkout processes.",
      "Payment gateway integration flows, order confirmation, and user invoice generation.",
      "Extensive functional and regression testing to identify edge-case UI and transaction defects."
    ],
    tools: ["Manual Testing", "Postman", "Chrome DevTools", "Jira", "Cross-Browser Testing"]
  },
  {
    id: "project-travel",
    title: "Travel & Booking Applications",
    domain: "Travel & Hospitality",
    summary: "Validated booking funnels, search filters, date selectors, itinerary confirmations, and booking status updates.",
    testingScope: [
      "Complex travel booking workflows, location search, date-range filtering, and price calculations.",
      "Booking details validation, form input boundaries, and handling of booking modification workflows.",
      "Cross-browser and mobile viewport testing to guarantee smooth booking on any device.",
      "Identified critical booking synchronization defects, documented reproduction steps, and verified developer fixes."
    ],
    tools: ["Web Testing", "Mobile Testing", "Jira", "Postman", "Exploratory Testing"]
  },
  {
    id: "project-fitness",
    title: "Fitness & Activity Tracking Applications",
    domain: "Health & Fitness",
    summary: "Conducted functional and UI validation for user activity tracking, workout planning, and personalized user profile flows.",
    testingScope: [
      "User profile setup, biometric metric tracking, and daily activity logging workflows.",
      "Interactive workout timers, progress dashboards, and data persistence across sessions.",
      "Device fragmentation testing across different screen aspect ratios and mobile operating systems.",
      "Performed regression testing to ensure new feature releases did not regress existing user workflows."
    ],
    tools: ["Mobile App Testing", "UI/UX Testing", "Regression Testing", "Jira"]
  },
  {
    id: "project-healthcare",
    title: "Healthcare Patient & Provider Portals",
    domain: "Healthcare & Telemedicine",
    summary: "Validated healthcare appointment workflows, patient intake forms, sensitive data entry, and user account journeys.",
    testingScope: [
      "Patient appointment scheduling, doctor availability calendars, and booking notifications.",
      "Form validation, boundary checking on health metric inputs, and data entry accuracy.",
      "Security and privacy awareness when validating patient details and user permissions.",
      "Prompt bug reporting and close collaboration with engineering to maintain high medical portal stability."
    ],
    tools: ["Functional Testing", "Boundary Testing", "Chrome DevTools", "Jira", "Postman"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (Electronics and Communication)",
    institution: "Government Engineering College",
    duration: "Aug 2016 – Jun 2019"
  },
  {
    degree: "Diploma (Electronics and Communication)",
    institution: "Government Polytechnic",
    duration: "Jul 2013 – Jun 2016"
  }
];

export const languagesData = ["English", "Hindi", "Gujarati"];

export const learningTopics = [
  {
    title: "Playwright Automation",
    desc: "Building end-to-end automated UI test scripts with Playwright and JavaScript, focusing on Page Object Model (POM) and auto-waiting.",
    level: "In Progress"
  },
  {
    title: "SQL & Database Testing",
    desc: "Writing relational queries to validate data integrity between frontend actions and backend database tables in MySQL / PostgreSQL.",
    level: "Practicing"
  },
  {
    title: "AI in Software QA",
    desc: "Leveraging generative AI and LLMs for edge-case ideation, synthetic test data generation, and intelligent test case drafting.",
    level: "Active Study"
  }
];
