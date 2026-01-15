import { Github, Linkedin, Mail } from 'lucide-react';

export const profile = {
  name: "Dror Teper",
  title: "QA Engineer & Cybersecurity Enthusiast",
  bio: "A detail-oriented QA Engineer with two years of experience in the Web3 space, ensuring the quality of dApp creation platforms. Currently in the final semester of a BA at Ben-Gurion University, with a strong passion for cybersecurity and digital forensics. Eager to leverage analytical skills and a proactive learning approach in a challenging cybersecurity role.",
};

export const contactInfo = [
    {
        name: 'Email',
        href: 'mailto:dror.teper@example.com',
        icon: Mail
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/drorteper',
        icon: Linkedin
    },
    {
        name: 'GitHub',
        href: 'https://github.com/drorteper',
        icon: Github
    }
];

export const experiences = [
  {
    role: "QA Engineer",
    company: "Kirobo",
    period: "2022 - Present",
    description: "Responsible for quality assurance of a platform for creating decentralized applications (dApps) from user prompts. Developed and executed comprehensive test plans, identified and documented bugs, and collaborated with developers to ensure product stability and performance in a fast-paced Web3 environment.",
    type: "work" as const
  },
  {
    degree: "Bachelor of Arts (B.A.)",
    institution: "Ben-Gurion University of the Negev",
    period: "2021 - 2024",
    description: "Pursuing a degree with a focus on areas relevant to social sciences and technology. Consistently achieving high grades while balancing a part-time role as a QA engineer. Final semester in progress.",
    type: "education" as const
  }
];

export const skills = [
  { name: "QA & Testing", proficiency: 90, fill: "hsl(var(--chart-1))" },
  { name: "Cybersecurity Principles", proficiency: 80, fill: "hsl(var(--chart-1))" },
  { name: "Web3 & dApps", proficiency: 85, fill: "hsl(var(--chart-1))" },
  { name: "Test Automation", proficiency: 75, fill: "hsl(var(--chart-2))" },
  { name: "Digital Forensics", proficiency: 70, fill: "hsl(var(--chart-2))" },
  { name: "JavaScript & TS", proficiency: 80, fill: "hsl(var(--chart-1))" },
  { name: "CI/CD Pipelines", proficiency: 65, fill: "hsl(var(--chart-2))" },
];

export const navigationLinks = [
    { name: "Experience", href: "#experience"},
    { name: "Skills", href: "#skills"},
]
