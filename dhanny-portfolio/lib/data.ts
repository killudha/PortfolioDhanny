// lib/data.ts

export const profile = {
  name: "Dhanny Abdul Qodir Al Jaelany",
  title: "Web Developer & AI Integrator",
  summary: "Dedicated Informatics Engineering student with a strong career focus as a Web Developer with AI Integration. Highly enthusiastic about designing modern, user-friendly web platforms that integrate Machine Learning models and Natural Language Processing (NLP) to produce intelligent technology solutions."
};

export const education = [
  {
    institution: "State Polytechnic of Jakarta (Politeknik Negeri Jakarta)",
    degree: "(D4) in Informatics Engineering",
    time: "2023 - Present",
  },
  {
    institution: "SMK Diponegoro 1 Jakarta",
    degree: "Computer and Network Engineering",
    time: "2020 - 2023",
  }
];

export const skills = [
  "Python", "Java", "PHP", "Dart", "C++", "R", "Shell Scripting",
  "Laravel 12", "CodeIgniter 4", "Flutter", "React/Next.js",
  "MySQL", "PostgreSQL",
  "NLP", "XGBoost", "SHAP (Explainable AI)", "Predictive Modeling",
  "Web Penetration Testing (XSS)", "Wireshark", "Burp Suite"
];

export const projects = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction Dashboard",
    desc: "Engineered an interactive web-based dashboard designed to predict customer churn rates utilizing Machine Learning and NLP. Implemented the XGBoost algorithm and utilized SHAP for Explainable AI.",
    tags: ["Machine Learning", "XGBoost", "NLP", "SHAP"],
    link: "https://github.com/alden-nafisa/Customer_Churn_Prediction",
  },
  {
    slug: "gagasan-pnj",
    title: "Gagasan PNJ Web Platform",
    desc: "Developed a dynamic web-based platform for the campus to facilitate the submission, management, and showcasing of student ideas and proposals.",
    tags: ["Web Development", "Database Architecture", "UI/UX"],
    link: "https://github.com/elenay30/SistemGagasanPBL",
  },
];

export const workExperience = [
  {
    role: "IT Business Analyst Intern",
    company: "PT XLSMART Telecom Sejahtera Tbk",
    time: "July 2026 – Jan 2027",
    desc: "Gathered business requirements, translated them into technical specifications, designed process flowcharts, and facilitated User Acceptance Testing (UAT).",
  },
  {
    role: "Game Developer Intern",
    company: "Gamelab.ID",
    time: "Sept 2022 - Oct 2022",
    desc: "Developed interactive educational games utilizing Construct 3 and conducted rigorous QA testing.",
  },
  {
    role: "IT Support Intern",
    company: "Indonesia International Institute for Life Sciences (i3L)",
    time: "Jan 2022 - April 2022",
    desc: "Troubleshooted hardware/software issues and monitored internal network infrastructure stability.",
  }
];

export const orgExperience = [
  {
    role: "Head of Competition Division",
    company: "Taekwondo PNJ",
    time: "March 2025 - Feb 2026",
    desc: "Organized division strategies and effectively prepared athletes for upcoming regional tournaments.",
  },
  {
    role: "Cyber Security Mentor",
    company: "Computer Student Club PNJ",
    time: "March 2025 - Feb 2026",
    desc: "Mentored junior members in foundational cybersecurity concepts and analytical problem-solving.",
  },
  {
    role: "Community Member (Active Learner)",
    company: "Anon Cyber Team",
    time: "June 2023 - Present",
    desc: "Participated in community study sessions focusing on Red Team Attacking, Web Penetration Testing, and cybersecurity fundamentals.",
  },
  {
    role: "Cyber Security Member",
    company: "Computer Student Club PNJ",
    time: "Nov 2023 - July 2024",
    desc: "Studied and practiced Web Penetration Testing, specifically focusing on Cross-site Scripting (XSS) and identifying web vulnerabilities.",
  },
  {
    role: "Coaching Staff Division",
    company: "Taekwondo PNJ",
    time: "Sept 2023 - Jan 2025",
    desc: "Assisted in training members and coordinating practice schedules to maintain discipline and routine.",
  }
];

