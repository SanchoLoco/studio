
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

const allExperiences = [
  {
    role: "Accounting Practitioner",
    company: "Ben-Gurion University",
    period: "2023 - Present",
    description: "Started by tutoring students in the reserves and now provide accounting practice sessions for students in face-to-face classroom settings.",
    type: "work" as const
  },
  {
    role: "QA Engineer",
    company: "Kirobo",
    period: "2023 - 2025",
    description: "Manual and automatic QA testing for crypto-wallets and DeFi products. Writing and maintaining test automation scripts.",
    type: "work" as const
  },
  {
    role: "Technologies consultant & Cyber systems lab expert",
    company: "Matrix",
    period: "2015 - 2017",
    description: "Project R&D management in a wide variety of security organizations. AI & ML research and implementation project. Research, development and implementation of embedded operating systems and hardware. Cyber system lab engineering, integrations and operations experts. Working closely with field operatives, adjusting and instructing for cyber systems as needed. Bootstrapping and field testing cyber systems, including installment and operational adjustment. Built the laboratory from the ground up, including designing the space, acquiring the necessary equipment, and hiring and training the staff. Developed new cyber and forensic tools for the field unit, which improved the efficiency and effectiveness of their investigations.",
    type: "work" as const
  },
  {
    role: "Cyber security and forensics R&D",
    company: "Prime Minister Office",
    period: "2012 - 2015",
    description: "Full mandatory 3 years service and continued working at prime minister office. Expertise in Cyber and Forensic, Research, development and integration of new equipment and technologies, Development experience with Linux, Windows, MacOS, Execution of QA for hardware and software in high strict standards, and performing of tutorials and courses for up to 30 people.",
    type: "work" as const
  },
  {
    degree: "B.A. in Management",
    institution: "Ben-Gurion University of The Negev",
    period: "2023 - 2026",
    description: "3rd-year student at The Guilford Glazer Faculty Of Business And Management.",
    type: "education" as const
  },
  {
    degree: "Transformational Program",
    institution: "Mindvalley University",
    period: "2018 - Present",
    description: "One month in a year of personal transformation.",
    type: "education" as const
  },
  {
    degree: "Hacking Defined Experts",
    institution: "See-Security",
    period: "2012 - 2013",
    description: "Hacking Defined Experts program.",
    type: "education" as const
  }
];

export const workExperiences = allExperiences
  .filter(e => e.type === 'work')
  .sort((a, b) => {
    const getYear = (period: string, position: 'start' | 'end') => {
        const parts = period.split(' - ');
        const yearStr = position === 'start' ? parts[0] : parts[1];
        if (yearStr === 'Present') {
            // "Present" is considered the current year for sorting purposes.
            return new Date().getFullYear();
        }
        return parseInt(yearStr, 10);
    };

    const aEndYear = getYear(a.period, 'end');
    const bEndYear = getYear(b.period, 'end');

    if (bEndYear !== aEndYear) {
        return bEndYear - aEndYear;
    }

    const aStartYear = getYear(a.period, 'start');
    const bStartYear = getYear(b.period, 'start');

    return bStartYear - aStartYear;
});

export const educationHistory = allExperiences
    .filter(e => e.type === 'education')
    .sort((a, b) => {
        const getStartYear = (period: string) => {
            const yearStr = period.split(' - ')[0];
            return parseInt(yearStr, 10);
        };
        return getStartYear(b.period) - getStartYear(a.period);
    });


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
