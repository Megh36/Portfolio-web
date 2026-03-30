export interface Experience {
  id: string;
  title: string;
  role: string;
  description: string[];
  tags: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "hackathon-ops",
    title: "Hackathon Operations",
    role: "MISSION TYPE: COMPETITIVE PROTOTYPING",
    description: [
      "Participated in multiple high-intensity hackathons (Odoo, Hackamined – Nirma University, Vibecoding Events) solving real-world problems under time constraints.",
      "Gained experience in rapid prototyping, team collaboration, and technical execution.",
      "Built innovative solutions across domains including AI and accessibility systems."
    ],
    tags: ["Hackathons", "AI/ML", "Rapid Prototyping", "Team Collaboration"]
  },
  {
    id: "goseekus-founder",
    title: "GoSeekus",
    role: "SYSTEM ROLE: FOUNDER & PRODUCT ARCHITECT",
    description: [
      "Co-founded and building GoSeekus, a structured freelance marketplace platform from scratch.",
      "Designed core system architecture, workflows, and operational policies.",
      "Led coordination between technical development and business strategy.",
      "Developed legal, escrow, and platform governance frameworks."
    ],
    tags: ["Startup", "Architecture", "Strategy", "Leadership"]
  },
  {
    id: "data-center-research",
    title: "Data Center Research & Strategy Development",
    role: "OPERATION: INFRASTRUCTURE ANALYSIS",
    description: [
      "Conducted in-depth research on Tier 2 and Tier 3 data center infrastructure.",
      "Explored AI-focused hosting models and hybrid infrastructure strategies.",
      "Developed long-term business strategies, USP positioning, and scalability models."
    ],
    tags: ["Research", "Infrastructure", "Business Strategy", "AI Hosting"]
  }
];