export const certifications = [
  {
    category: "Programming & Software Development",
    items: [
      { name: "OOP Course", issuer: "IDN.ID", year: "2024", id: "IDN-1725034096-10704-14130" },
      { name: "Basic Dart Programming", issuer: "IDN.ID", year: "2024", id: "IDN-1725033840-4210-14130" },
      { name: "Starting Programming with Java", issuer: "Dicoding", year: "2023", id: "KEXLORE34PG2" },
      { name: "Starting Programming with C", issuer: "Dicoding", year: "2023", id: "53XEN8MGKXRN" },
      { name: "Beginner Full Stack JavaScript Web Developer", issuer: "ITBOX", year: "2023", id: "12D64EA85-132E0914D-2F36445" },
      { name: "Basic HTML, CSS, JavaScript, Git & GitHub", issuer: "Skilvul", year: "2023", id: "" },
      { name: "Basic Programming Course", issuer: "BINUS University", year: "2022", id: "" },
      { name: "Kickstart UI UX Design Journey", issuer: "Rakamin Academy", year: "2022", id: "32788UIUX242022" },
      { name: "UX Writing Profession", issuer: "Pixel Ninja", year: "2022", id: "FW-130522-129" }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Cybersecurity Training: Whitehacker", issuer: "PPIPTEK", year: "2024", id: "ISC-017/MST/SERT/VII/2024" },
      { name: "OSINT Analyst Class", issuer: "Siberku", year: "2024", id: "SKU-SRT/012/2/V/2024" },
      { name: "Cyber Security Course: Intermediate Level", issuer: "ITBOX", year: "2023", id: "12D64EA85-132E01C7A-2F36445" },
      { name: "Cyber Security Course: Basic Level", issuer: "ITBOX", year: "2023", id: "12D64EA85-132EF85D0-2F36445" },
      { name: "Basic Penetration Testing", issuer: "IDN.ID", year: "2023", id: "CERT20230506909" },
      { name: "Cyber Security for Beginners", issuer: "Bitlabs.id", year: "2023", id: "BLAB46918316" },
      { name: "Securing Web Applications", issuer: "IDN.ID", year: "2023", id: "" },
      { name: "Cyber Incident Response & Wazuh as a SIEM", issuer: "Dokter Siber", year: "2023", id: "024/SERT/PST/VII/2023" },
      { name: "Cyber Security Pre-Course", issuer: "Course-Net", year: "2023", id: "1332C6758-1332C6821-312FB02" }
    ]
  },
  {
    category: "Networking, Cloud & DevOps",
    items: [
      { name: "Basic Computer Networks", issuer: "IDN.ID", year: "2024", id: "IDN-1751946431-180-14130" },
      { name: "IPv6 Certification (Explorer)", issuer: "Hurricane Electric", year: "2024", id: "" },
      { name: "Learning Linux from Scratch", issuer: "IDN.ID", year: "2024", id: "IDN-1725034224-11033-14130" },
      { name: "Linux Fundamentals", issuer: "IDN.ID", year: "2022", id: "" },
      { name: "Basic MikroTik", issuer: "IDN.ID", year: "2024", id: "IDN-1725034770-182-14130" },
      { name: "Network Simulation with PNETlab", issuer: "IDN.ID", year: "2024", id: "IDN-1725033680-4357-14130" },
      { name: "Next Generation Network: Cisco IPv6", issuer: "Hendevane Training", year: "2024", id: "HTP2020105246" },
      { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", year: "2024", id: "" },
      { name: "Basic Cisco", issuer: "IDN.ID", year: "2023", id: "IDN-1680423904-184-14130" },
      { name: "MikroTik Mini Class", issuer: "IDN.ID", year: "2023", id: "IDN-1680412597-2852-14130" },
      { name: "Pre-DevOps Engineer Bootcamp", issuer: "Dumbways.id", year: "2022", id: "" },
      { name: "CCNA", issuer: "Netcampus.id", year: "2022", id: "192236728DN860" }
    ]
  },
  {
    category: "Competitions & IT Management",
    items: [
      { name: "COMPFEST Capture The Flag (CTF) Competition", issuer: "COMPFEST 16", year: "2024", id: "cf-2024-c68bd469-56b3-48f6-8a25-597805afaa37" },
      { name: "Certified IT Manager / CITM", issuer: "ESAS Management", year: "2024", id: "ESAS/CITM-V/VII/2024" },
      { name: "Schematics National Programming Contest Junior", issuer: "ITS", year: "2021", id: "0387/E/SCHEMATICS/HMTC/X/2021" },
      { name: "Networking Competition", issuer: "Sriwijaya University", year: "2021", id: "0820/UN9.1.9.BEM-KMF/SRT/2021" }
    ]
  }
];