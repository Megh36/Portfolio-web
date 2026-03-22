import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProwessSection from './sections/ProwessSection';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholders for remaining sections
const ProjectSection = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold glow-text-red">PROJECT INVENTORY</h2>
    <p className="text-white/40 mt-4 tracking-widest uppercase italic">Scanning Archives: Tatooine - Mos Eisley</p>
  </motion.div>
);

const ExperienceSection = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold glow-text-red text-center">EXPERIENCE DATA</h2>
    <p className="text-white/40 mt-4 tracking-widest uppercase italic">Galactic Senate Records: Coruscant</p>
  </motion.div>
);

const AchievementsSection = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold glow-text-red">ACHIEVEMENTS</h2>
    <p className="text-white/40 mt-4 tracking-widest uppercase italic">Imperial Library Archives: Scarif</p>
  </motion.div>
);

const OtherWorksSection = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold glow-text-red">OTHER WORKS</h2>
    <p className="text-white/40 mt-4 tracking-widest uppercase italic">Deep Space Communications: Star Destroyer</p>
  </motion.div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection key="home" />;
      case 'about':
        return <AboutSection key="about" />;
      case 'prowess':
        return <ProwessSection key="prowess" />;
      case 'projects':
        return <ProjectSection key="projects" />;
      case 'experience':
        return <ExperienceSection key="experience" />;
      case 'achievements':
        return <AchievementsSection key="achievements" />;
      case 'other':
        return <OtherWorksSection key="other" />;
      default:
        return <HeroSection key="home" />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={(section) => {
        // Simple logic to handle home navigation via sidebar, others via bottom bar
        setActiveSection(section);
    }}>
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
