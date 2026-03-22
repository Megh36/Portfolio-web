import React from 'react';

interface BottomBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'about', label: 'ABOUT ME' },
  { id: 'projects', label: 'PROJECT INVENTORY' },
  { id: 'prowess', label: 'PROWESS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
  { id: 'other', label: 'OTHER WORKS' },
];

const BottomBar: React.FC<BottomBarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
      <div className="flex gap-4 md:gap-8 px-8 py-4 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`nav-pill ${activeSection === section.id ? 'active' : ''}`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
