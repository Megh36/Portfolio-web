export interface Project {
  title: string;
  codename: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "SolarSolve",
    codename: "MISSION: SOLAR DEFENSE",
    description:
      "ML pipeline for predicting inverter failures using telemetry data with real-time insights and anomaly detection dashboards.",
    tech: ["Python", "LightGBM", "FastAPI", "Streamlit"],
    link: "https://github.com/jiyaa-patel/Hackamined-Sintex",
    featured: true,
  },
  {
    title: "Matdan Veer",
    codename: "MISSION: DEMOCRACY SHIELD",
    description:
      "Inclusive voting system with voice commands, text-to-speech, and gesture recognition for fully accessible elections.",
    tech: ["Python", "AI/ML", "Accessibility"],
    link: "https://github.com/ByteQuest-2025/GFGBQ-Team-404-brain-not-found",
    featured: true,
  },
  {
    title: "Self-Cleaning Robot",
    codename: "UNIT: AUTONOMOUS DROID",
    description:
      "Autonomous robot with obstacle handling, intelligent path planning, and real-time performance tracking.",
    tech: ["Embedded Systems", "Sensors"],
    link: "https://github.com/Megh36/selfcleaning-robot",
  },
  {
    title: "Heart Disease Detection",
    codename: "UNIT: MEDBAY SCANNER",
    description:
      "ML model to predict heart disease risk using healthcare datasets with high diagnostic accuracy.",
    tech: ["Python", "Scikit-learn"],
    link: "https://github.com/Megh36/Heart-disease-detection",
  },
];
