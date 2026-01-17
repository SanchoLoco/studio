
import { Github, Linkedin, Mail, Sailboat } from 'lucide-react';

export const profile = {
  name: "Dror Teper",
  title: "Business Development",
  bio: "Passionate cyber security and forensics expert with 10+ years of experience in research, development, and implementation of cyber security solutions. Proven ability to lead and manage projects, as well as work independently. Strong analytical and problem-solving skills.",
};

export const contactInfo = [
    {
        name: 'Email',
        href: 'mailto:drorteper@gmail.com',
        icon: Mail
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sanchofinance/',
        icon: Linkedin
    },
    {
        name: 'GitHub',
        href: 'https://github.com/SanchoLoco',
        icon: Github
    },
    {
        name: 'OpenSea',
        href: 'https://opensea.io/0x02b9ecac6977814484dd8845a0ca84dd1abb3b0f',
        icon: Sailboat
    }
];

export const workExperiences = [
  {
    role: "QA Engineer",
    company: "Kirobo",
    period: "2023 - 2025",
    description: "Manual and automatic QA testing for crypto-wallets and DeFi products. Writing and maintaining test automation scripts.\nTesting no-code platform for building custom DeFi applications and complex transaction logic.\nTested the user-facing visual builder interface, focusing on user experience (UX) to ensure non-technical users could reliably create and deploy secure \"intents\" or smart transactions.\nValidated the execution of complex conditional logic across DeFi platforms, ensuring defined user conditions (e.g., price limits) were met on-chain.",
  },
  {
    role: "Accounting Practitioner",
    company: "Ben-Gurion University",
    period: "2023 - Present",
    description: "Started by tutoring students in the reserves and now provide accounting practice sessions for students in face-to-face classroom settings.",
  },
  {
    role: "Technologies consultant & Cyber systems lab expert",
    company: "Matrix",
    period: "2015 - 2017",
    description: "Project R&D management in a wide variety of security organizations. AI & ML research and implementation project. Research, development and implementation of embedded operating systems and hardware. Cyber system lab engineering, integrations and operations experts. Working closely with field operatives, adjusting and instructing for cyber systems as needed. Bootstrapping and field testing cyber systems, including installment and operational adjustment. Built the laboratory from the ground up, including designing the space, acquiring the necessary equipment, and hiring and training the staff. Developed new cyber and forensic tools for the field unit, which improved the efficiency and effectiveness of their investigations.",
  },
  {
    role: "Cyber security and forensics R&D",
    company: "Prime Minister Office",
    period: "2012 - 2015",
    description: "Full mandatory 3 years service and continued working at prime minister office. Expertise in Cyber and Forensic, Research, development and integration of new equipment and technologies, Development experience with Linux, Windows, MacOS, Execution of QA for hardware and software in high strict standards, and performing of tutorials and courses for up to 30 people.",
  }
];

export const educationHistory = [
  {
    degree: "B.A. in Management",
    institution: "Ben-Gurion University of The Negev",
    period: "2023 - 2026",
    description: "3rd-year student at The Faculty Of Business And Management.\nSpecializing in Entrepreneurship and Innovation. Degree from the EQUIS-accredited Guilford Glazer Faculty, focused on strategic business development, venture creation, and innovation management.",
  },
  {
    degree: "Transformational Program",
    institution: "Mindvalley University",
    period: "2018 - Present",
    description: "Completed a four-week intensive immersion in transformational leadership, holistic health, and advanced productivity through 100+ workshops led by global experts.",
  },
  {
    degree: "Hacking Defined Experts",
    institution: "See-Security",
    period: "2012 - 2013",
    description: "An intensive, 400-hour offensive security certification from See-Security College specializing in advanced penetration testing, network exploitation, and web application hacking.",
  }
];

export const skills = [
  { name: "Strategic thinking", proficiency: 90 },
  { name: "Negotiation skills", proficiency: 85 },
  { name: "Project management", proficiency: 95 },
  { name: "Problem-solving", proficiency: 90 },
  { name: "Cyber security", proficiency: 95 },
  { name: "Forensics", proficiency: 90 },
  { name: "Research & dev", proficiency: 85 },
];

export const navigationLinks = [
    { name: "Experience", href: "#experience"},
    { name: "Education", href: "#education"},
    { name: "Skills", href: "#skills"},
]
