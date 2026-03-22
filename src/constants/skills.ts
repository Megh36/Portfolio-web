export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C", "JavaScript", "Java", "HTML"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Linux (Shell Scripting)", "Data Visualization (Matplotlib, Seaborn, dashboards)"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Database Management Systems (DBMS)", "Operating Systems (Basics)"]
  },
  {
    title: "Entrepreneurial & Business Skills",
    skills: ["Opportunity Recognition", "Risk Management", "Team Management", "Strategic Thinking"]
  }
];
