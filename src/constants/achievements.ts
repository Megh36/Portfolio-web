export interface AchievementMetric {
  label: string;
  value: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: "ACADEMIC" | "EXECUTION" | "STRATEGIC";
  status: "COMPLETED" | "ACTIVE" | "VERIFIED";
  metrics?: AchievementMetric[];
  points: string[];
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "academic-perf",
    title: "Academic Performance",
    category: "ACADEMIC",
    status: "VERIFIED",
    metrics: [
      { label: "JEE PERCENTILE", value: "98.07" },
      { label: "BOARD SCORE", value: "83%" },
    ],
    points: [
      "Secured top-tier percentile in the Joint Entrance Examination (JEE).",
      "Demonstrated consistent academic excellence and rigorous analytical problem-solving capabilities."
    ]
  },
  {
    id: "hackathon-execution",
    title: "Competitive & Technical Execution",
    category: "EXECUTION",
    status: "COMPLETED",
    points: [
      "Participated in multiple hackathons including Odoo, Hackamined (Nirma University), and Vibecoding events.",
      "Built functional AI and accessibility systems under high-pressure, time-constrained environments.",
      "Demonstrated rapid prototyping, cross-functional teamwork, and technical problem-solving."
    ]
  },
  {
    id: "startup-strategic",
    title: "Startup & Strategic Achievements",
    category: "STRATEGIC",
    status: "ACTIVE",
    points: [
      "Co-founded GoSeekus, a structured freelance marketplace platform.",
      "Designed system architecture, workflows, and operational policies from the ground up.",
      "Led execution bridging technical development and business strategy domains.",
      "Conducting ongoing deep research on Tier 2/3 data center infrastructure and AI hosting models."
    ]
  }
];
